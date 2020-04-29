import { Component, OnInit } from '@angular/core';
import { MockService } from '../services/mock.service';
import { DishModel } from '../models/dish';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent implements OnInit {

  protected dishes : Array<DishModel> = []; 

  constructor(private mockService : MockService, public toastController: ToastController) { }

  ngOnInit() {
    this.dishes = this.mockService.getSelectedDishes().map(x => Object.assign({}, x));;
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

}
