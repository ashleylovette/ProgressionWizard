import { Injectable } from "@angular/core";

import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { HTTPService } from "../shared/http.service";
import { Song } from "../shared/song.model";
import { SongsService } from "../shared/songs.service";

@Injectable({providedIn: 'root'})
export class SongsResolverService implements Resolve<Song[]> {

  constructor(
    private httpService: HTTPService,
    private songsService: SongsService,
    private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const songs = this.songsService.getSongs();

    if (songs.length === 0) {
      return this.httpService.fetchSongs();
    } else {
      return songs;
    }
  }
}
