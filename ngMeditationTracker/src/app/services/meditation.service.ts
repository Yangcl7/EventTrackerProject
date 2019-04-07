import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Meditation } from '../models/meditation';
import { throwError } from 'rxjs';

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
    const httpOptions = { headers: {'Content-type': 'application/json'}};
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
    const httpOptions = { headers: {'Content-type': 'application/jsson'}};
    return this.http.put<Meditation>('${this.url}/${meditation.id}', meditation, httpOptions).pipe(
      catchError((err: any) => {
        console.error('MeditationService.update(): Error');
        console.error(err);
        return throwError('Error in MeditationService.update()');
      })
    )
  }


  constructor(private http: HttpClient) { }
}
