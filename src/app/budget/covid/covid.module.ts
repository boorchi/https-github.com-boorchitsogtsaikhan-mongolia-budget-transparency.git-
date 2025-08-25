import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CovidComponent } from './covid.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CovidComponent
  },
];


@NgModule({
  declarations: [CovidComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CovidModule { }
