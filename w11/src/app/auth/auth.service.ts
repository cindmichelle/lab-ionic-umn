import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';

type AuthResponseData = {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  localId: string;
  expiresIn: string;
  registered?: boolean;
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated = false;
  userId: string;

  constructor(private http: HttpClient) {}

  setUser(userId: string) {
    this.userId = userId;
    this.isAuthenticated = true;
  }

  signup(email: string, password: string) {
    const endpoint = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseAPIKey}`;
    const account = {
      email,
      password,
      returnSecureToken: true,
    };
    return this.http.post<AuthResponseData>(endpoint, account);
  }

  login(email: string, password: string) {
    //firebase login API here
    this.isAuthenticated = true;
    console.log(this.isAuthenticated);
    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseAPIKey}`,
      {
        email,
        password,
        returnSecureToken: true,
      },
    );
  }

  logout() {
    //firebase logout API here
    this.isAuthenticated = false;
    console.log(this.isAuthenticated);
  }
}
