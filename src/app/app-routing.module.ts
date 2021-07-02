import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubscriberPageComponent } from './subscriber-page/subscriber-page.component';
import { SuperSecretComponent } from './super-secret/super-secret.component';
import { AdminGuard } from "./service/admin.guard";
import { CanReadGuard } from "./service/can-read.guard";
import { WelcomeComponent } from './welcome/welcome.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NewsComponent } from './news/news.component';
const routes: Routes = [
  { path : '' , redirectTo : 'welcome' ,pathMatch : 'full'},
  { path: 'content', component: SubscriberPageComponent, canActivate: [CanReadGuard] },
  { path: 'secret', component: SuperSecretComponent, canActivate: [AdminGuard] },
  { path : 'welcome' , component : WelcomeComponent},
  { path : 'dashboard' , component : UserLoginComponent},
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'email-verification', component: VerifyEmailComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path : 'news' , component : NewsComponent ,canActivate : [CanReadGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
