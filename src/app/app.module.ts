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
import { ConvertComponent } from './home/convert/convert.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
@NgModule({
  declarations: [
    AppComponent,
    HomeHeaderComponent,
    HomePageComponent,
    DataPageComponent,
    AboutusComponent,
    BlogComponent,
    IntroHomeComponent,
    CartComponent,
    ConvertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
  ],
  providers: [AlertService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
