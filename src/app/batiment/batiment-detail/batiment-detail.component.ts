import { Component, Input } from '@angular/core';
import * as R from 'ramda';
import { Batiment } from 'src/app/model';

@Component({
  selector: 'app-batiment-detail',
  templateUrl: './batiment-detail.component.html',
  styleUrls: ['./batiment-detail.component.scss']
})
export class BatimentDetailComponent {

  private _batiment: Batiment;
  @Input() set batiment(value: Batiment) {
    if (value) {
      this._batiment = R.clone(value);
    }
  }
  get batiment(): Batiment {
    return this._batiment;
  }

}
