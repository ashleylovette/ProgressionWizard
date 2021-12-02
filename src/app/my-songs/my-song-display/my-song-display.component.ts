import { Component, Input, OnInit } from '@angular/core';

import { Song } from 'src/app/shared/song.model';


@Component({
  selector: 'app-my-song-display',
  templateUrl: './my-song-display.component.html',
  styleUrls: ['./my-song-display.component.css']
})
export class MySongDisplayComponent implements OnInit {
  @Input() song: Song;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }
}
