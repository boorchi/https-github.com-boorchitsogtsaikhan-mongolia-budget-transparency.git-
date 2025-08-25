import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrlogoComponent } from './orlogo.component';
import { RouterModule, Routes } from '@angular/router';
import { OrlogoSubComponent } from './orlogo-sub/orlogo-sub.component';
import { YearChangeModule } from 'src/app/modules/year-change/year-change.module';
import { DescriptionModule } from 'src/app/modules/description/description.module';
import { ChartsModule } from 'src/app/modules/charts/charts.module';
import { IconsModule } from 'src/app/icons/icons.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { UlsiintusuvModule } from '../ulsiintusuv/ulsiintusuv.module';
import { UlsiintusuvchartsModule } from 'src/app/modules/ulsiintusuvcharts/ulsiintusuvcharts.module';

const routes: Routes = [
  {
    path: '',
    component: OrlogoComponent
  },
];

@NgModule({
  declarations: [OrlogoComponent, OrlogoSubComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    YearChangeModule,
    DescriptionModule,
    ChartsModule,
    IconsModule,
    MatGridListModule,
    UlsiintusuvchartsModule
  ],
  exports: [OrlogoSubComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OrlogoModule { }
