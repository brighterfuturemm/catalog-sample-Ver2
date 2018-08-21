import { Component} from '@angular/core';
import { NavController, NavParams, IonicPage, ViewController, AlertController } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html'
})
export class OrderPage {
  
	id: any;
	product_name: string;
	images: any;
	img: any;
	img1: any;
	bodyText: string;
  constructor(public navCtrl: NavController , public navParams: NavParams, private emailComposer: EmailComposer, public viewCtrl: ViewController, public alertCtrl: AlertController) {
	this.id=navParams.get('id');
	this.product_name=navParams.get('name');
	this.images=navParams.get('images');
  }
		
	dismiss(){
		this.viewCtrl.dismiss();
	}
	
	orderConfirm(id,product_image,product_name,customer_name,customer_email,customer_phone,product_no){
		
		  this.img = product_image[0].src;	
		
		
		this.emailComposer.isAvailable()
		  .then((available: boolean) =>
		  {	  			  
			  this.bodyText = 'I wanna to buy this ...<br>Product ID	: '+id+'<br>Product Name	: '+product_name+'<br>Customer Name	: '+customer_name+'<br>Customer Phone	: '+customer_phone+'<br>Product Image	: '+this.img;
			  let email = {
				  app: 'mailto',
				  to: 'sale@tworksystem.com',
				  cc: 'sale@twroksystem.com',
				  attachments: [this.img],
				  subject: 'Order Pending...',
				  body: this.bodyText,
				  isHtml: true
				};
				this.emailComposer.open(email);
				
			});
		
	}
}
