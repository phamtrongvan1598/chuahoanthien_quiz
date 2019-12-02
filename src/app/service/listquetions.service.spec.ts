import { TestBed } from '@angular/core/testing';

import { ListquetionsService } from './listquetions.service';

describe('ListquetionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListquetionsService = TestBed.get(ListquetionsService);
    expect(service).toBeTruthy();
  });
});
