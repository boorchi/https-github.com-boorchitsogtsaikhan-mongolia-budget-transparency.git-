import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebitConceptComponent } from './debit-concept.component';
import { RouterModule, Routes } from '@angular/router';
import { YearChangeModule } from 'src/app/modules/year-change/year-change.module';
import { NgCarouselModule } from 'src/app/modules/carousel/ng-carousel.module';

const routes: Routes = [
  {
    path: '',
    component: DebitConceptComponent
  },
];


@NgModule({
  declarations: [DebitConceptComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    YearChangeModule,
    NgCarouselModule
  ]
})
export class DebitConceptModule { }
