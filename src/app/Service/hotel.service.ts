import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private apiUrl = '';
  constructor(private http: HttpClient) { }

  getHotels(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getHotelsByLocation(location: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?location=${location}`);
  }
}

