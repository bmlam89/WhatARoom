import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CustomizationsComponent } from './customizations/customizations.component';
import { RendererComponent } from './renderer/renderer.component';
import { FooterComponent } from './footer/footer.component';
import { Page1Component } from './customizations/page1/page1.component';
import { Page2Component } from './customizations/page2/page2.component';
import { ResultsComponent } from './renderer/results/results.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomizationsComponent,
    RendererComponent,
    FooterComponent,
    Page1Component,
    Page2Component,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
