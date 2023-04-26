import { Single } from './single';
import { Sample } from './sample';
import { Last } from './last';
import { First } from './first';
import { IgnoreElements } from './ignoreElements';
import { Skip } from './skip';
import { Find } from './find';
import { SkipUntil } from './skipUntil';
import { SkipWhile } from './skipWhile';
import { TakeWhile } from './takeWhile';
import { Throttle } from './throttle';
import { Audit } from './audit';
import { Distinct } from './distinct';
import { DistinctUntilKeyChanged } from './distinctUntilKeyChanged';

export class Filtering {

  constructor() {
    // new Single();
    // new Sample();
    // new Last();
    // new First();
    // new IgnoreElements();
    // new Skip()
    // new Find();
    // new SkipUntil();
    // new SkipWhile();
    // new TakeWhile();
    // new Throttle();
    // new Audit();
    // new Distinct();
    new DistinctUntilKeyChanged();
  }

}
