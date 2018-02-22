import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var jQuery: any;
@Component({
  selector: 'app-renderer',
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.css']
})
export class RendererComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  load_modal(){
    $('#product_modal').show();
  }

  close_modal(){
    $('#product_modal').hide();
  }
  


}
