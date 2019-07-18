import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.css']
})
export class ServicePageComponent implements OnInit {

  engine;
  tires;

  constructor() { 
    this.engine = this.engine
    this.tires
  }

  ngOnInit() {
  }

}
