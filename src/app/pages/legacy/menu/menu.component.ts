import { Component, OnInit, Input } from '@angular/core';
import { MainService } from '../../../services/main.service';
import { Constants } from '../../../services/constants';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input()
  menuType;
  showMenu = true
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  categories = [];
  chartType = "pie";
  
  constructor(private mainService: MainService) { }

  // Helper method for image paths
  getImagePath(imagePath: string): string {
    return Constants.getImagePath(imagePath);
  }

  ngOnInit(): void {
    this.getCategories();
  }
  

  getCategories() {
    this.mainService.baseGet(Constants.HOST + Constants.LEGALSUBTYPE, true).then((result: any) => {
      this.categories = result;
    }).catch((error) => {
      console.log(error);
    });
  }

}
