import { Component, OnDestroy, OnInit } from '@angular/core';

import { chordsService } from './shared/chords.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'SongWizard';
  yourChord: string;


  constructor( private chordsService: chordsService) {}

 ngOnInit() {
 }

 ngOnDestroy() {
  this.chordsService.detectedChord.unsubscribe();
 }
}
