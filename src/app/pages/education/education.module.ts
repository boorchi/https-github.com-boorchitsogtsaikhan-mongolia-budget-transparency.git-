import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationComponent, SafePipe, SafeResourcePipe } from './education.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterModule } from '../footer/footer.module';
import { MenuModule } from 'src/app/modules/menu/menu.module';

const routes: Routes = [
  {
    path: '',
    component: EducationComponent
  },
];


@NgModule({
  declarations: [EducationComponent, SafePipe, SafeResourcePipe],
  imports: [
    CommonModule,
    FooterModule,
    MenuModule,
    RouterModule.forChild(routes)
  ]
})
export class EducationModule { }
