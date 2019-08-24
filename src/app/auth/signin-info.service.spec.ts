import { TestBed } from '@angular/core/testing';

import { SigninInfoService } from './signin-info.service';

describe('SigninInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SigninInfoService = TestBed.get(SigninInfoService);
    expect(service).toBeTruthy();
  });
});
