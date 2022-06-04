import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MySongDisplayComponent } from "./my-song-display/my-song-display.component";
import { SongDetailComponent } from "./my-song-display/song-detail/song-detail.component";
import { MySongsComponent } from "./my-songs.component";
import { SongStartComponent } from "./song-start/song-start.component";
import { SongsRoutingModule } from "./songs-routing.module";

@NgModule({
  declarations: [
    MySongsComponent,
    MySongDisplayComponent,
    SongDetailComponent,
    SongStartComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SongsRoutingModule
  ],
  exports: [
    MySongsComponent,
    MySongDisplayComponent,
    SongDetailComponent,
    SongStartComponent,
    CommonModule,
    SongsRoutingModule,
    RouterModule
  ]
})
export class SongsModule {

}
