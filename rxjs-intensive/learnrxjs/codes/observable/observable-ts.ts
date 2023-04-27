import { ObserverTs } from './Observer-ts';
import { SubscriberTs } from './subscriber-ts';
import { SubscriptionTs } from './subscription-ts';

export class ObservableTs {
  initFunc: (observer: any) => any;

  constructor(initFunc: (observer: ObserverTs) => () => void) {
    this.initFunc = initFunc;
  }

  subscribe(observer: ObserverTs): SubscriptionTs {

    const subscription = new SubscriptionTs();
    const subscriber = new SubscriberTs(observer, subscription);

    const tearDown = this.initFunc(subscriber);

    subscription.add(tearDown);
    return subscription;

  }
}
