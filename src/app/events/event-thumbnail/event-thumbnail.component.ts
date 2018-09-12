import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {

  @Input() techConfEvent: any;

  constructor() { }

  ngOnInit() {
  }

  getPriceOfEvent(){
    const isEventCostly = this.techConfEvent && this.techConfEvent.price > 500.00;
    return {textDanger: isEventCostly, bold: isEventCostly}; // ngClass expects an Object to be returned
    
    // Returning a String Example 
    // if(this.techConfEvent && this.techConfEvent.price > 500.00)
      // return 'textDanger bold' // Returns a string which is a space separated list of the classes you want applied.
    // return '';
    
    // Returning an array or an empty array Example 
    // if(this.techConfEvent && this.techConfEvent.price > 500.00)
      // return ['textDanger', 'bold'];
    // return [];
  }

}
