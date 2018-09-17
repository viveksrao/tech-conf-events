import { Injectable } from '@angular/core';
import { ISession } from './event.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoterService {

  constructor(private http: HttpClient) { }

  deleteVoter(session: ISession, voterName: string){
    session.voters = session.voters.filter(voter => voter !== voterName);
  }

  addVoter(techConfEventId: number, session: ISession, voterName: string){
    session.voters.push(voterName);
    const options = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    };
    const url = `/api/events/${techConfEventId}/sessions/${session.id}/voters/${voterName}`;
    this.http.post(url, {}, options)
        .pipe(catchError(this.handleError('addVoter')))
        .subscribe();
  }

  userHasVoted(session: ISession, voterName: string){
    return session.voters.some(voter => voter === voterName);
  }

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }

}
