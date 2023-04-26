import { distinctUntilKeyChanged, fromEvent, pluck } from 'rxjs';

export class DistinctUntilKeyChanged {

  constructor() {
    this.method1();
  }

  method1() {


    const keys$ = fromEvent(document, 'keyup').pipe(
      distinctUntilKeyChanged('code' as any),
      pluck('key')
    );

    keys$.subscribe(console.log);
  }
}
