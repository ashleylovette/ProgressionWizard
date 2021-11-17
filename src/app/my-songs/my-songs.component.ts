import { Component, OnInit } from '@angular/core';
import { HTTPService } from '../shared/http.service';

import { Song } from '../shared/song.model';
import { SongsService } from '../shared/songs.service';

@Component({
  selector: 'app-my-songs',
  templateUrl: './my-songs.component.html',
  styleUrls: ['./my-songs.component.css']
})
export class MySongsComponent implements OnInit{
  song: Song;
  loadedSongs: Song[] = [];


  constructor(private http: HTTPService, private songsService: SongsService) { }

  ngOnInit() {
    this.http.fetchSongs();
    // this.loadedSongs = this.songsService.getSongs();
    this.songsService.songsChanged.subscribe((songs: Song[]) => {
      songs = this.songsService.allSongs;
      this.loadedSongs = songs;
      // console.log(songs);
    });
  }

}
