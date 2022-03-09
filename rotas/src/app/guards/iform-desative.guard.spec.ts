import { TestBed } from '@angular/core/testing';

import { IformDesativeGuard } from './iform-desative.guard';

describe('IformDesativeGuard', () => {
  let guard: IformDesativeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IformDesativeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
