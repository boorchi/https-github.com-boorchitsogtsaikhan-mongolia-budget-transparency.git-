import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebitConceptDetailComponent } from './debit-concept-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { YearChangeModule } from 'src/app/modules/year-change/year-change.module';
import { DescriptionModule } from 'src/app/modules/description/description.module';

const routes: Routes = [
  {
    path: '',
    component: DebitConceptDetailComponent
  },
];


@NgModule({
  declarations: [DebitConceptDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    YearChangeModule,
    DescriptionModule
  ]
})
export class DebitConceptDetailModule { }
