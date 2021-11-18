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
  // songs: Song[] = [
  //   new Song('C, E, G'),
  //   new Song('A, E, G')
  // ];
  songs: Song[]= [];


  constructor(private http: HTTPService, private songsService: SongsService) { }

  ngOnInit() {

    this.http.fetchSongs();
    this.songs = this.songsService.getSongs();
    this.songsService.songsChanged.subscribe((songs: Song[]) => {
      songs = this.songsService.allSongs;
      this.songs = songs;
      // console.log(songs);
    });
  }

}
