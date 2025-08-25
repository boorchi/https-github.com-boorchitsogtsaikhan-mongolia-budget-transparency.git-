import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodlogoComponent } from './bodlogo.component';
import { RouterModule, Routes } from '@angular/router';
import { YearChangeModule } from 'src/app/modules/year-change/year-change.module';

const routes: Routes = [
  {
    path: '',
    component: BodlogoComponent
  },
];

@NgModule({
  declarations: [
    BodlogoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    YearChangeModule
  ]
})
export class BodlogoModule { }
