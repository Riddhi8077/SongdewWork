import { TestBed } from '@angular/core/testing';

import { GoogleSheetService } from './google-sheet';

describe('GoogleSheet', () => {
  let service: GoogleSheetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleSheetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
