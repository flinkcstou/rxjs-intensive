****

### Combination or join

****

**merge** #cold

> Creates an output Observable which concurrently emits all values from every given input Observable.
> It interleaves the values of the input streams

- https://www.learnrxjs.io/learn-rxjs/operators/combination/merge
- https://rxmarbles.com/#merge
- https://reactive.how/combinelatest
- https://drive.google.com/drive/u/0/folders/1Fp_P9Mb6kzwkVKOYgxR9zdusP3WqHle0

**concat** #hot

> if any observable does not complete, subsequent are never subscribed to

- https://www.learnrxjs.io/learn-rxjs/operators/combination/concat
- https://www.youtube.com/watch?v=Svs5SafLBBI&list=PLQpZdy2HZ5BSoscdPXPHug8h8XqVP8ojs&index=16&ab_channel=Briebug
- https://rxmarbles.com/#concat
- https://drive.google.com/drive/u/0/folders/1Fp_P9Mb6kzwkVKOYgxR9zdusP3WqHle0

**combineLatest** #cold

> will not emit an initial value until each observable emits at least one value

- https://www.learnrxjs.io/learn-rxjs/operators/combination/combinelatest
- https://rxmarbles.com/#combineLatest
- https://www.digitalocean.com/community/tutorials/rxjs-operators-forkjoin-zip-combinelatest-withlatestfrom
- https://reactive.how/combinelatest

**zip** #cold
> Combines multiple Observables to create an Observable whose values are calculated from the values, in order, of each
> of its input Observables.

- https://www.learnrxjs.io/learn-rxjs/operators/combination/zip
- https://rxmarbles.com/#zip
- https://www.digitalocean.com/community/tutorials/rxjs-operators-forkjoin-zip-combinelatest-withlatestfrom
- https://reactive.how/zip

**partition** #cold

> Splits the source Observable into two, one with values that satisfy a predicate, and another with values that don't
> satisfy the predicate.

- https://rxjs.dev/api/index/function/partition

**race** #cold

> Returns an observable that mirrors the first source observable to emit an item.

- https://www.learnrxjs.io/learn-rxjs/operators/combination/race
- https://rxmarbles.com/#race

**forkJoin** #hot

> joins final value from each observable when they complete
>
> if any input observable never completes, forkJoin never completes

- https://www.learnrxjs.io/learn-rxjs/operators/combination/forkjoin
- https://rxjs.dev/
- https://www.youtube.com/watch?v=DdDfPCTUGag&list=PLQpZdy2HZ5BSoscdPXPHug8h8XqVP8ojs&index=16&ab_channel=Briebug
- https://www.digitalocean.com/community/tutorials/rxjs-operators-forkjoin-zip-combinelatest-withlatestfrom

**startWith** #hot

> Emits specified value or values into the stream first
> If you want to start with a value instead, check out startWith!

- https://www.learnrxjs.io/learn-rxjs/operators/combination/startwith
- https://www.youtube.com/watch?v=u49INmYzYdQ&list=PLQpZdy2HZ5BSoscdPXPHug8h8XqVP8ojs&index=12&t=24s&ab_channel=Briebug
- https://rxmarbles.com/#startWith

**endWith**

> Returns an observable that will emit all values from the source, then synchronously emit the provided value(s)
> immediately after the source completes.

- https://www.learnrxjs.io/learn-rxjs/operators/combination/endwith

**withLatestFrom** #colds

- https://www.learnrxjs.io/learn-rxjs/operators/combination/withlatestfrom
- https://rxjs.dev/api/operators/withLatestFrom
- https://www.digitalocean.com/community/tutorials/rxjs-operators-forkjoin-zip-combinelatest-withlatestfrom
- https://rxmarbles.com/#withLatestFrom
