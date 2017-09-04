import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html'
})
export class HistoryComponent {

  @Input() names: String[];

  get historyText(): String {
      if (this.names.length === 1) {
        return 'We said hello to one person';
      } else if (this.names.length > 1 && this.names.length < 4) {
        return 'We said hello to some people';
      } else {
        return 'We said hello to a lot of people';
      }
  }
}
