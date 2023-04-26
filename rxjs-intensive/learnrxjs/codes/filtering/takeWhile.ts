import { BehaviorSubject, first, from, interval, skipUntil, skipWhile, takeWhile, tap, timer } from 'rxjs';

export class TakeWhile {

  constructor() {
    // this.method1();
    this.method2();
  }

  method2() {
    const b = new BehaviorSubject(true);

    interval(1000)
      .pipe(
        takeWhile(x => x < 4),
        tap(console.error)
      )
      .subscribe();
  }

  method1() {

  }
}
