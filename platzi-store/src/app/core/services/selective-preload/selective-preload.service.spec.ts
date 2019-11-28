import { TestBed } from '@angular/core/testing';

import { SelectivePreloadService } from './selective-preload.service';

describe('SelectivePreloadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectivePreloadService = TestBed.get(SelectivePreloadService);
    expect(service).toBeTruthy();
  });
});
