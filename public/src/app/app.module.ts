import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CustomizationsComponent } from './customizations/customizations.component';
import { RendererComponent } from './renderer/renderer.component';
import { StructureComponent } from './customizations/structure/structure.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomizationsComponent,
    RendererComponent,
    StructureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
