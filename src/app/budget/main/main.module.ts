import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';
import { DescriptionModule } from 'src/app/modules/description/description.module';
import { IconsModule } from 'src/app/icons/icons.module';
import { BaseNumberModule } from 'src/app/modules/base-number/base-number.module';
import { YearChangeModule } from 'src/app/modules/year-change/year-change.module';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
];

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DescriptionModule,
    IconsModule,
    BaseNumberModule,
    YearChangeModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainModule { }
