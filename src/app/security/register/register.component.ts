import {Component, OnInit} from '@angular/core';
import {AuthService} from '../service/auth.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  email = '';
  password = '';
  message = '';
  errorMessage = '';
  error: { name: string, message: string } = {name: '', message: ''};

  constructor(private authService: AuthService,
              private router: Router,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  clearErrorMessage(): void {
    this.errorMessage = '';
    this.error = {name: '', message: ''};
  }

  register(): void {
    this.clearErrorMessage();
    if (this.validateForm(this.email, this.password)) {
      this.authService.registerWithEmail(this.email, this.password)
        .then(() => {
          this.snackBar.open('You are registered successfully', '', { duration: 2000 });
          this.router.navigate(['/login']);
        }).catch(error1 => {
        this.error = error1;
        this.router.navigate(['/register']);
      });
    }
  }

  validateForm(email, password) {
    if (email.lenght === 0) {
      this.errorMessage = 'Enter your email';
      return false;
    }

    if (password.lenght === 0) {
      this.errorMessage = 'Enter the password';
      return false;
    }

    if (password.lenght < 6) {
      this.errorMessage = 'Password should be at least 6 char';
      return false;
    }

    this.errorMessage = '';
    return true;

  }
}
