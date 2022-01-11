import { Component, HostBinding, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  theme = 'dark';

  @HostBinding('class.light-theme') get MyThemeL() {
    return this.theme === 'light';
  }

  @HostBinding('class.dark-theme') get MyThemeD() {
    return this.theme === 'dark';
  }
  name = 'Angular ' + VERSION.major;

  changeTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
  }
}
