import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZasgiinzeelComponent } from './zasgiinzeel.component';
import { RouterModule, Routes } from '@angular/router';
import { YearChangeModule } from 'src/app/modules/year-change/year-change.module';
import { DescriptionModule } from 'src/app/modules/description/description.module';
import { ZasgiinzeelChartComponent } from './zasgiinzeel-chart/zasgiinzeel-chart.component';
import { ZasgiinzeelSubChartComponent } from './zasgiinzeel-sub-chart/zasgiinzeel-sub-chart.component';
import { ZasgiinzeelSubComponent } from './zasgiinzeel-sub/zasgiinzeel-sub.component';
// import { NgApexchartsModule } from 'ng-apexcharts';
import { IconsModule } from 'src/app/icons/icons.module';

const routes: Routes = [
  {
    path: '',
    component: ZasgiinzeelComponent
  },
];

@NgModule({
  declarations: [ZasgiinzeelComponent, ZasgiinzeelChartComponent, ZasgiinzeelSubChartComponent, ZasgiinzeelSubComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    YearChangeModule,
    DescriptionModule,
    // NgApexchartsModule,
    IconsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ZasgiinzeelModule { }
