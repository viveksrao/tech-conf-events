import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { TechConfEventsDataService } from './tech-conf-events-data.service';

@Injectable({
  providedIn: 'root'
})
export class EventRouteActivatorService implements CanActivate {

  constructor(private techConfEventsDataService: TechConfEventsDataService, private router: Router) { }

  canActivate(activatedRoute: ActivatedRouteSnapshot) {
    const eventExists = !!this.techConfEventsDataService.getTechConfEvent(+activatedRoute.params['id']);
    if (!eventExists) {
      this.router.navigate(['/404']);
    }
    return eventExists;
  }
}
