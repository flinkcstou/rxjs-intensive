import { ajax } from 'rxjs/ajax';
import { Observable, Observer } from 'rxjs';

export class AjaxTs {

  constructor() {
    this.method1();
    this.method2();
  }

  method2() {
    // build your own ajax operator
    const observable = new Observable(obs => {
      fetch('sdfds').then(x => {
        obs.next(x);
        obs.complete();
      });
    });
  }

  method1() {
    const githubUsers = `https://api.github.com/users?per_page=2`;

    const users = ajax(githubUsers);

    const subscribe = users.subscribe(
      res => console.log(res),
      err => console.error(err),
      () => console.error('complete')
    );

  }
}
