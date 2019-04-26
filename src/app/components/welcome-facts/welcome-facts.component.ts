import { Component, OnInit, Input } from "@angular/core";
import { Heros } from "src/app/entities/hero";

@Component({
  selector: "app-welcome-facts",
  templateUrl: "./welcome-facts.component.html",
  styleUrls: ["./welcome-facts.component.css"]
})
export class WelcomeFactsComponent implements OnInit {
  @Input()
  heros: Heros ;


   name:string = "John"; 
   score1:number = 50;
   score2:number = 42.50;

   sum = this.score1 + this.score2 

   console.log(sum);
   
   




  constructor() {}

  ngOnInit() {}
}
