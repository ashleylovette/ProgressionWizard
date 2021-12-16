import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { chordsService } from '../shared/chords.service';
import { SongsService } from '../shared/songs.service';

@Component({
  selector: 'app-chord-identifier',
  templateUrl: './chord-identifier.component.html',
  styleUrls: ['./chord-identifier.component.css']
})
export class ChordIdentifierComponent implements OnInit, OnDestroy{
  invalidNotes: string[];
  alert: string;
  songAdded: boolean = false;
  chordNotFound: boolean = false;
  songsAddedSub = new Subscription;
  chordNotFoundSub= new Subscription;
  savedAlertSub = new Subscription;


  constructor( private songsService: SongsService, private chordsService: chordsService) {}

  ngOnInit() {
   this.songsAddedSub = this.songsService.songsChanged.subscribe((song) => {
      this.songAdded = true;
    });
    this.chordNotFoundSub = this.chordsService.noChordAvailable.subscribe((noteForm) => {
      this.noChordFound(noteForm);
     });
    this.savedAlertSub = this.songsService.songSaved.subscribe(song => {
        this.alert =`Title: ${song.title} <br> Chords: ${song.chords}`;
    })

  }

  ngOnDestroy() {
    this.songsAddedSub.unsubscribe();
    this.chordNotFoundSub.unsubscribe();
    this.savedAlertSub.unsubscribe();
  }

  onClosed() {
    this.chordNotFound = false;
    this.songAdded = false;
  }

  noChordFound(noteForm) {
    if(noteForm) {
      this.invalidNotes = noteForm.value.notes;
      this.chordNotFound = true;
      console.log("Chord Not Found For: " + this.invalidNotes + "!");
    } else return;
  }
}

