import { Injectable } from '@angular/core';
import * as rset from '../../data/rset.json';
import { Batiment } from 'src/app/model/batiment';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BatimentHttpService {

  constructor() { }

  public getBatiments(): Observable<Batiment[]> {
    return of(rset.Batiments);
  }
}
