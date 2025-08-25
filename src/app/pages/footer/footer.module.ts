import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { IconsModule } from 'src/app/icons/icons.module';



@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    IconsModule
  ],
  exports: [
    FooterComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FooterModule { }
