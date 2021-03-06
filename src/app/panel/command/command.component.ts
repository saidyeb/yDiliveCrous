import { Component, OnInit, Input } from '@angular/core';
import { AddressModel } from 'src/app/models/address';
import { DishModel } from 'src/app/models/dish';
import { Router } from '@angular/router';

@Component({
  selector: 'panel-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.scss'],
})
export class CommandComponent implements OnInit {

  @Input() public address: AddressModel; 
  @Input() public dishes: Array<DishModel>;
  @Input() public isCommandValidated: boolean;

  public totalPrice : number = 0; 

  constructor() { }

  ngOnInit() {
    this.totalPrice = this.dishes.reduce((acc, dish) => acc + dish.price, 0);
  }

  public okBtn()  {
    this.isCommandValidated = false;
    window.location.href = "/home";
  }

}
