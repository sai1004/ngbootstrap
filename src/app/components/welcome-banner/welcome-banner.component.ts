import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../entities/hero'

@Component({
  selector: 'app-welcome-banner',
  templateUrl: './welcome-banner.component.html',
  styleUrls: ['./welcome-banner.component.css']
})
export class WelcomeBannerComponent implements OnInit {

  @Input() 
  hero: Hero;

  @Input('master')
  masterName: string;


  posts: any = [
    {
      'name': 'somthing'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
