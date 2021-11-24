import { Component, OnInit } from '@angular/core';
import { SongsService } from '../shared/songs.service';

@Component({
  selector: 'app-chord-identifier',
  templateUrl: './chord-identifier.component.html',
  styleUrls: ['./chord-identifier.component.css']
})
export class ChordIdentifierComponent implements OnInit {
  songAdded: boolean = true;

  constructor() {}

  ngOnInit() {
  }

  onClosed() {
    this.songAdded = false;
  }
}

