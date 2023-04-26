import { every, from, fromEvent, iif, interval, map, mergeMap, of, tap, throttle, throttleTime, timer } from 'rxjs';

export class Iif {

  constructor() {
    this.method1();
  }

  method1() {

    fromEvent(document, 'mousemove')
      .pipe(
        throttleTime(50),
        map((x: any) => x.clientY),
        mergeMap((x) => iif(() => x < 110, of('im saying R!!'), of('Xs always win'))),
        tap(console.error)
      )
      .subscribe();

  }
}
