import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Meditation } from '../models/meditation';
import { throwError, Observable } from 'rxjs';
import { DatePipe } from '@angular/common';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class MeditationService {
  private baseUrl = 'http://lcoalhost:8085/';
  private url = this.baseUrl + 'api/meditation';

  public index() {
    return this.http.get<Meditation[]>(this.url).pipe(
      catchError((err: any) => {
        console.error('MeditationService.index(): Error');
        console.error(err);
        return throwError('Error in MeditationService.index()');

      })
    );
  }
  public create(meditation: Meditation) {
    const httpOption = { headers: {'Content-type': 'application/json'}};
    return this.http.post<Meditation>(this.url, meditation, httpOptions).pipe(
      catchError((err: any) => {
        console.error('MeditationService.create(); Error');
        console.error(err);
        return throwError('Error in MeditationService.create()');
      })
    );
  }
  public destroy(id: number){
    return this.http.delete('${this.url}/${id}').pipe(
      catchError((err: any) => {
        console.error('MeditationService.create(); Error');
        console.error(err);
        return throwError('Error in MeditationService.create()');
      })
    );
  }
  public update(meditation: Meditation) {
    const httpOption = { headers: {'Content-type': 'application/jsson'}};
    return this.http.put<Meditation>('${this.url}/${meditation.id}', meditation, httpOptions).pipe(
      catchError((err: any) => {
        console.error('MeditationService.update(): Error');
        console.error(err);
        return throwError('Error in MeditationService.update()');
      })
    );
  }
  public save(meditation: Meditation): Observable<Meditation> {
    return this.http.post<Meditation>(this.baseUrl, meditation, httpOptions);
  }


  constructor(private http: HttpClient, private dataPipe: DatePipe) { }
}
