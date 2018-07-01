import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./home/home-page/home-page.component";
import { DataPageComponent } from "./home/data-page/data-page.component";
import { AboutusComponent } from "./home/aboutus/aboutus.component";
import { BlogComponent } from "./home/blog/blog.component";
import { IntroHomeComponent } from "./home/intro-home/intro-home.component";
import { CartComponent } from './home/cart/cart.component';
const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "data", component: DataPageComponent },
  { path: "about-us", component: AboutusComponent },
  { path: "blog", component: BlogComponent },
  { path: "home", component: IntroHomeComponent },
  { path: "buy", component: CartComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
