import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../interfaces/cart-item';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor() { }

  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  cart = this.cartSubject.asObservable();

  getCartItems(): CartItem[] {
    return this.cartSubject.value
  }

}
