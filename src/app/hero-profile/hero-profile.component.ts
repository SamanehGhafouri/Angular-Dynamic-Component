import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hero-profile',
  templateUrl: './hero-profile.component.html',
  styleUrls: ['./hero-profile.component.css']
})
export class HeroProfileComponent{
  @Input() data: any;
}
