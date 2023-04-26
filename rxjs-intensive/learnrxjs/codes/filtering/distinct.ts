import { audit, distinct, fromEvent, interval, mapTo, tap } from 'rxjs';

export class Distinct {

  constructor() {
    this.method1();
  }

  method1() {


    fromEvent(document, 'click')
      .pipe(
        distinct(),
        tap((val: any) => {
          console.error('val', val?.clientX);
        })
      )
      .subscribe(() => console.error('sdfsdf'));
  }
}
