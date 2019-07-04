import { Injectable, Input, Output } from "@angular/core";
import { Heros } from "src/app/entities/heros";
import { EventEmitter } from 'events';

@Injectable({
  providedIn: "root"
})
export class HeroService {



  @Input()
  posts: Heros[] = [
    {'author': 'sai',
     'title':'Blog post 1',
     'content':'First Blog Post',
     'country':'INDIA',
     'date_posted':'April 29, 2018'
     },
    {'author': 'sam',
     'title': 'Blog post 2',
     'content': 'Second Blog Post',
     'country': 'INDIA',
     'date_posted': 'April 5, 2018'
     },
    {'author': 'jake',
     'title': 'Blog post 3',
     'content':'Third Blog Post',
     'country': 'INDIA',
     'date_posted': 'April 2, 2018'
     },
  ];

  getItems() {
    return this.posts;
  }
}
