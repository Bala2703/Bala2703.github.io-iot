import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from "../service/auth.service";
import { GoogleAuthService } from '../service/google-auth.service';
import { Domiciliario } from '../service/signup';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  
  [x: string]: any;
  domiciliarios: Observable<Domiciliario[]>;
button:string;
  canEdit;
  
  // password: string;
  constructor(public auth : AuthService,
    public google : GoogleAuthService) { }

  ngOnInit() {
    this.domiciliarios = this.auth.getDomiciliarios();
    return this.domiciliarios
    console.log(Domiciliario)

    
  }
  
  actualizarEstado(key, obj, e){
    this.authservice.updateEstado(key, e);
  }
favbutton(item){

}
}
