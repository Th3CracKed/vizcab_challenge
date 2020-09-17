import { TestBed } from '@angular/core/testing';

import { ZoneService } from './zone.service';
import { Zone } from 'src/app/model';

describe('ZoneService calculerSurfaceMoyenneParZone', () => {
  let zoneService: ZoneService;
  let zone: Zone;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    zoneService = TestBed.inject(ZoneService);
    zone = {
      Index: 1, Nom: 'Zone 1', Nb_logement: 4, Ratio_habitable: 0.7, Groupes: [{
        Index: 1,
        Nom: 'Groupe1',
        SURT: 330
      },
      {
        Index: 2,
        Nom: 'Groupe2',
        SURT: 240
      }]
    };
  });

  it('should be created', () => {
    expect(zoneService).toBeTruthy();
  });

  it('should calculate correctly la surface moyenne par zone', () => {
    const result = zoneService.calculerSurfaceMoyenneParZone(zone);
    expect(result).toBeCloseTo(99.75);
  });

  it('should throw an error if Nb_logement is not provided', () => {
    zone.Nb_logement = undefined;
    expect(() => zoneService.calculerSurfaceMoyenneParZone(zone))
      .toThrowError(`Nb_logement is not defined in the param = ${JSON.stringify(zone)}`);
  });

  it('should throw an error if Groupes is not provided', () => {
    zone.Groupes = undefined;
    expect(() => zoneService.calculerSurfaceMoyenneParZone(zone))
      .toThrowError(`Groupes is not defined in the param = ${JSON.stringify(zone)}`);
  });

  it('should throw an error if Ratio_habitable is not provided', () => {
    zone.Ratio_habitable = undefined;
    expect(() => zoneService.calculerSurfaceMoyenneParZone(zone))
      .toThrowError(`Ratio_habitable is not defined in the param = ${JSON.stringify(zone)}`);
  });
});

describe('ZoneService calculerSurfaceUtile', () => {
  let zoneService: ZoneService;
  let zone: Zone;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    zoneService = TestBed.inject(ZoneService);
    zone = {
      Index: 1, Nom: 'Zone 1', Nb_logement: 4, Ratio_habitable: 0.7, Groupes: [{
        Index: 1,
        Nom: 'Groupe1',
        SURT: 330
      },
      {
        Index: 2,
        Nom: 'Groupe2',
        SURT: 240
      }]
    };
  });

  it('should be created', () => {
    expect(zoneService).toBeTruthy();
  });

  it('should calculate correctly la surface utile', () => {
    const result = (zoneService as any).calculerSurfaceUtile(zone);
    expect(result).toBe(570);
  });

  it('should throw an error if Groupes is not provided', () => {
    zone.Groupes = undefined;
    expect(() => (zoneService as any).calculerSurfaceUtile(zone))
      .toThrowError(`Groupes is not defined in the param = ${JSON.stringify(zone)}`);
  });

});


describe('ZoneService calculerSurfaceHabitable', () => {
  let zoneService: ZoneService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    zoneService = TestBed.inject(ZoneService);
  });

  it('should be created', () => {
    expect(zoneService).toBeTruthy();
  });

  it('should calculate correctly la surface habitable par zone', () => {
    const surfaceUtile = 10;
    const ratio = 0.7;
    const result = (zoneService as any).calculerSurfaceHabitable(surfaceUtile, ratio);
    expect(result).toBe(7);
  });

});

describe('ZoneService calculerSurfaceHabitableParZone', () => {
  let zoneService: ZoneService;
  let zone: Zone;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    zoneService = TestBed.inject(ZoneService);
    zone = {
      Index: 1, Nom: 'Zone 1', Nb_logement: 4, Ratio_habitable: 0.7, Groupes: [{
        Index: 1,
        Nom: 'Groupe1',
        SURT: 330
      },
      {
        Index: 2,
        Nom: 'Groupe2',
        SURT: 240
      }]
    };
  });

  it('should be created', () => {
    expect(zoneService).toBeTruthy();
  });

  it('should calculate correctly la surface habitable par zone', () => {
    const result = (zoneService as any).calculerSurfaceHabitableParZone(zone);
    expect(result).toBe(399);
  });

  it('should throw an error if Groupes is not provided', () => {
    zone.Groupes = undefined;
    expect(() => (zoneService as any).calculerSurfaceHabitableParZone(zone))
      .toThrowError(`Groupes is not defined in the param = ${JSON.stringify(zone)}`);
  });

  it('should throw an error if Ratio_habitable is not provided', () => {
    zone.Ratio_habitable = undefined;
    expect(() => (zoneService as any).calculerSurfaceHabitableParZone(zone))
      .toThrowError(`Ratio_habitable is not defined in the param = ${JSON.stringify(zone)}`);
  });
});

describe('ZoneService calculerSurfaceMoyenne', () => {
  let zoneService: ZoneService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    zoneService = TestBed.inject(ZoneService);
  });

  it('should be created', () => {
    expect(zoneService).toBeTruthy();
  });

  it('should calculate correctly la surface moyenne', () => {
    const surfaceHabitable = 399;
    const nombreLogement = 4;
    const result = (zoneService as any).calculerSurfaceMoyenne(surfaceHabitable, nombreLogement);
    expect(result).toBe(99.75);
  });
});

