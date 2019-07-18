import { Injectable } from '@angular/core';

@Injectable()
export class ServicePageService {

  constructor() { }

  getEmployees(){
    return [
      {'id':1, 'name': 'Andrew', 'age':23 },
      {'id':2, 'name': 'devid', 'age':26 },
      {'id':3, 'name': 'devill', 'age':33 },
      {'id':4, 'name': 'vlain', 'age':43 },

    ];
  } 


}
