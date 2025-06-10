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
    this.http.getCategoryProducts('mobile').subscribe({
      next: (cat) => {
        console.log('categories are', cat.products)
      },
      error: (err) => console.log(err)
    })
  }

}
