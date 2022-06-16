import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  home :boolean = true;
  products:boolean = false;
  product:boolean = false;

  totoggle(value:any) {
    this.home = value.home;
    this.product = value.product;
    this.products = value.products;
  }
}
