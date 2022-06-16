import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toShop = new EventEmitter<any>();
  @Output() toProduct = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
  toHomepage(value:any) {
    this.toShop.emit({home:true,product:false,products:false});
  }
  toShoppage(value:any) {
    this.toShop.emit({home:false,product:false,products:true});
  }

  toProductPage(val:any) {
    this.toProduct.emit(val);
  }
}
