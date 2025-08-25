import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IconsModule } from 'src/app/icons/icons.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatSortModule,
    FormsModule,
    RouterModule,
    IconsModule,
    NgbModule
  ],
  exports: [
    MenuComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MenuModule { }
