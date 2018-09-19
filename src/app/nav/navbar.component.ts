import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/shared/auth.service';
import { ISession, TechConfEventsDataService } from '../events';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  searchTerm = '';
  foundSessions: ISession[];

  constructor(public authService: AuthService, private techConfEventsDataService: TechConfEventsDataService) { }

  ngOnInit() {
  }

  searchSessions(searchTerm) {
    this.techConfEventsDataService.searchSessions(searchTerm).subscribe(sessions => {
      this.foundSessions = sessions;
    });
  }

}
