import { Component, HostBinding, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  host: {
    '[class.light-theme]': "( theme === 'light' )",
    '[class.dark-theme]': "( theme === 'dark' )",
  },
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  theme = 'dark';

  name = 'Angular ' + VERSION.major;

  changeTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
  }
}
