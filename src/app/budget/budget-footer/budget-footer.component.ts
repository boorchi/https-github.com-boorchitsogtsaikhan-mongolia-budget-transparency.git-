import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { Constants } from 'src/app/services/constants';

@Component({
  selector: 'app-budget-footer',
  templateUrl: './budget-footer.component.html',
  styleUrls: ['./budget-footer.component.scss']
})
export class BudgetFooterComponent implements OnInit {

  address = [];
  contacts = [];
  links = [];
  
  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.getAddress();
    this.getContact();
    this.getLink();
  }
  
  // Helper method for image paths
  getImagePath(imagePath: string): string {
    return Constants.getImagePath(imagePath);
  }
  
  
  getAddress() {
    this.mainService.baseGet(Constants.HOST + Constants.ADDRESS, null, true).then((result: any) => {
      if(result.length > 0){
        this.address = result;
      }
    }).catch((error) => {
      console.log(error);
    });
  }
  getContact() {
    this.mainService.baseGet(Constants.HOST + Constants.CONTACTS, null, true).then((result: any) => {
      if(result.length > 0){
        this.contacts = result;
      }
    }).catch((error) => {
      console.log(error);
    });
  }
  getLink() {
    this.mainService.baseGet(Constants.HOST + Constants.LINKS, null, true).then((result: any) => {
      if(result.length > 0){
        this.links = result;
      }
    }).catch((error) => {
      console.log(error);
    });
  }
}
