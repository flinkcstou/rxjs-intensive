import { Component } from '@angular/core';
import { Creation } from 'rxjs-intensive/learnrxjs/codes/creation/creation';
import { Conditional } from '../../rxjs-intensive/learnrxjs/codes/conditional/conditional';
import { BuildOwnObservable } from '../../rxjs-intensive/learnrxjs/codes/observable/build-own-observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rxjs-intensive';
  // creation = new Creation();
  // combination = new Combination();
  // transformation = new Transformation();
  // filtering = new Filtering();
  // multicasting = new Multicasting();
  // errorHandling = new ErrorHandling();
  // utility = new Utility();
  // conditional = new Conditional();
  // mathematical = new Mathematical();
  // subjects = new Subjects();
  buildOwnObservable = new BuildOwnObservable();

}
