import { from, ignoreElements, skip } from 'rxjs';

export class Skip {

  constructor() {
    this.method1();
  }

  method1() {

    from([1, 2, 3, 4])
      .pipe(
        skip(2)
      )
      .subscribe(
        () => console.error('next'),
        () => console.error('error'),
        () => console.error('complete'));
  }
}
