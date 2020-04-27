import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HomeComponent } from './home.component';

import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule {}
