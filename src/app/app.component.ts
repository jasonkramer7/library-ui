import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Paige Library';


  constructor(public auth: AuthService, private router: Router){}

  logout() {
    this.auth.logout().then(() => {
      this.router.navigate(['login']);
    }) ;
  }
}
