import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebtComponent } from './debt.component';
import { RouterModule, Routes } from '@angular/router';
import { YearChangeModule } from 'src/app/modules/year-change/year-change.module';
import { DescriptionModule } from 'src/app/modules/description/description.module';
import { NgCarouselModule } from 'src/app/modules/carousel/ng-carousel.module';
import { ChartsModule } from 'src/app/modules/charts/charts.module';

const routes: Routes = [
  {
    path: '',
    component: DebtComponent
  },
];


@NgModule({
  declarations: [DebtComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    YearChangeModule,
    DescriptionModule,
    NgCarouselModule,
    ChartsModule
  ]
})
export class DebtModule { }
