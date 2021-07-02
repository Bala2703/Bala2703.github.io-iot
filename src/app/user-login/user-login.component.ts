import { Component, OnInit } from '@angular/core';
import { AuthService } from "../service/auth.service";
import { GoogleAuthService } from '../service/google-auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  canEdit;
  
  // password: string;
  constructor(public auth : AuthService,
    public google : GoogleAuthService) { }

  ngOnInit(): void {
  }

}
