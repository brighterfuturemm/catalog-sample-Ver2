import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule} from "@angular/http";
import { MyApp } from './app.component';
import { StatusBar} from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppState } from './app.global';
import { CacheModule } from 'ionic-cache';
import { EmailComposer } from '@ionic-native/email-composer';
import { Geolocation } from '@ionic-native/geolocation';
@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    CacheModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
   SplashScreen,
   StatusBar, 
   AppState,
   EmailComposer,
   Geolocation,
   {provide:ErrorHandler,useClass:IonicErrorHandler},
  ]
})
export class AppModule {}
