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
import { SongDetailComponent } from './my-songs/my-song-display/song-detail/song-detail.component';
import { SongStartComponent } from './my-songs/song-start/song-start.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';

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
    SongDetailComponent,
    SongStartComponent,
    DropdownDirective,
    AuthComponent,
    LoadingSpinnerComponent
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
