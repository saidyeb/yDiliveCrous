import { Component } from '@angular/core';
import { DishModel } from '../models/dish';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent {

  protected dishes : Array<DishModel> = [];
  
  constructor() {
    this.initDishes();
  }

  public initDishes() : void {
    const dish : DishModel = {
      id : 1, 
      name: "test name", 
      description : "test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description", 
      allergens: ["tefa7a", "ber9u9a", "be3wida"],
      price : 100.23549999,
      isSelected: true, 
      urlImg: "https://via.placeholder.com/150"
    }; 

    for(let i = 0; i < 50; i++)
      this.dishes.push(dish); 
  }



}
