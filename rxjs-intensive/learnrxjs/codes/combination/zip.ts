import { BehaviorSubject, interval, of, Subject, take, zip } from 'rxjs';

export class Zip {

  constructor() {
    this.method1();
  }

  method1() {


    const subject = new BehaviorSubject(1);
    const subject1 = new BehaviorSubject(1);
    const subject2 = new BehaviorSubject(1);

    interval(100).pipe(take(5)).subscribe(() => {
      subject.next(subject.value+1);
      console.error(subject.value)
    });
    interval(200).pipe(take(10)).subscribe(() => {
      subject1.next(subject1.value+1);
      console.error(subject1.value)
    });
    interval(300).pipe(take(10)).subscribe(() => {
      subject2.next(subject2.value+1);
      console.error(subject2.value)
    });

    zip(subject.asObservable(), subject1.asObservable(), subject2.asObservable())
      .subscribe(console.error);


  }
}
