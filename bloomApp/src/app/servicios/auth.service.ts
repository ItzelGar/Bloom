import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'
import { Observable } from 'rxjs'

export interface User {
  email?: string;
  password?: string;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private afa: AngularFireAuth) { }

  register(user: User) {
    return this.afa.auth.createUserWithEmailAndPassword(user.email, user.password)
  }

  login(user: User) {
    return this.afa.auth.signInWithEmailAndPassword(user.email, user.password)
  }

  getAuthState(): Observable<firebase.User> {
    return this.afa.authState
  }

  getUser(): Observable<firebase.User> {
    return this.afa.user
  }

  logout() {
    return this.afa.auth.signOut()
  }
}
