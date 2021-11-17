import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Song } from "./song.model";

@Injectable({ providedIn: 'root'})
export class SongsService {
  allSongs: Song[];
  songsChanged = new Subject<Song[]>();

  setSongs(songs: Song[]) {
    this.allSongs = songs;
    this.songsChanged.next(this.allSongs.slice());
  }

  getSongs() {
    this.allSongs.slice();
  }
}