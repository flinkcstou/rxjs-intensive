**defaultIfEmpty**  `complete`

- Emit given value if nothing is emitted before completion.
- https://www.learnrxjs.io/learn-rxjs/operators/conditional/defaultifempty
- https://rxmarbles.com/#defaultIfEmpty

**every** `complete`

- If all values pass predicate before completion emit true, else false.
- https://www.learnrxjs.io/learn-rxjs/operators/conditional/every
- https://rxmarbles.com/#every

**isEmpty**  `stream` -> `complete`

- Emits false if the input Observable emits any values, or emits true if the input Observable completes without emitting
  any values.
- https://rxjs.dev/api/operators/isEmpty

**sequenceEqual** `complete`

- Compares emitted sequence to expected sequence for match
- https://www.learnrxjs.io/learn-rxjs/operators/conditional/sequenceequal
- https://rxmarbles.com/#sequenceEqual

**iif** `complete`

- Subscribe to first or second observable based on a condition
- https://www.learnrxjs.io/learn-rxjs/operators/conditional/iif
 
