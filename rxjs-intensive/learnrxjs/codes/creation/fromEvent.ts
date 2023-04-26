import { fromEvent, Observable, Observer } from 'rxjs';
import { Event } from '@angular/router';

export class FromEvent {
  constructor() {
    this.method1();
    this.method2();
  }

  method1() {
    const source = fromEvent(document, 'click');
  }

  method2() {
    function delegate(wrapperSelector: any, elementSelector: any, eventName: any) {
      return fromEvent(wrapperSelector, eventName, (event: Event) => true);
    }


    // build your own fromEvent operator
    function delegateCreate(wrapperSelector: any, elementSelector: any, eventName: any) {

      return Observable.create((observer: Observer<any>) => {

        let querySelector = document.querySelector(wrapperSelector);
        const handler = (event: any) => {
          observer.next(event);
        };
        let addEventListener = querySelector.addEventListener(eventName, handler);

        return () => removeEventListener(eventName, handler);
      });
    }
  }
}
