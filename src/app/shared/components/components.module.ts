import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';

// Custom Components
import { AddDialogComponent } from './dialogs/add/add-dialog.component';
import { DeleteDialogComponent } from './dialogs/delete/delete-dialog.component';
import { UpdateDialogComponent } from './dialogs/update/update-dialog.component';
import { HeaderComponent } from './header/header.component';
import { ViewDialogComponent } from './dialogs/view/view-dialog.component';

@NgModule({
  declarations: [
    AddDialogComponent,
    DeleteDialogComponent,
    HeaderComponent,
    UpdateDialogComponent,
    ViewDialogComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    DragDropModule,
    MaterialModule    
  ],
  exports: [
    AddDialogComponent,
    DeleteDialogComponent,
    HeaderComponent,
    UpdateDialogComponent,
    ViewDialogComponent
  ],
  entryComponents:[
    AddDialogComponent,
    DeleteDialogComponent,
    UpdateDialogComponent,
    ViewDialogComponent
  ],
  providers: [],
  bootstrap: []
})
export class ComponentsModule { }
