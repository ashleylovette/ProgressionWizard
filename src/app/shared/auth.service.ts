import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";

import { catchError } from "rxjs/operators";
import { HTTPService } from "./http.service";

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

  constructor( private http: HttpClient, private httpService: HTTPService) {}

  signup( email: string, password: string) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + this.httpService.apiKey,
    {
      email: email,
      password: password,
      returnSecureToken: true
    }
    ).pipe(catchError(errorRes => {
      let errorMessage = 'An unknown error occured!';
      if(!errorRes.error || !errorRes.error.error) {
        return throwError(errorMessage);
      }
      switch (errorRes.error.error.message) {
        case 'EMAIL_EXISTS':
          errorMessage = 'This email is already associated with an account!';
      }
      return throwError(errorMessage);
    })
    );
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + this.httpService.apiKey,
    {
      email: email,
      password: password,
      returnSecureToken: true
    });
  }

}
