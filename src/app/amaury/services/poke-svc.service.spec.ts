import { TestBed } from '@angular/core/testing';

import { PokeSvcService } from './poke-svc.service';

describe('PokeSvcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PokeSvcService = TestBed.get(PokeSvcService);
    expect(service).toBeTruthy();
  });
});
