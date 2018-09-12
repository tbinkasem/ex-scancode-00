import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data = { };
  option: BarcodeScannerOptions;

  constructor(public bcScanner: BarcodeScanner,
               public navCtrl: NavController) {

  }

  scan(){
    this.data = { };
    this.option = {
        preferFrontCamera: true,
        showFlipCameraButton: true,
        prompt: "กรุณาสแกนโค๊ดที่ต้องการ"
    }
    this.bcScanner.scan(this.option).then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.data = barcodeData;
     }).catch(err => {
         console.log('Error', err);
     });
    
  }

}
