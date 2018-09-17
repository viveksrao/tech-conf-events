import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { TechConfEventsDataService } from './tech-conf-events-data.service';

@Injectable({
  providedIn: 'root'
})
export class EventResolverService implements Resolve<any> {

  constructor(private techConfEventsDataService: TechConfEventsDataService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.techConfEventsDataService.getTechConfEvent(route.params['id']);
  }
}
