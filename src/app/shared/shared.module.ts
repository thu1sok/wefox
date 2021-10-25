import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Custom modules
import { ComponentsModule } from './components/components.module';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    MaterialModule,
    ComponentsModule
  ],
  exports: [
    BrowserModule,
    MaterialModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
