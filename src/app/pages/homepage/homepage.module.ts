import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { RouterModule, Routes } from '@angular/router';
import { HomepopupComponent } from './homepopup/homepopup.component';
import { IconsModule } from 'src/app/icons/icons.module';
import { BaseNumberModule } from 'src/app/modules/base-number/base-number.module';
import { BannerComponent } from '../banner/banner.component';
import { FormsModule } from '@angular/forms';
import { SafeResourcePipe } from './safe-resource.pipe';
import { SafePipe } from './safe.pipe';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
];

@NgModule({
  declarations: [HomepageComponent, HomepopupComponent, BannerComponent, SafeResourcePipe, SafePipe],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IconsModule,
    FormsModule,
    BaseNumberModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomepageModule { }
