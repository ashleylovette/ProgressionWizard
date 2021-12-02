import { Injectable } from "@angular/core";

import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { HTTPService } from "../shared/http.service";
import { Song } from "../shared/song.model";

@Injectable({providedIn: 'root'})
export class SongsResolverService implements Resolve<Song[]> {

  constructor( private httpService: HTTPService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.httpService.fetchSongs();
  }
}
