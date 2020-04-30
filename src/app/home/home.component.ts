import { Component, OnInit } from '@angular/core';
import { DishModel } from '../models/dish';
import { MockService } from '../services/mock.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent implements OnInit {

  public dishes : Array<DishModel> = [];
  
  constructor(private mockService: MockService) {
    this.initDishes();
  }

  ngOnInit() {
    this.initDishes();
  }

  private initDishes() : void {
    this.dishes = this.mockService.getDishes();
  }
  
}
