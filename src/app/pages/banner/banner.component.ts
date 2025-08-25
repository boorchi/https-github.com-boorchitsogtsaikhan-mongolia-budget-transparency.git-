import { Component, OnInit } from '@angular/core';
import { Constants } from '../../services/constants';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  
  constructor() { }
  
  ngOnInit() {
  	
  }

  getImagePath(imagePath: string): string {
    return Constants.getImagePath(imagePath);
  }

  getBannerStyle(): any {
    return {
      'background-image': `url('${this.getImagePath('banner.jpg')}')`
    };
  }
}
