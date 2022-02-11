import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'ProgressionWizard';
  isSignedIn: boolean = false;
  private userSub = new Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.autoLogin();

    this.userSub = this.authService.user.subscribe(user => {
      this.isSignedIn = !!user;
     });
 }

  ngOnDestroy() {
    this.userSub.unsubscribe();
 }
}
