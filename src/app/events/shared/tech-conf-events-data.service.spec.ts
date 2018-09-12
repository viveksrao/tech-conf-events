import { TestBed, inject } from '@angular/core/testing';

import { TechConfEventsDataService } from './tech-conf-events-data.service';

describe('TechConfEventsDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TechConfEventsDataService]
    });
  });

  it('should be created', inject([TechConfEventsDataService], (service: TechConfEventsDataService) => {
    expect(service).toBeTruthy();
  }));
});
