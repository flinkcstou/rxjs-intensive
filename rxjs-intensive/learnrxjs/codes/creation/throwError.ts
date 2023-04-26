import { Observable, throwError } from 'rxjs';

export class ThrowError {
  constructor() {
    this.method1();
    this.method2();
  }

  method2() {

    // build your own throwError operator
    function throwErrorC(callback: () => Error) {

      return new Observable(obs => {
        obs.error(callback());

      });

    }

    let observable = throwErrorC(() => new Error('asd'));
    observable.subscribe({
      error(e) {
        console.error(e, 'sdf');
      }
    });

  }

  method1() {

    const a = throwError(() => new Error('asd'));
    a.subscribe({
      error(e) {
        console.error(e, 'sdf');
      }
    });

  }
}
