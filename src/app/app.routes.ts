import { Routes } from '@angular/router';

import { 
  CreateEventComponent,
  EventDetailsComponent,
  EventsListComponent,
  EventsListResolverService,
  EventRouteActivatorService
} from './events/index';
import { Error404Component } from './errors/error404/error404.component';

export const appRoutes:Routes = [
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent']
  },
  {
    path: 'events', 
    component: EventsListComponent,
    resolve: {
      techConfEventsData:EventsListResolverService
    }
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    canActivate: [EventRouteActivatorService]
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