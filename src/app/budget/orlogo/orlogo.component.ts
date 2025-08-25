import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { Constants } from 'src/app/services/constants';
import * as CanvasJS from '../../../assets/canvasjs.min';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { HostListener } from "@angular/core";
@Component({
  selector: 'app-orlogo',
  templateUrl: './orlogo.component.html',
  styleUrls: ['./orlogo.component.scss']
})
export class OrlogoComponent implements OnInit {
  isDataLoaded = false;
  isSub1 = false;
  isSub2 = false;
  isChart = false;
  chartName = "";
  sub2Head;
  orlogoList = [];
  orlogoSub1List = [];
  
  orlogoValues = [];
  orlogoNames = [];
  orlogoSub1Values = [];
  
  orlogoSub1ValuesPer = 0;
  beforlogoSub1ValuesPer = 0;
  orlogoSub1pepoPer = 0;
  orlogoSub1Per=0;
  beforlogoSub1Per=0;

  orlogoSub1Names = [];
  isOrlogo=true;
  sum = 0;
  sum1 = 0;
  process = 0;
  prefToValue = 0;
  orlogoDetailList = [];
  orlogoDetailListPer = [];
  beforeYear = 0;
  params = {year: Constants.year, category: Constants.category};

  orlogoTotal = {
    "APPROVED": {"approvedValue":0, "perfoValue":0,"percent": 0}, 
    "SUBMITTED":{"approvedValue":0, "perfoValue":0,"percent": 0}};
    
  orlogoTotalPer = {
    "APPROVED": {"approvedValue":0, "perfoValue":0,"percentPer": 0}, 
    "SUBMITTED":{"approvedValue":0, "perfoValue":0,"percentPer": 0}};
  menuType = '';



  percent = [];
  percentPer = [];
  percentPer1 = 0;
  percentTotal = [];
  appValue = [];
  prefValue = [];
  prefValueTotal = 0;
  prefValueTotalnum:any;
  appValueTotal = [];
  appValueTotalnum:any;

  value: number = 0;
  highValue: number = 18;
  type: number;
  colors = Constants.colors;
  salbarPos = Constants.salbarPos;
  widths = [];
  // slideData : any;
  featureData = [];
  toggle :any;
  
  isZarlaga = true;

  isEza = true;
  isMain = false;
  isSalbar = false;
  isMainDe = false;

  ezaValues = [];
  ezaNames = [];
  hzDatas = [];
  miningDatas = [];
  
  beFminingDatas = [];
  hzColor = Constants.colorsHz;
  hzPos = Constants.hzPos;
  showChart = false;
  showEza = false;
  
  colors_income_ded = Constants.colors_income_ded;
  changeText1: boolean;
  changeText2: boolean;
  changeText3: boolean;
  changeText4: boolean;
  description: any;
  slideData = {type:4, datas:  [
		{name: "Гүүрийн байгууламж", text : " 13"}
		,{name: "Авто зам", text : " 143"}
		,{name: "Үер усны хангамж", text : " 117"}
		,{name: "Цахилгаан", text : " 23"}
		,{name: "Цахилгаан", text : " 23"}
		]};
  sheet = "Sheet4";
  screenHeight: number;
  screenWidth: number;
  public innerWidth: any;
  width = 160;
  height = 160;
  breakpoint: any;
  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    
    if(this.screenWidth<=1680 && this.screenWidth>1600){
      this.hzPos = [
        'left: 60px; bottom: 320px; ',
        'left: 330px; bottom: 450px; ',
        'left: 750px; bottom: 450px; ',
        'left: 1050px; bottom: 320px; ',
        'left: 200px; top: 380px; ',
        'right: 150px; top: 380px; ',
        'left: 550px; top: 170px; ',
        'left: 400px; top: 380px; '
        ];
        this.width = 150;
        this.height = 150;
        this.breakpoint = 3;
    }else if( this.screenWidth<=1600 && this.screenWidth>1440){
      this.hzPos = [
        'left: 60px; bottom: 320px; ',
        'left: 330px; bottom: 450px; ',
        'left: 750px; bottom: 450px; ',
        'left: 990px; bottom: 320px; ',
        'left: 200px; top: 380px; ',
        'right: 150px; top: 380px; ',
        'left: 550px; top: 170px; ',
        'left: 400px; top: 380px; '
        ];
        this.width = 150;
        this.height = 150;
        this.breakpoint = 4;
    }else if( this.screenWidth<=1440 && this.screenWidth>1366){
      this.hzPos = [
        'left: 30px; bottom: 320px; ',
        'left: 260px; bottom: 450px; ',
        'left: 600px; bottom: 450px; ',
        'left: 850px; bottom: 320px; ',
        'left: 200px; top: 380px; ',
        'right: 150px; top: 380px; ',
        'left: 550px; top: 170px; ',
        'left: 400px; top: 380px; '
        ];
        this.width = 140;
        this.height = 140;
        this.breakpoint = 4;
    }else if( this.screenWidth<=1366 && this.screenWidth>1200){
      this.hzPos = [
        'left: 30px; bottom: 320px; ',
        'left: 260px; bottom: 450px; ',
        'left: 540px; bottom: 450px; ',
        'left: 790px; bottom: 320px; ',
        'left: 200px; top: 380px; ',
        'right: 150px; top: 380px; ',
        'left: 550px; top: 170px; ',
        'left: 400px; top: 380px; '
        ];
        this.width = 130;
        this.height = 130;
        this.breakpoint = 4;
    }else if( this.screenWidth<=1200 && this.screenWidth>1010){
      this.hzPos = [
        'left: 30px; bottom: 320px; ',
        'left: 180px; bottom: 450px; ',
        'left: 400px; bottom: 450px; ',
        'left: 300px; bottom: 320px; ',
        'left: 200px; top: 380px; ',
        'right: 150px; top: 380px; ',
        'left: 550px; top: 170px; ',
        'left: 400px; top: 380px; '
        ];
        this.width = 130;
        this.height = 130;
        this.breakpoint = 6;
    }else{
      this.hzPos = Constants.hzPos;
      this.breakpoint = 3;
    }
  }
  constructor(private mainService: MainService, private route: ActivatedRoute, private router: Router) { 
    this.onResize();
    this.changeText1 = false;
    this.changeText2 = false;
    this.changeText3 = false;
    this.changeText4 = false;
    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd) {
        if(val.url.split('?').length > 1){
          this.setQueryParam(val.url.split('?')[1]);          
        }
        this.getOrlogo();
        this.getOrlogoHz();
        this.getReleaseDate(this.sheet);
      }
  });

    this.mainService.budgetOrlogoSub.subscribe(data => {  
      if(data === 1){
        this.orlogoTo();
      }
     
      this.isChart = true;
      this.chartName = this.orlogoList[data].typeName;
      this.getOrlogoYear(this.orlogoList[data].type);
      this.mainService.scroll('description');
    });

    this.mainService.budgetOrlogoSub1.subscribe(data => {  
      this.isSub2 = true;
      this.sub2Head = this.orlogoSub1Names[data];
      this.orlogoDetail(this.orlogoSub1List[data]["level"]);      
     
    });
  }

  ngOnInit(): void {
    this.isMain=true;
    this.isMainDe=true;
    this.menuType = 'main';   
  
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
    if(params != old){
      this.orlogoDetailList = [];
      this.orlogoDetailList = null;
      this.orlogoSub1List = [];
      this.isSub1 = false;
    }
  }

  getOrlogo(){
    console.log(this.params["year"])
    this.orlogoValues = [];
    this.orlogoNames = [];
    this.mainService.baseGet(Constants.HOST + Constants.BUDGET_ORLOGO + "?year=" + this.params["year"] + "&category="+this.params["category"], null, true).then((result: any) => {
      this.orlogoList = result;
      
    this.orlogoTotal = {
      "APPROVED": {"approvedValue":0, "perfoValue":0,"percent": 0}, 
      "SUBMITTED":{"approvedValue":0, "perfoValue":0,"percent": 0}};

      result.forEach(item => {
        this.orlogoValues.push(item["approvedValue"]);
        this.orlogoNames.push(item["typeName"]);
        this.orlogoTotal[this.params["category"]]["approvedValue"] += item["approvedValue"];
        this.orlogoTotal[this.params["category"]]["perfoValue"] += item["perfoValue"];
      });
      if(result.length == 0){
        this.showChart = false;
      }
      var percent = ((this.orlogoTotal[this.params["category"]]["perfoValue"] / this.orlogoTotal[this.params["category"]]["approvedValue"]) *  100).toFixed(2) ;
      this.orlogoTotal[this.params["category"]]["percent"] = isFinite(parseFloat(percent)) ? parseFloat(percent) : 0; 
      this.isDataLoaded = true;
      this.showChart = true;
      this.getBeforeYear();
    }).catch((error) => {
      console.log(error);
    });

   
  }

  getBeforeYear(){
    this.mainService.baseGet(Constants.HOST + Constants.BUDGET_ORLOGO + "?year=" + this.beforeYear + "&category="+this.params["category"], null, true).then((result: any) => {
      this.orlogoTotalPer = {
        "APPROVED": {"approvedValue":0, "perfoValue":0,"percentPer": 0}, 
        "SUBMITTED":{"approvedValue":0, "perfoValue":0,"percentPer": 0}};
  
        result.forEach(item => {
          this.orlogoTotalPer[this.params["category"]]["approvedValue"] += item["approvedValue"];
        });
        var percent = (((this.orlogoTotal[this.params["category"]]["approvedValue"] - this.orlogoTotalPer[this.params["category"]]["approvedValue"])/ this.orlogoTotalPer[this.params["category"]]["approvedValue"]) *  100).toFixed(2) ;
       
        this.orlogoTotalPer[this.params["category"]]["percentPer"] = 0;
        this.orlogoTotalPer[this.params["category"]]["percentPer"] = isFinite(parseFloat(percent)) ? parseFloat(percent) : 0;
        
      }).catch((error) => {
        console.log(error);
      });
  }
  
  getOrlogoHz(){
    this.mainService.baseGet(Constants.HOST + Constants.BUDGET_ORLOGO_HZ + "?year=" + this.params["year"] + "&category="+this.params["category"], null, true).then((result: any) => {
      this.hzDatas = result;
    }).catch((error) => {
      console.log(error);
    });
    this.mainService.baseGet(Constants.HOST + Constants.BUDGET_ORLOGO_UURHAI + "?year=" + this.params["year"] + "&category="+this.params["category"], null, true).then((result: any) => {
      this.miningDatas = result;
    }).catch((error) => {
      console.log(error);
    });
  }
 

  getOrlogoYear(type){
    this.mainService.baseGet(Constants.HOST + Constants.BUDGET_ORLOGO_YEARS + "?year=" + this.params["year"] + "&category="+this.params["category"] + "&type=" + type, null, true).then((result: any) => {
      var datas = [];
      result.forEach((element, index, array) => {
        var value = {        
          name: element.year,
          showInLegend: true,  
          color: "#ffc705", 
          indexLabel: "{y}",
          indexLabelFontColor: "#fff",
          indexLabelPlacement: "inside",
          dataPoints: [{x: index, y: element.approvedValue, label:  element.year}]
        }  
        datas.push(value);
        if(index === array.length - 1) {
          this.render(datas);
        }
      });
      this.isDataLoaded = true;
    }).catch((error) => {
      console.log(error);
    });
  }
  perPer1: any;
  orlogo1lenth:any;
  orlogoTo(){
    this.orlogoSub1Values = [];
    this.orlogoSub1Names = [];
    this.mainService.baseGet(Constants.HOST + Constants.BUDGET_ORLOGO_TO + "?year=" + this.params["year"] + "&category="+this.params["category"], null, true).then((result: any) => {
      this.orlogoSub1List = result;
      this.orlogoSub1pepoPer = 0;
      this.orlogoSub1ValuesPer = 0;
      result.forEach(item => {
        this.orlogoSub1Values.push(item["approvedValue"]);
        this.orlogoSub1ValuesPer +=item["approvedValue"];
        this.orlogoSub1pepoPer +=item["perfoValue"];
        this.orlogoSub1Names.push(item["levelName"]);
      });
      var percent = ((this.orlogoSub1pepoPer / this.orlogoSub1ValuesPer) *  100).toFixed(2) ;
      this.orlogoSub1Per = isFinite(parseFloat(percent)) ? parseFloat(percent) : 0; 
      this.sum1 = this.orlogoSub1Values.reduce(function(a, b){
        return a + b;
      }, 0);
      this.isSub1 = true;
      this.beforeOrlogoTo();
    }).catch((error) => {
      console.log(error);
    });
  }
  beforeOrlogoTo(){
    this.mainService.baseGet(Constants.HOST + Constants.BUDGET_ORLOGO_TO + "?year=" + this.beforeYear + "&category="+this.params["category"], null, true).then((result: any) => {
      this.beforlogoSub1ValuesPer = 0;
      result.forEach(item => {
        this.beforlogoSub1ValuesPer +=item["approvedValue"];
      });

      var percent = (((this.sum1-this.beforlogoSub1ValuesPer) / this.beforlogoSub1ValuesPer) *  100).toFixed(2) ;
      this.beforlogoSub1Per = 0;
      this.beforlogoSub1Per =isFinite(parseFloat(percent)) ? parseFloat(percent) : 0; 
    }).catch((error) => {
      console.log(error);
    });
  }

  orlogoDetail(level){
    this.mainService.baseGet(Constants.HOST + Constants.BUDGET_ORLOGO_DETAIL + "?year=" + this.params["year"] + "&category="+this.params["category"] + "&level=" + level, null, true).then((result: any) => {
        this.orlogoDetailList = result;
        this.mainService.scroll("orlogo-sub");
    }).catch((error) => {
      console.log(error);
    });

    this.mainService.baseGet(Constants.HOST + Constants.BUDGET_ORLOGO_DETAIL + "?year=" + this.beforeYear + "&category="+this.params["category"] + "&level=" + level, null, true).then((result: any) => {
      this.orlogoDetailListPer = result;
    }).catch((error) => {
      console.log(error);
    });
  }
  
render(datas){
  let chart = new CanvasJS.Chart("chartContainer", {
    
    backgroundColor: "transparent",
    animationEnabled: true,
    exportEnabled: true,
    title: {
      text: ""
    },
    axisY:{
      title: "",
      gridThickness: 1,
      gridColor: "#eee"
    },
    data: datas
  });    
  chart.render();
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
  orlogo(){
    this.isEza=true;
    this.isSalbar=false;
  }

  ezaClick(){
    this.isSalbar=false;
    this.isEza=true;
    this.isMain=false;
    this.isMainDe=false
    this.getOrlogoEza();
  }

  getOrlogoEza(){

  }

  salbar(){
    this.isMain=true;
    this.isSalbar=true;
    this.isEza=false;
    this.isMainDe=false;
  }

  changeType(type){
    this.isDataLoaded = type !== 'hz';  
    this.showChart = type === 'hz';
    
    this.showChart = true;
    this.menuType = type;

    if(type === 'hz'){
      this.sheet = "Sheet21";      
    }else{
      this.sheet = "Sheet4"; 
    }
    this.getReleaseDate(this.sheet);
  }
  getNumber(text){
    return text.slice(0, text.indexOf(' '));
  }
  getType(){
    return this.mainService.type == "APPROVED"?"Гүйцэтгэл":"Өмнөх оноос";
  }
  getPercentBef(item){
    // console.log(item);
    var data = 0;
    // this.beFminingDatas.forEach(function(entry, index) {    
      // console.log(entry);
        // data = Math.floor(parseFloat(((item.total.slice(0, item.total.indexOf(' ')) - entry.total.slice(0, entry.total.indexOf(' '))) / item.total.slice(0, item.total.indexOf(' '))).toFixed(2)) * 100);
    // }); 
    return data;
  } 
}
