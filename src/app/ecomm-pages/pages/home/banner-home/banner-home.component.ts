import { Component, OnInit } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-banner-home',
  templateUrl: './banner-home.component.html',
  styleUrls: ['./banner-home.component.css']
})
export class BannerHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  dynamicSlides = [
    {
      id: 1,
      src: '../../../assets/images/slider/pngegg.png',
      alt: 'Side 1',
      title: 'Side 1'
    },
    {
      id: 2,
      src: '../../../assets/images/slider/pngegg (2).png',
      alt: 'Side 2',
      title: 'Side 2'
    },
    {
      id: 3,
      src: '../../../assets/images/slider/pngegg (3).png',
      alt: 'Side 3',
      title: 'Side 3'
    },
    {
      id: 4,
      src: '../../../assets/images/slider/pngegg (4).png',
      alt: 'Side 4',
      title: 'Side 4'
    },
    {
      id: 5,
      src: '../../../assets/images/slider/pngegg (1).png',
      alt: 'Side 5',
      title: 'Side 5'
    },
    {
      id: 1,
      src: '../../../assets/images/slider/pngegg.png',
      alt: 'Side 1',
      title: 'Side 1'
    },
    {
      id: 2,
      src: '../../../assets/images/slider/pngegg (2).png',
      alt: 'Side 2',
      title: 'Side 2'
    },
    {
      id: 3,
      src: '../../../assets/images/slider/pngegg (3).png',
      alt: 'Side 3',
      title: 'Side 3'
    },
    {
      id: 4,
      src: '../../../assets/images/slider/pngegg (4).png',
      alt: 'Side 4',
      title: 'Side 4'
    },
    {
      id: 5,
      src: '../../../assets/images/slider/pngegg (1).png',
      alt: 'Side 5',
      title: 'Side 5'
    }
  ];

  furniture = [
    {
      id: 1,
      src: '../../../assets/images/slider/furniture3.png',
      alt: 'Side 1',
      title: 'Side 1'
    },
    {
      id: 2,
      src: '../../../assets/images/slider/furniture1.png',
      alt: 'Side 2',
      title: 'Side 2'
    },
    {
      id: 3,
      src: '../../../assets/images/slider/furniture2.png',
      alt: 'Side 3',
      title: 'Side 3'
    },
    {
      id: 4,
      src: '../../../assets/images/slider/furniture3.png',
      alt: 'Side 4',
      title: 'Side 4'
    },
    {
      id: 5,
      src: '../../../assets/images/slider/furniture1.png',
      alt: 'Side 5',
      title: 'Side 5'
    },
    {
      id: 1,
      src: '../../../assets/images/slider/furniture2.png',
      alt: 'Side 1',
      title: 'Side 1'
    },
    {
      id: 2,
      src: '../../../assets/images/slider/furniture3.png',
      alt: 'Side 2',
      title: 'Side 2'
    },
    {
      id: 3,
      src: '../../../assets/images/slider/furniture1.png',
      alt: 'Side 3',
      title: 'Side 3'
    },
    {
      id: 4,
      src: '../../../assets/images/slider/furniture2.png',
      alt: 'Side 4',
      title: 'Side 4'
    },
    {
      id: 5,
      src: '../../../assets/images/slider/furniture3.png',
      alt: 'Side 5',
      title: 'Side 5'
    }
  ];


  qualities = [{
    id: 1,
    src: '../../../assets/images/slider/pngegg.png',
    alt: 'Side 1',
    title: 'Side 1'
  },
  {
    id: 2,
    src: '../../../assets/images/shoe 2.png',
    alt: 'Side 2',
    title: 'Side 2'
  },
  {
    id: 3,
    src: '../../../assets/images/slider/pngegg (3).png',
    alt: 'Side 3',
    title: 'Side 3'
  },
  {
    id: 4,
    src: '../../../assets/images/shoe 4.png',
    alt: 'Side 4',
    title: 'Side 4'
  },
  {
    id: 5,
    src: '../../../assets/images/slider/pngegg (4).png',
    alt: 'Side 5',
    title: 'Side 5'
  },
  {
    id: 1,
    src: '../../../assets/images/shoe 1.png',
    alt: 'Side 1',
    title: 'Side 1'
  },
  {
    id: 2,
    src: '../../../assets/images/slider/pngegg (2).png',
    alt: 'Side 2',
    title: 'Side 2'
  },
  {
    id: 3,
    src: '../../../assets/images/slider/pngegg (3).png',
    alt: 'Side 3',
    title: 'Side 3'
  },
  {
    id: 4,
    src: '../../../assets/images/shoe 3.png',
    alt: 'Side 4',
    title: 'Side 4'
  },
  {
    id: 5,
    src: '../../../assets/images/slider/pngegg (1).png',
    alt: 'Side 5',
    title: 'Side 5'
  }
  ];


  fashions = [
    {
      id: 1,
      src: '../../../assets/images/slider/fashion1.png',
      alt: 'Side 1',
      title: 'Side 1'
    }, {
      id: 1,
      src: '../../../assets/images/slider/fashion5.png',
      alt: 'Side 1',
      title: 'Side 1'
    }, {
      id: 1,
      src: '../../../assets/images/slider/fashion3.png',
      alt: 'Side 1',
      title: 'Side 1'
    }, {
      id: 1,
      src: '../../../assets/images/slider/fashion4.png',
      alt: 'Side 1',
      title: 'Side 1'
    }, {
      id: 1,
      src: '../../../assets/images/slider/fashion5.png',
      alt: 'Side 1',
      title: 'Side 1'
    }, {
      id: 1,
      src: '../../../assets/images/slider/fashion3.png',
      alt: 'Side 1',
      title: 'Side 1'
    }
    , {
      id: 1,
      src: '../../../assets/images/slider/fashion7.png',
      alt: 'Side 1',
      title: 'Side 1'
    }
  ];
  appliances = [
    {
      id: 1,
      src: '../../../assets/images/slider/apliance1.png',
      alt: 'Side 1',
      title: 'Side 1'
    }, {
      id: 1,
      src: '../../../assets/images/slider/apliance2.png',
      alt: 'Side 1',
      title: 'Side 1'
    }, {
      id: 1,
      src: '../../../assets/images/slider/apliance8.png',
      alt: 'Side 1',
      title: 'Side 1'
    }, {
      id: 1,
      src: '../../../assets/images/slider/apliance9.png',
      alt: 'Side 1',
      title: 'Side 1'
    }, {
      id: 1,
      src: '../../../assets/images/slider/apliance5.png',
      alt: 'Side 1',
      title: 'Side 1'
    }, {
      id: 1,
      src: '../../../assets/images/slider/apliance6.png',
      alt: 'Side 1',
      title: 'Side 1'
    }
    , {
      id: 1,
      src: '../../../assets/images/slider/apliance2.png',
      alt: 'Side 1',
      title: 'Side 1'
    }, {
      id: 1,
      src: '../../../assets/images/slider/apliance8.png',
      alt: 'Side 1',
      title: 'Side 1'
    }, {
      id: 1,
      src: '../../../assets/images/slider/apliance9.png',
      alt: 'Side 1',
      title: 'Side 1'
    }

  ];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    autoplay: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    //  autoplaySpeed:0.5,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },
      1000: {
        items: 6
      }
    },
    nav: true
  }
}
