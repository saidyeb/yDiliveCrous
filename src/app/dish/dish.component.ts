import { Component, OnInit, Input } from '@angular/core';


import { DishModel } from '../models/dish';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})
export class DishComponent implements OnInit {

  @Input() protected dish : DishModel; 

  constructor(private router: Router) { }

  ngOnInit() {}

  public isDetailRoute() : boolean {
    const routeMatch = this.router.url.match("details/([0-9]+)$"); 
    if(routeMatch != null && routeMatch.length > 0)
      return routeMatch[0].length > 0

    return false;
  }

}
