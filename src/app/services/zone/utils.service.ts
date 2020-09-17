import { Injectable } from '@angular/core';
import * as R from 'ramda';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  /**
   * Permet de Verifier si les champs utiliser dans une methode sont defini
   * Renvoie un erreur lors du premier error trouvé
   * @param param l'objet param qui contient les champs a verifier
   * @param fieldsToCheck les champs a verifier
   */
  checkParam(param: any, fieldsToCheck?: string | string[]) {
    fieldsToCheck = !Array.isArray(fieldsToCheck) ? [fieldsToCheck] : fieldsToCheck;
    fieldsToCheck.forEach(field => {
      if (!param[field]) {
        throw new Error(`${field} is not defined in the param = ${JSON.stringify(param)}`);
      }
    });
  }

}
