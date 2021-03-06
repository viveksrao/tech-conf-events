import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TechConfEventsDataService } from '../shared/index';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  isDirty = true;
  newEvent;
  constructor(private router: Router, private techConfEventsDataService: TechConfEventsDataService) { }

  ngOnInit() {
  }

  saveEvent(formValues) {
    this.techConfEventsDataService.saveTechConfEvent(formValues).subscribe(() => {
      this.isDirty = false;
      this.router.navigate(['/events']);
    });
  }

  cancel() {
    this.router.navigate(['/events']);
  }

}
