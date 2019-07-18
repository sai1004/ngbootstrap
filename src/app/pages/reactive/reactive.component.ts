import { Component } from '@angular/core';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent  {

  name: string = '';
 
  setValue() { this.name = 'Nancy'; }

}
