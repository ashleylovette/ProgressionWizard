import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { TypeChord } from 'src/app/shared/chord.model';
import { chordsService } from 'src/app/shared/chords.service';
import { Song } from 'src/app/shared/song.model';
import { SongsService } from 'src/app/shared/songs.service';
import { HTTPService } from '../../shared/http.service';


@Component({
  selector: 'app-display-chords',
  templateUrl: './display-chords.component.html',
  styleUrls: ['./display-chords.component.css']
})
export class DisplayChordsComponent implements OnInit, OnDestroy {
  yourChord: string='';
  chordSavedSub: Subscription;
  allChords: string[] =[];
  newSong: Song;
  chordDisplayed: boolean = false;

  constructor(private chordsService: chordsService, private http: HTTPService, private songsService: SongsService) { }

  ngOnInit(): void {

    this.chordSavedSub = this.chordsService.chordSaved.subscribe(chord => {
      this.chordDisplayed = true;
      this.yourChord = chord;
      if(this.chordDisplayed = true) {
        this.chordsService.storeChords(this.yourChord);
        this.allChords = this.chordsService.getChords();
        console.log(this.allChords);
      }
    });
  }

  ngOnDestroy() {
    this.chordSavedSub.unsubscribe();
  }

  onSaveSong() {
    // change array to a string
    const stringOfChords = this.allChords.toString();

    // Assign string to newSong: Song
    this.newSong = new Song(stringOfChords);

    // console.log(this.newSong);

    // send newSong to FB
    this.http.saveSongs(this.newSong);
  }

  onDeleteSong() {
    this.allChords =[];
    this.chordDisplayed=false;
  }



}
