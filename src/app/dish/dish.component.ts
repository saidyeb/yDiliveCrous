import { Component, OnInit, Input } from '@angular/core';


import { DishModel } from '../models/dish';
import { Router } from '@angular/router';
import { MockService } from '../services/mock.service';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})
export class DishComponent implements OnInit {

  @Input() protected dish : DishModel; 

  constructor(private mockService : MockService, private router: Router) { }

  ngOnInit() {}

  public isDetailRoute() : boolean {
    const routeMatch = this.router.url.match("details/([0-9]+)$"); 
    if(routeMatch != null && routeMatch.length > 0)
      return routeMatch[0].length > 0

    return false;
  }

  public redirectDetails(e) {
    if(e.target.localName !== "ion-checkbox")
      this.router.navigate(['home/dish/details', this.dish.id]);
  }

  public updateSelectDish(e, dish : DishModel) : void {
    e.stopPropagation();
    this.mockService.updateSelectDish(dish);
  }

}
