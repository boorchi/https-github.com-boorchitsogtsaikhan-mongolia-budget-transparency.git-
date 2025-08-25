import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../../../services/main.service';
import { Constants } from '../../../services/constants';

@Component({
  selector: 'app-unified-budget',
  templateUrl: './unified-budget.component.html',
  styleUrls: ['./unified-budget.component.css']
})
export class UnifiedBudgetComponent implements OnInit {

  isVisible = false;
  titleVisible = false;
  buttonsVisible: boolean[] = [false, false, false, false, false, false];
  private animationTriggered = false;

  // Unified budget data
  budgetData = {
    title: 'Нэгдсэн төсвийн тухай',
    description: 'Монгол Улсын нэгдсэн төсвийн мэдээлэл, анализ, статистик',
    sections: [
      {
        id: 1,
        title: 'Төсвийн бодлого',
        description: 'Төсвийн бодлого, стратеги, зорилтын тухай мэдээлэл',
        route: '/legacy/general-goals'
      },
      {
        id: 2,
        title: 'Төсвийн орлого',
        description: 'Төсвийн орлогын эх үүсвэр, төрөл, бүрдүүлэлт',
        route: '/legacy/financial-sources'
      },
      {
        id: 3,
        title: 'Төсвийн зарлага',
        description: 'Төсвийн зарлагын бүтэц, чиглэл, хэрэгжилт',
        route: '/legacy/sector-financing'
      },
      {
        id: 4,
        title: 'Төсвийн тэнцэл',
        description: 'Төсвийн тэнцэл, алдагдал, илүүдлийн мэдээлэл',
        route: '/legacy/indicators'
      }
    ]
  };

  constructor(
    private mainService: MainService,
    private constants: Constants,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadUnifiedBudgetData();

    // Show title with a slight delay for better effect
    setTimeout(() => {
      this.titleVisible = true;
    }, 500);

    // Start button animations after a short delay
    setTimeout(() => {
      this.showButtonsSequentially();
    }, 1200);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const scrollPosition = window.pageYOffset;
    const windowHeight = window.innerHeight;

    // Trigger buttons to appear when user scrolls to the cards section
    const cardsSection = document.querySelector('.cards-section');
    if (cardsSection) {
      const rect = cardsSection.getBoundingClientRect();
      const triggerPoint = rect.top + window.pageYOffset - windowHeight * 0.7;

      if (scrollPosition > triggerPoint && !this.animationTriggered) {
        this.animationTriggered = true;
        this.showButtonsSequentially();
      }
    }
  }

  private showButtonsSequentially() {
    // Reset all buttons first
    this.buttonsVisible = [false, false, false, false, false, false];
    
    // Show buttons with staggered animation
    this.budgetData.sections.forEach((section, index) => {
      setTimeout(() => {
        this.buttonsVisible[index] = true;
      }, index * 150); // 150ms delay between each card
    });
  }

  loadUnifiedBudgetData(): void {
    // Load unified budget data from service
    console.log('Loading unified budget data...');
  }

  onSectionClick(section: any): void {
    console.log('Section clicked:', section);
    // Navigate to the specified route
    if (section.route) {
      this.router.navigate([section.route]);
    }
  }

}
