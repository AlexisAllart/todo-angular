import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { ServerService } from './server.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  // private token: string;
  private user_id: string;

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(private router: Router, private server: ServerService) {    
    const userData = localStorage.getItem('user_id');
    
    if (userData) {
      this.server.setLoggedIn(true, userData);
      this.loggedIn.next(true);
    }
   }

   login(user) {
      if (user.email !== '' && user.password !== '') {
        return this.server.request('POST', '/user/login'+localStorage.getItem('user_id'), {
          email: user.email,
          password: user.password
        })
        .subscribe((response: any) => {
          if (response !== undefined) {
            this.user_id = response.id;
            // this.token = response.token;
            this.server.setLoggedIn(true, this.user_id);
            this.loggedIn.next(true);
            // const userData = {
            //   token: this.token
            // };
            const userData = this.user_id;
            localStorage.setItem('id', this.user_id);
          }
        });
      }
   }

   logout() {
     this.server.setLoggedIn(false);
    //  delete this.token;
     delete this.user_id;
     this.loggedIn.next(false);
     localStorage.clear();
     this.router.navigate(['/']);
   }
}
