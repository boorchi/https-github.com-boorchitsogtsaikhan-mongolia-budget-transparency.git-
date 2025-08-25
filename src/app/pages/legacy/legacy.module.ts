import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LegacyComponent } from './legacy.component';
import { TimelineComponent } from './timeline/timeline.component';
import { SubMenuComponent } from './sub-menu/sub-menu.component';
import { MenuComponent } from './menu/menu.component';
import { IconsModule } from 'src/app/icons/icons.module';
import { RouterModule, Routes } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { SummaryComponent } from './summary/summary.component';
import { IndicatorsComponent } from './indicators/indicators.component';
import { LegalPlanComponent } from './legal-plan/legal-plan.component';
import { UnifiedBudgetComponent } from './unified-budget/unified-budget.component';
import { GeneralGoalsComponent } from './general-goals/general-goals.component';
import { FinancialSourcesComponent } from './financial-sources/financial-sources.component';
import { SectorFinancingComponent } from './sector-financing/sector-financing.component';
import { FooterModule } from 'src/app/pages/footer/footer.module';

const routes: Routes = [
  {
    path: '',
    component: LegacyComponent
  },
  {
    path: 'timeline',
    component: TimelineComponent
  },
  {
    path: 'summary',
    component: SummaryComponent
  },
  {
    path: 'indicators',
    component: IndicatorsComponent
  },
  {
    path: 'legal-plan',
    component: LegalPlanComponent
  },
  {
    path: 'unified-budget',
    component: UnifiedBudgetComponent
  },
  {
    path: 'general-goals',
    component: GeneralGoalsComponent
  },
  {
    path: 'financial-sources',
    component: FinancialSourcesComponent
  },
  {
    path: 'sector-financing',
    component: SectorFinancingComponent
  }
];


@NgModule({
  declarations: [
    LegacyComponent,
    TimelineComponent,
    SubMenuComponent,
    MenuComponent,
    SummaryComponent,
    IndicatorsComponent,
    LegalPlanComponent,
    UnifiedBudgetComponent,
    GeneralGoalsComponent,
    FinancialSourcesComponent,
    SectorFinancingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IconsModule,
    MatListModule,
    MatSelectModule,
    MatTreeModule,
    MatIconModule,
    RouterModule.forChild(routes),
    FooterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LegacyModule { }
