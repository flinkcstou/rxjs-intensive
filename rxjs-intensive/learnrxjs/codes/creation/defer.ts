import { defer, merge, Observable, Observer, of, switchMap, timer } from 'rxjs';

export class Defer {
  constructor() {
    this.method1();
    this.method2();
  }

  method2() {
    const s1 = of(new Date()); //will capture current date time
    const s2 = defer(() => of(new Date())); //will capture date time at the moment of subscription

    console.log(new Date());

    timer(2000)
      .pipe(switchMap(_ => merge(s1, s2)))
      .subscribe(
        (valu) => console.log('asd', valu),
        () => console.log('error'),
        () => console.log('done'));
  }

  method1() {

    defer(() => of(new Date()));

    of(new Date)
      .pipe(
        switchMap(() => of(new Date()))
      );


    function ofC(value: any) {
      const observable = new Observable((observer: Observer<any>) => {
        observer.next(value);
        observer.complete;
      });
      return observable;
    }

    // build your own defer operator
    function deferC(val: () => Observable<any>) {
      const observable = new Observable((observer: Observer<any>) => {
        // innerFrom(val()).subscribe(observer)
      });
      return observable;
    }

    function deferC2(obser: () => Observable<any>) {
      of(undefined)
        .pipe(
          switchMap(() => obser())
        );
    }

    ofC('sdf').subscribe(console.error);

  }
}
