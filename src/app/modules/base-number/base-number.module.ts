import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseNumberComponent } from './base-number.component';
import { IconsModule } from 'src/app/icons/icons.module';



@NgModule({
  declarations: [BaseNumberComponent],
  imports: [
    CommonModule,
    IconsModule
  ],
  exports: [
    BaseNumberComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BaseNumberModule { }
