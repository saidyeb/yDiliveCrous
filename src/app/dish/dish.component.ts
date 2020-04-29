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
    return this.router.url.endsWith("/details");
  }

}
