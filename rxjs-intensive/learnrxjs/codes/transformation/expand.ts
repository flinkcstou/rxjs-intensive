import { delay, expand, fromEvent, map, mergeMap, of, take } from 'rxjs';
import { partition } from 'rxjs/operators';

export class Expand {
  constructor() {
    this.method1();
  }

  method1() {


    const clicks = fromEvent(document, 'click');
    const powersOfTwo = clicks.pipe(
      map(() => 1),
      mergeMap(() => of(1).pipe(expand(x => of(2 * x).pipe(delay(100))), take(10)))
    );
    powersOfTwo.subscribe(x => console.error(x));


  }
}
