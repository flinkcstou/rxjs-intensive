import { from, interval, single, tap } from 'rxjs';

export class Single {

  constructor() {
    // this.method1();
    // this.method2();
    // this.method3();
    this.method4();
  }


  method4() {
    from([1, 2, 3, 4])
      .pipe(
        single(x => x === 0),
        tap(console.error)
      )
      .subscribe(); // error


  }

  method3() {
    from([0, 0, 1, 2, 3, 4])
      .pipe(
        single(x => x === 0),
        tap(console.error)
      )
      .subscribe();

  }

  method2() {

    from([0, 1, 2, 3, 4])
      .pipe(
        single(x => x === 0),
        tap(console.error)
      )
      .subscribe();

  }

  method1() {

    interval(1000)
      .pipe(
        single(x => x === 0),
        tap(console.error)
      )
      .subscribe();
  }

}
