import { fromEvent, interval, tap, throttle } from 'rxjs';

export class Throttle {

  constructor() {
    this.method1();
  }

  method1() {


    fromEvent(document, 'click')
      .pipe(
        throttle((val: any) => {
          console.error('val', val.clientX);

          return interval(1000).pipe(tap(console.error));
        }),
        tap((val: any) => {
          console.error('val', val.clientX);
        })
      )
      .subscribe();
  }
}
