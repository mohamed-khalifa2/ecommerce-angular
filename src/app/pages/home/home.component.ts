import { Component, HostListener, inject } from '@angular/core';
import { SliderComponent } from '../../shared/slider/slider.component';
import { GenericHttpService } from '../../services/generic-http.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [SliderComponent, NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private http = inject(GenericHttpService);
  categories = new Set<string>()
  categories_products: any = {}

  ngOnInit() {
    this.http.getProducts().subscribe({
      next: (res: any) => {
        res.map((product: any) => this.categories.add(product.category))
        this.categories.forEach(category => this.categories_products[category] = res.filter((products: any) => products.category == category))
        console.log(this.categories_products)
        console.log(this.categories)
      },
      error: (err) => { console.log(err) }
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
