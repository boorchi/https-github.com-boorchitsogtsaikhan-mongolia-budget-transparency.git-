import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, transition, query, style, stagger, animate, group } from '@angular/animations';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss'],
  animations: [
    trigger('routeAnimations', [
      transition('* => Main', [
        group([query('.main_page .m_r', [
          style({opacity: 0, transform: 'translateY(300px)'}),
          stagger(0, [
            animate('0.5s 1.5s', style({ opacity: 1, transform: 'none' }))
          ])
        ]),
        query('.main_page .m_l', [
          style({opacity: 0, transform: 'translateY(300px)'}),
          stagger(0, [
            animate('0.5s 0s', style({ opacity: 1, transform: 'none' }))
          ])
        ]),
        query('.main_page .tentsel', [
          style({opacity: 0, transform: 'translateY(300px)'}),
          stagger(0, [
            animate('0.5s 3s', style({ opacity: 1, transform: 'none' }))
          ])
        ]),
        query('.main_page .guitsetgel', [
          style({opacity: 0, transform: 'translateY(300px)'}),
          stagger(0, [
            animate('0.5s 3s', style({ opacity: 1, transform: 'none' }))
          ])
        ]),
        query('.main_page .zarlaga', [
          style({opacity: 0, transform: 'translateY(300px)'}),
          stagger(0, [
            animate('0.5s 2s', style({ opacity: 1, transform: 'none' }))
          ])
        ]),
        query('.main_page .orlogo', [
          style({opacity: 0, transform: 'translateY(300px)'}),
          stagger(0, [
            animate('0.5s 1s', style({ opacity: 1, transform: 'none' }))
          ])
        ])])
           
      ])
    ])
  ]
})
export class BudgetComponent  {
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
