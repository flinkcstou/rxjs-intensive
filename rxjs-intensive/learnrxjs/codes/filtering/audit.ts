import { audit, fromEvent, interval, tap } from 'rxjs';

export class Audit {

  constructor() {
    this.method1();
  }

  method1() {


    fromEvent(document, 'click')
      .pipe(
        audit((val: any) => {
          console.error('val', val.clientX);
          return interval(1000);
        }),
        tap((val: any) => {
          console.error('val', val.clientX);
        })
      )
      .subscribe();
  }
}
