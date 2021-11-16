import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Song } from './song.model';
import { map, tap } from 'rxjs/operators';
import { chordsService } from "./chords.service";
import { SongsService } from "./songs.service";

@Injectable({
  providedIn: "root",
})
export class HTTPService {
  loadedSongs: Song[] = [];
  firebaseRootURL =
    "https://song-wizard-default-rtdb.firebaseio.com/songs.json";

  constructor(private http: HttpClient, private chordsService: chordsService, private songsService: SongsService) { }


  saveSongs() {
    const song = this.chordsService.getChords();

    this.http
    .post<{name: string}>(this.firebaseRootURL, song).subscribe((res) => {
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
            songsArray.push({...resData[key], id: key})
          }
        }
        return songsArray;
      })
      )
      .subscribe((songs: Song[]) => {
        this.loadedSongs = songs;
        console.log(this.loadedSongs);

      });



    // ATTEMPT TWO

  //     this.http.get<Song[]>(this.firebaseRootURL)
  //     .pipe(map(songs => {
  //       return songs.map(songs => {
  //         return {...songs, chords: songs.chords};
  //       });
  //     }), tap(songs => {
  //       this.songsService.setSongs(songs);
  //     })
  //   )
  //   .subscribe(songs => {
  //     this.loadedSongs = songs;
  //     console.log(this.loadedSongs);
  //   });
  // }
}
}
