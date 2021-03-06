import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { TechConfEventsDataService } from '../shared/tech-conf-events-data.service';
import { IEvent, ISession } from '../shared';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  techConfEvent: IEvent;
  addMode: boolean;
  filterBy = 'all';
  sortBy = 'votes';

  constructor(private techConfEventsDataService: TechConfEventsDataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.forEach((data) => {
      this.techConfEvent = data['techConfEventData'];
      this.addMode = false;
    });
  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(null, this.techConfEvent.sessions.map(s => s.id));
    session.id = nextId + 1;
    this.techConfEvent.sessions.push(session);
    this.techConfEventsDataService.saveTechConfEvent(this.techConfEvent).subscribe();
    this.addMode = false;
  }

  cancelAddSession() {
    this.addMode = false;
  }

}
