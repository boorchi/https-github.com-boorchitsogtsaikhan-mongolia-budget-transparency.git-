import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UlsiintusuvchartsComponent } from './ulsiintusuvcharts.component';
import { IconsModule } from 'src/app/icons/icons.module';
// import { NgApexchartsModule } from 'ng-apexcharts';



@NgModule({
  declarations: [UlsiintusuvchartsComponent],
  imports: [
    CommonModule,
    IconsModule,
    // NgApexchartsModule
  ],
  exports: [UlsiintusuvchartsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UlsiintusuvchartsModule { }
