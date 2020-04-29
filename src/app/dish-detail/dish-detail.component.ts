import { Component, OnInit } from '@angular/core';
import { DishModel } from '../models/dish';
import { ActivatedRoute } from '@angular/router';
import { MockService } from '../services/mock.service';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss'],
})
export class DishDetailComponent implements OnInit {

  protected dish : DishModel;
  
  constructor(private mockService : MockService, private route: ActivatedRoute) { 
  }

  ngOnInit() {
    this.initDish();
  }

  private initDish() : void {
    const id : number = this.route.snapshot.params.id;
    this.dish = this.mockService.getDish(id);
  }

}
