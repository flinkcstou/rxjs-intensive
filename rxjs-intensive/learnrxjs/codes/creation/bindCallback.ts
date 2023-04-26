import { bindCallback } from 'rxjs';

export class BindCallback {
  constructor() {
    this.method1();
    // this.method2();

    this.method3();
  }

  method3() {

    function listen(eventName: string, handler: () => void) {
      document.addEventListener(eventName, handler);
    }


    const resultSelector: (event: Event) => Event = (event) => event;
    let observable = bindCallback(listen, resultSelector)('click');
    observable.subscribe(console.error);


  }

  method2() {
    function asd(callback: (a: any) => void) {
      const id = setInterval(() => {
        console.error('setInterval');
        callback('a');
      }, 100);
      return () => clearInterval(id);
    }


    let bindCallback1 = bindCallback(asd);
    let sdf = bindCallback1().subscribe(console.error);
    sdf.unsubscribe();
  }

  method1() {
    // lets learn how to work in deep


    function asd(callback: (a: any) => void): any {
      callback('some value');
    }


    let bindCallback1 = bindCallback(asd);
    bindCallback1().subscribe(console.error);

  }
}
