import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecialFundComponent } from './special-fund.component';
import { RouterModule, Routes } from '@angular/router';
import { YearChangeModule } from 'src/app/modules/year-change/year-change.module';
import { NgCarouselModule } from 'src/app/modules/carousel/ng-carousel.module';

const routes: Routes = [
  {
    path: '',
    component: SpecialFundComponent
  },
];

@NgModule({
  declarations: [SpecialFundComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    YearChangeModule,
    NgCarouselModule
  ]
})
export class SpecialFundModule { }
