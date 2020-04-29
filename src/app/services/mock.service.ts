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
    for(let i = 0; i < 50; i++) {
      let dish : DishModel = {
        id : i, 
        name: "test name", 
        description : "test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description test description", 
        allergens: ["tefa7a", "ber9u9a", "be3wida"],
        price : 100.23549999,
        isSelected: true, 
        urlImg: "https://via.placeholder.com/150"
      }; 
      this.dishes.push(dish); 
    }
  }

  getDishes= () : Array<DishModel> => this.dishes; 

  getDish= (id: number) : DishModel => this.dishes.find(x => x.id == id);

}
