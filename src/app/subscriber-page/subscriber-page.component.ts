import { Component, OnInit } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection } from "@angular/fire/firestore";
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-subscriber-page',
  templateUrl: './subscriber-page.component.html',
  styleUrls: ['./subscriber-page.component.css']
})
export class SubscriberPageComponent implements OnInit {

postRef;
post$;
user;

  constructor(private afs : AngularFirestore,public auth : AuthService) 
  { 
    this.auth.user$.subscribe(user => this.user =user)
   }

  ngOnInit(): void {
    this.postRef = this.afs.doc('posts/myTestPost')
    this.post$ = this.postRef.valueChanges()
  }
  

  editPost() {
    this.postRef.update({ title: 'Edited Title!'})
  }


  deletePost() {
    this.postRef.delete()
  }

}
