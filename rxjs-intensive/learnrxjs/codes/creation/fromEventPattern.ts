import { fromEventPattern } from 'rxjs';

export class FromEventPattern {
  constructor() {
    this.method1();
  }

  method1() {

    /*
    addHandler	(handler: NodeEventHandler) => any
    removeHandler	(handler: NodeEventHandler, signal?: any) => void
    * */

    // it's like bindCallback

    function addClickHandler(handler: any) {
      document.addEventListener('click', handler);
    }


    function removeClickHandler(handler: any) {
      document.removeEventListener('click', handler);
    }

    fromEventPattern(addClickHandler, removeClickHandler);


  }
}
