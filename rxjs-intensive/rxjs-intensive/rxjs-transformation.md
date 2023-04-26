****

### transformation

****

**switchMap**

- switches from one stream to another
- unsubscribes from previous Observable
- Projects each source value to an Observable which is merged in the output Observable, emitting values only from the
  most recently projected Observable.

- https://drive.google.com/drive/u/0/folders/1Fp_P9Mb6kzwkVKOYgxR9zdusP3WqHle0

**mergeMap**

- Projects each source value to an Observable which is merged in the output Observable.
- https://drive.google.com/drive/u/0/folders/1Fp_P9Mb6kzwkVKOYgxR9zdusP3WqHle0
- https://www.learnrxjs.io/learn-rxjs/operators/transformation/mergemap

**concatMap**

- Projects each source value to an Observable which is merged in the output Observable, in a serialized fashion waiting
  for each one to complete before merging the next.
- https://drive.google.com/drive/u/0/folders/1Fp_P9Mb6kzwkVKOYgxR9zdusP3WqHle0
- https://www.learnrxjs.io/learn-rxjs/operators/transformation/concatmap

**exhaustMap**

- Map to inner observable, ignore other values until that observable completes.
- Projects each source value to an Observable which is merged in the output Observable only if the previous projected
  Observable has completed.

- https://www.learnrxjs.io/learn-rxjs/operators/transformation/exhaustmap
- https://drive.google.com/drive/u/0/folders/1Fp_P9Mb6kzwkVKOYgxR9zdusP3WqHle0

**map**

- Applies a given project function to each value emitted by the source Observable, and emits the resulting values as an
  Observable.

- https://www.learnrxjs.io/learn-rxjs/operators/transformation/map
- https://drive.google.com/drive/u/0/folders/1Fp_P9Mb6kzwkVKOYgxR9zdusP3WqHle0
- https://indepth.dev/reference/rxjs/operators/map

**concatMapTo**

- Subscribe to provided observable when previous completes, emit values.

- https://www.learnrxjs.io/learn-rxjs/operators/transformation/concatmapto
- https://drive.google.com/drive/u/0/folders/1Fp_P9Mb6kzwkVKOYgxR9zdusP3WqHle0

**mapTo**

- Emits the given constant value on the output Observable every time the source Observable emits a value.

- https://www.learnrxjs.io/learn-rxjs/operators/transformation/mapto

**expand**

- Recursively projects each source value to an Observable which is merged in the output Observable.

**toArray**

- Collects all source emissions and emits them as an array when the source completes.

**pluck**

- Select property to emit.
