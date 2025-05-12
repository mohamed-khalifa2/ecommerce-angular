import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenericHttpService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<unknown> {
    return this.http.get('https://fakestoreapi.com/products')
  }
}
