import { Injectable } from '@angular/core';
import { Zone } from 'src/app/model/batiment';
import { UtilsService } from './utils.service';
@Injectable({
  providedIn: 'root'
})
export class ZoneService {

  constructor(private utilsService: UtilsService) { }

  /**
   * Calcul la surface moyenne par logement pour une zone donner
   */
  calculerSurfaceMoyenneParZone(zone: Zone): number {
    this.utilsService.checkParam(zone, 'Nb_logement');
    const surfaceHabitable = this.calculerSurfaceHabitableParZone(zone);
    return this.calculerSurfaceMoyenne(surfaceHabitable, zone?.Nb_logement);
  }

  /**
   * Calcul la surface habitable pour une zone donner
   */
  private calculerSurfaceHabitableParZone(zone: Zone): number {
    this.utilsService.checkParam(zone, 'Ratio_habitable');
    const surfaceUtile = this.calculerSurfaceUtile(zone);
    return this.calculerSurfaceHabitable(surfaceUtile, zone?.Ratio_habitable);
  }

  /**
   * Calcul la somme utile d'une zone
   */
  private calculerSurfaceUtile(zone: Zone): number {
    this.utilsService.checkParam(zone, 'Groupes');
    return (zone?.Groupes || []).reduce((acc, currentGroupe) => acc + currentGroupe?.SURT || 0, 0);
  }

  /**
   * Calcul la surface habitable
   * @param surfaceUtile la surface utile d'une zone, peut être calculer avec {@link calculerSurfaceUtile}
   * @param ratio le ratio habitable pour une zone
   */
  private calculerSurfaceHabitable(surfaceUtile: number, ratio: number): number {
    return surfaceUtile * ratio;
  }

  /**
   * Calcul la surface moyenne par logement
   * @param surfaceHabitable la surface habitable d'une zone, peut être calculer avec {@link calculerSurfaceHabitableParZone}
   */
  private calculerSurfaceMoyenne(surfaceHabitable: number, nombreLogement: number): number {
    return surfaceHabitable / nombreLogement;
  }

}
