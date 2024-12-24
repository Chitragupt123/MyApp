import { routes } from './../../app.routes';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

userobj:any={
  username:'',
  password:'',
}
  router = new Router();
  onlogin(){
    if(this.userobj.username=='chitra' && this.userobj.password == '123'){
alert('successfully login ')
localStorage.setItem('userlogin',JSON.stringify(this.userobj))
this.router.navigateByUrl('home')
    }else{
      alert('invalid password')
    }
  }
}
