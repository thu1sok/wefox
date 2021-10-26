import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

//Custom modules
import { ComponentsModule } from './components/components.module';
import { MaterialModule } from './material.module';
// Effects
import { PostEffects } from './stored/effects';
//Service
import {PostService} from './services/post.service';
import { AppReducer } from './stored/main-state';

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    MaterialModule,
    ComponentsModule,
    StoreModule.forRoot(AppReducer),
    EffectsModule.forRoot([PostEffects]),
  ],
  exports: [
    BrowserModule,
    MaterialModule,
    ComponentsModule
  ],
  providers: [PostService],
  bootstrap: []
})
export class SharedModule { }
