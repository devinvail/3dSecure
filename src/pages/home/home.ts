import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import 'rxjs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public http: HTTP) {
    this.http = http;
  }

  getModal(){
    console.log('loading modal');

   let body =  {
    "PaReq": "P.3bc0fde98430a7e81eca2b4d57b08bc806152a30a9fcc7e69b3ac118bde92f8445ee3b1e02c884d3a4c2aa680c67765b156f9945ecdd4c810742d7f760c5831e",
    "TermUrl": "https://centinelapistag.cardinalcommerce.com/V1/TermURL/Overlay/CCA",
    "MD": "0_4dc64644-571b-49e3-9182-8cd1cf72a5d9"
   }

   this.http.post("https://0eafstag.cardinalcommerce.com/EAFService/jsp/v1/redirect", body, {})
  .then(data => {
    console.log(data.status);
    console.log(data.data); // data received by server
    console.log(data.headers);
  })
  .catch(error => {
    console.log(error.status);
    console.log(error.error); // error message as string
    console.log(error.headers);
  });

  }

}
