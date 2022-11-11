import { TestBed } from '@angular/core/testing';

import { InfoListServiceService } from './info-list-service.service';

describe('InfoListServiceService', () => {
  let service: InfoListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
