import { fromEvent, Observable, Observer } from 'rxjs';
import { Event } from '@angular/router';

export class Create {
  constructor() {
    // this.method1();
    // this.method2();
    this.method3();
  }

  method3() {

    function delegate(wrapperSelector: any, elementSelector: any, eventName: any) {
      return fromEvent(wrapperSelector, eventName, (event: Event) => true);
    }

    function delegateCreate(wrapperSelector: any, elementSelector: any, eventName: any) {

      Observable.create((observer: Observer<any>) => {

        let querySelector = document.querySelector(wrapperSelector);
        const handler = (event: any) => {
          observer.next(event);
        };
        let addEventListener = querySelector.addEventListener(eventName, handler);

        return () => removeEventListener(eventName, handler);
      });
    }

  }

  method1() {
    const hello = Observable.create(function(observer: Observer<any>) {
      observer.next('Hello');
      observer.next('World');
      observer.complete();
    });
    const subscribe = hello.subscribe((val: any) => console.log(val));

  }

  method2() {
    const observable = Observable.create((observer: Observer<any>) => {
      observer.error('something went really wrong...');
    });

    observable.subscribe(
      (value: any) => console.log(value), // will never be called
      (err: any) => console.error(err),
      () => console.log('complete') // will never be called
    );
  }
}
