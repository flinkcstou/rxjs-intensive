import { first, from, tap } from 'rxjs';

export class First {

  constructor() {
    this.method1();
  }

  method1() {

    from([1, 2, 3, 4])
      .pipe(
        first(x => x % 5 === 0, 'nothing'),
        tap(console.error)
      )
      .subscribe();
  }
}
