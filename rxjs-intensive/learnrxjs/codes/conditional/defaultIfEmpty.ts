import { defaultIfEmpty, empty, fromEvent, interval, takeUntil, tap } from 'rxjs';

export class DefaultIfEmpty {

  constructor() {
    // this.method1();
    this.method2();
  }

  method2() {
    empty()
      .pipe(
        defaultIfEmpty('Observable.empty()!'),
        tap(console.error)
      ).subscribe();

  }

  method1() {

    fromEvent(document, 'click')
      .pipe(
        takeUntil(interval(1000)),
        defaultIfEmpty('noClicked'),
        tap((v) => console.error(v))
      )
      .subscribe();

  }
}
