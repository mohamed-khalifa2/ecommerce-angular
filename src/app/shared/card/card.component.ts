import { CurrencyPipe } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Product } from '../../interfaces/product';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-card',
  imports: [CurrencyPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() item!: Product
  wishlist = inject(WishlistService)

  addToWishlistFn() {
    this.wishlist.addToWishlist(this.item)
    const items = this.wishlist.getWishlistItems()
    console.log(items)
  }
}
