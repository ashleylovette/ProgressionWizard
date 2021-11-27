import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';

import { chordsService } from '../../shared/chords.service';

@Component({
  selector: 'app-my-chords',
  templateUrl: './my-chords.component.html',
  styleUrls: ['./my-chords.component.css']
})
export class MyChordsComponent implements OnInit {
  noteForm: FormGroup;

  constructor(private chordsService: chordsService) { }

  ngOnInit(): void {
    this.noteForm = new FormGroup({
      notes: new FormArray([])
    });

    // Render three inputs on init
    (<FormArray>this.noteForm.get("notes")).push(
      new FormControl(null, Validators.required)
    );
    (<FormArray>this.noteForm.get("notes")).push(
      new FormControl(null, Validators.required)
    );
    (<FormArray>this.noteForm.get("notes")).push(
      new FormControl(null, Validators.required)
    );

  }

  onFormSubmit(noteForm) {
    this.chordsService.notesSubmitted(noteForm);
  }

  getControls() {
    return (this.noteForm.get("notes") as FormArray).controls;
  }

  onAddNote() {
    (<FormArray>this.noteForm.get("notes")).push(
      new FormControl(null, Validators.required)
    );
  }

  onRemoveNote() {
    const chordsArray = this.noteForm.get("notes") as FormArray;
    chordsArray.removeAt(-1);
  }

  onResetForm() {
    this.noteForm.reset();
  }

}

