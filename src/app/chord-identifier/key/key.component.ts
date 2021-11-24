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
  allChords: string[] = [];


  constructor(private chordsService: chordsService) { }

  ngOnInit(): void {
    this.allChords = this.chordsService.getChords();

    this.chordsService.detectedChord.subscribe((chord: string) => {
      this.yourChord = chord;
     }
     );

  }

  onSaveChord() {
    this.chordsService.chordSaved.next(this.yourChord);
    // console.log(this.yourChord);
    this.yourChord='';
  }

  onDeleteChord() {
    this.yourChord= '';
    this.chordsService.detectedChord.next(this.yourChord);
  }

}
