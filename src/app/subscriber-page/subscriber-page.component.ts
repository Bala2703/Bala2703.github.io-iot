import { Component, OnInit } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection } from "@angular/fire/firestore";
import { AuthService } from '../service/auth.service';
import { CrudService } from '../service/crud.service';
import { GoogleAuthService } from '../service/google-auth.service';

@Component({
  selector: 'app-subscriber-page',
  templateUrl: './subscriber-page.component.html',
  styleUrls: ['./subscriber-page.component.css']
})
export class SubscriberPageComponent implements OnInit {

postRef;
post$;
user;
myArray : any[]=[]
admin! : string;
editor! : string;
message =""

  constructor(private afs : AngularFirestore,public auth : AuthService,
    public google : GoogleAuthService,public curdService : CrudService) 
  { 
    this.auth.user$.subscribe(user => this.user =user)
   }

   ngOnInit(){
    //  this.getEvent()
    // this.auth.get_AllRole().subscribe(res =>(this.user = res));
    // deleteRoles = (data : any)=>this.auth.deleteRoles(data)
   }

  // ngOnInit(): void {
  //   this.postRef = this.afs.doc('users/{document}')
  //   this.post$ = this.postRef.valueChanges()
  // }
  

  // editPost() {
  //   this.postRef.update({ title: 'Edited Title!'})
  // }


  // deletePost() {
  //   this.postRef.delete()
  // }

}
