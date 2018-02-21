import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component'; 
import{ CustomizationsComponent } from './customizations/customizations.component';
import { RendererComponent } from './renderer/renderer.component';
import { Page1Component } from './customizations/page1/page1.component';
import { Page2Component } from './customizations/page2/page2.component';
import { ResultsComponent } from './renderer/results/results.component';

const routes: Routes = [
  {path: '', component: CustomizationsComponent, outlet: "custom",
  children: [
    {path: '', component: Page1Component, outlet: "page1"},
    {path: '', component: Page2Component, outlet: "page2"}
  ]},
  
  {path: '', component: RendererComponent, outlet: "renderer",
  children: [
    {path: '', component:ResultsComponent, outlet:"results"}
  ]}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
