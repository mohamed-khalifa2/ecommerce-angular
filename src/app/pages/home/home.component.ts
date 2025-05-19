import { Component, HostListener, inject } from '@angular/core';
import { SliderComponent } from '../../shared/slider/slider.component';
import { GenericHttpService } from '../../services/generic-http.service';
import { NgClass } from '@angular/common';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-home',
  imports: [SliderComponent, NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private http = inject(GenericHttpService);
  category_products: { [key: string]: Product[] } = {}

  ngOnInit() {
    this.http.getProducts().subscribe({
      next: (res) => {
        res.forEach(product => {
          const category = product.category;

          if (!this.category_products[category]) {
            this.category_products[category] = [];
          }

          this.category_products[category].push(product);
        });

        console.log(this.category_products);
      },
      error: (err) => console.log(err),
    });
  }


  currentState: string = 'opacity-0'
  lastY = 0
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY >= 350) { this.currentState = 'opacity-100' }
    else {
      this.currentState = 'opacity-0'

    }
  }
  onClickFloating() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


}
