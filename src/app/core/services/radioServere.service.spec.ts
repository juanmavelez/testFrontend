import { TestBed } from '@angular/core/testing';

import { RadioServereService } from './radioServere.service';

describe('RadioServereService', () => {
  let service: RadioServereService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RadioServereService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
