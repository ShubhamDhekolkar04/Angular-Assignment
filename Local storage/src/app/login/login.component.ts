import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
loginForm=new FormGroup({
 
  lemail:new FormControl("",[Validators.email,Validators.required]),
  lpass:new FormControl("",[Validators.required])

})

get lemail(){
  return this.loginForm.get('lemail')
}   
get lpass(){
  return this.loginForm.get('lpass')
}   
submit(){
  console.log(this.loginForm.value);
  localStorage.setItem('Checkemail',this.lemail.value)
  localStorage.setItem('CheckPassword',this.lpass.value)

  }
  constructor() { }

  ngOnInit(): void {
  }

}
