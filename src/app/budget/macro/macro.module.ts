import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MacroComponent } from './macro.component';
import { RouterModule, Routes } from '@angular/router';
import { DescriptionModule } from 'src/app/modules/description/description.module';

const routes: Routes = [
  {
    path: '',
    component: MacroComponent
  },
];

@NgModule({
  declarations: [MacroComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DescriptionModule
  ]
})
export class MacroModule { }
