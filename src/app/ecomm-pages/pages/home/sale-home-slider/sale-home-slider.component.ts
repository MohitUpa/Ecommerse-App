import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sale-home-slider',
  templateUrl: './sale-home-slider.component.html',
  styleUrls: ['./sale-home-slider.component.css']
})
export class SaleHomeSliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.Repeat();
  }
  Imagedata = [
    '../../../assets/images/sale_win1.jpg',
    '../../../assets/images/sale_win3.jpg'
  ];
  
  Repeat() {
    setTimeout(() => {
      this.__FunctionSlide();
      this.Repeat();
    }, 1500);
  }
  startIndex = 0;

  __FunctionSlide() {
    const slides = Array.from(document.getElementsByClassName('mall-show-slide1'));
    if (slides === []) {
      this.Repeat();
    }
    for (const x of slides) {
      const y = x as HTMLElement;
      y.style.display = 'none';
    }
    if (this.startIndex > slides.length - 1) {
      this.startIndex = 0;
      const slide = slides[this.startIndex] as HTMLElement;
      slide.style.display = 'block';
      this.startIndex++;
    } else {

      const slide = slides[this.startIndex] as HTMLElement;
      slide.style.display = 'block';
      this.startIndex++;
    }
  }

}
