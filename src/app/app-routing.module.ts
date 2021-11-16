import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ChordIdentifierComponent } from "./chord-identifier/chord-identifier.component";
import { MySongsComponent } from "./my-songs/my-songs.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/chord-identifier', pathMatch: 'full'},
  { path: 'chord-identifier', component: ChordIdentifierComponent },
  { path: 'songs', component: MySongsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
