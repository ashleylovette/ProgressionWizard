import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { chordsService } from 'src/app/shared/chords.service';
import { HTTPService } from '../../shared/http.service';


@Component({
  selector: 'app-display-chords',
  templateUrl: './display-chords.component.html',
  styleUrls: ['./display-chords.component.css']
})
export class DisplayChordsComponent implements OnInit, OnDestroy {
  yourChord: string=''
  chordSavedSub: Subscription;
  allChords: string[] =[]
  chordDisplayed: boolean = false;

  constructor(private chordsService: chordsService, private http: HTTPService) { }

  ngOnInit(): void {
    this.chordSavedSub = this.chordsService.chordSaved.subscribe(chord => {
      this.chordDisplayed = true;
      this.yourChord = chord;
      if(this.chordDisplayed = true) {
        this.chordsService.storeChords(this.yourChord);
        this.allChords = this.chordsService.getChords();
        console.log(this.chordsService.getChords());
      }
    });
  }

  ngOnDestroy() {
    this.chordSavedSub.unsubscribe();
  }

  onSaveSong() {
    this.http.saveSongs();
    // console.log("saved!");
  }

  onDeleteSong() {
    this.allChords =[];
    this.chordDisplayed=false;
  }

}
