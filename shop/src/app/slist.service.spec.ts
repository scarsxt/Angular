import { TestBed } from '@angular/core/testing';

import { SlistService } from './slist.service';

describe('SlistService', () => {
  let service: SlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
