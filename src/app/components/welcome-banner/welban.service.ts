import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs';


@Injectable()
export class AppService {

  public stringSubject = new Subject<string>();

  passValue(data) {
    //passing the data as the next observable
    this.stringSubject.next(data);
  }

}
