import { from, ignoreElements } from 'rxjs';

export class IgnoreElements {

  constructor() {
    this.method1();
  }

  method1() {

    from([1, 2, 3, 4])
      .pipe(
        ignoreElements()
      )
      .subscribe(
        () => console.error('next'),
        () => console.error('error'),
        () => console.error('complete'));
  }
}
