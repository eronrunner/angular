import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
} from '@angular/animations';
import { routerAnimation } from './animation/fade/fade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    routerAnimation
  ]
})
export class AppComponent {
  title = 'app';
  sidebarToogle = true;
  getRouteAnimation(outlet) {
    return outlet.activatedRouteData.animation
  }
}
