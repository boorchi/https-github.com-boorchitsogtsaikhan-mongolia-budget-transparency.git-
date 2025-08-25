import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Constants } from '../../services/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  urlName = '';
  @Input()
  menu;

  isMobile = false
  constructor(private router: Router) { 
    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd) {
        this.urlName = val.url;
      }
  });
  }

  ngOnInit(): void {
  }

  // Helper method for image paths
  getImagePath(imagePath: string): string {
    return Constants.getImagePath(imagePath);
  }

}
