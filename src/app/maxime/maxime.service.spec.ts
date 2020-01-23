import { TestBed } from '@angular/core/testing';

import { MaximeService } from './maxime.service';

describe('MaximeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MaximeService = TestBed.get(MaximeService);
    expect(service).toBeTruthy();
  });
});
