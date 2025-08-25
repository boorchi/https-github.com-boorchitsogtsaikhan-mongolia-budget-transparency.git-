import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridImgComponent } from './grid-img.component';
import { IconsModule } from 'src/app/icons/icons.module';



@NgModule({
  declarations: [GridImgComponent],
  imports: [
    CommonModule,
    IconsModule
  ],
  exports: [GridImgComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GridImgModule { }
