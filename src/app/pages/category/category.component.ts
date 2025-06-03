import { Component, inject } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { GenericHttpService } from '../../services/generic-http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  imports: [CardComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  private http = inject(GenericHttpService)
  private route = inject(ActivatedRoute)
  products: any = []
  param = this.route.snapshot.paramMap.get('sub')
  ngOnInit() {
    this.http.getProducts().subscribe({
      next: (products) => {


        if (this.param == 'men') this.products = products.filter((product) => product.category == "men's clothing")
        else if (this.param == 'women') this.products = products.filter((product) => product.category == "women's clothing")
        else this.products = products.filter((product) => product.category == this.param)

        console.log('products are', this.products)
      },
      error: (err) => console.log(err)
    })
  }

}
