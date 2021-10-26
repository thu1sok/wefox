import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Custom modules
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

// Pages
import { HomePageComponent } from './home/home-page.component';
import { NotFoundPageComponent } from './not-found/not-found-page.component';

// Services
import { MaterialModule } from '../shared/material.module';

@NgModule({
  declarations: [
    HomePageComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: []
})
export class PagesModule { }
