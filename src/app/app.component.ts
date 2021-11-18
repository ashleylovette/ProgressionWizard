import { Component, OnDestroy, OnInit } from '@angular/core';

import { chordsService } from './shared/chords.service';
import { SongsService } from './shared/songs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'SongWizard';
  yourChord: string;


  constructor( private chordsService: chordsService, private songsService: SongsService) {}

 ngOnInit() {
 }

 ngOnDestroy() {
   this.songsService.songsChanged.unsubscribe();
  this.chordsService.detectedChord.unsubscribe();
 }
}
