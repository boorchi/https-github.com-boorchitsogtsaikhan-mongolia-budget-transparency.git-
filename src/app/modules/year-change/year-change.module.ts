import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YearChangeComponent } from './year-change.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [YearChangeComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [YearChangeComponent]
})
export class YearChangeModule { }
