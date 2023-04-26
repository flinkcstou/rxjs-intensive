import { interval, merge, take } from 'rxjs';

export class Merge {
  constructor() {
    this.method1();
  }

  method1() {
    const timer1 = interval(1000).pipe(take(10));
    const timer2 = interval(2000).pipe(take(6));
    const timer3 = interval(500).pipe(take(10));

    const merged = merge(timer1, timer2, timer3);
    merged.subscribe(x => console.error(x));

// Results in the following:
// - First timer1 and timer2 will run concurrently
// - timer1 will emit a value every 1000ms for 10 iterations
// - timer2 will emit a value every 2000ms for 6 iterations
// - after timer1 hits its max iteration, timer2 will
//   continue, and timer3 will start to run concurrently with timer2
// - when timer2 hits its max iteration it terminates, and
//   timer3 will continue to emit a value every 500ms until it is complete
  }
}
