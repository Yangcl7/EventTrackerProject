import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Meditation } from '../models/meditation';
import { throwError, Observable } from 'rxjs';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class MeditationService {

  constructor(private http: HttpClient, private dataPipe: DatePipe) { }
  private baseUrl = 'http://lcoalhost:8085/api/meditation';

  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  public index() {
    return this.http.get<Meditation[]>(this.baseUrl).pipe(
      catchError((err: any) => {
        console.error(err);
        return throwError('Error in Meditation');

      })
    );
  }
  display(id) {
    return this.http.get<Meditation>(this.baseUrl + '/' + id).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('Error in MeditationService.show(id)');
      })
    );
  }
  public create(meditation: Meditation) {
    const httpOption = { headers: {'Content-type': 'application/json'}};
    return this.http.post<Meditation>(this.baseUrl, meditation, this.httpOptions).pipe(
      catchError((err: any) => {
        console.error(err);
        return throwError('Error in MeditationService.create()');
      })
    );
  }
  public delete(id) {
    return this.http.delete(this.baseUrl = '/' + id, this.httpOptions).pipe(
      catchError((err: any) => {
        console.error('MeditationService.create(); Error');
        console.error(err);
        return throwError('Error in MeditationService.create()');
      })
    );
  }
  public update(updateMeditation: Meditation) {
    const id = updateMeditation.id;
    return this.http.put<Meditation>(this.baseUrl + '/' + id, updateMeditation).pipe(
      catchError((err: any) => {
        console.error(err);
        return throwError('Error in MeditationService.update()');
      })
    );
  }

}
