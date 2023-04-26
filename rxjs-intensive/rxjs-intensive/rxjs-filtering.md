**audit** `stream`

- audit is similar to throttle, but emits the last value from the silenced time window, instead of the first value.
- Ignore for time based on provided observable, then emit most recent value
- https://rxjs.dev/api/operators/audit

**auditTime** `stream`

- Ignore for given time then emit most recent value
- When it sees a source value, it ignores that plus the next ones for duration milliseconds, and then it emits the most
  recent value from the source.
- https://www.learnrxjs.io/learn-rxjs/operators/filtering/audittime
- https://indepth.dev/reference/rxjs/operators/audit-time


**find**  `stream` -> `complete`

- Emits only the first value emitted by the source Observable that meets some condition.
- https://rxmarbles.com/#first

**first** `stream` -> `complete`

- Emit the first value or first to pass provided expression
- https://www.learnrxjs.io/learn-rxjs/operators/filtering/first

**ignoreElements** `stream`

- Ignore everything but complete and error.
- https://www.learnrxjs.io/learn-rxjs/operators/filtering/ignoreelements
- https://rxmarbles.com/#ignoreElements

**last** `complete`

- Emit the last value emitted from source on completion, based on provided expression.
- https://www.learnrxjs.io/learn-rxjs/operators/filtering/last
- https://rxmarbles.com/#last

**sample**  `stream`

- Sample from source when provided observable emits.
- https://www.learnrxjs.io/learn-rxjs/operators/filtering/sample
- https://rxmarbles.com/#sample

**single**   `complete`

- Returns an observable that asserts that only one value is emitted from the observable that matches the predicate. If
  no predicate is provided, then it will assert that the observable only emits one value.
- https://www.learnrxjs.io/learn-rxjs/operators/filtering/single

**skip** `stream`

- Skip the provided number of emitted values.
- https://www.learnrxjs.io/learn-rxjs/operators/filtering/skip
- https://rxmarbles.com/#skip

**skipUntil** `stream`

- Skip emitted values from source until provided observable emits.
- https://www.learnrxjs.io/learn-rxjs/operators/filtering/skipuntil
- https://rxmarbles.com/#skipUntil

**SkipWhile** `stream`

- Skip emitted values from source until provided expression is false.
- https://www.learnrxjs.io/learn-rxjs/operators/filtering/skipwhile
- https://rxmarbles.com/#skipWhile

**take** `stream` -> `complete`

- Emit provided number of values before completing.
- https://www.learnrxjs.io/learn-rxjs/operators/filtering/take
- https://rxmarbles.com/#take
- https://blog.strongbrew.io/build-the-operators-from-rxjs-from-scratch/?lectureId=take#app

**takeUntil** `stream` -> `complete`

- Emit values until provided observable emits.
- https://www.learnrxjs.io/learn-rxjs/operators/filtering/takeuntil
- https://rxmarbles.com/#takeUntil

**takeWhile** `stream` -> `complete`

- Emits values emitted by the source Observable so long as each value satisfies the given predicate, and then completes
  as soon as this predicate is not satisfied.
- https://www.learnrxjs.io/learn-rxjs/operators/filtering/takewhile
- https://rxmarbles.com/#takeWhile
- https://indepth.dev/reference/rxjs/operators/take-while

**throttle** `stream`

- Emits a value from the source Observable, then ignores subsequent source values for a duration determined by another
  Observable, then repeats this process.
- It's like throttleTime, but the silencing duration is determined by a second Observable.
- https://www.learnrxjs.io/learn-rxjs/operators/filtering/throttle
- https://rxmarbles.com/#throttle

**throttleTime** `stream`

- Emit first value then ignore for specified duration
- https://www.learnrxjs.io/learn-rxjs/operators/filtering/throttletime
- https://rxmarbles.com/#throttleTime


