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
  nbLogement: number;
  ratioHabitable: number;
  surfaceMoyenne: number;
  nombreDoccupant: number;
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

  onNbLogementChange(newValue: number) {
    this.nbLogement = newValue;
    this.recalculerZoneDetail();
  }

  clearNbLogement() {
    this.nbLogement = undefined;
    this.recalculerZoneDetail();
  }

  onRatioHabitableChange(newValue: number) {
    this.ratioHabitable = newValue;
    this.recalculerZoneDetail();
  }

  private recalculerZoneDetail() {
    const zone = R.clone(this.zone);
    zone.Nb_logement = this.nbLogement || zone.Nb_logement;
    zone.Ratio_habitable = this.ratioHabitable || zone.Ratio_habitable;
    this.surfaceMoyenne = this.zoneService.calculerSurfaceMoyenneParZone(zone);
    this.nombreDoccupant = this.zoneService.calculerNombreOccupantParZone(zone);
  }

  clearRatioHabitable() {
    this.ratioHabitable = undefined;
    this.recalculerZoneDetail();
  }
}
