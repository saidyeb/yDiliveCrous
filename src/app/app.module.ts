import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//France format date, devise...
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { MockService } from './services/mock.service';
registerLocaleData(localeFr);

@NgModule({
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    MockService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, 
    {
      provide: LOCALE_ID,
      useValue: 'fr-FR' // for France ...
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
