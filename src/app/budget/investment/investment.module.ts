import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestmentComponent } from './investment.component';
import { RouterModule, Routes } from '@angular/router';
import { YearChangeModule } from 'src/app/modules/year-change/year-change.module';
import { IconsModule } from 'src/app/icons/icons.module';
import { DescriptionModule } from 'src/app/modules/description/description.module';
import { NgCarouselModule } from 'src/app/modules/carousel/ng-carousel.module';

const routes: Routes = [
  {
    path: '',
    component: InvestmentComponent
  },
];

@NgModule({
  declarations: [InvestmentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    YearChangeModule,
    IconsModule,
    DescriptionModule,
    NgCarouselModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InvestmentModule { }
