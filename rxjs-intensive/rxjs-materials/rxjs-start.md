### Categories of operators

- **Creation**
    - from, of, fromEvent, fromEventPattern, bindCallback, bindNodeCallback, range, generate, throwError, empty, defer,
      interval, timer, create, ajax, iif
- **Join Creation Operators**
    - combineLatest, concat, forkJoin, merge, partition, race, zip
- **Join Operators**
    - startWith, endWith, withLatestFrom, combineLatestAll, concatAll, exhaustAll, mergeAll, switchAll
- **Combination**
    - combineLatest, concat, forkJoin, merge, partition, race, zip startWith, endWith, withLatestFrom, combineLatestAll,
      concatAll, exhaustAll, mergeAll, switchAll
- **Transformation**
    - buffer, bufferCount, bufferTime, bufferToggle, bufferWhen, concatMap, concatMapTo, exhaust, exhaustMap, expand,
      groupBy, map, mapTo, mergeMap, mergeMapTo, mergeScan, pairwise, partition, pluck, scan, switchScan, switchMap,
      switchMapTo, window, windowCount, windowTime, windowToggle, windowWhen
- **Filtering**
    - audit, auditTime, debounce, debounceTime, distinct, distinctUntilChanged, distinctUntilKeyChanged, elementAt,
      filter, first, ignoreElements, last, sample, sampleTime, single, skip, skipLast, skipUntil, skipWhile, take,
      takeLast, takeUntil, takeWhile, throttle, throttleTime
- **Multicasting**
    - multicast, publish, publishBehavior, publishLast, publishReplay, share
- **Error Handling**
    - catchError, retry, retryWhen
- **Utility**
    - tap, delay, delayWhen, dematerialize, materialize, observeOn, subscribeOn, timeInterval, timestamp, timeout,
      timeoutWith, toArray
- **Conditional and Boolean**
    - defaultIfEmpty, every, find, findIndex, isEmpty, sequenceEqual
- **Mathematical and Aggregate**
    - count, max, min, reduce
- **Subjects**
    - AsyncSubject, BehaviorSubject, ReplaySubject, Subject

### Materials

- https://www.learnrxjs.io/
- https://rxjs.dev/
- https://indepth.dev/reference/rxjs/operators
- rxjs-intensive project https://github.com/flinkcstou/rxjs-intensive
- https://www.javatpoint.com/rxjs

**before start check**

- https://https://www.learnrxjs.io/
- https://rxjs.dev/
- https://angular.io/guide/observables // todo nabu repeat
- https://www.youtube.com/watch?v=PXoWHqKtHGA&ab_channel=%D0%90%D1%80%D1%85%D0%B8%D1%82%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%9F%D0%9E.%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%96%D0%B5%D0%BB%D0%BD%D0%B8%D0%BD
- https://www.youtube.com/watch?v=gCwSVQO_PtY&ab_channel=%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BB%D0%B5%D0%BD%D0%9C%D0%B8%D0%BD%D0%B8%D0%BD
- https://www.youtube.com/watch?v=my6-qDYSk7E&list=PLFgeB6PIQeuctRVzZP0-gtq69NkuTa5kM&index=2
- https://www.youtube.com/watch?app=desktop&v=D8pdP2YjiFw&ab_channel=IBSTrainingCenter
- https://habr.com/ru/articles/462355/
- https://www.slideshare.net/InfoQ/asynchronous-programming-at-netflix

**good playlist to learn**

- https://www.youtube.com/playlist?list=PLQpZdy2HZ5BSoscdPXPHug8h8XqVP8ojs

**rxjs-intensive playlist**

- https://www.youtube.com/playlist?list=PLJXGSlYs-kTTYxJqljRZJ1zqwwKdLTzhV

**good tools**

- https://rxjs.dev/operator-decision-tree
- https://rxmarbles.com/

**books**

- https://drive.google.com/drive/u/0/folders/1Fp_P9Mb6kzwkVKOYgxR9zdusP3WqHle0

**hot and cold observable**

- https://habr.com/ru/companies/tinkoff/articles/729808/

**OBSERVABLES, OBSERVERS & SUBSCRIPTIONS**

- [observables, observers & subscriptions](./rxjs-observable.md)

**Advantages and disadvantages**

- [Advantages and disadvantages](./rxjs-advantages-disantvantages.md)

**build your own observable**

- https://dev.to/mr_bertoli/rxjs-from-scratch-observables-hl6
- https://www.youtube.com/watch?app=desktop&v=PF3mFOZn3MQ&ab_channel=JoshuaMorony
- https://medium.com/angular-in-depth/learning-observables-part-1-arrays-14480816eb61
- https://medium.com/angular-in-depth/build-your-own-observable-part-1-containers-and-more-intuition-4210e8c28b4f
- https://medium.com/angular-in-depth/building-your-own-observable-part-3-the-observer-pattern-and-creational-methods-334eeffb67f0
- https://medium.com/angular-in-depth/build-your-own-observable-part-4-map-filter-take-and-all-that-jazz-40388e2ab2b3
- [build your own observable](./rxjs-intensive/learnrxjs/codes/observable/observable-ts.ts)

**build your own pipeable**

- https://dev.to/mr_bertoli/rxjs-from-scratch-observables-hl6
- https://dev.to/mr_bertoli/rxjs-from-scratch-pipeable-operators-1g18

**building your own custom pipeable operators**

- https://github.com/nathan-lapinski/build-your-own-observable/blob/master/solutions/src/internal/Observable.ts

**recipes**

- https://www.learnrxjs.io/learn-rxjs/recipes/

