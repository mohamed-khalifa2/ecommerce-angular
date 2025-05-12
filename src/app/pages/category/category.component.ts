import { Component } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-category',
  imports: [CardComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  cardInfo = {
    'name': 'any name',
    'description': 'some dummy dwscription',
    'price': '69,55',
    'img': "https://www.ikea.com/eg/en/images/products/pepprig-microfiber-cloth-green-blue-yellow__1267108_pe928383_s5.jpg"
  }
}
