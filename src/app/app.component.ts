import { Component } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'sider';

  navbarToggle() {
    const nav = document.getElementById('main-menu');
    if (nav.style.width === '60px') {
      nav.style.width = '250px';
    } else {
      nav.style.width = '60px';
    }

    const menu = document.getElementById('menu');
    if (menu.style.display === 'table-cell') {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'table-cell';
    }

    const close = document.getElementById('close');
    if (close.style.display === 'none') {
      close.style.display = 'table-cell';
    } else {
      close.style.display = 'none';
    }
  }
}
