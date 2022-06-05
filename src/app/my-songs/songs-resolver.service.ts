import { Injectable } from "@angular/core";

import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { HTTPService } from "../shared/http.service";

import { Song } from "../shared/song.model";
import { SongsService } from "../shared/songs.service";

@Injectable({providedIn: 'root'})
export class SongsResolverService implements Resolve<Song[]> {

  constructor(
    private httpService: HTTPService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.httpService.fetchSongs();
  }
}
