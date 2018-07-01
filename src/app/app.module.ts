import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeHeaderComponent } from './home/home-header/home-header.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { AppRoutingModule } from './/app-routing.module';
import { DataPageComponent } from './home/data-page/data-page.component';
import { AboutusComponent } from './home/aboutus/aboutus.component';
import { BlogComponent } from './home/blog/blog.component';
import { IntroHomeComponent } from './home/intro-home/intro-home.component';
import { AlertService } from "./home/_service/alert.service";
import { SharedModule } from "./home/sharedModule/sharedmodule";
import { CartComponent } from './home/cart/cart.component';
import { DataService } from "./home/_service/data.service";
@NgModule({
  declarations: [
    AppComponent,
    HomeHeaderComponent,
    HomePageComponent,
    DataPageComponent,
    AboutusComponent,
    BlogComponent,
    IntroHomeComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [AlertService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
