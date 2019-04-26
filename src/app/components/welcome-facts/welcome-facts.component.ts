import { Component, OnInit, Input } from "@angular/core";
// import { Heros } from "src/app/entities/hero";
import { HeroService } from './hero.service';

@Component({
  selector: "app-welcome-facts",
  templateUrl: "./welcome-facts.component.html",
  styleUrls: ["./welcome-facts.component.css"]
})
export class WelcomeFactsComponent implements OnInit {
 
  posts: any = []


  constructor( private heroService:HeroService) {
    this.getItems();
  }
  


getItems(){
  this.posts = this.heroService.getItems();
}


  ngOnInit() {}

 

}
