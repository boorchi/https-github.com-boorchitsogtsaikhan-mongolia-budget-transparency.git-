import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EdaatgalComponent } from './edaatgal.component';
import { RouterModule, Routes } from '@angular/router';
import { EchartComponent } from './echart/echart.component';
import { YearChangeModule } from 'src/app/modules/year-change/year-change.module';
import { DescriptionModule } from 'src/app/modules/description/description.module';
// import { NgApexchartsModule } from 'ng-apexcharts';
import { IconsModule } from 'src/app/icons/icons.module';
import { SimpleNumberModule } from 'src/app/modules/simple-number/simple-number.module';

const routes: Routes = [
  {
    path: '',
    component: EdaatgalComponent
  },
];

@NgModule({
  declarations: [EdaatgalComponent, EchartComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    YearChangeModule,
    DescriptionModule,
    // NgApexchartsModule,
    IconsModule,
    SimpleNumberModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EdaatgalModule { }
