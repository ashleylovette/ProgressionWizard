import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ChordIdentifierComponent } from "./chord-identifier.component";
import { DisplayChordsComponent } from "./display-chords/display-chords.component";
import { KeyComponent } from "./key/key.component";
import { MyChordsComponent } from "./my-chords/my-chords.component";

@NgModule({
  declarations: [
    DisplayChordsComponent,
    MyChordsComponent,
    KeyComponent,
    ChordIdentifierComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild([{ path: 'chord-identifier', component: ChordIdentifierComponent }])
  ]
})
export class ChordModule{}
