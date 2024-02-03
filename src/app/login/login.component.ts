import { Component } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userName: string;
  password: string;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  
  constructor(private authService: AuthService, private router: Router, private _snackBar: MatSnackBar) {}

  login() {
    this.authService.login(this.userName, this.password).then(() => {
      const redirect = localStorage.getItem('returnUrl');
      this.router.navigate([redirect]);
    })
    .catch((error) => {

      const errorCode = error.code;
      const errorMessage = error.message;
      this._snackBar.open('Error ' +errorCode, 'OK', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    });
  }

}
