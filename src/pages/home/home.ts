import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Camera, CameraOptions} from '@ionic-native/camera';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  insuranceDocuments: number = 0;
  insuranceBtnColor: string = this.insuranceDocuments > 0 ? 'secondary' : 'danger';

  constructor(public navCtrl: NavController, private camera: Camera) {

  }

  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  };

  scanDocument() {
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      // let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.insuranceDocuments += 1;
      console.log("got image", imageData)
    }, (err) => {
      console.log("rejected image", err);
    });
  }

}
