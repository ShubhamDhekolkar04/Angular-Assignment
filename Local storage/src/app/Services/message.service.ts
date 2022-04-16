import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
uid:String=localStorage.getItem('Email')
password1:String=localStorage.getItem('Password')
uid2:string=localStorage.getItem('Checkemail')
password2:String=localStorage.getItem('CheckPassword')

  constructor(private router:Router) { }

  isLoggedin(){
    if(this.uid===this.uid2 &&this.password1===this.password2){
    window.alert('OK')
    //return this .router.navigator([])
    return true
  }
  else{
    window.alert("Password MissMatch")
    return false
  }
}



}
