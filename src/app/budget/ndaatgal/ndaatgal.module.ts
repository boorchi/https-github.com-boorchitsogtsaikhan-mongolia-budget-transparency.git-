import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NdaatgalComponent } from './ndaatgal.component';
import { RouterModule, Routes } from '@angular/router';
import { NchartComponent } from './nchart/nchart.component';
import { YearChangeModule } from 'src/app/modules/year-change/year-change.module';
import { DescriptionModule } from 'src/app/modules/description/description.module';
import { GridImgModule } from 'src/app/modules/grid-img/grid-img.module';
// import { NgApexchartsModule } from 'ng-apexcharts';
import { SimpleNumberModule } from 'src/app/modules/simple-number/simple-number.module';

const routes: Routes = [
  {
    path: '',
    component: NdaatgalComponent
  },
];

@NgModule({
  declarations: [NdaatgalComponent, NchartComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    YearChangeModule,
    DescriptionModule,
    GridImgModule,
    // NgApexchartsModule,
    SimpleNumberModule

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NdaatgalModule { }
