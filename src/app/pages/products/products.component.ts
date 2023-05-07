import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';
import { Product } from 'src/models/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
    
  constructor(private productsService: ProductsService) {}

  productsObject?: Array<Product>;
  chosenProduct?: Product;



  ngOnInit(): void {
    this.productsService.loadProductsMeta().subscribe((data: Array<Product>) => {
      this.productsObject = data;
    })    
  }

  loadImage(productObject: Product) {
    this.chosenProduct = productObject;
  }
}
