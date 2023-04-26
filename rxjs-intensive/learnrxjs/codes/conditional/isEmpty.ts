import { fromEvent, interval, isEmpty, takeUntil, tap } from 'rxjs';

export class IsEmpty {
  constructor() {
    this.method1();
  }

  method1() {

    fromEvent(document, 'click')
      .pipe(
        takeUntil(interval(1000)),
        isEmpty(),
        tap(console.error)
      )
      .subscribe();

  }
}
