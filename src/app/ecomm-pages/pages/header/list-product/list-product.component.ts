import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  products = [
    {
      id: 1,
      cat_name: "electronics",
      sub_cat_name: [
        {
          name: "Watch"
        },
        {
          name: "Watching Machine"
        },
        {
          name: "Mixture"
        },
        {
          name: "TV"
        }, {
          name: "Trimmer"
        }
      ]
    },
    {
      id: 2,
      cat_name: "furniture",
      sub_cat_name: [
        {
          name: "Sofa",
        },
        {
          name: "Chairs"
        },
        {
          name: "Cabinate"
        }
      ]
    }, 
    {
      id: 3,
      cat_name: "cloths",
      sub_cat_name: [
        {
          name: "Winter Cloth"
        },
        {
          name: "Mens Cloth"
        },
        {
          name: "Women Cloth"
        }, {
          name: "Children Cloth"
        }
      ]
    }]
}
