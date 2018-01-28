import { Component, OnInit } from '@angular/core';
import { routerAnimation } from '../../animation/fade/fade';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css'],
  animations: [
    routerAnimation
  ]
})
export class MainContentComponent implements OnInit {
  constructor(private route: Router) { }

  ngOnInit() {
  }

  getRouteAnimation(outlet) {
    return outlet.activatedRouteData.animation
  }
}
