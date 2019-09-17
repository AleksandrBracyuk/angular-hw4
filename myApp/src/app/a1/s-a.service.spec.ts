import { TestBed } from '@angular/core/testing';

import { SAService } from './s-a.service';

describe('SAService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SAService = TestBed.get(SAService);
    expect(service).toBeTruthy();
  });
});
