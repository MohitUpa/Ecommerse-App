import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EcommPagesComponent } from './ecomm-pages/ecomm-pages.component';
import { DirectivesComponent } from './ecomm-pages/directives/directives.component';
import { ComponentsComponent } from './ecomm-pages/components/components.component';
import { PagesComponent } from './ecomm-pages/pages/pages.component';
import { HeaderComponent } from './ecomm-pages/pages/header/header.component';
import { ProductComponent } from './ecomm-pages/pages/product/product.component';
import { FooterComponent } from './ecomm-pages/pages/footer/footer.component';
import { SingleProductComponent } from './ecomm-pages/pages/single-product/single-product.component';
import { HomeComponent } from './ecomm-pages/pages/home/home.component';
import { SaleHomeSliderComponent } from './ecomm-pages/pages/home/sale-home-slider/sale-home-slider.component';
import { BannerHomeComponent } from './ecomm-pages/pages/home/banner-home/banner-home.component';
import { FooterInfoHomeComponent } from './ecomm-pages/pages/home/footer-info-home/footer-info-home.component';
import { ListProductComponent } from './ecomm-pages/pages/header/list-product/list-product.component';

@NgModule({
  declarations: [
    AppComponent,
    EcommPagesComponent,
    DirectivesComponent,
    ComponentsComponent,
    PagesComponent,
    HeaderComponent,
    ProductComponent,
    FooterComponent,
    SingleProductComponent,
    HomeComponent,
    SaleHomeSliderComponent,
    BannerHomeComponent,
    FooterInfoHomeComponent,
    ListProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
