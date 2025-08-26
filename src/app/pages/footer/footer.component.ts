import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/services/constants';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  contacts: any;
  links: any;
  address: any;

  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.getAddress();
    this.getContact();
    this.getLink();
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

  getImagePath(imagePath: string): string {
    return Constants.getImagePath(imagePath);
  }
}
