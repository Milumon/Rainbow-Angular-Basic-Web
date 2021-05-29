import { Component, OnInit } from '@angular/core';
import { BANNERS } from 'src/app/entities/banners';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  banners = BANNERS;

  constructor() { }

  ngOnInit(): void {
  }

}
