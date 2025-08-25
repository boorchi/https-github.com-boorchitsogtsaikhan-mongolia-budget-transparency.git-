import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZarlagComponent } from './zarlag.component';
import { RouterModule, Routes } from '@angular/router';
import { UlsiintusuvchartsModule } from 'src/app/modules/ulsiintusuvcharts/ulsiintusuvcharts.module';
import { YearChangeModule } from 'src/app/modules/year-change/year-change.module';
import { DescriptionModule } from 'src/app/modules/description/description.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { IconsModule } from 'src/app/icons/icons.module';
import { GridImgModule } from 'src/app/modules/grid-img/grid-img.module';
import { NgCarouselModule } from 'src/app/modules/carousel/ng-carousel.module';
import { Ng5SliderModule } from 'ng5-slider';

const routes: Routes = [
  {
    path: '',
    component: ZarlagComponent
  },
];

@NgModule({
  declarations: [ZarlagComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UlsiintusuvchartsModule,
    YearChangeModule,
    DescriptionModule,
    MatGridListModule,
    IconsModule,
    GridImgModule,
    NgCarouselModule,
    Ng5SliderModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ZarlagModule { }
