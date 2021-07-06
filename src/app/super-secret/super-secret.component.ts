import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { CrudService } from '../service/crud.service';
import { Observable } from "rxjs";
import { User } from ".././service/user.model";
import { Domiciliario } from '../service/signup';
// import { Switch } from '../service/switch.model';


@Component({
  selector: 'app-super-secret',
  templateUrl: './super-secret.component.html',
  styleUrls: ['./super-secret.component.css']
})
export class SuperSecretComponent implements OnInit {
  domiciliarios: Observable<Domiciliario[]>;


  Event:any;
  myArray: any[] = []
eventName!:string;
eventDate!:string;
eventLink!:string;
eventDescription!:string;
button!:string;
message=""
  constructor(private crudservice:CrudService,
    private router : Router,
   private afu:AngularFireAuth, private firestore: AngularFirestore,private authservice:AuthService) { }

  ngOnInit(){
      this.getEvent();
      this.domiciliarios = this.authservice.getDomiciliarios()
    return this.domiciliarios;
  }
  actualizarEstado(key, obj, e){
    this.authservice.updateEstado(key, e);
  }
  distinctFun(item) {
    return item.button;
  }

  getEvent = () =>
  this.crudservice
    .get_Allevent()
    .subscribe(res => (this.Event = res));
    deleteEvent = (data: any)=>this.crudservice.deleteEvent(data);
    markevent = (data: any) => this.crudservice.updateEvent(data);

  Open()
  { console.log("works")
  let Record:any = {};
  Record['name'] = this.eventName;
  Record['date'] = this.eventDate;
  Record['link'] = this.eventLink;
  Record['description'] = this.eventDescription;
  this.crudservice.create_newEvent(Record).then(() =>
    {
      this.eventName = "";
      console.log( );
      this.message = "Saved";
    }).catch(error => {
      console.log(error)
    })
  }

  signout(): void
  {
    this.afu.signOut();
    this.router.navigate(['/dashboard']);
  }





}
