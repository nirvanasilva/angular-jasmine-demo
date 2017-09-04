import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-say',
  templateUrl: './say.component.html'
})
export class SayComponent implements OnInit {

  @Output() nameUpdated = new EventEmitter();

  nameValue: String;
  inputValue: String;

  constructor() { }

  ngOnInit() {
  }

  onSaveName() {
    this.nameValue = this.inputValue;
    this.nameUpdated.emit(this.nameValue);
    this.onClearName();
  }

  onClearName() {
    this.inputValue = '';
  }
}
