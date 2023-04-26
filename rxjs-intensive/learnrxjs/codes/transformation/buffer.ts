import { buffer, bufferCount, filter, fromEvent, interval, map, mergeMap, of, tap, throttleTime } from 'rxjs';

export class Buffer {
  constructor() {
    // this.method1();
    // this.method2();
    // this.method3();
    this.method4();
  }

  method4() {
    const fakeKeyPressesPost = (keypresses: any) =>
      of(201).pipe(
        tap(_ => {
          console.log(`received key presses are: ${keypresses}`);
          // @ts-ignore
          document.getElementById('output').innerText = keypresses;
        })
      );

    fromEvent(document, 'keydown')
      .pipe(
        map((e: any) => e.key),
        bufferCount(5),
        mergeMap(fakeKeyPressesPost)
      )
      .subscribe();
  }

  method3() {
    const clicks = fromEvent(document, 'click');
    const intervalEvents = interval(1000);
    const buffered = intervalEvents.pipe(buffer(clicks));
    buffered.subscribe(x => console.log(x));
  }

  method2() {
    // streams
    const clicks$ = fromEvent(document, 'click');

    /*
    Collect clicks that occur, after 250ms emit array of clicks
    */
    clicks$
      .pipe(
        buffer(clicks$.pipe(throttleTime(250))),
        // if array is greater than 1, double click occured
        filter(clickArray => clickArray.length > 1)
      )
      .subscribe(() => console.error('Double Click!'));
  }

  method1() {


    const observable = interval(10000);
    const observable1 = interval(100);

    observable1.pipe(buffer(observable))
      .subscribe(console.error);
  }
}
