import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { 
  CreateEventComponent,
  CreateSessionComponent,
  EventDetailsComponent,
  EventThumbnailComponent,
  EventsListComponent,
  SessionListComponent,
  UpvoteComponent,
  TechConfEventsDataService,
  EventsListResolverService,
  EventRouteActivatorService,
  DurationPipe,
  VoterService,
  LocationValidatorDirective,
  EventResolverService
} from './events/index';
import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/navbar.component';
import { Error404Component } from './errors/error404/error404.component';

import { AuthService } from './user/shared/auth.service';

import { 
  JQ_TOKEN, 
  TOASTR_TOKEN, 
  Toastr, 
  CollapsibleWellComponent,
  SimpleModalComponent,
  ModalTriggerDirective 
} from './common/index';

import { appRoutes } from './app.routes';

let toastr:Toastr = window['toastr'];
let jQuery = window['$'];

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent,
    LocationValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    TechConfEventsDataService, 
    { provide: TOASTR_TOKEN, useValue: toastr }, 
    { provide: JQ_TOKEN, useValue: jQuery },
    // EventRouteActivatorService,
    EventsListResolverService,
    AuthService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    VoterService,
    EventResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent){
  if(component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?')
  return true;
}
