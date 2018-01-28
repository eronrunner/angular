import { Component, Input, OnInit } from '@angular/core';
import { MatCard } from '@angular/material';

@Component({
  selector: 'app-item-card-list',
  templateUrl: './item-card-list.component.html',
  styleUrls: ['./item-card-list.component.css']
})
export class ItemCardListComponent implements OnInit {
@Input() cards: MatCard[];
@Input('gridContent') grid: boolean;
@Input() cols: string;
@Input() rowHeight: string;
  constructor() { }

  ngOnInit() {
  }

}
