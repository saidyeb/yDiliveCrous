import { Component, OnInit } from '@angular/core';
import { MockService } from '../services/mock.service';
import { DishModel } from '../models/dish';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AddressModel } from '../models/address';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent implements OnInit {

  public dishes : Array<DishModel> = []; 
  public address: AddressModel;
  public isCommandValidated : boolean;

  constructor(private mockService : MockService, 
    public toastController: ToastController) { }

  ngOnInit() {
    this.dishes = this.mockService.getSelectedDishes().map(x => Object.assign({}, x));
    this.address = {street: "", city: "", zipCode:59000}; 
    this.isCommandValidated = false;
  }

  public removeDish(dish : DishModel) {
    dish.isSelected = false;
    this.dishes.forEach( (item, index) => {
      if(item === dish) {
        this.dishes.splice(index,1); 
        this.mockService.updateSelectDish(dish);
        this.unSelectedFeedBack(dish);
        return;
      }
    });
  }

  private async unSelectedFeedBack(dish) {
    const toast = await this.toastController.create({
      color: 'dark',
      duration: 2000,
      message: `Le menu ${dish.name.toUpperCase()} est supprimé !`
    });
    await toast.present();
  }

  public validCommandDishes() : void {
     this.isCommandValidated = true;
     this.mockService.resetDishes();
  }

}
