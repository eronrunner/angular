import { Component, OnInit } from '@angular/core';
import { MatButton, MatIcon} from '@angular/material'
import { ElementRef } from '@angular/core';
@Component({
  selector: 'tto-dnest-list',
  templateUrl: './tto-dnest-list.component.html',
  styleUrls: ['./tto-dnest-list.component.css']
})
export class TtoDnestListComponent implements OnInit {
  ul: any;
  constructor(private elRef: ElementRef) { }

  ngOnInit() {
  }
  
  toogle(){
    let hidden = this.elRef.nativeElement.querySelector('.nest-list ul').style.visibility;
    if(hidden == 'hidden'){
      this.elRef.nativeElement.querySelector('.nest-list ul').style.visibility = 'visible';
    }else {
      this.elRef.nativeElement.querySelector('.nest-list ul').style.visibility = 'hidden';
    }
  }
}
