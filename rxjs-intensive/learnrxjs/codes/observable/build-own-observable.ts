import { ObservableTs } from './observable-ts';
import { ObserverTs } from './Observer-ts';

export class BuildOwnObservable {


  constructor() {

    // const asd = new Observable((ob: Observer<any>) => {
    //
    // });
    //
    // asd.subscribe({
    //   next() {
    //     console.error()
    //   }
    // });

    const observable = new ObservableTs((observer: ObserverTs) => {
      console.error('some function');
      observer.next('asdsa');
      return () => console.error('destroy anonymous function');
    });

    observable.subscribe({
      next(value: any) {
        console.error('hahaha', value);
      }
    } as ObserverTs);
  }
}
