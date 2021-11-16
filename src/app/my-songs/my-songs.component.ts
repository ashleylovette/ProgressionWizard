import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { HTTPService } from '../shared/http.service';

import { Song } from '../shared/song.model';
import { SongsService } from '../shared/songs.service';

@Component({
  selector: 'app-my-songs',
  templateUrl: './my-songs.component.html',
  styleUrls: ['./my-songs.component.css']
})
export class MySongsComponent implements OnInit{
  loadedSongs: Song[] = [];

  constructor(private http: HTTPService, private songsService: SongsService) { }

  ngOnInit() {
    this.http.fetchSongs();
  }

}
