import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Output() routeProduct = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  
  shopData = [{
      id : 1,
      img : "../../../../assets/images/shoe 1.png",
      name : "Trending Shoe",
      price : "230$"
    },{
      id : 2,
      img : "../../../../assets/images/shoe 2.png",
      name : "Trending Shoe",
      price : "230$"
    },{
      id : 3,
      img : "../../../../assets/images/shoe 3.png",
      name : "Trending Shoe",
      price : "230$"
    },{
      id : 4,
      img : "../../../../assets/images/shoe 4.png",
      name : "Trending Shoe",
      price : "230$"
    },{
      id : 5,
      img : "../../../../assets/images/shoe 5.png",
      name : "Trending Shoe",
      price : "230$"
    },{
      id : 6,
      img : "../../../../assets/images/shoe 6.png",
      name : "Trending Shoe",
      price : "230$"
    },{
      id : 7,
      img : "../../../../assets/images/shoe 1.png",
      name : "Trending Shoe",
      price : "230$"
    },{
      id : 8,
      img : "../../../../assets/images/shoe 2.png",
      name : "Trending Shoe",
      price : "230$"
    },{
      id : 9,
      img : "../../../../assets/images/shoe 3.png",
      name : "Trending Shoe",
      price : "230$"
    }
  ];

  product(value: any) {
    this.routeProduct.emit({home:false,product:true,products:false});
  }

}
