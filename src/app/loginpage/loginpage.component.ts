import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  username = ''
  password =''
  invalidlogin = true
  constructor(private router: Router){

  }
  ngOnInit(): void {
  }

  UserLogin(){
    if (this.username === 'abishek' && this.password === 'dummypass') {
      this.router.navigate(['data', this.username])
      this.invalidlogin = true
    } else {
      this.invalidlogin = false
    }
  }

}
