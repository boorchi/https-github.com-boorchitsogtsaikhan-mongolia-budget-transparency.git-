import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Constants } from 'src/app/services/constants';

@Component({
  selector: 'app-bodlogo',
  templateUrl: './bodlogo.component.html',
  styleUrls: ['./bodlogo.component.scss']
})
export class BodlogoComponent implements OnInit {

  bodlogoList: any;
  colors = Constants.bodlogo_colors;
  params = {year: Constants.year, category: Constants.category};

  constructor(private mainService: MainService, private route: ActivatedRoute, private router: Router) { 
      router.events.subscribe((val) => {
        if(val instanceof NavigationEnd) {
          if(val.url.split('?').length > 1){
            this.setQueryParam(val.url.split('?')[1]);          
          }
          this.getBodlogo();
        }
      });  
  }
  
  // Add image path helper method
  getImagePath(imagePath: string): string {
    return Constants.getImagePath(imagePath);
  }

  setQueryParam(param){
    var query = {};
    var params = param.split("&");
    params.forEach(function(entry) {
        var p = entry.split('=');
        this.params[p[0]] = p[1];
    },this);    
  }

  ngOnInit(): void {
   
  }

  getColor(i){
    return this.colors[(i%3)];
  }
  getBodlogo() {
    this.bodlogoList = [];
    this.mainService.baseGet(Constants.HOST + Constants.BUDGET_BOGLOGO + "?year=" + this.params["year"], true).then((result: any) => {
      this.bodlogoList = result;
    }).catch((error) => {
      console.log(error);
    });
  }

}
