import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { GoogleAuthService } from "../service/google-auth.service";
import { Domiciliario } from '../service/signup';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  domiciliarios: Observable<Domiciliario[]>;


  constructor(public auth : AuthService,
    public google : GoogleAuthService) { }

    ngOnInit() {
      this.domiciliarios = this.auth.getDomiciliarios();
      return this.domiciliarios
      console.log(Domiciliario)
  
      
    }
    
    actualizarEstado(key, obj, e){
      this.auth.updateEstado(key, e);
    }

}
