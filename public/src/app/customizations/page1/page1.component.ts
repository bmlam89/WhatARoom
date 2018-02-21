import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  next(val){
    if(val == 0){
      console.log('sofa');
    }else if(val == 1){
      console.log('loveseat');
    }else if(val == 2){
      console.log('sectional');
    }
  }
}
