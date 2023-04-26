import { find, from, interval, tap } from 'rxjs';

export class Find {

  constructor() {
    this.method1();
    this.method2();
  }

  method2() {
    interval(100)
      .pipe(
        find(x => x > 1),
        tap(console.error)
      )
      .subscribe(
        () => console.error('next'),
        () => console.error('error'),
        () => console.error('complete'));

  }

  method1() {

    from([1, 2, 3, 4])
      .pipe(
        find(x => x > 1),
        tap(console.error)
      )
      .subscribe(
        () => console.error('next'),
        () => console.error('error'),
        () => console.error('complete'));
  }
}
