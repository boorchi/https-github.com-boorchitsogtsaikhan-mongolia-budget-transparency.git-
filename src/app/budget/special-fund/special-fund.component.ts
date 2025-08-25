import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { MainService } from 'src/app/services/main.service';
import { Constants } from '../../services/constants';

@Component({
  selector: 'app-special-fund',
  templateUrl: './special-fund.component.html',
  styleUrls: ['./special-fund.component.scss']
})
export class SpecialFundComponent implements OnInit {
  description: any;  
  
  params = {year: 2020, category: "SUBMITTED"};
  datas = [];
  slideData = {type:7, datas: []};
  colors = Constants.colors;
  
  data = {
    "year": "2020",
    "type": "",
    "typeName": "Сангийн яам"
  };
  details = [];
  index = -1;
  
  screenHeight: number;
  screenWidth: number;

  breakpoint: any;
  
  breakpoint2: any;

  constructor(private mainService: MainService, private route: ActivatedRoute, private router: Router) { 
      router.events.subscribe((val) => {
        if(val instanceof NavigationEnd) {
          if(val.url.split('?').length > 1){
            this.setQueryParam(val.url.split('?')[1]);          
          }
          this.getDatas();
          if(this.index > -1){
            this.show(this.data, this.index);
          }
        }
  });
   
  }
  ngOnInit(): void {
    this.getWidth();
  }
  getWidth(){
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    if(this.screenWidth<=1680 && this.screenWidth>1440){
      this.breakpoint = 3;
      this.breakpoint2 = 6;
    }else if( this.screenWidth<=1440 && this.screenWidth>1200){
      this.breakpoint = 4;
      this.breakpoint2 = 8;
    }else if( this.screenWidth<=1200 && this.screenWidth>1010){
      this.breakpoint = 6;
      this.breakpoint2 = 6;
    }else{
      this.breakpoint = 3;
      this.breakpoint2 = 6;
    }
  }
  
    setQueryParam(param){
      var query = {};
      var params = param.split("&");
      params.forEach(function(entry) {
          var p = entry.split('=');
          this.params[p[0]] = p[1];
      },this);    
    }

    getDatas(){   
      this.datas = [];
      this.mainService.baseGet(Constants.HOST + Constants.BUDGET_TUSGAI + "?year=" + this.params["year"] + "&category=" + this.params["category"], null, true).then((result: []) => {
        this.datas = result;        
      }).catch((error) => {
        console.log(error);
      });
    }

    show(data, index){
      this.data = data;
      var year = this.params["year"] - 1;
      this.slideData["datas"] = [];
      this.mainService.baseGet(Constants.HOST + Constants.BUDGET_TUSGAI_DETAIL + "?year=" + this.params["year"] + "&category=" + this.params["category"]+ "&type=" + data["type"], null, true).then((result: []) => {
        this.details = result;
        result.forEach(function(entry, index) {    
          var desc = String(entry["description"]);  
          
          this.slideData["datas"].push({name: desc, number: index + 1, approvedValue: entry["approvedValue"],
          percent: entry["percent"], year: year, codeName: entry["codeName"]});

        },this);
        this.index = index;
      }).catch((error) => {
        console.log(error);
      });
    }

}
