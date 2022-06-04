import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Song } from './song.model';
import { map, tap } from 'rxjs/operators';
import { chordsService } from "./chords.service";
import { SongsService } from "./songs.service";
import { AuthService } from "../auth/auth.service";

@Injectable({
  providedIn: "root",
})
export class HTTPService {
  song: Song;
  loadedSongs: Song[] = [];
  firebaseRootURL: string =
    "https://song-wizard-default-rtdb.firebaseio.com/songs.json";
  apiKey: string = "AIzaSyD5dwpdjLwIWGHVyxxLYho0nh4m8zck1BY";
  apiURL: string = "https://pure-tundra-47439.herokuapp.com";
  isLoading: boolean = false;


  constructor(
    private http: HttpClient,
    private chordsService: chordsService,
    private songsService: SongsService,
    private authService: AuthService) {}


  saveSong(newSong) {
    this.song = newSong;

    this.http
    .post<Song>(this.firebaseRootURL, newSong).subscribe((newSong) => {
      console.log(newSong);
    });

    this.chordsService.clearChords();
  }

  saveSongs() {
    const songs = this.songsService.getMySongs();
    this.http.put(this.firebaseRootURL, songs)
      .subscribe(res => {
        console.log(res);
      });
  }

  fetchMySongs(): any {
    this.isLoading = true;
  return this.http
    .get<{ [key: string]: Song}>(this.firebaseRootURL)
      .pipe(map(resData => {
        const songsArray: Song[] = [];
        for (const key in resData) {
          if (resData.hasOwnProperty(key)){
            songsArray.push({...resData[key], id: key})
          }
        }
        return songsArray;
      }),
      tap(songs => {
        this.songsService.setSongs(songs);
      })
      );
    }
}
