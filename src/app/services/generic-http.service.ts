import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';
import { environment } from '../../environments/environment.development';



@Injectable({
  providedIn: 'root'
})
export class GenericHttpService {

  constructor(private http: HttpClient) { }
  baseUrl: string = environment.baseUrl

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + 'products')
  }

  getAllCategories(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + 'products/categories')
  }

  getCategoryProducts(category: string | null): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + `products/category/${category}`)
  }
}
