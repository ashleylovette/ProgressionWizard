import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { BehaviorSubject, throwError } from "rxjs";

import { catchError, tap } from "rxjs/operators";
import { User } from "./user.model";
import { Router } from "@angular/router";

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}


@Injectable({ providedIn: 'root' })

export class AuthService {
  user = new BehaviorSubject<User>(null);
  tokenExpirationTimer: any;
  baseApiURL: string = "https://pure-tundra-47439.herokuapp.com/api/v1";
  userData: any;
  isLoggedIn: boolean = false;

  constructor( private http: HttpClient, private router: Router) {}

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>(`${this.baseApiURL}/users/create`,
    {
      email: email,
      password: password
    })
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>(`${this.baseApiURL}/users/login`,
    {
      email: email,
      password: password
    }
      ).pipe(catchError(this.handleError), tap(resData => {
        this.userData = resData;
        const {expiry, value} = this.userData.payload.token;
        const {email, id} = this.userData.payload.user;

        const expiresIn = new Date(expiry).getTime() - Date.now();
        this.handleAuthentication(email, id, value, +expiresIn);
      }));
    ;
  }

  autoLogin() {
    const userData: {
      email: string,
      id: string,
      _token: string,
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return;
    }

    const loadedUser = new User(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate));

    if(loadedUser.token) {
      this.user.next(loadedUser);
      const expirationDuration = new Date(userData._tokenExpirationDate).getTime() -
      new Date().getTime();
      this.autoLogout(expirationDuration);
    }
  }

  logout() {
    this.user.next(null);
    this.isLoggedIn = false;
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

  private handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
    ) {
    const expirationDate = new Date(
      new Date().getTime() + expiresIn * 1000);
    const user = new User(
      email,
      userId,
      token,
      expirationDate
    );
    this.user.next(user);
    this.isLoggedIn = true;
    this.autoLogout(expiresIn * 1000);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occured!';
    if(!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email is already associated with an account!';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage="This account does not exist!";
        break;
      case 'INVALID_PASSWORD':
        errorMessage="This password is not correct!";
    }
    return throwError(errorMessage);
  }
  }


