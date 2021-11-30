import { Component, OnDestroy, OnInit } from '@angular/core';
import { HTTPService } from '../shared/http.service';
import { Song } from '../shared/song.model';
import { SongsService } from '../shared/songs.service';


@Component({
  selector: 'app-my-songs',
  templateUrl: './my-songs.component.html',
  styleUrls: ['./my-songs.component.css']
})
export class MySongsComponent implements OnInit, OnDestroy{
  songs: Song[]= [];
    // STATIC DATA
  // songs: Song[] = [
  //   new Song('C, E, G'),
  //   new Song('A, E, G')
  // ];

  constructor(private http: HTTPService, private songsService: SongsService) {}

  ngOnInit() {
  this.http.fetchSongs();
  this.songsService.songsChanged
  .subscribe(
    (songs: Song[]) => {
      this.songs = songs;
      // console.log(songs);
    }
    );
    this.songs = this.songsService.getSongs();
  }

  ngOnDestroy() {
    this.http.callSongsSub.unsubscribe();
  }

}
