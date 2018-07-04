import { Component, OnInit } from "@angular/core";
import { Router, NavigationStart, NavigationEnd } from "@angular/router";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
@Component({
  selector: "app-home-header",
  templateUrl: "./home-header.component.html",
  styleUrls: ["./home-header.component.css"]
})
export class HomeHeaderComponent {
  header: boolean = false;
 url:string='https://medium.com/greendeck';
  constructor(router: Router) {
    router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        window.scroll(0, 0);
        var url = document.location.pathname;
        // console.log("my header =",url);
        if (url === "/" ||
            url==="/data" ||  
            url ==="/about-us"  ||
            url ==="/blog"  ||
            url ==="/home" ||
            url ==="/buy" ||
            url ==="/currency-convert"
            
            )  {
          this.header = true;
          //  console.log("header",this.header);
        } else {
          this.header = false;
          //  console.log("header",this.header);
        }
      }
    });
  }

  navigate()
  {
    window.location.href="https://www.google.com";
  }


}
