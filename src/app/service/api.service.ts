import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://swapi.dev/api/vehicles/';


  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> { 
    return this.http.get<any>(this.apiUrl).pipe(
      map(res => res.results)
    );
  }

  getProductById(id: string) {
    return this.http.get<any>(`${this.apiUrl}${id}`).pipe(
      map(res => res)
    );
  }
}
