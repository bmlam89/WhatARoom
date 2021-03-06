import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component'; 
import{ CustomizationsComponent } from './customizations/customizations.component';
import { RendererComponent } from './renderer/renderer.component';

const routes: Routes = [
  {path: '', component: RendererComponent},
  {path: 'customizations', component: CustomizationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
