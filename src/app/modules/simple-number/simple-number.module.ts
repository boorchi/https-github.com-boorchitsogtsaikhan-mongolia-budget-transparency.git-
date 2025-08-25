import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleNumberComponent } from './simple-number.component';
import { IconsModule } from 'src/app/icons/icons.module';



@NgModule({
  declarations: [SimpleNumberComponent],
  imports: [
    CommonModule,
    IconsModule
  ],
  exports: [SimpleNumberComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SimpleNumberModule { }
