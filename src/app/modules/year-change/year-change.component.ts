import { Component, Input, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { NgAnimateScrollService } from 'ng-animate-scroll';

@Component({
  selector: 'module-year-change',
  templateUrl: './year-change.component.html',
  styleUrls: ['./year-change.component.css']
})
export class YearChangeComponent implements OnInit {

  @Input()
  showSelect = true;
  @Input()
  showYear = false;
  @Input()
  show = [];
  
  urlName = '';
  budgetType:boolean = false;
  yearSelect:string = this.mainService.year + " он";
  constructor(private mainService: MainService, private route: ActivatedRoute, private router: Router, private animateScrollService: NgAnimateScrollService) {  
    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd) {       
        this.urlName = val.url;   
        if(val.url.split('?').length > 1){
          this.setDatas(val.url.split('?')[1]);  
        }
      }
  });
  }

  check(year){
    if(this.showYear){
      if(this.show.indexOf(year) == -1){
        return false;
      }
    }

    return true;
  }
  ngOnInit(): void {
   
  }
  changeType(){
    var url_data = this.urlName.split('?');
    var url = url_data[0];
    var param = '';
    var category = '';
    if(url_data.length > 1){
      param = url_data[1];
    }
    
    this.budgetType =! this.budgetType;
   

    if(this.budgetType){
      category = "SUBMITTED";
    }else{
      category = "APPROVED";
    }
    var query = this.setQueryParam(param, "category", category);
    this.mainService.changeType(category);
    this.router.navigate([url], { queryParams: query});
  }
  changeYear(){    
    var url_data = this.urlName.split('?');
    var url = url_data[0];
    var param = '';
    if(url_data.length > 1){
      param = url_data[1];
    }
    var query = this.setQueryParam(param, "year", this.yearSelect.split(" ")[0]);    
    this.router.navigate([url], { queryParams: query});
  }

  setDatas(param){
    var params = param.split("&");
      params.forEach(function(entry) {
       
          var p = entry.split('=');
          if(p[0] === "year"){
            this.yearSelect = p[1] + " он";
          }
          if(p[0] === "category"){           
            this.budgetType = p[1] === "SUBMITTED";
            this.mainService.changeType(p[1]);
          }
      },this);   
  }
  
  setQueryParam(param, change, value){
    var query = {};
    var params = param.split("&");
    var find = false;
    params.forEach(function(entry) {
      var p = entry.split('=');
      if(p[0]===change){
        query[change] = value;
        find = true;
      }else{
        query[p[0]] = p[1];
      }      
    });
    if(!find){
      query[change] = value;
    }
    return query;
  }
}
