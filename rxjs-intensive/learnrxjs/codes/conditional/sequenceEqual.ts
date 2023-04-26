import { bufferCount, from, fromEvent, map, mergeMap, of, sequenceEqual, tap } from 'rxjs';

export class SequenceEqual {

  constructor() {
    // this.method1();
    this.method2();
  }

  method2() {

    fromEvent(document, 'keydown')
      .pipe(
        map((x: any) => x.key as any),
        bufferCount(6),
        mergeMap((x) => from(x).pipe(sequenceEqual(from(['q', 'w', 'e', 'r', 't', 'y'])))),
        tap(console.error)
      )
      .subscribe();
  }

  method1() {

    const expectedSequence = from([1, 2, 3]);

    const o$ = of([1, 2, 3], [4, 5, 6], [7, 8, 9]);

    o$
      .pipe(
        mergeMap(x => from(x).pipe(sequenceEqual(expectedSequence))),
        tap(console.error)
      )
      .subscribe();


  }
}
