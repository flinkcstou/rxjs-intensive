import { BehaviorSubject, first, from, interval, skipUntil, tap, timer } from 'rxjs';

export class SkipUntil {

  constructor() {
    // this.method1();
    this.method2();
  }

  method2() {
    const b = new BehaviorSubject(true);

    interval(1000)
      .pipe(
        skipUntil(b.asObservable()),
        tap(console.error)
      )
      .subscribe();
  }

  method1() {

    interval(1000)
      .pipe(
        skipUntil(timer(6000)),
        tap(console.error)
      )
      .subscribe();
  }
}
