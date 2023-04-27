import { ObserverTs } from './Observer-ts';
import { SubscriberTs } from './subscriber-ts';
import { SubscriptionTs } from './subscription-ts';

export class ObservableTs {
  private _subscribe: (observer: any) => any;

  constructor(initFunc: (observer: ObserverTs) => () => void) {
    this._subscribe = initFunc;
  }

  subscribe(observer: ObserverTs): SubscriptionTs {

    const subscription = new SubscriptionTs();
    const subscriber = new SubscriberTs(observer, subscription);

    const tearDown = this._subscribe(subscriber);

    subscription.add(tearDown);
    return subscription;

  }
}
