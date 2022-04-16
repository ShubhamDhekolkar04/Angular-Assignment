import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-ragistration',
  templateUrl: './ragistration.component.html',
  styleUrls: ['./ragistration.component.css']
})
export class RagistrationComponent implements OnInit {
// variable
  show_button: Boolean = false;
  show_eye: Boolean = false;

registerForm=new FormGroup({
 
  fname:new FormControl("",[Validators.required]),
  lname:new FormControl("",[Validators.required]),
  uemail:new FormControl("",[Validators.email,Validators.required]),
  upass:new FormControl("",[Validators.required])
})

get uemail(){
  return this.registerForm.get('uemail')
}   
get upass(){
  return this.registerForm.get('upass')
}   
register(){
  console.log(this.registerForm.value);
  localStorage.setItem('Email',this.uemail.value)
    localStorage.setItem('Password',this.upass.value)
  }
  
//Function
showPassword(){
   this.show_button = !this.show_button;
    this.show_eye = !this.show_eye;
  }

  constructor() { }


  ngOnInit(): void {
    
  }

}
