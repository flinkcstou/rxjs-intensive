import { Observable, Observer, of } from 'rxjs';

export class Timer {
  constructor() {
    this.method1();
  }

  method1() {

    of(1);


    // build your own timer operator
    const observable = new Observable((observer: Observer<any>) => {
      let intervalId = setInterval(() => {
        observer.next(undefined);
      }, 100);

      return () => clearInterval(intervalId);
    });
  }
}
