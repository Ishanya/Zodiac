import { Component, OnInit } from '@angular/core';
import { Credentials } from '../credentials';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  credBean: Credentials= new Credentials();
  credentialsBean: Credentials = new Credentials();
  loginMessage: string;
  constructor(private router: Router, private userService: UserserviceService
  ) {
    if (localStorage.getItem('userId')) {
      this.router.navigate(['/welcome']);
     }
  }

  ngOnInit() {

  }

  login() {
    this.userService.UserLogin(this.credentialsBean)
    .subscribe(data => { this.credBean = data;
        if (this.credBean.userID === this.credentialsBean.userID) {
          const str = this.credentialsBean.userID + '';
          localStorage.setItem('userId', str);
          this.router.navigate(['/welcome']);
        } else {
       }
      });

      this.loginMessage = 'Use correct userid and password';
      return 1;
    }

}
