import { Component, ViewChild} from '@angular/core';
import { NavController,Slides, IonicPage } from 'ionic-angular';
import { Http } from '@angular/http';
import { CacheService } from 'ionic-cache';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
	export var accessories1=[];
	export var bag1=[];
	export var beauty1=[];
	export var cloth1=[];
	export var electronic1=[];
	export var jewelry1= [];
	export var phone1=[];
	export var shoe1=[];
	export var toy1=[];
	export var watch1=[];
    export var h1;
    export var h2;
    export var h3;
    var bgslides = [];  
    var url='https://catalog.tworksystem.com/wp-json/wp/v2/media?per_page=100';
    var purl='https://catalog.tworksystem.com/wp-json/wc/v1/products?fields=18&consumer_key=ck_c13a1bc75d4bc671d36f57437e77dc4a9f185723&consumer_secret=cs_2e8b00282d7673b362749af0c0d82dcf408895ca&filter[posts_per_page]=-1';
    var ttl = 5;
	var delayType = 'all';
	
@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  films: Observable<any>;
  films1: Observable<any>;
  filmsKey = 'my-films-group';
@ViewChild(Slides) slides:any; 
	
  categories1:any
  categories2:any;
  categories3:any;
  categories4:any;
  categories5:any;
  categories6:any;
  categories7:any;
  categories8:any;
  categories9:any;
  categories10:any;
  
  card1:any;
  card2:any;
  card3:any;
  card4:any;
  card5:any;
  card6:any;
  card7:any;
  card8:any;
  card9:any;  
  card10:any;
  
  posts: any;
  backslide:any;
  bgslides:any;
 
  cards1 = [{map: 'PhonePage'}];
  cards2 = [{map: 'ShoePage'}];
  cards3 = [{map: 'BeautyPage'}];
  cards4 = [{map: 'ClothPage'}];
  cards5 = [{map: 'ElectronicPage'}];
  cards6 = [{map: 'JewelryPage'}];
  cards7 = [{map: 'AccessoriesPage'}];
  cards8 = [{map: 'BagPage'}];
  cards9 = [{map: 'ToyPage'}];
  cards10 = [{map: 'WatchPage'}];
  
  constructor(public navCtrl: NavController, public http: Http, private cache: CacheService) {
    h1=this.navCtrl;
    h2=this.http;
    h3=this.cache;
	
	let req=this.http.get(url).map(res =>res.json());
	let preq=this.http.get(purl).map(res =>res.json());
	this.films = this.cache.loadFromDelayedObservable(url, req, this.filmsKey, ttl, delayType);
    this.films1 = this.cache.loadFromDelayedObservable(purl,preq, this.filmsKey, ttl, delayType);
    this.films.subscribe(
        data => {	
			this.slide(data);		
			},
		
		err => {
			console.log("Oops!");
			});
    this.films1.subscribe(
        data => {
			this.product(data);
        },
        err => {
			console.log("Oops!");
			}
		);
		
	}
	
  refresh(refresher) {
	let req=this.http.get(url).map(res =>res.json());
	let preq=this.http.get(purl).map(res =>res.json());
	this.films = this.cache.loadFromDelayedObservable(url, req, this.filmsKey, ttl, delayType);
    this.films1 = this.cache.loadFromDelayedObservable(purl,preq, this.filmsKey, ttl, delayType);
    this.films1.subscribe(
        data => {
			this.product(data);
        },
        err => {
			console.log("Oops!");
			}
		);
		
	this.films.subscribe(
        data => {			
		this.slide(data);		
		},
		
		err => {
			console.log("Oops!");
		}
	);
	setTimeout(() => {
			console.log('Async operation has ended');
			refresher.complete();
		}, 4000);
	}
	
	product(data){
	
	var i=null;
	var j=0;
	var k=0;
	var l=0;
	var m=0;
	var n=0;
	var o=0;
	var p=0;
	var q=0;
	var r=0;
	var s=0;
	
		for(i=0;i<data.length;i++){
			switch(data[i].categories[0].name){
				case "Accessories":  
                    accessories1[j]=data[i];
                    j++;
					break;
				case "Bag":
					bag1[k]=data[i];
					k++;	
					break;
				case "Beauty":
					beauty1[l]=data[i];
					l++;
					break;
				case "Cloth":
					cloth1[m]=data[i];
					m++;
					break;
				case "Electronic":
					electronic1[n]=data[i];
					n++;	
					break;
				case "Jewelry":
					jewelry1[o]=data[i];
					o++;
					break;
				case "Phone":
					phone1[p]=data[i];
					p++;	
					break;
				case "Shoe":
					shoe1[q]=data[i];
					q++;
					break;
				case "Toy":
					toy1[r]=data[i];
					r++;
					break;
				case "Watch":
					watch1[s]=data[i];
					s++;
					break;					
					}
				}
			this.categories1=accessories1;
			this.categories2=bag1;
			this.categories3=beauty1;
			this.categories4=cloth1;
			this.categories5=electronic1;
			this.categories6=jewelry1;
			this.categories7=phone1;
			this.categories8=shoe1;
			this.categories9=toy1;
			this.categories10=watch1;
			}
			
	slide(data){
		for(var i=0;i<data.length;i++){
					switch(data[i].title.rendered){
						case "slide1":
							bgslides[0]=data[i].source_url;
							break;
						case "slide2":
							bgslides[1]=data[i].source_url;
							break;
						case "slide3":
							bgslides[2]=data[i].source_url;
							break;
						case "slide4":
							bgslides[3]=data[i].source_url;
							break;  
					}
				}
			this.backslide=bgslides;
			}		
			
	cardTapped(event,card) {
		this.navCtrl.push(card.map);
		}
	
}



   
