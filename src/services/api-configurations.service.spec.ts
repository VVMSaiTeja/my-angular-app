import { TestBed } from '@angular/core/testing';

import { ApiConfigurationsService } from './api-configurations.service';

describe('ApiConfigurationsService', () => {
  let service: ApiConfigurationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiConfigurationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
