import { Component, OnInit } from '@angular/core';
import { productsData, products } from './../../models/products.model';
import { CardProductComponent } from '../card-product/card-product.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-products',
  standalone: true,
  imports: [CardProductComponent, CommonModule],
  templateUrl: './home-products.component.html',
  styleUrls: ['./home-products.component.css']
})
export class HomeProductsComponent implements OnInit {

  products: productsData[] = [];

  ngOnInit(): void {
    this.products = products;
    console.log(this.products);
  }
}
