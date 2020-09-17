import { TestBed } from '@angular/core/testing';

import { BatimentHttpService } from './batiment-http.service';

describe('BatimentHttpService', () => {
  let service: BatimentHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BatimentHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
