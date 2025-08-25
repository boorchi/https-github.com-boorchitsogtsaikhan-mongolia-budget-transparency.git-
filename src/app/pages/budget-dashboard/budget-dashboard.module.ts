import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { BudgetDashboardComponent } from './budget-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: BudgetDashboardComponent
  }
];

@NgModule({
  declarations: [
    BudgetDashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class BudgetDashboardModule { }
