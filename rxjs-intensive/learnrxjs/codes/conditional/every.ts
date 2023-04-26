import { every, from, tap } from 'rxjs';

export class Every {

  constructor() {
    this.method1();
  }

  method1() {

    from([1, 2, 3, 4])
      .pipe(
        tap(console.error),
        every(x => !!x),
        tap(console.error)
      )
      .subscribe();

  }
}
