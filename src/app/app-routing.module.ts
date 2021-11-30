import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ChordIdentifierComponent } from "./chord-identifier/chord-identifier.component";
import { MySongsComponent } from "./my-songs/my-songs.component";
import { SongDetailComponent } from "./my-songs/song-detail/song-detail.component";
import { SongEditComponent } from "./my-songs/song-edit/song-edit.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/chord-identifier', pathMatch: 'full'},
  { path: 'chord-identifier', component: ChordIdentifierComponent },
  { path: 'songs', component: MySongsComponent, children: [
    { path: '', component: SongEditComponent },
    { path: ':id', component: SongDetailComponent}
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
