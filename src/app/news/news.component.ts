import { DOCUMENT } from '@angular/common';
import { Component, OnInit,inject, Inject } from '@angular/core';
import  VanillaTilt from 'vanilla-tilt';
import { AuthService } from "../service/auth.service";
import { CrudService } from "../service/crud.service";
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  Event:any;

  gridColumns = 2;
  constructor(public authService: AuthService,private crudservice:CrudService,@Inject(DOCUMENT) private document:Document) {
 }
  
    ngOnInit(): void {

    this.getEvent();
  }

  onSelect(){
    window.location.href = "{{event.payload.doc.data().link}}"
  }

  getEvent = () =>
  this.crudservice
    .get_Allevent()
    .subscribe(res => (this.Event = res));
    deleteEvent = (data: any)=>this.crudservice.deleteEvent(data);
    markevent = (data: any) => this.crudservice.updateEvent(data);

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 2 : 3;
  }
  

}
