import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

declare var google;
@IonicPage({
name:'contact-page'
})
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  
	//google
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  constructor(public navCtrl: NavController, public geolocation: Geolocation, public http: Http) {
 
  }
	//google
	ionViewDidLoad(){
		this.loadMap();
		this.addMarkersToMap();
	  }
	  
	loadMap(){
 
		this.geolocation.getCurrentPosition().then((position) => {
	 
		  let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	 
		  let mapOptions = {
			center: latLng,
			zoom: 15,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		  }
	 
		  this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
		  this.addMarker();
		  this.addMarkersToMap();
		}, (err) => {
		  console.log(err);
		});
	 
	  }
	  
	  addMarker(){
 
		  let marker = new google.maps.Marker({
			map: this.map,
			animation: google.maps.Animation.DROP,
			position: this.map.getCenter(),
			
		  });
		 
		  this.geolocation.getCurrentPosition().then((position) => {
		   let infoWindow = new google.maps.InfoWindow({
			content: '<h4>My Current Location!</h4>' 
		  });
		 
		  google.maps.event.addListener(marker, 'click', () => {
			infoWindow.open(this.map, marker);
		  });
		});
	}


	addMarkersToMap() {
		var lat=21.962325;
		var lon=96.084292;
		var position = new google.maps.LatLng(lat,lon);
		var marker = new google.maps.Marker({
		  map: this.map,
		  title: "Polo Maxten Show Room",
		  position: position,
		  center: position,
		  icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
		});
	  var infoWindow = new google.maps.InfoWindow({
		content: 'Polo Maxten'
	  });
	  marker.addListener('click', () => {
		infoWindow.open(this.map, marker);
	  });
	
	}
	
	showRoute(){
		var lat=21.962209;
		var lon=96.084276;
		this.navCtrl.push("RoutePage",{lat,lon});
	}
}
