import { combineAll, EMPTY, interval, map, take } from 'rxjs';

export class CombineAll {

  constructor() {
    this.method1();
  }

  method1() {

    // pending
    console.error(1);
    const source$ = interval(1000)
      .pipe(take(2));
// map each emitted value from source to interval observable that takes 5 values
    const example$ = source$
      .pipe(
        map(val => interval(1000).pipe(
            map(i => `Result (${val}): ${i}`),
            take(5)
          )
        )
      );
    /*
      2 values from source will map to 2 (inner) interval observables that emit every 1s.
      combineAll uses combineLatest strategy, emitting the last value from each
      whenever either observable emits a value
    */
    example$
      .pipe(combineAll())
      .subscribe(console.error);
  }
}
