import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { AppState } from './app.global';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CacheService } from "ionic-cache";
import { Subject } from 'rxjs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'ListPage';
  activePage = new Subject();

  pages: Array<{ title: string, component: any, active: boolean, icon: string }>;
  rightMenuItems: Array<{ icon: string, active: boolean }>;
  state: any;
  
  constructor(public platform: Platform,public global: AppState,public menuCtrl: MenuController, cache: CacheService, statusBar: StatusBar, splashScreen: SplashScreen) {
	platform.ready().then(() => {
		
		// Set TTL to 12h
		cache.setDefaultTTL(60 * 60 * 12);
		
		// Keep our cached results when device is offline!
		cache.setOfflineInvalidate(false);
		
		statusBar.styleDefault();
		splashScreen.hide();
	});
    
    this.initializeApp();
    this.rightMenuItems = [
		{ icon: 'home', active: true },
		{ icon: 'contact', active: false },
		{ icon: 'setting', active: false },
	]
   
    // used for an example of ngFor and navigation
    this.pages = [
		{ title: 'Home', component: 'ListPage', active: true, icon: 'home' },
		{ title: 'Setting', component: 'ThemingPage', active: false, icon: 'setting'},
		{ title: 'Contact Us', component: 'ContactPage', active: false, icon: 'contact' },
	];
	
    this.activePage.subscribe((selectedPage: any) => {
		this.pages.map(page => {
			page.active = page.title === selectedPage.title;
		});
	});
  }

  initializeApp() {
	this.platform.ready().then(() => {
		// this.global.set('theme', '');
		// Okay, so the platform is ready and our plugins are available.
		// Here you can do any higher level native things you might need.
		
		this.menuCtrl.enable(false, 'right');
	});
  }

  openPage(page) {
	// Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    this.activePage.next(page);
  }
  
  home(){
	this.nav.setRoot('ListPage');
  }
  
  contact(){
	this.nav.push('contact-page');
  }
  
  about(){
	this.nav.push('about-page');
  }
  
  setting(){
	this.nav.push('ThemingPage');
  }
  
  login(){
	this.nav.push('login-page');
  }
  
  signup(){
	this.nav.push('signup-page');
  }
  
  rightMenuClick(item) {
	this.rightMenuItems.map(menuItem => menuItem.active = false);
	item.active = true;
  }
}
