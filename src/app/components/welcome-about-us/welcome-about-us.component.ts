import { Component, OnInit } from '@angular/core';
import { Hero } from '../../entities/hero';
@Component({
  selector: 'app-welcome-about-us',
  templateUrl: './welcome-about-us.component.html',
  styleUrls: ['./welcome-about-us.component.css']
})
export class WelcomeAboutUsComponent implements OnInit {

  // heroes = 'dkdjf';
  master = 'Master';


  constructor() { }

  ngOnInit() {
  }

}
