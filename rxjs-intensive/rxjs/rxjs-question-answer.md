### RECURSION

- как вызывать рекурсивно  `stream` rxjs ?
    - https://github.com/adelinor/angular-snippets#rxjs-observable-reactive-recursivity
    - use expand with (takeUntil, takeWhile) or some complete method

### RENEW

- как оживить `stream` если вылетела ошибка?

### STOP, CONTINUE

- 1.1. как остановить `stream` пример как loop for `continue` ? но не убивать(complete) сам `stream`
- 1.2. how to stop rxjs chain when condition is not respected, not complete just stop chain ?
    - Instead of returning Observable.of(true), you can return Observable.empty(), which will just complete, without
      emitting any values. Thus following chains won't be executed.

            timer(1000, 1000)
            .pipe(
            switchMap(()=> EMPTY ),
            tap(console.error)// not will be triggered
            )
            .subscribe()

****

            timer(1000, 1000)
            .pipe(
            switchMap(()=> of(undefined) ),
            filter(x=> !!x)
            tap(console.error)// not will be triggered
            )
            .subscribe()

### IF, ELSE

- how to write right if else statement when different logic will not be combined ?
    - https://rangle.io/blog/rxjs-where-is-the-if-else-operator

### RxJS patterns - Conditionally executing work

- 1.1. как остановить `stream` пример как loop for `continue` ? но не убивать(complete) сам `stream`
- 1.2. how to stop rxjs chain when condition is not respected, not complete just stop chain ?
    - https://blog.strongbrew.io/rxjs-patterns-conditionally-executing-work/

### HOW TO CATCH ERROR WIHTOUT COMPLETE `STREAM`

- call catchError function inner Transformation operators

        timer(1000, 1000)
        .pipe(
        switchMap(()=> callSomeController().pipe(catchError(()=> of('sos') ),
        )
        .subscribe()

### RXJS patterns view model

- https://www.youtube.com/watch?app=desktop&v=SXOZaWLs4q0&ab_channel=JoshuaMorony

### Memory leak

- how to detect memory leak?
    - https://www.youtube.com/watch?v=7806msvJ1HE&list=PLFgeB6PIQeuctRVzZP0-gtq69NkuTa5kM&index=3&ab_channel=HolyJS
