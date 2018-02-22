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
    
    $('#changing_div').attr('hidden','hidden');
    $('#changing_div2').removeAttr('hidden');
  }
  
  nexta(val){
 
    if(val==3){
      console.log('classic',val);
    }else if(val == 4){
      console.log('contemporary',val);
    }else{
      $('#changing_div').removeAttr('hidden');
      $('#changing_div2').attr('hidden','hidden');
    }
  } 

}
