import { SessionListComponent } from './session-list.component';
import { ISession } from '../shared/event.model';

describe('SessionListComponent', () => {
  let component: SessionListComponent;
  let mockAuthService, mockVoterService;

  beforeEach(() => {
    component = new SessionListComponent(mockAuthService, mockAuthService);
  });

  describe('ngOnChanges', () => {
    it('should filter the sessions correctly', () => {
      component.sessions = <ISession[]>[
        { name: 'Session 1', level: 'intermediate'},
        { name: 'Session 2', level: 'advanced'},
        { name: 'Session 3', level: 'intermediate'}];
      component.filterBy = 'intermediate';
      component.sortBy = 'name';
      component.techConfEventId = 3;

      component.ngOnChanges();

      expect(component.visibleSessions.length).toBe(2);
    });

    it('should sort the sessions correctly', () => {
      component.sessions = <ISession[]>[
        { name: 'Session 1', level: 'intermediate'},
        { name: 'Session 3', level: 'advanced'},
        { name: 'Session 2', level: 'intermediate'}];
      component.filterBy = 'all';
      component.sortBy = 'name';
      component.techConfEventId = 3;

      component.ngOnChanges();

      expect(component.visibleSessions[2].name).toBe('Session 3');
    });
  });
});
