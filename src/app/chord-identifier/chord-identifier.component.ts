import { Component, OnDestroy, OnInit } from '@angular/core';

import { chordsService } from '../shared/chords.service';


@Component({
  selector: 'app-chord-identifier',
  templateUrl: './chord-identifier.component.html',
  styleUrls: ['./chord-identifier.component.css']
})
export class ChordIdentifierComponent implements OnInit, OnDestroy {


  constructor( private chordsService: chordsService) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
  }

}
