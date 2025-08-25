import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpendataComponent } from './opendata.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterModule } from '../pages/footer/footer.module';
import { MenuModule } from '../modules/menu/menu.module';
import { TableComponent } from './table/table.component';
import { BoostChartComponent } from './boost-chart/boost-chart.component';
// import { NgApexchartsModule } from 'ng-apexcharts';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: '',
    component: OpendataComponent
  },
  {
    path: 'test',
    component: TestComponent
  },
];

@NgModule({
  declarations: [OpendataComponent, TableComponent, BoostChartComponent, TestComponent],
  imports: [
    CommonModule,
    FooterModule,
    MenuModule,
    // NgApexchartsModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OpendataModule { }
