import { Routes } from '@angular/router';

import {
  CreateEventComponent,
  CreateSessionComponent,
  EventDetailsComponent,
  EventsListComponent,
  EventsListResolverService,
  EventResolverService,
  // EventRouteActivatorService
} from './events/index';
import { Error404Component } from './errors/error404/error404.component';

export const appRoutes: Routes = [
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent']
  },
  {
    path: 'events',
    component: EventsListComponent,
    resolve: {
      techConfEventsData: EventsListResolverService
    }
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    resolve: {
      techConfEventData: EventResolverService
    }
    // canActivate: [EventRouteActivatorService]
  },
  {
    path: 'events/session/new',
    component: CreateSessionComponent
  },
  {
    path: '404',
    component: Error404Component
  },
  {
    path: '',
    redirectTo: '/events',
    pathMatch: 'full'
  },
  {
    path: 'user',
    loadChildren: './user/user.module#UserModule'
  }
];
