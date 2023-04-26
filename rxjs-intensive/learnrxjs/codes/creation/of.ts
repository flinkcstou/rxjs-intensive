import { Observable } from 'rxjs';

export class Of {

  constructor() {
    this.method1();
  }

  method1() {
    //build your own of operator

    function ofC(value: any) {
      return new Observable(obs => {

        obs.next(value);
        obs.complete();
      });
    }
  }
}
