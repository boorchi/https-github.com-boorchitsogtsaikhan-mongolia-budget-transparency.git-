import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { Constants } from 'src/app/services/constants';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-zasgiinzeel',
  templateUrl: './zasgiinzeel.component.html',
  styleUrls: ['./zasgiinzeel.component.scss']
})
export class ZasgiinzeelComponent implements OnInit {
  isDataLoaded = false;
  isSub1 = false;
  isSub2 = false;
  isName = false;
  hoverName = '';
  hoverIndex = -1;
  sub2Head;
  orlogoList = [];
  orlogoSub1List = [];
  orlogoValues = [];
  orlogoNames = [];
  orlogoSub1Values = [];
  orlogoSub1Names = [];
  zarlagaSalbar: any;
  zarlagaSalbarName: any;
  zarlagaBySalbar: any;
  zarlagaBySalbarInfo: any;
  
  zeelTuslamjList = [];
  zeelTuslamjName: any;
  zeelTuslamjAss: any;
  zeelTuslamjLoan: any;
  zeeltuslamjBySalbar: any;
  zeeltuslamjValues= [];
  
  zeeltuslamjValues1= 0;
  zeeltuslamjValues2= 0;
  zeelTuslamjNames= [];
  zeeltuslamjSub1Values = [];
  zeeltuslamjSub1Names = [];
  zeeltuslamj_assistanceValue= [];
  
  zeeltuslamj_assistanceValuePer = 0;
  befzeeltuslamj_assistanceValuePer = 0;
  zeeltuslamj_loanValue= [];
  zeeltuslamj_loanValuePer= 0;
  befzeeltuslamj_loanValuePer= 0;
  
  zeeltuslamjPer= [];
  percentChartSub = 0;

  zeelTuslamjCatList = [];

  sum = 0;
  befsum = 0;
  process = 0;
  type: number;
  zasgiinZeelPos = Constants.zasgiinZeelPos;
  colors = Constants.colorsZeel;
  params = {year: Constants.year, category: Constants.category}
  widths = [];
  slideData : any;

  assProjectCount_si = false;
  assProjectCount_width = [];
  assProjectCount_wd : number;
  
  loanProjectCount_si = false;
  loanProjectCount_width = [];
  loanProjectCount_wd : number;
  beforeYear = 0;
  screenHeight: number;
  screenWidth: number;
  mainWidth = 130;
  constructor(private mainService: MainService, private route: ActivatedRoute, private router: Router) { 
    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd) {
        if(val.url.split('?').length > 1){
        this.setQueryParam(val.url.split('?')[1]);
        }
        this.getTotalTuslamj();
        this.getTotalTuslamjCat();
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
    this.getChanges(param)
  }
  getChanges(param){
    var old = this.params["year"];
    this.beforeYear = 0;
    this.beforeYear = this.params["year"]-1;
    // if(params != old){
      // console.log("chang")
    //  this.ezaLevelDatas = []
    // }
  }

  ngOnInit(): void {
    // this.getZarlaga();
    

    this.getReleaseDate("Sheet14");
  }  
  onHover(i,section){
    this.hoverIndex = i;
    this.hoverName = section.typeName;
  }
  // main(){
  //   this.mainService.baseGet(Constants.HOST + Constants.BUDGET_ORLOGO + "?&year=" + this.params["year"] + "&category="+this.params["category"], null, true).then((result: any) => {
  //     this.orlogoList = result;
  //     result.forEach(item => {
  //       this.orlogoValues.push(item["approvedValue"]);
  //       this.orlogoNames.push(item["typeName"]);
  //     });
  //     this.sum = this.orlogoValues.reduce(function(a, b){
  //       return a + b;
  //     }, 0);
  //     this.isDataLoaded = true;
  //     this.getTotalTuslamj();
  //   }).catch((error) => {
  //     console.log(error);
  //   });
  // }

  getTotalTuslamj(){
      this.mainService.baseGet(Constants.HOST + Constants.BUDGET_ZEELTUSLAMJ_MAIN + "?&year=" + this.params["year"] + "&category="+this.params["category"], null, true).then((result: any) => {
        this.zeelTuslamjList = result; 
        this.zeeltuslamj_assistanceValuePer =0;
        this.zeeltuslamj_loanValuePer=0;
        result.forEach(item => {
          this.zeeltuslamj_assistanceValue.push(item["assistanceValue"]);
          this.zeeltuslamj_assistanceValuePer +=item["assistanceValue"];
          this.zeeltuslamj_loanValue.push(item["loanValue"]);
          this.zeeltuslamj_loanValuePer +=item["loanValue"];
          this.zeeltuslamjPer.push(item["assistancePercent"]);
        });
        this.sum = this.zeeltuslamj_assistanceValuePer + this.zeeltuslamj_loanValuePer
        this.zeeltuslamjValues = [];
        this.zeeltuslamjValues.push(parseFloat(this.zeeltuslamj_assistanceValuePer.toFixed(2)));
        this.zeeltuslamjValues.push(parseFloat(this.zeeltuslamj_loanValuePer.toFixed(2)));
        this.zeelTuslamjNames.push("Тусламж");
        this.zeelTuslamjNames.push("Зээл");
        this.isDataLoaded = true;
        this.befZell();
        this.calcPercent();
      }).catch((error) => {
        console.log(error);
      });
      
  }
  befZell(){
    this.mainService.baseGet(Constants.HOST + Constants.BUDGET_ZEELTUSLAMJ_MAIN + "?&year=" + this.beforeYear + "&category="+this.params["category"], null, true).then((result: any) => {
      this.befzeeltuslamj_assistanceValuePer = 0;
      this.befzeeltuslamj_loanValuePer = 0;
      this.befsum = 0;
      result.forEach(item => {
        this.befzeeltuslamj_assistanceValuePer +=item["assistanceValue"];
        this.befzeeltuslamj_loanValuePer +=item["loanValue"];
      });
      this.befsum = this.befzeeltuslamj_assistanceValuePer + this.befzeeltuslamj_loanValuePer;
      this.percentChartSub = isFinite(parseFloat(((this.sum - this.befsum)/this.befsum*100).toFixed(2))) ? parseFloat(((this.sum - this.befsum)/this.befsum*100).toFixed(2)) : 0.0; 

    }).catch((error) => {
      console.log(error);
    });
  }

  showSalbar(index, type){ 
    this.zeelTuslamjName = this.zeelTuslamjList[index];
    this.zeelTuslamjAss = this.zeelTuslamjList[index];
    this.zeelTuslamjLoan = this.zeelTuslamjList[index];
    this.params["type"] = type;
    this.mainService.baseGet(Constants.HOST + Constants.BUDGET_ZEELTUSLAMJ_MAIN + "?year=" + this.params["year"] + "&category="+this.params["category"] + "&type=" + this.params["type"], null, true).then((result: any) => {
      this.zeeltuslamjBySalbar = result;     
      this.mainService.scroll("description");
      
    }).catch((error) => {
      console.log(error);
    });
  } 

  getTotalTuslamjCat(){
    this.mainService.baseGet(Constants.HOST + Constants.BUDGET_ZEELTUSLAMJ_ITEM + "?&year=" + this.params["year"] + "&category="+this.params["category"], null, true).then((result: any) => {
      this.zeelTuslamjCatList = result;   
    }).catch((error) => {
      console.log(error);
    });
  }

  calcPercent(){
    this.widths=[];
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    if(this.screenWidth<=1680 && this.screenWidth>1440){
      this.mainWidth = 130;
      this.zasgiinZeelPos = Constants.zasgiinZeelPos;
    }else if( this.screenWidth<=1440 && this.screenWidth>1280){
      this.mainWidth = 100;
      this.zasgiinZeelPos = Constants.zasgiinZeelPos1366;
    }else if( this.screenWidth<=1280 && this.screenWidth>1200){
      this.mainWidth = 100;
      this.zasgiinZeelPos = Constants.zasgiinZeelPos1280;
    }else if( this.screenWidth<=1200 && this.screenWidth>1010){
      this.mainWidth = 80;
      this.zasgiinZeelPos = Constants.zasgiinZeelPos1024;
    }else{
      this.mainWidth = 130;
      this.zasgiinZeelPos = Constants.zasgiinZeelPos;
    }
    var s = [];
    var wud = this.mainWidth;
    this.zeeltuslamj_assistanceValue.forEach(function(entry,index) {
       var size = parseInt((entry / 5) + "");
       var currSize = wud + (size * 8);
      s.push("width: "+ currSize +"px; height: "+ currSize +"px;");
    });
    this.widths = s;
  }
  releaseDate: any;
  updateDate: any;
  description: any;
  getReleaseDate(code){
    this.mainService.baseGet(Constants.HOST + Constants.BUDGET_RELEASE_DATE + "?code=" + code + "&year="+this.params["year"], null, true).then((result: any) => {  
      this.updateDate = result[0].updateDate;
      this.description = result[0].description;
    }).catch((error) => {
      console.log(error);
    });
  }

  
}
