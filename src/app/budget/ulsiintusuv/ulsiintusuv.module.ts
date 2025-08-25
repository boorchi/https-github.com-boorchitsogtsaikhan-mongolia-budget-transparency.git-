import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UlsiintusuvComponent } from './ulsiintusuv.component';
import { UlsiintusuvSubComponent } from './ulsiintusuv-sub/ulsiintusuv-sub.component';
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'src/app/modules/charts/charts.module';
import { DescriptionModule } from 'src/app/modules/description/description.module';
import { YearChangeModule } from 'src/app/modules/year-change/year-change.module';
import { IconsModule } from 'src/app/icons/icons.module';
import { OrlogoModule } from '../orlogo/orlogo.module';
// import { NgApexchartsModule } from 'ng-apexcharts';
import { MatGridListModule } from '@angular/material/grid-list';
import { UlsiintusuvchartsModule } from 'src/app/modules/ulsiintusuvcharts/ulsiintusuvcharts.module';

const routes: Routes = [
  {
    path: '',
    component: UlsiintusuvComponent
  },
];

@NgModule({
  declarations: [UlsiintusuvComponent, UlsiintusuvSubComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChartsModule,
    DescriptionModule,
    YearChangeModule,
    IconsModule,
    OrlogoModule,
    // NgApexchartsModule,
    MatGridListModule,
    UlsiintusuvchartsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UlsiintusuvModule { }
