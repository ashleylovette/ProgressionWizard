import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { chordsService } from '../../shared/chords.service';

@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.css']
})
export class KeyComponent implements OnInit {
  yourChord: string = '';
  private detectedChordSub: Subscription;
  allChords: string[] = [];


  constructor(private chordsService: chordsService) { }

  ngOnInit(): void {
    this.allChords = this.chordsService.getChords();

    this.detectedChordSub = this.chordsService.detectedChord.subscribe((yourChord: string) => {
      this.yourChord = yourChord;
     }
     );

  }

  onSaveChord(chord: string) {
    chord = this.yourChord;

    this.chordsService.chordSaved.next(this.yourChord);

  }

  onDeleteChord() {
    this.yourChord= '';
    this.chordsService.detectedChord.next(this.yourChord);
  }

}
