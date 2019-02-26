import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoyoutComponent } from './loyout/loyout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"loyout",
    component:LoyoutComponent
  },
  {
    path:"home-page",
    component:HomePageComponent
  },
  {
    path:"dashboard",
    component:DashboardComponent
  },
  {
    path:"",
    redirectTo:"/login",
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
