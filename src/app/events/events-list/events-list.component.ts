import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  event = {
    id: 1,
    name: 'Angular Mix',
    date: '10/10/2018',
    time: '10:00 am',
    price: 2799.00,
    imageUrl: '/assets/images/angularmix.png',
    location: {
      address: '6300 Hollywood Way',
      city: 'Orlando',
      country: 'USA'
    }
  }

}
