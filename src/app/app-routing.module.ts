import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ChordIdentifierComponent } from "./chord-identifier/chord-identifier.component";
import { MySongsComponent } from "./my-songs/my-songs.component";
import { SongDetailComponent } from "./my-songs/my-song-display/song-detail/song-detail.component";
import { SongStartComponent } from "./my-songs/song-start/song-start.component";
import { SongsResolverService } from "./my-songs/songs-resolver.service";
import { AuthComponent } from "./auth/auth.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/chord-identifier', pathMatch: 'full'},
  { path: 'chord-identifier', component: ChordIdentifierComponent },
  { path: 'songs', component: MySongsComponent, children: [
    { path: '', component: SongStartComponent },
    { path: ':id', component: SongDetailComponent, resolve: [SongsResolverService]}
  ] },
  { path: 'auth', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
