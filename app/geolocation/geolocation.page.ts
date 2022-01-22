import { Component, OnInit } from '@angular/core';
import { Geolocation, GeolocationOptions } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.page.html',
  styleUrls: ['./geolocation.page.scss'],
})
export class GeolocationPage implements OnInit {

  constructor(
    private geolocation: Geolocation //Instância de objeto
  ) { }

  ngOnInit() {
  }

  //Método que retorna a posição em latitude e longitude
  getPosition() {
    const options: GeolocationOptions = {
      maximumAge: 3000,
      timeout: 5000,
      enableHighAccuracy: true
    };

    this.geolocation
      .getCurrentPosition(options)
      .then((position) => {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
 
      })
      .catch((error) => {
        console.log('Error getting location', error);
      });
  }

}
