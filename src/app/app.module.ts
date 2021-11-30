import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './shared/alert/alert.component';

import { ChordIdentifierComponent } from './chord-identifier/chord-identifier.component';
import { DisplayChordsComponent } from './chord-identifier/display-chords/display-chords.component';
import { MyChordsComponent } from './chord-identifier/my-chords/my-chords.component';
import { KeyComponent } from './chord-identifier/key/key.component';
import { MySongsComponent } from './my-songs/my-songs.component';
import { MySongDisplayComponent } from './my-songs/my-song-display/my-song-display.component';
import { AppRoutingModule } from './app-routing.module';
import { SongEditComponent } from './my-songs/song-edit/song-edit.component';
import { SongDetailComponent } from './my-songs/song-detail/song-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DisplayChordsComponent,
    MyChordsComponent,
    KeyComponent,
    AlertComponent,
    ChordIdentifierComponent,
    MySongsComponent,
    MySongDisplayComponent,
    SongEditComponent,
    SongDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
