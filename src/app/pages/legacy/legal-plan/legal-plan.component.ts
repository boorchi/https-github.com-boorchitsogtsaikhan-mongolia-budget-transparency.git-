import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-legal-plan',
  templateUrl: './legal-plan.component.html',
  styleUrls: ['./legal-plan.component.css']
})
export class LegalPlanComponent implements OnInit {
  slideImages = [
    'https://via.placeholder.com/900x600?text=Slide+Image+1',
    'https://via.placeholder.com/900x600?text=Slide+Image+2',
    'https://via.placeholder.com/900x600?text=Slide+Image+3'
  ];
  currentSlide = 0;

  constructor() { }

  ngOnInit(): void {
  }

  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }

  nextSlide() {
    if (this.currentSlide < this.slideImages.length - 1) {
      this.currentSlide++;
    }
  }
}
