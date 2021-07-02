import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { GoogleAuthService } from "../service/google-auth.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(public auth : AuthService,
    public google : GoogleAuthService) { }

  ngOnInit(): void {
  }

}
