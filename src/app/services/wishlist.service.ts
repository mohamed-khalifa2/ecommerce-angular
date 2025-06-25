import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../interfaces/cart-item';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor() { }

  private cartSubject = new BehaviorSubject<Product[]>([]);
  getWishlistItems(): Product[] {
    return this.cartSubject.value
  }

  addToWishlist(item: Product) {
    const currentWishlist = this.cartSubject.value;
    // currentCart.push(item)
    const existingIndex = currentWishlist.findIndex(listItem => listItem.id == item.id)
    if (existingIndex > -1) {
      this.removeFromWishlist(currentWishlist[existingIndex].id)
      console.log(existingIndex)
    }
    else {
      currentWishlist.push(item)
      this.cartSubject.next([...currentWishlist])
    }

  }

  removeFromWishlist(id: any) {
    const updatedCart = this.cartSubject.value.filter(i => i.id !== id)
    this.cartSubject.next([...updatedCart])
  }

}
