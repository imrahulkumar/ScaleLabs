import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Http, Headers } from "@angular/http";
import { AlertService } from '../_service/alert.service';
@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.css']
})
export class ConvertComponent implements OnInit {
  rForm: FormGroup;
  apikey: any = "a22225565c9b3d18d2ebb3694ef5f6e4";
  from: any;
  to: any;
  amount: any;
  value:any;

  lists = ["EUR", "USD", "AUD", "CAD", "PLN", "MXN"];  constructor(
    private formBuilder: FormBuilder, 
    public http: Http,
     private alert: AlertService) { }
  ngOnInit() {
    this.rForm = this.formBuilder.group({
      initial: ["", Validators.required],
      final: ["", Validators.required],
      amount: ["", Validators.required]
    })
  }
  convert(rform) {
    if (!rform.valid) {
      this.alert.error("Fill the form correctly");
}
else
{
  this.amount = rform.value.amount;
  this.from = rform.value.initial;
  this.to = rform.value.final;
 this.apihit().subscribe(
  res => {
    console.log(res);
    this.value = res.result;
  },
  error => {
    this.alert.error(error._body, true);
  }
);

}
  }

  apihit() {
debugger
 
    let url: string = `http://data.fixer.io/api/convert?access_key=${this.apikey}&from=${this.from}&to=${this.to}&amount=${this.amount}&format=1`;
    return this.http
      .get(url)
      .map(res => res.json());
  }
}
