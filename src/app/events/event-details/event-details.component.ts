import { Component, OnInit } from '@angular/core';
import { TechConfEventsDataService } from '../shared/tech-conf-events-data.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  techConfEvent: any;

  constructor(private techConfEventsDataService: TechConfEventsDataService) { }

  ngOnInit() {
    this.techConfEvent = this.techConfEventsDataService.getTechConfEvent(1);
  }

}
