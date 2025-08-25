import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncomeNewComponent } from './income-new.component';
import { RouterModule, Routes } from '@angular/router';
import { YearChangeModule } from 'src/app/modules/year-change/year-change.module';
import { NgCarouselModule } from 'src/app/modules/carousel/ng-carousel.module';

const routes: Routes = [
  {
    path: '',
    component: IncomeNewComponent
  },
];

@NgModule({
  declarations: [IncomeNewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    YearChangeModule,
    NgCarouselModule
  ]
})
export class IncomeNewModule { }
