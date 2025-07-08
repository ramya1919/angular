import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  product = {
    name: 'iPhone 15 plus',
    color:'White',
    price: 999,
    discount: 8.5,
    inStock: 5
  }

}
