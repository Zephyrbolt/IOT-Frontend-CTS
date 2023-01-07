import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  username = ''
  password =''
  invalidlogin = true
  constructor(private router: Router,
    private authenticationservice: AuthenticationService){

  }
  ngOnInit(): void {
  }

  UserLogin(){
    // if (this.username === 'abishek' && this.password === 'dummypass') {
      if (this.authenticationservice.authenticate(this.username,this.password)){
      this.router.navigate(['data', this.username])
      this.invalidlogin = true
    } else {
      this.invalidlogin = false
    }
  }

}
