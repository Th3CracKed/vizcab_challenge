import { TestBed } from '@angular/core/testing';

import { UtilsService } from './utils.service';

describe('utilsService', () => {
  let utilsService: UtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    utilsService = TestBed.inject(UtilsService);
  });

  it('should be created', () => {
    expect(utilsService).toBeTruthy();
  });

  it('should throw error when a field is not defined', () => {
    const param = {};
    const field = 'inexistentField';
    expect(() => utilsService.checkParam(param, field))
      .toThrowError(`${field} is not defined in the param = ${JSON.stringify(param)}`);
  });

  it('should pass when a field is defined', () => {
    const param = { someField: 2 };
    const field = 'someField';
    expect(() => utilsService.checkParam(param, field))
      .not.toThrowError();
  });

});
