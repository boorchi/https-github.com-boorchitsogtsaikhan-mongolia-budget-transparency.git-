import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OronnutagComponent } from './oronnutag.component';
import { RouterModule, Routes } from '@angular/router';
import { BaseNumberModule } from 'src/app/modules/base-number/base-number.module';
import { DescriptionModule } from 'src/app/modules/description/description.module';
import { IconsModule } from 'src/app/icons/icons.module';
import { YearChangeModule } from 'src/app/modules/year-change/year-change.module';

const routes: Routes = [
  {
    path: '',
    component: OronnutagComponent
  },
];

@NgModule({
  declarations: [OronnutagComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BaseNumberModule,
    DescriptionModule,
    IconsModule,
    YearChangeModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OronnutagModule { }
