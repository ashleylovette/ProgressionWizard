import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AuthGuard } from "../auth/auth.guard";
import { SongDetailComponent } from "./my-song-display/song-detail/song-detail.component";
import { MySongsComponent } from "./my-songs.component";
import { SongStartComponent } from "./song-start/song-start.component";
import { SongsResolverService } from "./songs-resolver.service";

const routes = [
  { path: '',
component: MySongsComponent,
canActivate: [AuthGuard],
children: [
  { path: '', component: SongStartComponent },
  { path: ':id', component: SongDetailComponent, resolve: [SongsResolverService]}
] },]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SongsRoutingModule {

}
