import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Subscription } from 'rxjs';
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
      // this.yourChord = chord;
      if(this.chordDisplayed = true) {
        this.chordsService.storeChords(chord);
        this.allChords = this.chordsService.getChords();
        console.log(this.allChords);
      }
    });
  }

  ngOnDestroy() {
    this.chordSavedSub.unsubscribe();
  }

  onSaveSong(songForm: NgForm) {
    // change array to a string
    const stringOfChords = this.allChords.join(" | ");

    // Assign string to newSong: Song
    this.newSong = new Song(stringOfChords, songForm.value.songTitle);

    // console.log(this.newSong);

    // send new Song to Firebase
    this.http.saveSong(this.newSong);

    // Alert component
    this.songsService.songsChanged.next();
  }

  onDeleteSong() {
    this.allChords =[];
    this.chordDisplayed=false;
  }



}
