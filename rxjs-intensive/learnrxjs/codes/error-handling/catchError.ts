import { catchError, fromEvent, of, retry, switchMap, tap, throwError } from 'rxjs';

export class CatchError {

  constructor() {
    this.method1();
  }

  method1() {


    const fakeRequest$ = of().pipe(
      tap(_ => console.log('fakeRequest')),
      throwError
    );

    const iWillContinueListening$ = fromEvent(document, 'click'
    ).pipe(
      switchMap(_ => fakeRequest$.pipe(catchError(_ => of('keep on clicking!!!'))))
    );

    const iWillStopListening$ = fromEvent(document,
      'click'
    ).pipe(
      switchMap(_ => fakeRequest$),
      catchError(_ => of('no more requests!!!')),
    );

    iWillContinueListening$.subscribe(console.log);
    iWillStopListening$.subscribe(console.log);
  }

}
