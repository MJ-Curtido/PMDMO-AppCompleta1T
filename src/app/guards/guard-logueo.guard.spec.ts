import { TestBed } from '@angular/core/testing';

import { GuardLogueoGuard } from './guard-logueo.guard';

describe('GuardLogueoGuard', () => {
  let guard: GuardLogueoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardLogueoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
