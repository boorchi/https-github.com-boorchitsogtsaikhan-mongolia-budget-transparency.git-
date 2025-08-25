import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/services/constants';
import { MainService } from 'src/app/services/main.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.scss']
})
export class InvestmentComponent implements OnInit {
  description: any;  
  
  sheet = "Sheet23";

  params = {year: Constants.year, category: Constants.category};
  datas = [];
  slideData = {type:4, datas: []};
  loList = [];
  def = '';
  show = false;
  isLoNull = false;
  isNull = false;
  colors = Constants.colors;
  year =  this.params["year"];
  event = [];
  total = "";
  ulsiinTusuv = 0;
  totalApp = 0;
  percentTotal = 0;
  perfoValueTotal = 0;
  percent = 0;
  perfoValue = 0;
  beforeYear = 0;
  zarlagaTotal = {"approvedValue":0, "perfoValue":0,"percent": 0};
  constructor(private mainService: MainService, private route: ActivatedRoute, private router: Router) { 
      router.events.subscribe((val) => {
        if(val instanceof NavigationEnd) {
          if(val.url.split('?').length > 1){
            this.setQueryParam(val.url.split('?')[1]);          
          }
          this.getDatas();
          this.getDefault();
          this.getReleaseDate(this.sheet);
        }
  });
   
  }
  ngOnInit(): void {
    
  }

  getDefault(){
    this.mainService.baseGet(Constants.HOST + Constants.BUDGET_HURUNGU_DETAIL + "?year=" + this.params["year"] + "&category=HO", null, true).then((result: []) => {
      this.slideData["datas"] = [];
      result.forEach(function(entry, index) {        
        this.slideData["datas"].push({name: entry["codeName"], number: entry["eventCount"]});
      },this);  

      result.forEach(item => {
          this.event.push(item["eventCount"]);
      });     
      this.total = this.event.reduce(function(a, b){
        return a + b;
      }, 0);

      if(result.length == 0){
        this.slideData["datas"].push({name: 'Тухайн онд харуулах өгөгдөл байхгүй байна..', number: 1});
      }

      setTimeout(function () {
        this.show = true;        
      }, 500); 
    }).catch((error) => {
      console.log(error);
    });

    this.mainService.baseGet(Constants.HOST + Constants.BUDGET_HURUNGU_DETAIL + "?year=" + this.params["year"] + "&category=LO", null, true).then((result: []) => {
      
      this.loList = result;

      if(result.length == 0){
        this.isLoNull = true;
        this.def = 'Тухайн онд харуулах өгөгдөл байхгүй байна..';
      }else{
        this.isLoNull = false;
      }

    }).catch((error) => {
      console.log(error);
    });
  }
  
  setQueryParam(param){
      var query = {};
      var params = param.split("&");
      params.forEach(function(entry) {
          var p = entry.split('=');
          this.params[p[0]] = p[1];
      },this);    
      this.getChanges(params) 
  }
  getChanges(params){
    var old = this.params["year"];
    this.beforeYear = 0;
    this.beforeYear = this.params["year"]-1;
    // if(params != old){
      // console.log("chang")
    //  this.ezaLevelDatas = []
    // }
  }
  getDatas(){   
      this.zarlagaTotal = {"approvedValue":0, "perfoValue":0,"percent": 0};
      this.mainService.baseGet(Constants.HOST + Constants.BUDGET_HURUNGU + "?year=" + this.params["year"] + "&category=" + this.params["category"], null, true).then((result: []) => {
        this.datas = result;
        if(result.length == 0){
          this.isNull = true;
        }else{
          this.isNull = false;
        }
        result.forEach(item => {
          this.zarlagaTotal["approvedValue"] += item["approvedValue"];
          this.zarlagaTotal["perfoValue"] += item["perfoValue"];
          this.zarlagaTotal["percent"] = item["percent"];
          if(item["code"] === "HO2"){
            this.ulsiinTusuv = item["approvedValue"];
            this.percent = item["percent"];
            this.perfoValue = item["perfoValue"];
          }                
        });
        this.beforePer();
      }).catch((error) => {
        console.log(error);
      });

     
    } 
    beforePer(){
      this.mainService.baseGet(Constants.HOST + Constants.BUDGET_HURUNGU + "?year=" + this.beforeYear + "&category=" + this.params["category"], null, true).then((result: []) => {
        this.totalApp = 0
        result.forEach(item => {
          this.totalApp += item["approvedValue"];
        });
        this.percentTotal = isFinite(Math.floor(((this.zarlagaTotal["approvedValue"] - this.totalApp) / this.totalApp)*100)) ? Math.floor(((this.zarlagaTotal["approvedValue"] - this.totalApp) / this.totalApp)*100) : 0;
      }).catch((error) => {
        console.log(error);
      });
    }
    releaseDate: any;
    updateDate: any;
      getReleaseDate(code){
        this.updateDate = "";
        this.description = "";
        this.mainService.baseGet(Constants.HOST + Constants.BUDGET_RELEASE_DATE + "?code=" + code + "&year=" + this.params["year"], null, true).then((result: any) => {    
          this.releaseDate = result;
          if(result.length > 0){
            this.updateDate = result[0].updateDate
            this.description = result[0].description;
          }
        }).catch((error) => {
          console.log(error);
        });
      } 
}
