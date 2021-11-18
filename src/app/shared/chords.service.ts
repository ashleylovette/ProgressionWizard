import { Injectable } from "@angular/core";
import { FormArray } from "@angular/forms";
import { Chord } from "@tonaljs/tonal";

import { Subject } from 'rxjs';
import { TypeChord } from "./chord.model";
import { Song } from "./song.model";

@Injectable({providedIn: 'root'})
export class chordsService {
  detectedChord = new Subject<any>();
  chordSaved = new Subject<any>();
  song: Song;

  private allChords: string[] = [];

  notesSubmitted(noteForm: FormArray) {
    let myChord = Chord.detect(noteForm.value.notes);

    // Check if chord was found, return from function if not
    if(myChord.length === 0){
      console.log('Chord not found for: ' + noteForm.value.notes );
      return
    }
    let singleChord = myChord[0];
    this.detectedChord.next(singleChord);
  }

// Store chords to allChords array
  storeChords(yourChord) {
    this.allChords.push(yourChord);
    return this.allChords.slice();
  }

  getChords() {
    return this.allChords.slice();
  }

  saveChordsToSong() {

  }
}
