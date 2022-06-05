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
  // firebaseRootURL: string =
    // "https://song-wizard-default-rtdb.firebaseio.com/songs.json";
  // apiKey: string = "AIzaSyD5dwpdjLwIWGHVyxxLYho0nh4m8zck1BY";
  apiURL: string = "https://pure-tundra-47439.herokuapp.com/api/v1";
  isLoading: boolean = false;
  allSongs: Song[];


  constructor(
    private http: HttpClient,
    private chordsService: chordsService,
    private songsService: SongsService) {}


  saveSong(newSong) {
    this.song = newSong;

    // ERROR UNAUTHORIZED
    this.http
    .post(`http://localhost:3000/api/v1/songs/create`, newSong).subscribe((res:any) => {
      console.log(res.payload.song);
    });

    this.chordsService.clearChords();
  }

  saveSongs() {
    const songs = this.songsService.getMySongs();
    this.http.post(`${this.apiURL}/songs`, songs)
      .subscribe(res => {
        // console.log(res);
      });
  }

  fetchMySongs(): any {
    this.isLoading = true;
  return this.http
    .get(`${this.apiURL}/songs/my_songs`)
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

    fetchSongs() {
      return this.http.get(`${this.apiURL}/songs/index`, {}).pipe(
        tap((res:any) => {
          // console.log("fetching songs: ", res)
          this.allSongs = res.payload.map(x => new Song(x));
          this.songsService.setSongs(this.allSongs);
        })
      );
    }
}
