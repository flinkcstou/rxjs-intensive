import { EMPTY, empty, interval, mergeMap, Observable, Observer, of, startWith } from 'rxjs';

export class Empty {
  constructor() {
    // this.method1();
    // this.method2();
    this.method3();
  }

  method3() {
    const interval$ = interval(1000);
    const result = interval$.pipe(
      mergeMap(x => x % 2 === 1 ? of('a', 'b', 'c') : EMPTY),
    );
    result.subscribe(x => console.log(x));
  }

  method2() {


    of(undefined).subscribe(
      {
        next() {
          console.error('next');
        },
        complete() {
          console.error('complete');
        }
      }
    );


    // build your own empty operator
    const observable = new Observable((observer: Observer<any>) => observer.complete());


    const result = EMPTY.pipe(startWith(7));
    result.subscribe(x => console.log(x));
  }

  method1() {
    const subscribe = empty().subscribe({
      next: () => console.log('Next'),
      complete: () => console.log('Complete!')
    });
  }
}
