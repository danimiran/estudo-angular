import { TestBed } from '@angular/core/testing';

import { AlunosDesativeGuard } from './alunos-desative.guard';

describe('AlunosDesativeGuard', () => {
  let guard: AlunosDesativeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AlunosDesativeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
