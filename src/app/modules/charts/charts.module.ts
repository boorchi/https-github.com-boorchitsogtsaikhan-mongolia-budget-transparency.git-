import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleComponent } from './simple/simple.component';
import { ChartsComponent } from './charts.component';
// import { NgApexchartsModule } from 'ng-apexcharts';
import { SimpleNumberModule } from '../simple-number/simple-number.module';



@NgModule({
  declarations: [ChartsComponent, SimpleComponent],
  imports: [
    CommonModule,
    // NgApexchartsModule,
    SimpleNumberModule
  ],
  exports: [ChartsComponent, SimpleComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ChartsModule { }
