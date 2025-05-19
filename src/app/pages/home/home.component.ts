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
  category_products: any = {}

  ngOnInit() {
    this.http.getProducts().subscribe({
      next: (res: any) => {
        res.forEach((product: any) => this.categories.add(product.category))
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
