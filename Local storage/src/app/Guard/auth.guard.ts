import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MessageService } from '../Services/message.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service:MessageService){}
  canActivate(){
    if(this.service.isLoggedin()){
    return true;
    
  }
  else{ 
    window.alert('Login Pls')
    return false;
  }
}
}
