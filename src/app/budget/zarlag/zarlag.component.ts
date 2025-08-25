import { Component, OnInit } from '@angular/core';
import { Options, LabelType } from 'ng5-slider';
import { MainService } from 'src/app/services/main.service';
import { Constants } from 'src/app/services/constants';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import * as CanvasJS from '../../../assets/canvasjs.min';

@Component({
  selector: 'app-zarlag',
  templateUrl: './zarlag.component.html',
  styleUrls: ['./zarlag.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class ZarlagComponent implements OnInit {
  
  zarlagaTotal = {
    "APPROVED": {"approvedValue":0, "perfoValue":0,"percent": 0}, 
    "SUBMITTED":{"approvedValue":0, "perfoValue":0,"percent": 0}};
  menuType = '';
  zarlagaSalbar: any;
  zarlagaSalbarName: any;
  zarlagaBySalbar= [];
  zarlagaBySalbarInfo= [];
  zarlagaBySalbarOther= [];
  zarlagaByDedButets =[];
  niigmiinHamgaalal = [];
  niigmiinHamgaalalChild = [];
  
  durList = [{code:"goemp", text:"Төрийн албан хаагч"},{code:"mother", text:"Эх"},{code:"impairment", text:"Хөгжлийн бэрхшээлтэй иргэн"}, 
  {code:"herdsman", text:"Малчин"}, {code:"chief", text:"Ахмад настан"}, {code:"child", text:"Хүүхэд"}];
  activeDur = "";
  activeDurText = "";

  percent = [];
  percentTotal = [];
  appValue = [];
  prefValue = [];
  prefValueTotal = 0;
  prefValueTotalnum:any;
  appValueTotal = [];
  appValueTotalnum:any;

  value: number = 0;
  highValue: number = 18;
  params = {year: Constants.year, category: Constants.category}
  type: number;
  options: Options = {
    floor: 0,
    ceil: 18,
    translate: (value: number, label: LabelType): string => {           
          return value + " нас";        
    }
  };
  colors = Constants.colors;
  ezacolors = Constants.bodlogo_colors;
  salbarPos = Constants.salbarPos;
  widths = [];
  slideData : any;
  slideData1 : any;
  slideData2 : any;
  slideData3 : any;
  slideData4 : any;
  slideData5 : any;
  featureData = [];
  toggle :any;
  
  isZarlaga = true;

  isEza = true;
  isMain = false;
  isSalbar = false;
  isMainDe = false;

  befYear = 0;
  sheet = "Sheet5";
  percentEza: any;
  ezaValues = [];
  ezaNames = [];
  isOrlogo = false;
  showChart = false;
  showEza = false;
  public innerWidth: any;
  
  screenHeight: number;
  screenWidth: number;

  breakpoint: any;
  breakpoint1: any;
  constructor(private mainService: MainService, private route: ActivatedRoute, private router: Router) { 
   
    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd) {
        if(val.url.split('?').length > 1){
          this.setQueryParam(val.url.split('?')[1]);          
        }
        this.getZarlaga();
        this.getBudget();
        this.getZarlagaEza();
        this.showEzaLevel(this.currentEza);
        this.getReleaseDate(this.sheet);
      }
  });
  }
  orlogo(){
    this.isEza=true;
    this.isSalbar=false;
  }
  salbar(){
    this.isMain=true;
    this.isSalbar=true;
    this.isEza=false;
    this.isMainDe=false;
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
  ngOnInit(): void {
    this.getWidth();
    this.isMain=true;
    this.isMainDe=true;
    this.menuType = 'main';
    this.innerWidth = window.innerWidth;
  }

  ezaClick(){
    this.isSalbar=false;
    this.isEza=true;
    this.isMain=false;
    this.isMainDe=false
    this.getZarlagaEza();
    this.mainService.scroll('description');
  }
  
  getChanges(params){
    var old = this.params["year"];
    this.befYear = 0;
    this.befYear = this.params["year"]-1;
    if(params != old){
      // console.log("chang")
    //  this.ezaLevelDatas = []
    }
  }

  getZarlaga() {    
    this.mainService.baseGet(Constants.HOST + Constants.BUDGET_ZARLAGA + "?year=" + this.params["year"] + "&category="+this.params["category"], null, true).then((result: any) => {
    
      this.appValue = [];  
      this.zarlagaSalbar = result;  
          result.forEach(item => {
            this.appValue.push(item["approvedValue"]);
          });
          this.appValueTotal = this.appValue.reduce(function(a, b){
            return a + b;
          }, 0);
        //  this.calcPercent();   
         this.onResize(event);
    }).catch((error) => {
      console.log(error);
    });
  }

  getBudget() {    
    this.mainService.baseGet(Constants.HOST + Constants.BUDGET_MAIN + "?year=" + this.params["year"], null, true).then((result: any) => {     
      result.forEach(item => {
        if(item.code === "OUT"){
          this.zarlagaTotal[item.type]["approvedValue"] = item["approvedValue"];
          this.zarlagaTotal[item.type]["perfoValue"] = item["perfoValue"];
          this.zarlagaTotal[item.type]["percent"] = Number(item["percent"]).toFixed(2);
        }
      });
      this.showChart = true;
    }).catch((error) => {
      console.log(error);
    });
  }
  ezaDatas = [];
  eFezaDatas = [];
  currentEza = {};
  ezaLevelDatas = [];
  befezaLevelDatas = [];
  getZarlagaEza() {    
    this.mainService.baseGet(Constants.HOST + Constants.BUDGET_ZARLAGA_EZA + "?year=" + this.params["year"] + "&category="+this.params["category"], null, true).then((result: any) => {
      this.ezaDatas = result;   
      this.beforZarlagaEza();
    }).catch((error) => {
    });
  }
  beforZarlagaEza(){
    this.mainService.baseGet(Constants.HOST + Constants.BUDGET_ZARLAGA_EZA + "?year=" + this.befYear + "&category="+this.params["category"], null, true).then((result: any) => {
      this.eFezaDatas = result; 
    }).catch((error) => {
    });
  }

  showEzaLevel(data){
    this.currentEza = data;
    this.mainService.baseGet(Constants.HOST + Constants.BUDGET_ZARLAGA_EZA_LEVEL+ "?year=" + this.params["year"] + "&category="+this.params["category"] + "&level="+data['level'], null, true).then((result: any) => {
      this.ezaLevelDatas = result;
      this.beforeShowEzaLevel(data);
    }).catch((error) => {
    });
  }
  beforeShowEzaLevel(data){
    this.mainService.baseGet(Constants.HOST + Constants.BUDGET_ZARLAGA_EZA_LEVEL+ "?year=" + this.befYear + "&category="+this.params["category"] + "&level="+data['level'], null, true).then((result: any) => {
      this.befezaLevelDatas = result;
    }).catch((error) => {
    });
  }
  getPercentEza(salbar){
    var data = 0;
    this.eFezaDatas.forEach(function(entry, index) {        
      if(salbar["level"] === entry["level"]){        
        data = Math.floor(parseFloat(((salbar.approvedValue - entry.approvedValue) / entry.approvedValue).toFixed(2)) * 100);
      }
    }); 
    return data;
  }
  getPercentEzaLevel(item){
    var data = 0;
    this.befezaLevelDatas.forEach(function(entry, index) { 
      if(item["code"] === entry["code"]){         
        data = Math.floor(parseFloat(((item.approvedValue - entry.approvedValue) / entry.approvedValue).toFixed(2)) * 100);
      }
    }); 
    return data;
  }

  render(datas){ 
    let chart = new CanvasJS.Chart("ezaChart", {
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

  showSalbar(index, type){ 
    this.zarlagaSalbarName = this.zarlagaSalbar[index];
    this.params["type"] = type;
    this.mainService.baseGet(Constants.HOST + Constants.BUDGET_ZARLAGA_BY_SALBAR + "?year=" + this.params["year"] + "&category="+this.params["category"] + "&type=" + this.params["type"], null, true).then((result: any) => {
      this.zarlagaBySalbar = result;       
      this.showSalbarInfo(index, type);
      this.showSalbarOther(index, type);
      this.getNiigmiinhamgaalal(type);
      this.mainService.scroll('description');
    }).catch((error) => {
      console.log(error);
    });
  }
  
  showSalbarInfo(index, type){   
    this.zarlagaSalbarName = this.zarlagaSalbar[index];
    this.params["type"] = type;
    this.mainService.baseGet(Constants.HOST + Constants.BUDGET_ZARLAGA_BY_SALBAR_INFO + "?year=" + this.params["year"] + "&category="+this.params["category"] + "&type=" + this.params["type"], null, true).then((result: any) => {
      this.zarlagaBySalbarInfo = result; 
      var datas = [];
      var features = [];
      result.forEach(element => {
        if(element.code === "event"){
          datas.push(element);
        }
        if(element.code === "feature"){
          features.push(element);
        }
      }); 
      this.slideData1 = {type:1, datas: datas};
   
      this.featureData = features;
      
      
    }).catch((error) => {
      console.log(error);
    });
  }

  showSalbarOther(index, type){   
    this.zarlagaSalbarName = this.zarlagaSalbar[index];
    this.params["type"] = type;
    this.mainService.baseGet(Constants.HOST + Constants.BUDGET_ZARLAGA_BY_SALBAR_OTHER + "?year=" + this.params["year"] + "&category="+this.params["category"] + "&type=" + this.params["type"], null, true).then((result: any) => {
      // this.slideData1["datas"] = [];
      var datas = [];
      
      result.forEach(function(entry, index) {   
        datas.push({budget: entry["budget"], events: entry["events"],purpose: entry["purpose"] ,number: index + 1});
      }); 
      this.slideData1 = {type:9, datas: datas};
     
    }).catch((error) => {
      console.log(error);
    });
  }
  
  getList(text){
    return text.split("|");
  }

  getNiigmiinhamgaalal(code, text = null){
    this.activeDur = code;
    this.activeDurText = text;
    this.params["code"] = code;
    this.mainService.baseGet(Constants.HOST + Constants.BUDGET_NIIGMIINHAMGAALAL + "?year=" + this.params["year"] + "&category="+this.params["category"] + "&code=" + this.params["code"], null, true).then((result: any) => {
      if(text){
        if(code === "child"){
          this.niigmiinHamgaalalChild = result; 
          this.niigmiinHamgaalal = [];
        }else{
          this.slideData = {type:2, datas: Object.keys(result).map((key) => [key, result[key]])};     
          this.niigmiinHamgaalal =  this.slideData.datas;
          this.niigmiinHamgaalalChild = [];  
        }
      }else{
        this.niigmiinHamgaalal = [];
        this.niigmiinHamgaalalChild = [];  
      }
    }).catch((error) => {
      console.log(error);
    });
  }

  changeType(type){
    // this.calcPercent();
    this.menuType = type;
    this.onResize(event);
    if(type === 'salbar'){
      this.sheet = "Sheet6";      
    }else{
      this.sheet = "Sheet5"; 
    }
    this.getReleaseDate(this.sheet);
  }
  onResize(event){
    event.target.innerWidth; // window width
    // console.log(event.target.innerWidth);
    if(event.target.innerWidth<=1680 && this.screenWidth>1600){
      var s = [];
      this.zarlagaSalbar.forEach(function(entry) {
         var size = parseInt((entry.calcPercent / 5) + "");
         var currSize = 120 + (size * 15);
        s.push("width: "+ currSize +"px; height: "+ currSize +"px;");
      });
      this.widths = s;
     
    // console.log(this.widths);
    }else if( this.screenWidth<=1600 && this.screenWidth>1440){
      var s = [];
      this.zarlagaSalbar.forEach(function(entry) {
         var size = parseInt((entry.calcPercent / 5) + "");
         var currSize = 110 + (size * 15);
        s.push("width: "+ currSize +"px; height: "+ currSize +"px;");
      });
      this.widths = s;
      
    }else if( this.screenWidth<=1440 && this.screenWidth>1366){
      var s = [];
      this.zarlagaSalbar.forEach(function(entry) {
         var size = parseInt((entry.calcPercent / 5) + "");
         var currSize = 110 + (size * 15);
        s.push("width: "+ currSize +"px; height: "+ currSize +"px;");
      });
      this.widths = s;
     
    }else if( this.screenWidth<=1366 && this.screenWidth>1200){
      var s = [];
      this.zarlagaSalbar.forEach(function(entry) {
         var size = parseInt((entry.calcPercent / 5) + "");
         var currSize = 100 + (size * 15);
        s.push("width: "+ currSize +"px; height: "+ currSize +"px;");
      });
      this.widths = s;
    }else if( this.screenWidth<=1200 && this.screenWidth>1010){
      var s = [];
      this.zarlagaSalbar.forEach(function(entry) {
         var size = parseInt((entry.calcPercent / 5) + "");
         var currSize = 80 + (size * 15);
        s.push("width: "+ currSize +"px; height: "+ currSize +"px;");
      });
      this.widths = s;
    }else{
      var s = [];
      this.zarlagaSalbar.forEach(function(entry) {
         var size = parseInt((entry.calcPercent / 5) + "");
         var currSize = 130 + (size * 15);
        s.push("width: "+ currSize +"px; height: "+ currSize +"px;");
        
      });
      this.widths = s;
    }
  }

  getWidth(){
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    console.log(this.screenHeight);
    console.log(this.screenWidth);
    if(this.screenWidth<=1680 && this.screenWidth>1440){
      this.salbarPos =  [
        'right: 350px; top: 330px; ',
        'right: 100px; top: 150px; ',
        'right: 500px; top: 170px; ',
        'left: 100px; top: 150px; ',
        'left: 200px; top: 380px; ',
        'right: 150px; top: 380px; ',
        'left: 350px; top: 170px; ',
        'left: 400px; top: 380px; '
        ];
        console.log("test");
      this.breakpoint = 3;
      this.breakpoint1 = 3;
    }else if( this.screenWidth<=1440 && this.screenWidth>1366){
      this.salbarPos =  [
        'right: 350px; top: 330px; ',
        'right: 100px; top: 150px; ',
        'right: 300px; top: 100px; ',
        'left: 100px; top: 150px; ',
        'left: 200px; top: 380px; ',
        'right: 150px; top: 380px; ',
        'left: 350px; top: 170px; ',
        'left: 350px; top: 340px; '
        ];
      this.breakpoint = 3;
      this.breakpoint1 = 3;
    }else if( this.screenWidth<=1366 && this.screenWidth>1200){
      this.salbarPos =  [
        'right: 350px; top: 330px; ',
        'right: 100px; top: 150px; ',
        'right: 300px; top: 100px; ',
        'left: 100px; top: 150px; ',
        'left: 100px; top: 380px; ',
        'right: 150px; top: 380px; ',
        'left: 250px; top: 170px; ',
        'left: 300px; top: 340px; '
        ];
      this.breakpoint = 3;
      this.breakpoint1 = 3;
    }else if( this.screenWidth<=1200 && this.screenWidth>1010){
      this.salbarPos =  [
        'right: 350px; top: 330px; ',
        'right: 80px; top: 150px; ',
        'right: 230px; top: 100px; ',
        'left: 60px; top: 150px; ',
        'left: 40px; top: 291px; ',
        'right: 50px; top: 380px; ',
        'left: 250px; top: 170px; ',
        'left: 400px; top: 340px; '
        ];
      this.breakpoint = 2;
      this.breakpoint1 = 6;
    }else{
      this.salbarPos = Constants.salbarPos;
      this.breakpoint = 3;
      this.breakpoint1 = 3;
    }
  }
  // calcPercent(){
  //   var s = [];
  //   this.zarlagaSalbar.forEach(function(entry) {
  //      var size = parseInt((entry.calcPercent / 5) + "");
  //      var currSize = 130 + (size * 15);
  //     s.push("width: "+ currSize +"px; height: "+ currSize +"px;");
      
  //   });
    
  //   this.widths = s;
  // }
  releaseDate: any;
  updateDate: any;
  description: any;
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
  getType(){
    return this.mainService.type == "APPROVED"?"гүйцэтгэл":"Өмнөх оноос";
  }

  checkType(){
    return this.mainService.type == "APPROVED";
  }
  
  
}
