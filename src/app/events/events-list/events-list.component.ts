import { Component, OnInit } from '@angular/core';
import { TechConfEventsDataService } from '../shared/tech-conf-events-data.service';
import { ToastrService } from '../../common/toastr.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  techConfEventsData:any[];

  constructor(private techConfEventsDataService: TechConfEventsDataService, private toastrService: ToastrService) { }

  ngOnInit() {
    this.techConfEventsData = this.techConfEventsDataService.getTechConfEvents();
  }

  handleThumbnailClick(techConfEventName){
    this.toastrService.success(techConfEventName);
  }

}
