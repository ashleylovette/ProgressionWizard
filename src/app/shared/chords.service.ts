import { Injectable } from "@angular/core";
import { FormArray } from "@angular/forms";
import { Chord } from "@tonaljs/tonal";

import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class chordsService {
  detectedChord = new Subject<any>();
  chordSaved = new Subject<any>();
  noChordAvailable = new Subject<any>();

  private allChords: string[] = [];

  notesSubmitted(noteForm: FormArray) {
    let myChord = Chord.detect(noteForm.value.notes);

    // Check if chord was found, return from function if not
    if(myChord.length === 0){
      this.noChordAvailable.next(noteForm);
      // console.log("Chord not found for:" + noteForm.value.notes);
    }
    let singleChord = myChord[0];
    this.detectedChord.next(singleChord);
  }

// Store chords to allChords array
  storeChords(chord) {
    this.allChords.push(chord);
    return this.allChords.slice();
  }

  getChords() {
    return this.allChords.slice();
  }

  clearChords() {
    this.allChords = [];
  }

}
