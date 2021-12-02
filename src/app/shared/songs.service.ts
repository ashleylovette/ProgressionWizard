import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Song } from "./song.model";

@Injectable({ providedIn: 'root'})
export class SongsService {
  allSongs: Song[]=[];
  songsChanged = new Subject<Song[]>();
  songSelected= new Subject;


  setSongs(songs: Song[]) {
    this.allSongs = songs;
    this.songsChanged.next(this.allSongs.slice());
  }

  getSongs(): any {
   return this.allSongs.slice();
  }

  getSong(index: number) {
    return this.allSongs[index];
  }

  saveSongs(song: Song) {
    this.allSongs.push(song);
    this.songsChanged.next(this.allSongs.slice());
  }

  deleteSong(index) {
    this.allSongs.splice(index, 1);
    this.songsChanged.next(this.allSongs.slice());
  }

}
