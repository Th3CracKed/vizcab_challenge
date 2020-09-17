import { TestBed } from '@angular/core/testing';

import { ZoneService } from './zone.service';
import { Zone } from 'src/app/model';

describe('ZoneService calculerNombreOccupantParZone', () => {
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

  it('should calculate correctly le nombre occupant par zone', () => {
    const result = zoneService.calculerNombreOccupantParZone(zone);
    expect(result).toBeCloseTo(9.09);
  });

  it('should throw an error if Nb_logement is not provided', () => {
    zone.Nb_logement = undefined;
    expect(() => zoneService.calculerNombreOccupantParZone(zone))
      .toThrowError(`Nb_logement is not defined in the param = ${JSON.stringify(zone)}`);
  });

  it('should throw an error if Groupes is not provided', () => {
    zone.Groupes = undefined;
    expect(() => zoneService.calculerNombreOccupantParZone(zone))
      .toThrowError(`Groupes is not defined in the param = ${JSON.stringify(zone)}`);
  });

  it('should throw an error if Ratio_habitable is not provided', () => {
    zone.Ratio_habitable = undefined;
    expect(() => zoneService.calculerNombreOccupantParZone(zone))
      .toThrowError(`Ratio_habitable is not defined in the param = ${JSON.stringify(zone)}`);
  });
});


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

describe('ZoneService calculerNombreAdulteMax', () => {
  let zoneService: ZoneService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    zoneService = TestBed.inject(ZoneService);
  });

  it('should be created', () => {
    expect(zoneService).toBeTruthy();
  });

  it('should calculate correctly le nombre dadulte maximum par logement', () => {
    const surfaceMoyenne = 9;
    const result = (zoneService as any).calculerNombreAdulteMax(surfaceMoyenne);
    expect(result).toBeCloseTo(1);
  });

  it('should calculate correctly le nombre dadulte maximum par logement', () => {
    const surfaceMoyenne = 20;
    const result = (zoneService as any).calculerNombreAdulteMax(surfaceMoyenne);
    expect(result).toBeCloseTo(1.1875);
  });

  it('should calculate correctly le nombre dadulte maximum par logement', () => {
    const surfaceMoyenne = 99.75;
    const result = (zoneService as any).calculerNombreAdulteMax(surfaceMoyenne);
    expect(result).toBeCloseTo(3.49125);
  });
});

describe('(ZoneService as any) calculerNombreAdulteMaxParZone', () => {
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

  it('should calculate correctly le nombre dadulte maximum par logement', () => {
    const result = (zoneService as any).calculerNombreAdulteMaxParZone(zone);
    expect(result).toBeCloseTo(3.49125);
  });

  it('should throw an error if Nb_logement is not provided', () => {
    zone.Nb_logement = undefined;
    expect(() => (zoneService as any).calculerNombreAdulteMaxParZone(zone))
      .toThrowError(`Nb_logement is not defined in the param = ${JSON.stringify(zone)}`);
  });

  it('should throw an error if Groupes is not provided', () => {
    zone.Groupes = undefined;
    expect(() => (zoneService as any).calculerNombreAdulteMaxParZone(zone))
      .toThrowError(`Groupes is not defined in the param = ${JSON.stringify(zone)}`);
  });

  it('should throw an error if Ratio_habitable is not provided', () => {
    zone.Ratio_habitable = undefined;
    expect(() => (zoneService as any).calculerNombreAdulteMaxParZone(zone))
      .toThrowError(`Ratio_habitable is not defined in the param = ${JSON.stringify(zone)}`);
  });
});

describe('ZoneService calculerNombreOccupant', () => {
  let zoneService: ZoneService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    zoneService = TestBed.inject(ZoneService);
  });

  it('should be created', () => {
    expect(zoneService).toBeTruthy();
  });

  it('should calculate correctly le nombre doccupant par logement', () => {
    const nombreLogement = 4;
    const nombreAdulteMax = 1;
    const result = (zoneService as any).calculerNombreOccupant(nombreLogement, nombreAdulteMax);
    expect(result).toBe(4);
  });

  it('should calculate correctly le nombre doccupant par logement', () => {
    const nombreLogement = 4;
    const nombreAdulteMax = 2;
    const result = (zoneService as any).calculerNombreOccupant(nombreLogement, nombreAdulteMax);
    expect(result).toBe(7.3);
  });
});
