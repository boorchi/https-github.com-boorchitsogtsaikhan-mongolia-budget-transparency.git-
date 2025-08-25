import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoviddemoComponent } from './coviddemo.component';
import { RouterModule, Routes } from '@angular/router';
import { YearChangeModule } from 'src/app/modules/year-change/year-change.module';
import { NgCarouselModule } from 'src/app/modules/carousel/ng-carousel.module';

const routes: Routes = [
  {
    path: '',
    component: CoviddemoComponent
  },
];

@NgModule({
  declarations: [CoviddemoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    YearChangeModule,
    NgCarouselModule
  ]
})
export class CoviddemoModule { }
