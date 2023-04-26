import { audit, fromEvent, interval } from 'rxjs';

export class Audit {
  constructor() {
    this.method1();
  }

  method1() {

    const clicks = fromEvent(document, 'click');
    const result = clicks.pipe(audit(ev => interval(1000)));
    result.subscribe(x => console.log(x));
  }
}
