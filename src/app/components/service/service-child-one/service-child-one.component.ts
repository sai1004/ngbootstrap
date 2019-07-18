import { Component, OnInit } from '@angular/core';
import { ServicePageService } from 'src/app/pages/service-page/service-page.service';

@Component({
  selector: 'app-service-child-one',
  templateUrl: './service-child-one.component.html',
  styleUrls: ['./service-child-one.component.css']
})
export class ServiceChildOneComponent implements OnInit {

  public employees = [];


  constructor( private empService: ServicePageService) { }

  ngOnInit() {
    this.employees = this.empService.getEmployees();
  }

}
