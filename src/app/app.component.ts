import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  names: String[];

  ngOnInit(): void {
    this.names = [];
  }

  onAddNewName(name: String) {
    this.names.push(name);
  }
}
