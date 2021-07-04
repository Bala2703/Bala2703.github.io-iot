import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";



import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { MatFormFieldModule } from "@angular/material/form-field";
// import { HTMLVanillaTiltElement } from "vanilla-tilt";

// import { angular } from "@angular/fire/auth";

import { MatCardModule } from "@angular/material/card";
import { MatButton, MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";

import { FlexLayoutModule } from "@angular/flex-layout";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { SuperSecretComponent } from './super-secret/super-secret.component';
import { SubscriberPageComponent } from './subscriber-page/subscriber-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomeComponent } from './welcome/welcome.component';
import { ParallaxDirective } from './parallax.directive';
import { MoonDirective } from './moon.directive';
import { StarsDirective } from './stars.directive';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { NewsComponent } from './news/news.component';
import { AngularTiltModule } from 'angular-tilt';
import { CardDirective } from './card.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    SuperSecretComponent,
    SubscriberPageComponent,
    WelcomeComponent,
    ParallaxDirective,
    MoonDirective,
    StarsDirective,
    ForgotPasswordComponent,
    SignUpComponent,
    VerifyEmailComponent,
    NewsComponent,
    CardDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    FlexLayoutModule,FormsModule,ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    AngularTiltModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
