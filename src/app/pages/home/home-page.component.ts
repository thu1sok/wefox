import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddDialogComponent } from 'src/app/shared/components/dialogs/add/add-dialog.component';
import { DeleteDialogComponent } from 'src/app/shared/components/dialogs/delete/delete-dialog.component';
import { UpdateDialogComponent } from 'src/app/shared/components/dialogs/update/update-dialog.component';
import { ViewDialogComponent } from 'src/app/shared/components/dialogs/view/view-dialog.component';

// Interface
import { PostInterface } from 'src/app/shared/interface/post.interface';

// Service
import { HomePageService } from './shared/home-page.service';

const ELEMENT_DATA: any[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  displayedColumns: string[] = ['Title', 'Content', 'Lat', 'Long', 'Actions'];
  dataSource: PostInterface[] = [];

  constructor(
    private homePageService: HomePageService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.homePageService.loadPost().subscribe((post: PostInterface[]) => {
      this.dataSource = post;
    });
  }

  openDialog(dialogType: string, element: PostInterface): void {
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
          break;
      }
  
      const dialogRef = this.dialog.open(component, options);
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
  }

}
