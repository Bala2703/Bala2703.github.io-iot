import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { FormGroup,FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private fireservice:AngularFirestore) { }

  form=new FormGroup({

    eventName: new FormControl(""),
    eventDate: new FormControl(""),
   new: new FormControl(""),
    completed: new FormControl(false)

  })
  create_newEvent(Record:any){
return this.fireservice.collection('Event').add(Record);
  }
  get_Allevent(){
    return this.fireservice.collection('Event').snapshotChanges();
  }

  updateEvent(data:any) {
    return this.fireservice
      .collection("Event")
      .doc(data.payload.doc.id)
      .set({ completed: true }, { merge: true });
  }

  deleteEvent(data:any){
    return this.fireservice.collection("Event").doc(data.payload.doc.id).delete();
  }}
