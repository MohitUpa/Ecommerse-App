import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductService } from '../header/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Output() routeProduct = new EventEmitter<any>();
  constructor(private productService : ProductService) { }

  shopData:any;
  ngOnInit(): void {
    this.shopData = this.productService.getProductData();
  }
  
  // shopData = [{
  //     id : 1,
  //     img : "../../../../assets/images/shoe 1.png",
  //     name : "Trending Shoe",
  //     price : "230$",
  //     category: 'footware'
  //   },{
  //     id : 2,
  //     img : "../../../../assets/images/shoe 2.png",
  //     name : "Trending Shoe",
  //     price : "230$",
  //     category: 'footware'
  //   },{
  //     id : 3,
  //     img : "../../../../assets/images/shoe 3.png",
  //     name : "Trending Shoe",
  //     price : "230$",
  //     category: 'footware'
  //   },{
  //     id : 4,
  //     img : "../../../../assets/images/shoe 4.png",
  //     name : "Trending Shoe",
  //     price : "230$",
  //     category: 'footware'
  //   },{
  //     id : 5,
  //     img : "../../../../assets/images/shoe 5.png",
  //     name : "Trending Shoe",
  //     price : "230$",
  //     category: 'footware'
  //   },{
  //     id : 6,
  //     img : "../../../../assets/images/shoe 6.png",
  //     name : "Trending Shoe",
  //     price : "230$",
  //     category: 'footware'
  //   },{
  //     id : 7,
  //     img : "../../../../assets/images/shoe 1.png",
  //     name : "Trending Shoe",
  //     price : "230$",
  //     category: 'footware'
  //   },{
  //     id : 8,
  //     img : "../../../../assets/images/shoe 2.png",
  //     name : "Trending Shoe",
  //     price : "230$",
  //     category: 'footware'
  //   },{
  //     id : 9,
  //     img : "../../../../assets/images/shoe 3.png",
  //     name : "Trending Shoe",
  //     price : "230$",
  //     category: 'footware'
  //   }
  // ];

  product(value: any) {
    this.routeProduct.emit({home:false,product:true,products:false});
  }

}
