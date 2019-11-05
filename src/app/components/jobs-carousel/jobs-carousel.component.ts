import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Heros } from "../../entities/heros";
import { HeroService } from '../welcome-facts/hero.service';
declare var $: any;
@Component({
  selector: "app-jobs-carousel",
  templateUrl: "./jobs-carousel.component.html",
  styleUrls: ["./jobs-carousel.component.css"]
})
export class JobsCarouselComponent {


  constructor( private heroService: HeroService) {
 
  }

  

 
}
