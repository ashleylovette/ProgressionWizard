import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Output() close = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClose() {
    this.close.emit();
  }
}
