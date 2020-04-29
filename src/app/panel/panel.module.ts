import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PanelRoutingModule } from './panel-routing.module';


@NgModule({
  declarations: [PanelComponent],
  imports: [
    PanelRoutingModule,
    CommonModule, 
    IonicModule, 
    FormsModule
  ]
})
export class PanelModule { }
