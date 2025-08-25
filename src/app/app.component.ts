import { Component, NgModule, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, transition, query, style, stagger, animate } from '@angular/animations';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimations', [
      transition('* <=> Main', [
        query(':enter, :leave', style({ opacity: '0' })
        , { optional: true }),
        query('.orlogo, .zarlaga, tentsel', [
          style({opacity: 0, transform: 'translateY(-100px)'}),
          stagger(-30, [
            animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
          ])
        ])
      ])
    ])
  ]
})

export class AppComponent {
  title = 'budget-front';
  get getMenus() {
    return "test";
  }
 
  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
  let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
  let max = document.documentElement.scrollHeight;
    if(pos == max )   {
      
    }
  }
}
