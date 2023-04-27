export class Observable {
  initFunc: (observer: any) => any;

  constructor(initFunc: (observer: any) => any) {
    this.initFunc = initFunc;
  }

  subscribe(observer: any) {
    return this.initFunc(observer);
  }
}
