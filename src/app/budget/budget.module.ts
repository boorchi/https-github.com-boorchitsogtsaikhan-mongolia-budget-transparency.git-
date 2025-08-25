import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IconsModule } from '../icons/icons.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { BudgetMenuComponent } from './budget-menu/budget-menu.component';
import { BudgetComponent } from './budget.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import {MatGridListModule} from '@angular/material/grid-list';
import { Ng5SliderModule } from 'ng5-slider';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BudgetFooterComponent } from './budget-footer/budget-footer.component';

@NgModule({
    declarations: [
        BudgetComponent,
        BudgetMenuComponent,
        BudgetFooterComponent,

],
    imports: [
        CommonModule,
        IconsModule,
        FontAwesomeModule,
        RouterModule.forChild([
            {
        path: '', component: BudgetComponent, children: [
        { path: 'bodlogo', loadChildren: () => import('./bodlogo/bodlogo.module').then(m => m.BodlogoModule) },
        { path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule) ,data: {animation: 'Main'} },
        { path: 'oron-nutag', loadChildren: () => import('./oronnutag/oronnutag.module').then(m => m.OronnutagModule) },
        { path: 'income', loadChildren: () => import('./orlogo/orlogo.module').then(m => m.OrlogoModule) },
        { path: 'expense', loadChildren: () => import('./zarlag/zarlag.module').then(m => m.ZarlagModule) },
        { path: 'macro', loadChildren: () => import('./macro/macro.module').then(m => m.MacroModule) },
        { path: 'debt', loadChildren: () => import('./debt/debt.module').then(m => m.DebtModule) },
        { path: 'state-budget', loadChildren: () => import('./ulsiintusuv/ulsiintusuv.module').then(m => m.UlsiintusuvModule) },
        { path: 'tax', loadChildren: () => import('./ndaatgal/ndaatgal.module').then(m => m.NdaatgalModule) },
        { path: 'health-insurance', loadChildren: () => import('./edaatgal/edaatgal.module').then(m => m.EdaatgalModule) },
        { path: 'government-assistance', loadChildren: () => import('./zasgiinzeel/zasgiinzeel.module').then(m => m.ZasgiinzeelModule) },
        { path: 'investment', loadChildren: () => import('./investment/investment.module').then(m => m.InvestmentModule) },
        { path: 'incomevalue', loadChildren: () => import('./income/income.module').then(m => m.IncomeModule) },
        { path: 'orlogo-concept', loadChildren: () => import('./concept/concept.module').then(m => m.ConceptModule) },
        { path: 'zarlaga-concept', loadChildren: () => import('./debit-concept/debit-concept.module').then(m => m.DebitConceptModule) },
        { path: 'debit-concept-detail', loadChildren: () => import('./debit-concept-detail/debit-concept-detail.module').then(m => m.DebitConceptDetailModule) },
        { path: 'special-fund', loadChildren: () => import('./special-fund/special-fund.module').then(m => m.SpecialFundModule) },
        { path: 'ont-detail', loadChildren: () => import('./ont-detail/ont-detail.module').then(m => m.OntDetailModule) },
        { path: 'newinc', loadChildren: () => import('./income-new/income-new.module').then(m => m.IncomeNewModule) },
        { path: 'covid', loadChildren: () => import('./coviddemo/coviddemo.module').then(m => m.CoviddemoModule) },
        { path: 'powerbi', loadChildren: () => import('./powerbi/powerbi.module').then(m => m.PowerbiModule) },
    ]}])],
    exports: [RouterModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  })
export class BudgetModule { }
