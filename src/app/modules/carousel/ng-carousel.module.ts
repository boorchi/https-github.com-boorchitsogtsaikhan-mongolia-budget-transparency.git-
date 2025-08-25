import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { IconsModule } from 'src/app/icons/icons.module';

@NgModule({
  declarations: [CarouselComponent],
  imports: [
    CommonModule,
    CarouselModule,
    IconsModule
  ],
  exports: [
    CarouselComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NgCarouselModule { }
