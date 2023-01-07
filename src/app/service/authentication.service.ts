import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }


  authenticate(username :string, password: string) {
    if (username ==='abishek' && password==='dummypass'){
      sessionStorage.setItem('authenticaterUser', username);
      return true
    }
    return false
    
  }

  isUserLoggedin(){
    let user = sessionStorage.getItem('authenticaterUser')
    return !(user===null)
  }
}
