import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

// Entry components
import { AddDialogComponent } from 'src/app/shared/components/dialogs/add/add-dialog.component';
import { DeleteDialogComponent } from 'src/app/shared/components/dialogs/delete/delete-dialog.component';
import { UpdateDialogComponent } from 'src/app/shared/components/dialogs/update/update-dialog.component';
import { ViewDialogComponent } from 'src/app/shared/components/dialogs/view/view-dialog.component';

// Interface
import { PostInterface } from 'src/app/shared/interface/post.interface';

// State
import { AppState } from 'src/app/shared/stored/main-state';
// Selector
import { getPosts } from 'src/app/shared/stored/selectors';

//Actions
import { LIST_POST_ACTION } from 'src/app/shared/stored/actions';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  displayedColumns: string[] = ['Title', 'Content', 'Lat', 'Long', 'Actions'];
  dataSource: Observable<PostInterface[]>;

  constructor(
    private store: Store<AppState>,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    console.log("LOADING");
    this.dataSource = this.store.select(getPosts);
    this.store.dispatch({type: LIST_POST_ACTION});
  }

  openDialog(dialogType: string, element?: PostInterface): void {
      let component;
      let options: MatDialogConfig = {
        width: '100%', 
        autoFocus: false, 
        restoreFocus: false
      };
      
      switch (dialogType) {
        case 'add':
          component = AddDialogComponent; 
          options = Object.assign(options, {
            data: {
              editable: false,
              post: null
            }
          });
          break;
        case 'view':
          component = ViewDialogComponent; 
          options = Object.assign(options, {
            data: {
              editable: false,
              post: null
            }
          });
          break;
        case 'update':
          component = UpdateDialogComponent;
          options = Object.assign(options, {
            data: {
              editable: true,
              post: element
            }
          });
          break;
        case 'delete':
          component = DeleteDialogComponent;
          options = Object.assign(options, {
            data: {
              editable: false,
              post: element
            }
          });
          break;
      }
  
      const dialogRef = this.dialog.open(component, options);
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
  }

}
