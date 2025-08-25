import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncomeComponent } from './income.component';
import { RouterModule, Routes } from '@angular/router';
import { YearChangeModule } from 'src/app/modules/year-change/year-change.module';

const routes: Routes = [
  {
    path: '',
    component: IncomeComponent
  },
];

@NgModule({
  declarations: [IncomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    YearChangeModule
  ]
})
export class IncomeModule { }
