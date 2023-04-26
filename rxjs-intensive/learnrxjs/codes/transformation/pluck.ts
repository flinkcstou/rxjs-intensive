import { from, pluck } from 'rxjs';

export class Pluck {
  constructor() {
    this.method1();
  }

  method1() {
    const source = from([
      {name: 'Joe', age: 30, job: {title: 'Developer', language: 'JavaScript'}},
      //will return undefined when no job is found
      {name: 'Sarah', age: 35}
    ]);
//grab title property under job
    const example = source.pipe(pluck('job', 'title'));
//output: "Developer" , undefined
    const subscribe = example.subscribe(val => console.error(val));

  }
}
