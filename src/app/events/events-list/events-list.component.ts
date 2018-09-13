import { Component, OnInit } from '@angular/core';
import { ToastrService } from '../../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../shared';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  techConfEventsData:IEvent[];

  constructor(private route: ActivatedRoute, 
              private toastrService: ToastrService) { }

  ngOnInit() {
    this.techConfEventsData = this.route.snapshot.data['techConfEventsData'];
  }

  handleThumbnailClick(techConfEventName){
    this.toastrService.success(techConfEventName);
  }

}
