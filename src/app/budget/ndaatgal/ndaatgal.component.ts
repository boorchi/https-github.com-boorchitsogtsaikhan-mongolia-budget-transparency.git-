import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/services/constants';
import { MainService } from 'src/app/services/main.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-ndaatgal',
  templateUrl: './ndaatgal.component.html',
  styleUrls: ['./ndaatgal.component.scss']
})
export class NdaatgalComponent implements OnInit {


  zarlagaSalbar: any;
  zarlagaSalbarName: any;
  zarlagaBySalbar: any;
  zarlagaBySalbarInfo: any;
  percent = [];
  percentTotal = [];
  appValue = [];
  prefValue = [];
  prefValueTotal = [];
  prefValueTotalnum:any;
  appValueTotal = [];
  appValueTotalnum:any;
  value: number = 0;
  highValue: number = 18;
  params = {year: Constants.year, category: Constants.category}
  type: number;
  toggle : any;
  colors = Constants.colors;
  ndaatgalPos = Constants.ndaatgalPos;
  widths = [];
  slideData : any;

  isZarlagaDataLoaded = false;
  isDataLoaded = false;
  isInDataLoaded = false;
  isSub1 = false;
  isSub2 = false;
  isOrlogo = true;
  isZarlaga = false;
  isMain = true;
  isMainChart = true;
  isTypeOrlogo = false;
  isZarlagaMain = false;
  isMainSub = false;  
  isLegend = true;
  sub2Head;

  zarlagaList = [];
  zarlagaSub1List = [];
  zarlagaValues = [];
  zarlagaNames = [];
  zarlagaSub1Values = [];
  zarlagaSub1Names = [];

  orlogoList = [];
  orlogoSub1List = [];
  orlogoValues = [];
  orlogoValuesbef = 0;
  orlogoValuesbefZ = 0;

  orlogoNames = [];
  orlogoTypeValues = [];
  orlogoTypeNames = [];
  orlogoSub1Values = [];
  orlogoSub1Names = [];
  sum = 0;
  process = 0;
  percentChart =0;
  percentChartOrlogo =0;
  percentChartZar =0;
  orlogoPerVal = [];
  prefValueChart = 0;
  orlogoPrefVal = [];

  sumSub = 0;
  processSub = 0;
  percentChartSub =0;
  orlogoPerValSub = [];
  prefValueChartSub = 0;
  orlogoPrefValSub = [];

  sumZarlaga = 0;
  processZarlalga = 0;
  zarlagePercent = [];
  percentChartZarlaga =0;
  zarlagaPrefValues = [];
  prefValueChartZarlaga = 0;
  beforeYear = 0;

  screenHeight: number;
  screenWidth: number;
  mainWidth = 130;

  constructor(private mainService: MainService, private route: ActivatedRoute, private router: Router) {
    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd) {
        if(val.url.split('?').length > 1){
          this.setQueryParam(val.url.split('?')[1]);
          this.showSalbar();
        }
        this.initNds();
      }
  });

  this.mainService.budgetNde.subscribe(data => {  
    if(data === 0){
      this.orlogoClick();
    }
    if(data === 1){
      this.zarlagaClick();
    }
  });

  
  }
  orlogo(){
    this.isLegend = false;
    this.isMainChart = true;
    this.isMain = true;
    this.isMainSub = false;
    this.isZarlaga = false;
    this.isTypeOrlogo = false;
    this.isZarlagaMain = false;
  }
  orlogoClick(){
    this.isLegend = true;
    this.isMainSub = true;
    this.isMainChart = false;
    this.isMain = false;
    this.isZarlaga = false;
    this.isTypeOrlogo = true;
  }
  zarlaga(){
    this.isLegend = false;
    this.isMain = true;
    this.isMainSub = false;
    this.isMainChart = false;
    this.isOrlogo = false;
    this.isTypeOrlogo = false;
    this.isZarlaga = true;
    this.isZarlagaMain = false;
  }
  zarlagaClick(){
    this.isLegend = false;
    this.isMain = false;
    this.isMainSub = false;
    this.isZarlaga = false;
    this.isOrlogo = false;
    this.isZarlagaMain = true;
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
    this.beforeYear = this.params["year"]-1;
    // if(params != old){
      // console.log("chang")
    //  this.ezaLevelDatas = []
    // }
  }
  ngOnInit(): void {
    
  }

  initNds(): void {
    this.orlogoValues = [];
    this.orlogoPerVal = [];
    this.orlogoPrefVal = [];
    this.orlogoNames = [];
    this.orlogoTypeValues = [];
    this.orlogoPerValSub = [];
    this.orlogoPrefValSub = [];
    this.orlogoTypeNames = [];
    this.zarlagaValues = [];
    this.zarlagaPrefValues = [];
    this.zarlagePercent = [];
    this.zarlagaNames = [];
    this.getZarlaga();

    this.mainService.baseGet(Constants.HOST + Constants.BUDGET_NDAATGAL_INOUT + "?year=" + this.params["year"] + "&category="+this.params["category"] + "&type=IN", null, true).then((result: any) => {
      this.orlogoList = result;
      this.process = result[0].process;
      result.forEach(item => {
        if(item.type == "IN"){
          this.orlogoValues.push(item["approvedValue"]);
          this.orlogoPerVal.push(item["percent"]);
          this.orlogoPrefVal.push(item["perfoValue"]);
          this.orlogoNames.push(item["type"]);
        }
      });     

      this.sum = this.orlogoValues.reduce(function(a, b){
        return a + b;
      }, 0);
      this.prefValueChart = this.orlogoPrefVal.reduce(function(a, b){
        return a + b;
      }, 0);
      this.percentChart = parseFloat((this.prefValueChart/ this.sum * 100).toFixed(2));
      this.isLegend = false;
      this.isDataLoaded = true;
      this.befOrlogo();
    }).catch((error) => {
      console.log(error);
    });

    this.mainService.baseGet(Constants.HOST + Constants.BUDGET_NDAATGAL_IN + "?year=" + this.params["year"] + "&category="+this.params["category"] + "&type=IN", null, true).then((result: any) => {
      result.forEach(item => {
        this.orlogoTypeValues.push(item["approvedValue"]);
        this.orlogoPerValSub.push(item["percent"]);
        this.orlogoPrefValSub.push(item["perfoValue"]);
        this.orlogoTypeNames.push(item["levelName"]);
      });     

      this.sumSub = this.orlogoTypeValues.reduce(function(a, b){
        return a + b;
      }, 0);
      this.prefValueChartSub = this.orlogoPrefValSub.reduce(function(a, b){
        return a + b;
      }, 0);
      this.percentChartSub = parseFloat(((this.prefValueChartSub / this.sumSub) * 100).toFixed(2));
      this.isInDataLoaded = true;
    }).catch((error) => {
      console.log(error);
    });

    this.mainService.baseGet(Constants.HOST + Constants.BUDGET_NDAATGAL_INOUT + "?year=" + this.params["year"] + "&category="+this.params["category"] + "&type=OUT", null, true).then((result: any) => {
      this.zarlagaList = result;   
      result.forEach(item => {
        if(item.type == "OUT"){
        this.zarlagaValues.push(item["approvedValue"]);
        this.zarlagaPrefValues.push(item["perfoValue"]);
        this.zarlagePercent.push(item["percent"]);
        this.zarlagaNames.push(" ");
        }
      });

      this.sumZarlaga = this.zarlagaValues.reduce(function(a, b){
        return a + b;
      }, 0);
      this.prefValueChartZarlaga = this.zarlagaPrefValues.reduce(function(a, b){
        return a + b;
      }, 0);
      this.percentChartZarlaga = parseFloat((this.prefValueChartZarlaga / this.sumZarlaga * 100).toFixed(2));

      this.isLegend = true;
      this.isZarlagaDataLoaded = true;
    }).catch((error) => {
      console.log(error);
    });
    this.befZar();
    this.getReleaseDate("Sheet11");
  }
  befOrlogo(){
    this.mainService.baseGet(Constants.HOST + Constants.BUDGET_NDAATGAL_INOUT + "?year=" + this.beforeYear + "&category="+this.params["category"] + "&type=IN", null, true).then((result: any) => {
      result.forEach(item => {
        if(item.type == "IN"){
          this.orlogoValuesbef = item["approvedValue"];
        }
      });     
      this.percentChartOrlogo = isFinite(parseFloat(((this.sum - this.orlogoValuesbef) / this.orlogoValuesbef * 100).toFixed(2))) ? parseFloat(((this.sum - this.orlogoValuesbef) / this.orlogoValuesbef * 100).toFixed(2)) : 0;
    }).catch((error) => {
      console.log(error);
    });
  }

  befZar(){
    this.mainService.baseGet(Constants.HOST + Constants.BUDGET_NDAATGAL_INOUT + "?year=" + this.beforeYear + "&category="+this.params["category"] + "&type=IN", null, true).then((result: any) => {
      result.forEach(item => {
        if(item.type == "OUT"){
          this.orlogoValuesbefZ = item["approvedValue"];
        }
      });     
      this.percentChartZar = isFinite(parseFloat(((this.sumZarlaga - this.orlogoValuesbefZ) / this.orlogoValuesbefZ * 100).toFixed(2))) ? parseFloat(((this.sumZarlaga - this.orlogoValuesbefZ) / this.orlogoValuesbefZ * 100).toFixed(2)) : 0;
    }).catch((error) => {
      console.log(error);
    });
  }
  orlogoTo(){
    this.mainService.baseGet(Constants.HOST + Constants.BUDGET_NDAATGAL_INOUT + "?year=2019&category=SUBMITTED", null, true).then((result: any) => {
     
      this.orlogoSub1List = result;
      result.forEach(item => {
        this.orlogoSub1Values.push(item["approvedValue"]);
        this.orlogoSub1Names.push(item["levelName"]);
      });

      this.isSub1 = true;
    }).catch((error) => {
      console.log(error);
    });
  }

  getZarlaga() {
    this.appValue = [];
    this.prefValue = [];
    this.mainService.baseGet(Constants.HOST + Constants.BUDGET_NDAATGAL + "?type=OUT&year=" + this.params["year"] + "&category="+this.params["category"], null, true).then((result: any) => {

      this.zarlagaSalbar = result;
      console.log(result);
      result.forEach(item => {
        this.appValue.push(item["approvedValue"]);
        this.prefValue.push(item["perfoValue"]);
      });
      this.appValueTotal = this.appValue.reduce(function(a, b){
        return a + b;
      }, 0);
      this.prefValueTotal = this.prefValue.reduce(function(a, b){
        return a + b;
      }, 0);
      this.calcPercent();
    }).catch((error) => {
      console.log(error);
    });
  }

  showSalbar(index = null, type = null) {
    if(index != null){
      this.zarlagaSalbarName = this.zarlagaSalbar[index];
    }
    if(type){
     this.params["level"] = type;
    }
    this.mainService.baseGet(Constants.HOST + Constants.BUDGET_NDAATGAL_ITEM + "?type=OUT&year=" + this.params["year"] + "&category="+this.params["category"] + "&level=" + this.params["level"], null, true).then((result: any) => {

      this.toggle = this.params["category"];
      this.zarlagaBySalbar = result;
      this.mainService.scroll("number");
    }).catch((error) => {
      console.log(error);
    });
  }

  calcPercent(){
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    if(this.screenWidth<=1680 && this.screenWidth>1536){
      this.mainWidth = 130;
      this.ndaatgalPos = Constants.ndaatgalPos1440;
    }
    if(this.screenWidth<=1536 && this.screenWidth>1440){
      this.mainWidth = 110;
      this.ndaatgalPos = Constants.ndaatgalPos1536;
    }
    else if( this.screenWidth<=1440 && this.screenWidth>1280){
      this.mainWidth = 100;
      this.ndaatgalPos = Constants.ndaatgalPos1366;
    }else if( this.screenWidth<=1280 && this.screenWidth>1200){
      this.mainWidth = 100;
      this.ndaatgalPos = Constants.ndaatgalPos1280;
    }else if( this.screenWidth<=1200 && this.screenWidth>1010){
      this.mainWidth = 80;
      this.ndaatgalPos = Constants.ndaatgalPos1024;
    }else{
      this.mainWidth = 130;
      this.ndaatgalPos = Constants.ndaatgalPos;
    }
    var s = [];
    var wud = this.mainWidth;
    this.zarlagaSalbar.forEach(function(entry) {
       var size = parseInt((entry.calcPercent / 5) + "");
       var currSize = wud + (size * 8);
      s.push("width: "+ currSize +"px; height: "+ currSize +"px;");

    });
    this.widths = s;
  }

  releaseDate: any;
  updateDate: any;
  description: any;
  getReleaseDate(code){
    this.mainService.baseGet(Constants.HOST + Constants.BUDGET_RELEASE_DATE + "?code=" + code + "&year=" + this.params["year"], null, true).then((result: any) => {  
      this.updateDate = result[0].updateDate
      this.description = result[0].description;
    }).catch((error) => {
      console.log(error);
    });
  }
}
