import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-welcome-practice',
  templateUrl: './welcome-practice.component.html',
  styleUrls: ['./welcome-practice.component.css']
})
export class WelcomePracticeComponent implements OnInit {

  salaries = [
    {
      John: 100,
      Pete: 300,
      Mary: 250,
      Johnny: 500,
      Peter: 750,
      Maryy: 404,
      Johnson: 900,
      Peterson: 1000,
      Maryoit: 10000
    }
  ];

  constructor() { }

  ngOnInit() { }
}
