import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

import { chordsService } from './shared/chords.service';
import { HTTPService } from './shared/http.service';
import { SongsService } from './shared/songs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ProgressionWizard';

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.autoLogin();
 }
}
