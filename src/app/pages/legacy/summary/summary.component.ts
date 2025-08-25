import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  isVisible = false;
  titleVisible = false;
  buttonsVisible: boolean[] = [false, false, false, false, false, false];
  private animationTriggered = false;

  constructor() { }

  ngOnInit(): void {
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
    this.buttonsVisible.forEach((visible, index) => {
      setTimeout(() => {
        this.buttonsVisible[index] = true;
      }, index * 150); // 150ms delay between each card
    });
  }

}
