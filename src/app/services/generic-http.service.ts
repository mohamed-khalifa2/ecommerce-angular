import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, Products } from '../interfaces/product';
import { environment } from '../../environments/environment.development';
import { Categories } from '../interfaces/categories';


@Injectable({
  providedIn: 'root'
})
export class GenericHttpService {

  constructor(private http: HttpClient) { }
  baseUrl: string = environment.baseUrl

  getAllProducts(): Observable<Products> {
    return this.http.get<Products>(this.baseUrl + 'products')
  }

  getAllCategories(): Observable<Categories> {
    return this.http.get<Categories>(this.baseUrl + 'products/category')
  }

  getCategoryProducts(category: string): Observable<Products> {
    return this.http.get<Products>(this.baseUrl + `products/category?type=${category}`)
  }
}
