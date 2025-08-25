import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/services/constants';
import { MainService } from 'src/app/services/main.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-income-new',
  templateUrl: './income-new.component.html',
  styleUrls: ['./income-new.component.scss']
})
export class IncomeNewComponent implements OnInit {
  params = {year: Constants.year, category: Constants.category};
  slideData = {type:8, datas: [	{name: "0", number : " 1", year: ""}
  ,{name: "1", number : " 2"}
  ,{name: "2", number : " 3"}
  ,{name: "3", number : " 4"}
  ,{name: "4", number : " 5"}
  ]};
  show = false;
  description = ''; 
  constructor(private mainService: MainService, private route: ActivatedRoute, private router: Router) { 
    router.events.subscribe((val) => {      
      if(val instanceof NavigationEnd) {
        if(val.url.split('?').length > 1){
          this.setQueryParam(val.url.split('?')[1]);
        }        
        this.setData();
      }
  });
 
  }

  setQueryParam(param){
    var query = {};
    var params = param.split("&");
    params.forEach(function(entry) {
        var p = entry.split('=');
        this.params[p[0]] = p[1];
    },this);    
  }

  setData(){
    if(this.params["year"] == 2021){
      this.slideData = {type:8, datas: [	{name: "1", number : " 1", year: "2021"}
      ,{name: "2", number : " 2", year: "2021"}
      ,{name: "3", number : " 3", year: "2021"}
      ,{name: "4", number : " 4", year: "2021"}
      ,{name: "5", number : " 5", year: "2021"}
      ,{name: "6", number : " 6", year: "2021"}
      ]};
    }
    if(this.params["year"] == 2020){
      this.slideData = {type:8, datas: [	{name: "1", number : " 1", year: "2020"}
      ,{name: "2", number : " 2", year: "2020"}
      ,{name: "3", number : " 3", year: "2020"}
      ,{name: "4", number : " 4", year: "2020"}
      ,{name: "5", number : " 5", year: "2020"}
      ]};
    }
    if(this.params["year"] == 2019){
      
      this.slideData = {type:8, datas: [	{name: "1", number : " 1", year: "2019"}
      ,{name: "2", number : " 2", year: "2019"}
      ]};
    }
  }
  ngOnInit(): void {
  }

}
