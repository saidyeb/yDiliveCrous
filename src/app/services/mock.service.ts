import { Injectable } from '@angular/core';
import { DishModel } from '../models/dish';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  private dishes : Array<DishModel> = []; 

  constructor() { 
    this.initDishes();
  }

  private initDishes() : void {
    for(let i = 1; i <= 50; i++) {
      let dish : DishModel = {
        id : i, 
        name: "test name", 
        description : "test description test description test description test description test description", 
        allergens: ["tefa7a", "ber9u9a", "be3wida"],
        price : 100.23549999,
        isSelected: Math.random() >= 0.5, // random 50% true/false
        urlImg: "https://via.placeholder.com/150"
      }; 
      this.dishes.push(dish); 
    }
  }

  getDishes= () : Array<DishModel> => this.dishes; 

  getSelectedDishes= () : Array<DishModel> => 
    this.dishes.filter(x => x.isSelected); 

  getDish= (id: number) : DishModel => 
    this.dishes.find(x => x.id == id);

  updateSelectDish = (dish : DishModel) => 
    this.dishes.forEach(x => x.isSelected = x.id == dish.id ? dish.isSelected: x.isSelected);
}
