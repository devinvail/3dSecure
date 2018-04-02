import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {  Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public http: Http) {
    this.http = http;
  }

  getModal(){
    console.log('loading modal');

    let options = new RequestOptions();
    options.headers = new Headers();

    options.headers.append("Content-Type", "application/json");
    options.headers.append("Cache-Control", "no-store");
    options.headers.append("Cache-Control", "no-cache");
    options.headers.append("Access-Control-Allow-Origin", "*");
    options.headers.append("Access-Control-Allow-Headers", "Content-Type");
    // options.headers.append("Accept", "application/json");

   let body =  {
    "PaReq": "P.3bc0fde98430a7e81eca2b4d57b08bc806152a30a9fcc7e69b3ac118bde92f8445ee3b1e02c884d3a4c2aa680c67765b156f9945ecdd4c810742d7f760c5831e",
    "TermUrl": "https://centinelapistag.cardinalcommerce.com/V1/TermURL/Overlay/CCA",
    "MD": "0_4dc64644-571b-49e3-9182-8cd1cf72a5d9"
   }

   this.http.post("https://0eafstag.cardinalcommerce.com/EAFService/jsp/v1/redirect", body, options)
    .map(res => res)
    .subscribe(
      data => console.log(data),
      err => console.log('err', err),
      () => console.log('yay'));
   ;


  }

}
