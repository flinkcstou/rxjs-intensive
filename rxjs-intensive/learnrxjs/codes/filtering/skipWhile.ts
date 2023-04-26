import { BehaviorSubject, first, from, interval, skipUntil, skipWhile, tap, timer } from 'rxjs';

export class SkipWhile {

  constructor() {
    // this.method1();
    this.method2();
  }

  method2() {
    const b = new BehaviorSubject(true);

    interval(1000)
      .pipe(
        skipWhile(x => x < 4),
        tap(console.error)
      )
      .subscribe();
  }

  method1() {

  }
}
