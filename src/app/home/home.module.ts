import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { DishComponent } from '../dish/dish.component';

import { HomeRoutingModule } from './home-routing.module';
import { DishDetailComponent } from '../dish-detail/dish-detail.component';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    HomeRoutingModule, 
    FormsModule
  ],
  declarations: [
    HomeComponent, 
    DishComponent, 
    DishDetailComponent
  ]
})
export class HomeModule {}
