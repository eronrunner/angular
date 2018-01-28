import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routerAnimation } from '../../../animation/fade/fade';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    routerAnimation
  ]
})
export class HomeComponent implements OnInit {
  @Output('route') routerOutlet = new EventEmitter<RouterOutlet>();

  constructor() { }

  ngOnInit() {
  }

  getRouteAnimation(outlet) {
    return outlet.activatedRouteData.animation
  }
}
