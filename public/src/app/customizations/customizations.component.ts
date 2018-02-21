import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-customizations',
  templateUrl: './customizations.component.html',
  styleUrls: ['./customizations.component.css']
})
export class CustomizationsComponent implements OnInit {

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


    $('.list-group').html("<a href='javascript:;' (click)='nexta(3)' class=\"list-group-item list-group-item-action options\">Contemporary</a><br>\
    <a href='javascript:;' (click)='nexta(4)' class='list-group-item list-group-item-action options'>Classic</a><br>")
    $('.options').css("border","solid thin red");
  }
  nexta(val){
    if(val == 3){
      console.log('contemporary');
    }
  }
}
