import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { signInWithEmailAndPassword } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/auth';
import { ActivatedRoute } from '@angular/router';
import { getAuth } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth, private route: ActivatedRoute) {
    this.afAuth.authState.subscribe(() => {
      this.user$ = this.afAuth.authState;
    });
  }

  login(email: string, password: string) {
    const auth = getAuth();
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/home';
    localStorage.setItem('returnUrl', returnUrl);
    
    return signInWithEmailAndPassword(auth, email, password);
  }

  logout() {
    return this.afAuth.signOut();
  }
}
