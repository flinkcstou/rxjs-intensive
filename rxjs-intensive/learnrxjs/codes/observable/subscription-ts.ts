export class SubscriptionTs {
  private tearDowns: any[] = [];

  constructor() {
  }

  add(tearDown: () => any) {
    this.tearDowns.push(tearDown);
  }

  unsubscribe() {
    this.tearDowns.forEach(tearDown => tearDown());
    this.tearDowns = [];
  }


}
