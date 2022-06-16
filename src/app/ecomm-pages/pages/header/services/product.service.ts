import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor() { }

    getProductData() {
        return [
            {
                id : 1,
                img : "../../../../assets/images/shoe 1.png",
                name : "Trending Shoe",
                price : "230$",
                category: 'footware'
              },{
                id : 2,
                img : "../../../../assets/images/shoe 2.png",
                name : "Trending Shoe",
                price : "230$",
                category: 'footware'
              },{
                id : 3,
                img : "../../../../assets/images/shoe 3.png",
                name : "Trending Shoe",
                price : "230$",
                category: 'footware'
              },{
                id : 4,
                img : "../../../../assets/images/shoe 4.png",
                name : "Trending Shoe",
                price : "230$",
                category: 'footware'
              },{
                id : 5,
                img : "../../../../assets/images/shoe 5.png",
                name : "Trending Shoe",
                price : "230$",
                category: 'footware'
              },{
                id : 6,
                img : "../../../../assets/images/shoe 6.png",
                name : "Trending Shoe",
                price : "230$",
                category: 'footware'
              },{
                id : 7,
                img : "../../../../assets/images/shoe 1.png",
                name : "Trending Shoe",
                price : "230$",
                category: 'footware'
              },{
                id : 8,
                img : "../../../../assets/images/shoe 2.png",
                name : "Trending Shoe",
                price : "230$",
                category: 'footware'
              },{
                id : 9,
                img : "../../../../assets/images/shoe 3.png",
                name : "Trending Shoe",
                price : "230$",
                category: 'footware'
              }, {
                id : 10,
                img : "../../../../assets/images/slider/furniture3.png",
                name: 'chair',
                price: '230$',
                category: 'furniture'
            }, {
                id : 12,
                img : "../../../../assets/images/slider/furniture2.png",
                name: 'Table',
                price: '230$',
                category: 'furniture'
            }, {
                 id : 13,
                img : "../../../../assets/images/slider/apliance8.png",
                name: 'washing mashine',
                price: '230$',
                category: 'electronic'
            }, {
                 id : 14,
                img : "../../../../assets/images/slider/apliance6.png",
                name: 'mixture',
                price: '230$',
               
                category: 'electronic'
            }, {
                 id : 15,
                img : "../../../../assets/images/slider/apliance9.png",
                name: 'refigirator',
                price: '230$',
                
                category: 'electronic'
            }, {
                 id : 16,
                img : "../../../../assets/images/slider/apliance2.png",
                name: 'AC',
                price: '230$',
                category: 'electronic'
            }, {
                 id : 17,
                img : "../../../../assets/images/slider/pngegg (1).png",
                name: 'Men Cloth',
                price: '230$',
                category: 'cloth'
            }, {
                 id : 18,
                img : "../../../../assets/images/slider/fashion5.png",
                name: 'Women cloth',
                price: '230$',
                category: 'cloth'
            }, {
                 id : 19,
                img : "../../../../assets/images/slider/pngegg.png",
                name: 'winter cloths',
                price: '230$',
                category: 'cloth'
            }, {
                id : 20,
               img : "../../../../assets/images/slider/pngegg (4).png",
               name: 'children cloths',
               price: '230$',
               category: 'cloth'
           }
        ];
    }


    

}
