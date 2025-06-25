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
  categoryProducts: any = []
  param = this.route.snapshot.paramMap.get('sub')
  message: string = ''
  ngOnInit() {
    this.http.getCategoryProducts(this.param).subscribe({
      next: (cat) => {
        console.log(cat)
        if (cat.length == 0) {
          this.message = `sorry no products for ${this.param}!`
        }
        else { this.message = String(this.param) }

        this.categoryProducts = [...cat]
      },
      error: (err) => console.log(err)
    })
  }

}
