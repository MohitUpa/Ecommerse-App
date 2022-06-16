import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  @Output() toProduct = new EventEmitter<any>();

  toggleProduct = false;
  productData:any;
  productData1 = [];
  productCatName:any;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productData = this.productService.getProductData();
    const key = 'category';
    const arrayUniqueByKey = [...new Map(this.productData.map((item: { [x: string]: any; }) =>
      [item[key], item])).values()];
    this.productCatName = arrayUniqueByKey;
  }

  showProduct(values: any) {
    console.log(values);
    this.toggleProduct = true;
    this.productData1 = this.productData.filter((item: { category: any; }) => item.category === values);
    console.log(this.productData1);
    this.toProduct.emit({home:false,product:false,products:false});
  }

  toggle() {
    this.toggleProduct = false;
  }
}
