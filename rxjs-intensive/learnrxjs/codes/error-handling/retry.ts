import { interval, mergeMap, of, retry, throwError } from 'rxjs';

export class Retry {
  constructor() {
    this.method1();
  }

  method1() {

    const source = interval(1000);
    const result = source.pipe(
      mergeMap(val => val > 5 ? throwError(() => 'Error!') : of(val)),
      retry(2) // retry 2 times on error
    );

    result.subscribe({
      next: value => console.log(value),
      error: err => console.log(`${err}: Retried 2 times then quit!`)
    });
  }
}
