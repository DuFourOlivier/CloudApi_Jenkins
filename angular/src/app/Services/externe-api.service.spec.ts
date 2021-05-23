import { TestBed } from '@angular/core/testing';

import { ExterneApiService } from './externe-api.service';

describe('ExterneApiService', () => {
  let service: ExterneApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExterneApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
