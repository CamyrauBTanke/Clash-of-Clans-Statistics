import { TestBed } from '@angular/core/testing';

import { ClashOfClansService } from './clash-of-clans.service';

describe('ClashOfClansService', () => {
  let service: ClashOfClansService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClashOfClansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
