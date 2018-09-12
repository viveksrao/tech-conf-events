import { Component, OnInit } from '@angular/core';
import { TechConfEventsDataService } from '../shared/tech-conf-events-data.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  techConfEventsData:any[];

  constructor(private techConfEventsDataService: TechConfEventsDataService) { }

  ngOnInit() {
    this.techConfEventsData = this.techConfEventsDataService.getTechConfEvents();
  }

}
