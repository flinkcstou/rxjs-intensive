import { ObserverTs } from './Observer-ts';
import { SubscriptionTs } from './subscription-ts';

export class SubscriberTs {

  private closed = false;

  constructor(private observer: ObserverTs,
              private subscription: SubscriptionTs) {

    this.subscription.add(() => this.closed = true);
  }

  next(value: any) {
    if (!this.closed) {
      this.observer.next(value);
    }
  }

  error(value: any) {
    if (!this.closed) {
      this.closed = true;
      this.observer.error(value);
      this.subscription.unsubscribe();
    }
  }

  complete() {
    if (!this.closed) {
      this.closed = true;
      this.observer.complete();
      this.subscription.unsubscribe();
    }
  }

}
