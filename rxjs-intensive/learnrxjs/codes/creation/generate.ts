import { generate, Observable } from 'rxjs';

export class Generate {
  constructor() {
    // this.method1();

    this.method2();
  }

  method2() {

    // build your own generate operator
    function generateC(initialState: any, condition: (v: any) => boolean, iterator: (v: any) => any) {

      return new Observable(obs => {
        let val = initialState;

        do {
          obs.next(val);
          val = iterator(val);
        } while (condition(val));


        obs.complete();

      });
    }

    let observable = generateC(2, x => x <= 8, x => x + 3);

    observable.subscribe(console.error);


  }

  method1() {
    let numberObservable = generate(2, x => x <= 8, x => x + 3);

    numberObservable.subscribe(console.error);

  }
}
