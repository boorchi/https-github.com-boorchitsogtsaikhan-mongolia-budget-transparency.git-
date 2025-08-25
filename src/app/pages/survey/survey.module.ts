import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyComponent } from './survey.component';
import { RouterModule, Routes } from '@angular/router';
import { MenuModule } from 'src/app/modules/menu/menu.module';
import { FooterModule } from '../footer/footer.module';
import { CustomPipe } from 'src/app/services/custome.pipe';
import { FormComponent } from './form/form.component';
import { DisListComponent } from './dis-list/dis-list.component';
import { DisShowComponent } from './dis-show/dis-show.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: SurveyComponent
  },
  {
    path: 'survey',
    component: FormComponent
  },
  {
    path: 'discussions',
    component: DisListComponent
  },
  {
    path: 'discussion',
    component: DisShowComponent
  },
];

@NgModule({
  declarations: [SurveyComponent, CustomPipe, FormComponent, DisListComponent, DisShowComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MenuModule,
    FooterModule,
    FormsModule
  ]
})
export class SurveyModule { }
