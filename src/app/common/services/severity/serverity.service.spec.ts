import { TestBed } from '@angular/core/testing';

import { ServerityService } from './serverity.service';

describe('ServerityService', () => {
  let service: ServerityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
