import { from, Observable } from 'rxjs';

export class From {
  constructor() {
    this.method1();
    this.method2();
  }

  method2() {


    // build your own from operator
    function fromC(value: any) {
      let observable;
      observable = new Observable(obs => {
        if (value instanceof Promise) {

          value.then((x) => {
            obs.next(x);
            obs.complete();
          });

        }

        if (value[/*Symbol.Iterator*/ 'iterator']) {

          /*
          for (const v of value){
          obs.next(v)
          }
          obs.complete()
          **/

        }

      });

      return observable;
    }
  }

  method1() {

    from([1, 2, 3]);
    from(new Promise((resolve: any) => resolve()));
  }
}
