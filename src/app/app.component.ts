import { Component } from '@angular/core';
import { Creation } from '../../rxjs-intensive/learnrxjs/codes/creation/creation';
import { Combination } from '../../rxjs-intensive/learnrxjs/codes/combination/combination';
import { Transformation } from '../../rxjs-intensive/learnrxjs/codes/transformation/transformation';
import { Filtering } from '../../rxjs-intensive/learnrxjs/codes/filtering/filtering';

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
  filtering = new Filtering();
}
