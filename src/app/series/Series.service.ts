import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Serie } from './Serie';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  public apiUrl = environment.baseUrl;

constructor(private http: HttpClient) { }

  getSeries(): Observable<Serie[]> {
    return this.http.get<Serie[]>(this.apiUrl);
 }
}
