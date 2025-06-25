import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../interfaces/cart-item';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  cart = this.cartSubject.asObservable();

  getCartItems(): CartItem[] {
    return this.cartSubject.value
  }

  addToCart(item: Product) {
    let currentCart = this.cartSubject.value
    const existingItemIndex = currentCart.findIndex(cartItem => cartItem.product.id === item.id);

    if (existingItemIndex > -1) {
      currentCart[existingItemIndex].quantity += 1;
    }
    else {
      const typedItem: CartItem = {
        product: item,
        quantity: 1
      };
      currentCart.push(typedItem);
    }

    this.cartSubject.next([...currentCart])
  }

  removeFromCart(id: any) {
    const updatedCart = this.cartSubject.value.filter(i => i.product.id !== id)
    this.cartSubject.next([...updatedCart])
  }
}
