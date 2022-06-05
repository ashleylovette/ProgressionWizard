import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { chordsService } from 'src/app/shared/chords.service';
import { Song } from 'src/app/shared/song.model';
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
  songSaved: boolean = false;
  isSignedIn: boolean = false;
  chordDisplayed: boolean = false;
  signedInSub = new Subscription;

  constructor(
    private chordsService: chordsService,
    private http: HTTPService,
    private authService: AuthService) { }

  ngOnInit(): void {

    this.chordSavedSub = this.chordsService.chordSaved.subscribe(chord => {
      this.chordDisplayed = true;

      if(this.chordDisplayed = true) {
        this.chordsService.storeChords(chord);
        this.allChords = this.chordsService.getChords();
        console.log(this.allChords);
      }
    });

    this.signedInSub = this.authService.user.subscribe(user => {
      this.isSignedIn = true;
     });

  }

  ngOnDestroy() {
    this.chordSavedSub.unsubscribe();
  }

  onSaveSong(songForm: NgForm) {
    this.songSaved = true;

    // change array to a string
    const stringOfChords = this.allChords.join(" | ");

    // Assign string to newSong: Song
    this.newSong = new Song(stringOfChords, songForm.value.songTitle);

    // send new Song to Firebase
    this.http.saveSong(this.newSong);


  }

  onDeleteSong() {
    this.allChords =[];
    this.chordsService.clearChords();
    this.chordDisplayed=false;
  }

  onCloseAlert() {
    this.songSaved = false;
    this.allChords = [];
    this.chordDisplayed = false;
  }

}
