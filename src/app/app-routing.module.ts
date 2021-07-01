import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubscriberPageComponent } from './subscriber-page/subscriber-page.component';
import { SuperSecretComponent } from './super-secret/super-secret.component';
import { AdminGuard } from "./service/admin.guard";
import { CanReadGuard } from "./service/can-read.guard";
import { WelcomeComponent } from './welcome/welcome.component';
import { UserLoginComponent } from './user-login/user-login.component';
const routes: Routes = [
  { path : '' , redirectTo : 'welcome' ,pathMatch : 'full'},
  { path: 'content', component: SubscriberPageComponent, canActivate: [CanReadGuard] },
  { path: 'secret', component: SuperSecretComponent, canActivate: [AdminGuard] },
  { path : 'welcome' , component : WelcomeComponent},
  { path : 'dashboard' , component : UserLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
