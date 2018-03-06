import { Component, OnInit } from '@angular/core';
import { Sofa } from '../sofa'
import { Router } from '@angular/router';
declare var $: any;
declare var jQuery: any;
@Component({
  selector: 'app-renderer',
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.css']
})
export class RendererComponent implements OnInit {

  sofas = [];
  data = new Sofa('1','2','3');
  s1 = new Sofa('Angela II w/ wooden trim','A1', '$1199');
  s2 = new Sofa('Olinee','A1','$1199');
  s3 = new Sofa('Chandler','A1','$1299');
  s4 = new Sofa('A014','A1','$1199');
  s5 = new Sofa('Jasper Kent','A1','$1199');
  s6 = new Sofa('Richmond','A1','$1199');
  s7 = new Sofa('Abu','A1','$1199');
  s8 = new Sofa('Angela II w/o wooden trim','A1','$1099');
  s9 = new Sofa('Willow','Modway','$1199');
  s10 = new Sofa('Carson','Modway','$1199');
  s11 = new Sofa('Jasper','Modway','$1199');
  s12 = new Sofa('Danny','Modus','$1199');
  s13 = new Sofa('Tiffany','Modus','$1199');
  s14 = new Sofa('Rio','Modus','$1199');
  
  constructor(private router: Router) {
  


    
   }

  ngOnInit() {
    this.sofas.push(this.s1,this.s2,this.s3,this.s4,this.s5,this.s6,this.s7,this.s8,this.s9,this.s10,
    this.s11,this.s12,this.s13,this.s14);

  }

  load_modal(sofa){
    console.log(sofa.style);
    this.data.style = sofa.style;
    this.data.price = sofa.price;
    this.data.manufacturer = sofa.manufacturer;
    $('#product_modal').show();
  }

  close_modal(val){
    if (val == 1){
      this.router.navigate(['customizations']);
    }
    $('#product_modal').hide();
  }
  


}
