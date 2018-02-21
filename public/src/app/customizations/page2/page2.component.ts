import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  next(val){
    if(val == 3){
      console.log('contemporary');
    }else if(val == 4){
      console.log('classic');
    }
  }

}
