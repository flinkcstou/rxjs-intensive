import { interval, map, race } from 'rxjs';

export class Race {
  constructor() {
    this.method1();
  }

  method1() {
    const obs1 = interval(7000).pipe(map(() => 'slow one'));
    const obs2 = interval(3000).pipe(map(() => 'fast one'));
    const obs3 = interval(5000).pipe(map(() => 'medium one'));

    race(obs1, obs2, obs3)
      .subscribe(winner => console.error(winner));
  }
}
