import {Component, OnInit} from '@angular/core';
import {AuthService} from '../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';
  errorMessage = '';
  error: { name: string, message: string } = {name: '', message: ''};

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  login(): void {

    this.authService.loginWithEmail(this.email, this.password)
      .then(() => {
        this.router.navigate(['/profile']);
      }).catch(error1 => {
      this.error = error1;
      this.router.navigate(['/login']);
    });
  }
}
