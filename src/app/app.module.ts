import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { NavbarComponent } from './nav/navbar.component';
import { TechConfEventsDataService } from './events/shared/tech-conf-events-data.service';
import { ToastrService } from './common/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TechConfEventsDataService, ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
