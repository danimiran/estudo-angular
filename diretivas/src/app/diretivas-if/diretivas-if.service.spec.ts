import { TestBed } from '@angular/core/testing';

import { DiretivasIfService } from './diretivas-if.service';

describe('DiretivasIfService', () => {
  let service: DiretivasIfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiretivasIfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
