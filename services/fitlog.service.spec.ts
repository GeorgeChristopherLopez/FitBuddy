import { TestBed } from '@angular/core/testing';

import { FitlogService } from './fitlog.service';

describe('FitlogService', () => {
  let service: FitlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FitlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
