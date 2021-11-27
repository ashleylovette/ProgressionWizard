import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { chordsService } from '../chords.service';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Output() close = new EventEmitter();

  constructor( private chordsService: chordsService ) { }

  ngOnInit(): void {}

  onClose() {
    this.close.emit();
  }
}
