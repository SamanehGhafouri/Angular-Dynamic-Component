import { Component } from '@angular/core';
import {AdItem} from "./ad-item";
import {AdService} from "./ad.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ads: AdItem[];

  constructor(private adService: AdService) {}

  ngOnInit(){
    this.ads = this.adService.getAds();
  }

}
