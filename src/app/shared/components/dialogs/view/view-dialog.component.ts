import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PostInterface } from 'src/app/shared/interface/post.interface';
import * as L from 'leaflet';

@Component({
  selector: 'app-view-dialog',
  templateUrl: './view-dialog.component.html',
  styleUrls: ['./view-dialog.component.scss']
})
export class ViewDialogComponent implements OnInit, AfterViewInit {
  imgErrorFlag: boolean = false;
  defaultFlagUrl: string = 'assets/img/default_img.jpg';
  private map;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { editable: boolean, post: PostInterface }
  ) {}

  ngOnInit(): void {

  }

  ngAfterViewInit(): void { 
    this.initMap();
  }

  onErrorImg(): void {
    this.imgErrorFlag = true;
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [ this.data.post.lat, this.data.post.long ],
      zoom: 5
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 10,
      minZoom: 8,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }
}
