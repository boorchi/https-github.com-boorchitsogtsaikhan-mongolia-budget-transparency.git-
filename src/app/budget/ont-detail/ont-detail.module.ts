import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntDetailComponent } from './ont-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { IconsModule } from 'src/app/icons/icons.module';
import { YearChangeModule } from 'src/app/modules/year-change/year-change.module';
import { DescriptionModule } from 'src/app/modules/description/description.module';

const routes: Routes = [
  {
    path: '',
    component: OntDetailComponent
  },
];

@NgModule({
  declarations: [OntDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IconsModule,
    YearChangeModule,
    DescriptionModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OntDetailModule { }
