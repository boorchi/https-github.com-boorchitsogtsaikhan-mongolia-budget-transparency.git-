import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PowerbiComponent } from './powerbi.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PowerbiComponent
  },
];

@NgModule({
  declarations: [PowerbiComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PowerbiModule { }
