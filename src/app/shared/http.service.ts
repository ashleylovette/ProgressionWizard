import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Song } from './song.model';
import { map, tap } from 'rxjs/operators';
import { chordsService } from "./chords.service";
import { SongsService } from "./songs.service";
import { Subscription } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HTTPService {
  song: Song;
  loadedSongs: Song[] = [];
  firebaseRootURL =
    "https://song-wizard-default-rtdb.firebaseio.com/songs.json";
  callSongsSub: Subscription;

  constructor(private http: HttpClient, private chordsService: chordsService, private songsService: SongsService) { }


  saveSong(newSong) {
    this.song = newSong;

    this.http
    .post<Song>(this.firebaseRootURL, newSong).subscribe((newSong) => {
      console.log(newSong);
    });

    this.chordsService.clearChords();
  }

  fetchSongs(): any {

   this.callSongsSub = this.http
    .get<{ [key: string]: Song}>(this.firebaseRootURL)
      .pipe(map(resData => {
        const songsArray: Song[] = [];
        for (const key in resData) {
          if (resData.hasOwnProperty(key)){
            // console.log(key);
            songsArray.push({...resData[key], id: key})
          }
        }
        return songsArray;
      }),
      tap(songs => {
        this.songsService.setSongs(songs);
      })
      )
      .subscribe((songs: Song[]) => {
        // console.log(...songs);
      });
  }
}

