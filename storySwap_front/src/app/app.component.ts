import { Component } from '@angular/core';
import { SideBarMenuComponent } from './components/side-bar-menu/side-bar-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SideBarMenuComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'storySwap';
}
