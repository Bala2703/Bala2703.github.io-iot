import { Injectable,NgZone } from '@angular/core';
import  firebase from "firebase/app";

// import { auth } from "firebase/auth";
import 'firebase/auth'
// import 'firebase/firestore'
import {  AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore,AngularFirestoreDocument } from "@angular/fire/firestore";
import { Router } from "@angular/router";
import { Observable,of} from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { User } from "../service/user.model";
import { FormGroup,FormControl } from '@angular/forms';
// import {Switch} from "../service/switch.model"
import { Domiciliario } from "../service/signup";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
user$ : Observable<any>
userState : any;



domiciliarios: Observable<Domiciliario[]>;
// estadoChange: boolean = false

getDomiciliarios() {
  this.domiciliarios = this.afs.collection('signup').snapshotChanges().pipe(map(actions => {
    return actions.map(a => {
      const data = a.payload.doc.data() as Domiciliario;
      const id = a.payload.doc.id;
      return { id, ...data };
    });
  })
  );
  return this.domiciliarios;
}
getButton(){
  return this.afs.collection('signup').snapshotChanges();

}

updateEstado(key, button){
  this.afs.doc('signup/' + key).update({button});
}


  constructor(private afs : AngularFirestore,
              private afAuth : AngularFireAuth,
              private router : Router,
              private ngZone : NgZone) 
              { 
                this.user$ = this.afAuth.authState.pipe
                (switchMap(user=>
                {
                  if (user)
                  {
                    return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
                  }
                  else
                  {
                    return of (null)
                  }
                })
                )
                this.afAuth.authState.subscribe(user =>
                  {
                    if(user)
                    {
                      this.userState = user;
                      localStorage.setItem('user' , JSON.stringify(this.userState));
                      JSON.parse(localStorage.getItem('user'));
                    }else{
                      localStorage.setItem('user' , null);
                      JSON.parse(localStorage.getItem('user'))
                    }
                  })
              }

signOut()
{
  return this.afAuth.signOut().then(() => {
    localStorage.removeItem('user');
    this.router.navigate(['/dashboard']);
  })}



SignIn(email,password)
{
  return this.afAuth.signInWithEmailAndPassword(email,password)
  .then((result)=>
  {
    this.ngZone.run(()=>
    {
      this.router.navigate(['/news']);
    })
    this.SetUserData(result.user);
  }).catch((error)=>
  {
    window.alert(error.message)
  })
}

SignUp(email, password) {
  return this.afAuth.createUserWithEmailAndPassword(email, password)
    .then((result) => {
      this.SendVerificationMail();
      this.SetUserData(result.user);
    }).catch((error) => {
      window.alert(error.message)
    })
}


SendVerificationMail() {
  return this.afAuth.currentUser.then(u => u.sendEmailVerification())
  .then(() => {
    this.router.navigate(['email-verification']);
  })
}    

ForgotPassword(passwordResetEmail) {
return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
.then(() => {
  window.alert('Password reset email sent, check your inbox.');
}).catch((error) => {
  window.alert(error)
})
}

get isLoggedIn(): boolean {
  const user = JSON.parse(localStorage.getItem('user'));
  return (user !== null && user.emailVerified !== false) ? true : false;
}

SetUserData(user) {
  const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
  const data: User = {
    uid: user.uid,
    email: user.email,
    displayName : user.displayName,
    roles :{    
      subscriber: true
    }
  }
  return userRef.set(data, {
    merge: true
  })
}

get_AllRole(){
  return this.afs.collection('users').snapshotChanges();
}


canRead(user: User): boolean {
  const allowed = ['admin', 'editor', 'subscriber']
  return this.checkAuthorization(user, allowed)
}

canEdit(user: User): boolean {
  const allowed = ['admin', 'editor']
  return this.checkAuthorization(user, allowed)
}

canDelete(user: User): boolean {
  const allowed = ['admin']
  return this.checkAuthorization(user, allowed)
}



// determines if user has matching role
private checkAuthorization(user: User, allowedRoles: string[]): boolean {
  if (!user) return false
  for (const role of allowedRoles) {
    if ( user.roles[role] ) {
      return true
    }
  }
  return false

}

canView(){

}


}
