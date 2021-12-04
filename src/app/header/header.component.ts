import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isSignedIn: boolean = false;
  private userSub = new Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit() {
   this.userSub = this.authService.user.subscribe(user => {
    this.isSignedIn = !!user;
   });
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  onLogout() {
    this.authService.logout();
  }

}
