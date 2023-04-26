import { from, last, tap } from 'rxjs';

export class Last {
  constructor() {
    this.method1();
  }

  method1() {

    from([1, 2, 3, 4])
      .pipe(
        last(x => x % 2 == 0),
        tap(console.error)
      )
      .subscribe();
  }
}
