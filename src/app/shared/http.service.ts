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
  loadedSongs: Song[] = [];
  firebaseRootURL =
    "https://song-wizard-default-rtdb.firebaseio.com/songs.json";
  songsChangedSub: Subscription;

  constructor(private http: HttpClient, private chordsService: chordsService, private songsService: SongsService) { }


  saveSongs() {
    const song = this.chordsService.getChords();
    // let chordsString = song.toString();

    this.http
    .post<Song>(this.firebaseRootURL, song).subscribe((res) => {
      console.log("Firebase response:", res);
    });
  }

  fetchSongs(): any {
    // ATTEMPT ONE

    this.http
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
        console.log(...songs);
      });



    // ATTEMPT TWO

    //   this.http.get<Song[]>(this.firebaseRootURL)
    //   .pipe(map(songs => {
    //     return songs.map(song => {
    //       return {...song, chords: song.chords, title: song.title, id: song.id };
    //     });
    //   }), tap(songs => {
    //     this.songsService.setSongs(songs);
    //   })
    // )
    // .subscribe(songs => {
    //   console.log(songs);
    // });
  }
}

