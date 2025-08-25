import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { RouterModule, Routes } from '@angular/router';
import { MenuModule } from 'src/app/modules/menu/menu.module';
import { FooterModule } from '../footer/footer.module';

const routes: Routes = [
  {
    path: '',
    component: NewsComponent
  },
];

@NgModule({
  declarations: [NewsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MenuModule,
    FooterModule
  ]
})
export class NewsModule { }
