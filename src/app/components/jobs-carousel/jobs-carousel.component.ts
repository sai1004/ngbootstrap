import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Heros } from "../../entities/heros";
import { HeroService } from '../welcome-facts/hero.service';

@Component({
  selector: "app-jobs-carousel",
  templateUrl: "./jobs-carousel.component.html",
  styleUrls: ["./jobs-carousel.component.css"]
})
export class JobsCarouselComponent {


  constructor( private heroService: HeroService) {
this.heroService = heroService;
  }

  dummy;



  onClick() {
    this.dummy = " hello there!!";
  }

  delete() {
    this.dummy = this.delete();
  }
}
