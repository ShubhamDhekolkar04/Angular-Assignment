import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RagistrationComponent } from './ragistration/ragistration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
//For using of Guard we import AuthGuard first 
import { AuthGuard } from './Guard/auth.guard';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RagistrationComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
