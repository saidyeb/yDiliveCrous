import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelComponent } from './panel.component';
import { CommandComponent } from './command/command.component';

const routes: Routes = [
  {
    path: '',
    component: PanelComponent
  }, 
  {
    path: '/valid/command',
    component: CommandComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
