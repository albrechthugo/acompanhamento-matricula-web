import { TestBed } from '@angular/core/testing';

import { CorrectorService } from './corrector.service';

describe('CorrectorService', () => {
  let service: CorrectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorrectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
