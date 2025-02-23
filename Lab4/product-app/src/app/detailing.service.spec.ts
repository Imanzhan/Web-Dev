import { TestBed } from '@angular/core/testing';

import { DetailingService } from './detailing.service';

describe('DetailingService', () => {
  let service: DetailingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
