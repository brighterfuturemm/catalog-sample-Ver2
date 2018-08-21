import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { NavController,NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import 'rxjs/add/operator/map';

/**
 * Generated class for the RoutePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
 declare var google;

@IonicPage()
@Component({
  selector: 'page-route',
  templateUrl: 'route.html',
})
export class RoutePage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;

  lat:any;
  long:any;
  name:any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation) {
    this.lat=navParams.get('lat');
    this.long=navParams.get('lon');
  }

  ionViewDidLoad(){
    this.initMap();
  }

  initMap() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {});
    this.geolocation.getCurrentPosition().then((position) => {
    let start=new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    this.directionsDisplay.setMap(this.map);
    var lat=this.lat;
    var long=this.long;
    let latLng = new google.maps.LatLng(lat,long);
    this.directionsService.route({
      origin: start,
      destination: latLng,
      travelMode: 'DRIVING'
    }, (response, status) => {
        this.directionsDisplay.setDirections(response); });
     });
  }

}
