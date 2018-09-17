import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { TechConfEventsDataService } from './tech-conf-events-data.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventsListResolverService implements Resolve<any> {

  constructor(private techConfEventsDataService: TechConfEventsDataService) { }

  resolve() {
    return this.techConfEventsDataService.getTechConfEvents();
  }

}
