import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { HelpComponent } from './pages/help/help.component';
import { Constants } from './services/constants';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconsModule } from './icons/icons.module';
import { FooterModule } from './pages/footer/footer.module';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HelpComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', loadChildren: () => import('./pages/homepage/homepage.module').then(m => m.HomepageModule) },
      { path: 'budget-dashboard', loadChildren: () => import('./pages/budget-dashboard/budget-dashboard.module').then(m => m.BudgetDashboardModule) },
      { path: 'legacy', loadChildren: () => import('./pages/legacy/legacy.module').then(m => m.LegacyModule) },
      { path: 'education', loadChildren: () => import('./pages/education/education.module').then(m => m.EducationModule) },
      { path: 'news', loadChildren: () => import('./pages/news/news.module').then(m => m.NewsModule) },
      { path: 'opendata', loadChildren: () => import('./opendata/opendata.module').then(m => m.OpendataModule) },
      
      {
        path: 'budget',
        loadChildren: () => import('./budget/budget.module').then(m => m.BudgetModule)
      },
      { path: 'home', redirectTo: '' },
      { path: 'cp', loadChildren: () => import('./pages/survey/survey.module').then(m => m.SurveyModule) },

      
      // { path: 'statement-data', component: StatementDataComponent },
      // { path: 'statement', component: NotfoundComponent },
      // { path: 'statement', component: StatementPageComponent },
      
    ],{ enableTracing: false, onSameUrlNavigation: 'reload' }),     
   
    // NgbModule,
    // MatListModule,
    // MatSortModule,
    // ReactiveFormsModule,
    // MatTreeModule,
    // MatIconModule,
    // DataTablesModule,
    IconsModule,
    FooterModule
    
   
  ],
  exports: [RouterModule],
  providers: [
    Constants
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
