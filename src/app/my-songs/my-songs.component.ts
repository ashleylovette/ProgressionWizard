import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

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
  songsChangedSub = new Subscription;
  isLoading: boolean;


  constructor(private http: HTTPService, private songsService: SongsService) {
  }

  ngOnInit() {
    this.songsChangedSub = this.songsService.songsChanged
      .subscribe(
        (songs: Song[]) => {
          this.songs = songs;
        }
      )
  }

  ngOnDestroy() {
    this.songsChangedSub.unsubscribe();
  }

  onSaveSongs() {
    this.http.saveSongs();
  }
}
