import { Component, OnDestroy, OnInit } from '@angular/core';

import { chordsService } from './shared/chords.service';
import { HTTPService } from './shared/http.service';
import { SongsService } from './shared/songs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'SongWizard';
  yourChord: string;


  constructor( private chordsService: chordsService, private songsService: SongsService, private httpService: HTTPService) {}

 ngOnInit() {
 }

 ngOnDestroy() {
  this.chordsService.detectedChord.unsubscribe();
  this.songsService.songsChanged.unsubscribe();
  this.httpService.callSongsSub.unsubscribe();
 }
}
