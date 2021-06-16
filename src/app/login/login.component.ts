import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  //Two way Data Binding ( Textbox , Variable)
  username:string = '';
  password:string ='';


  login(){
    //let username = document.querySelector("#username").value
    ////let password = document.querySelector("#password").value
    //alert(this.username);
    //alert(this.password);
    //let isUsernameValidated = UserValidator.validateUser(username);
    //let isPasswordValidated = PasswordValidator.validatePassword(password);
    //let isUserExists = Validator.isUserExists(username, password);

    //if (isUsernameValidated && isPasswordValidated && isUserExists) { //checking whether the username is registered or not.
      //window.location.assign("display.html");

      this.authService.login(this.username, this.password).subscribe( (res)=>{
        alert("Successfully Logged in.");
        this.router.navigate(['home']);
      },err=>{
        console.log(err);
        alert("Login Failure");
      });



  }


}
