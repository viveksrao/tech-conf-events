import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../shared';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  techConfEventsData: IEvent[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.techConfEventsData = this.route.snapshot.data['techConfEventsData'];
  }

}
