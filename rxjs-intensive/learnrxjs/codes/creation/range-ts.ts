import { Observable, range } from 'rxjs';

export class RangeTs {
  constructor() {
    // this.method1();
    this.method2();
  }

  method2() {

    // build your own range operator
    function rangeC(start: number, count: number) {
      return new Observable(obs => {

        const a = new Array(count).fill(0);
        a.forEach((item, index) => {
          obs.next(start + index);
        });
        obs.complete();


      });

    }

    rangeC(5, 10).subscribe(console.error);

  }

  method1() {


    const source = range(5, 10);

    source.subscribe(console.error);
  }
}
