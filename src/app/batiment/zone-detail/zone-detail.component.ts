import { Component, Input } from '@angular/core';
import * as R from 'ramda';
import { Zone } from 'src/app/model';
import { ZoneService } from 'src/app/services';

@Component({
  selector: 'app-zone-detail',
  templateUrl: './zone-detail.component.html',
  styleUrls: ['./zone-detail.component.scss']
})
export class ZoneDetailComponent {
  surfaceMoyenne: number;
  private _zone: Zone;

  @Input() set zone(value: Zone) {
    if (value) {
      this._zone = R.clone(value);
      this.recalculerZoneDetail();
    }
  }

  get zone() {
    return this._zone;
  }

  constructor(private zoneService: ZoneService) { }

  private recalculerZoneDetail() {
    const zone = R.clone(this.zone);
    this.surfaceMoyenne = this.zoneService.calculerSurfaceMoyenneParZone(zone);
  }

}
