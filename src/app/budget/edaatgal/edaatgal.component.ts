import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/services/constants';
import { MainService } from 'src/app/services/main.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-edaatgal',
  templateUrl: './edaatgal.component.html',
  styleUrls: ['./edaatgal.component.scss']
})
export class EdaatgalComponent implements OnInit {


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
  
  isLegend = true;
  
  colors = Constants.colors;
  edaatgalPos = Constants.edaatgalPos;
  widths = [];  

  
  isZarlagaDataLoaded = false;
  isDataLoaded = false;
  isInDataLoaded = false;
  isSub1 = false;
  isSub2 = false;
  isOrlogo = true;
  isZarlaga = false;
  isZarlagaMain = false;
  isMain = true;
  isMainChart = true;
  isTypeOrlogo = false;
  isMainSub = false;  
  sub2Head;

  zarlagaList = [];
  zarlagaList1 = [];
  zarlagaSub1List = [];
  zarlagaValues = [];
  zarlagaValues1 = 0;
  zarlagaNames = [];
  
  orlogoTypeValues = [];
  orlogoTypeNames = [];
  sumSub = 0;
  processSub = 0;
  percentChartSub =0;
  prefValueChartSub =0;
  orlogoPerValSub = [];
  orlogoPrefValSub = [];

    
  orlogoValues11 = [];
  orlogoNames11 = [];

  zarlagaSub1Values = [];
  zarlagaSub1Names = [];

  orlogoList = [];
  orlogoSub1List = [];
  orlogoValues = [];
  orlogoValuesbef = 0;
  orlogoValuesbefZ = 0;
  orlogoNames = [];
  orlogoSub1Values = [];
  orlogoSub1Names = [];
  sum = 111;
  process = 0;
  percentChart =0;
  orlogoPerVal = [];
  prefValueChart = 0;
  orlogoPrefVal = [];
  
  sumZarlaga = 0;
  sumZarlaga1 = 0;
  processZarlalga = 0;
  zarlagePercent = [];
  percentChartZarlaga =0;
  percentChartZarlaga1 =0;
  zarlagaPrefValues = [];
  percentChartOrlogo =0;
  percentChartZar =0;
  zarlagaPrefValues1 = [];
  prefValueChartZarlaga = 0;
  prefValueChartZarlaga1 = 0;
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
        this.initNds();
      }
  });
  this.mainService.budgetNde.subscribe(data => {  
    if(data === 0){
      this.orlogo();
    }
    if(data === 1){
      this.zarlaga();
    }
  });

  }

  orlogo(){
    this.isMainChart = true;
    this.isOrlogo = true;
    this.isMain = false;
    this.isZarlaga = false;
    this.isZarlagaMain = false;
    
    this.isLegend = true;
    this.isTypeOrlogo = true;
    this.isMainSub = true;
  }
  
  orlogoHover(){
    
    this.isLegend = false;
    this.isTypeOrlogo = false;
    this.isMainChart = true;
    this.isOrlogo = true;
    this.isMain = true;
    this.isMainSub = false;
    this.isZarlaga = false;
  }

  zarlagaHover(){
    this.isMainChart = false;
    this.isLegend = false;
    this.isTypeOrlogo = false;
    this.isMain = true;
    this.isOrlogo = false;
    this.isZarlaga = true;
    this.isZarlagaMain = false;
    this.isMainSub = false;
  }
  zarlaga(){
    
    this.isLegend = false;
    this.isTypeOrlogo = false;
    this.isMain = false;
    this.isOrlogo = false;
    this.isMainSub = false;
    this.isZarlaga = true;
    this.isZarlagaMain = true;
    this.isMainSub = false;
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
    this.mainService.baseGet(Constants.HOST + Constants.BUDGET_EDAATGAL_INOUT +"?year=" + this.params["year"] + "&category="+this.params["category"] + "&type=IN", null, true).then((result: any) => {
      this.orlogoList = result;
      this.process = result[0].process;
      result.forEach(item => {
        if(item.type == "IN"){
          this.orlogoValues.push(parseFloat(item["approvedValue"]));
          this.orlogoPrefVal.push(parseFloat(item["perfoValue"]));
          this.orlogoPerVal.push(parseFloat(item["percent"]));
          this.orlogoNames.push(parseFloat(item["type"]));
        }
      });

      this.sum = this.orlogoValues.reduce(function(a, b){
        return a + b;
      }, 0);
      this.prefValueChart = this.orlogoPrefVal.reduce(function(a, b){
        return a + b;
      }, 0);
      this.percentChart = parseFloat((this.prefValueChart / this.sum * 100).toFixed(2));
      
      this.isLegend = false;
      this.isDataLoaded = true;
      this.befOrlogo1();
    }).catch((error) => {
      console.log(error);
    }); 

    

    this.mainService.baseGet(Constants.HOST + Constants.BUDGET_EDAATGAL_IN + "?year=" + this.params["year"] + "&category="+this.params["category"] + "&type=IN", null, true).then((result: any) => {
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
      // this.percentChartSub = this.orlogoPerValSub.reduce(function(a, b){
      //   return a + b;
      // }, 0); 
      this.percentChartSub = isFinite(parseFloat(((this.prefValueChartSub / this.sumSub) * 100).toFixed(2))) ? parseFloat(((this.prefValueChartSub / this.sumSub) * 100).toFixed(2)) : 0;
      this.isInDataLoaded = true;
      // this.befOrlogo();
    }).catch((error) => {
      console.log(error);
    });

    this.mainService.baseGet(Constants.HOST + Constants.BUDGET_EDAATGAL_INOUT +"?year=" + this.params["year"] + "&category="+this.params["category"] + "&type=OUT", null, true).then((result: any) => {
      this.zarlagaList = result;
      result.forEach(item => {
        if(item.type == "OUT"){
          this.zarlagaValues.push(item["approvedValue"]);
          this.zarlagaPrefValues.push(item["perfoValue"]);
          this.zarlagePercent.push(item["percent"]);
          this.zarlagaNames.push(item["type"]);
        }
      });
      this.sumZarlaga = this.zarlagaValues.reduce(function(a, b){
        return a + b;
      }, 0);
      this.prefValueChartZarlaga = this.zarlagaPrefValues.reduce(function(a, b){
        return a + b;
      }, 0);
      this.percentChartZarlaga = isFinite(parseFloat((this.prefValueChartZarlaga / this.sumZarlaga * 100).toFixed(2))) ? parseFloat((this.prefValueChartZarlaga / this.sumZarlaga * 100).toFixed(2)) : 0;
      
      this.isLegend = true;
      this.isZarlagaDataLoaded = true;
      this.befZar();
    }).catch((error) => {
      console.log(error);
    });

    
    
    
    this.getReleaseDate("Sheet12");
  }
  befOrlogo1(){
    this.mainService.baseGet(Constants.HOST + Constants.BUDGET_EDAATGAL_INOUT +"?year=" + this.beforeYear + "&category="+this.params["category"] + "&type=IN", null, true).then((result: any) => {
      result.forEach(item => {
        if(item.type == "IN"){
          this.orlogoValuesbef = item["approvedValue"];
        }
      });
      this.percentChartOrlogo = parseFloat(((this.sum - this.orlogoValuesbef) / this.orlogoValuesbef * 100).toFixed(2));
    }).catch((error) => {
      console.log(error);
    }); 
  }
  // befOrlogo(){
  //   this.mainService.baseGet(Constants.HOST + Constants.BUDGET_EDAATGAL_INOUT +"?year=" + this.beforeYear + "&category="+this.params["category"] + "&type=IN", null, true).then((result: any) => {
  //     result.forEach(item => {
  //       if(item.type == "OUT"){
  //         this.orlogoValuesbefZ = item["approvedValue"];
  //       }
  //     });
  //     this.percentChartZar = isFinite(parseFloat(((this.sumZarlaga - this.orlogoValuesbefZ) / this.orlogoValuesbefZ * 100).toFixed(2))) ? parseFloat(((this.sumZarlaga - this.orlogoValuesbefZ) / this.orlogoValuesbefZ * 100).toFixed(2)) : 0;
  //   }).catch((error) => {
  //     console.log(error);
  //   }); 
  // }

  befZar(){
    this.mainService.baseGet(Constants.HOST + Constants.BUDGET_EDAATGAL_INOUT +"?year=" + this.beforeYear + "&category="+this.params["category"] + "&type=OUT", null, true).then((result: any) => {
      result.forEach(item => {
        if(item.type == "OUT"){
          this.zarlagaValues1 = (item["approvedValue"]);
          this.zarlagaPrefValues1.push(item["perfoValue"]);
        }
      });
      this.percentChartZarlaga1 = isFinite(parseFloat(((this.sumZarlaga - this.zarlagaValues1) / this.zarlagaValues1 * 100).toFixed(2))) ? parseFloat(((this.sumZarlaga - this.zarlagaValues1) / this.zarlagaValues1 * 100).toFixed(2)) : 0;
    }).catch((error) => {
      console.log(error);
    });
  }

  getZarlaga() {
    this.appValue = [];
    this.prefValue = [];
    this.mainService.baseGet(Constants.HOST + Constants.BUDGET_EDAATGAL + "?type=OUT&year=" + this.params["year"] + "&category="+this.params["category"], null, true).then((result: any) => {
         this.zarlagaSalbar = result;
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

  calcPercent(){

    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    if(this.screenWidth<=1680 && this.screenWidth>1536){
      this.mainWidth = 130;
      this.edaatgalPos = Constants.edaatgalPos1440;
    }else if( this.screenWidth<=1536 && this.screenWidth>1280){
      this.mainWidth = 120;
      this.edaatgalPos = Constants.edaatgalPos1536;
    }else if( this.screenWidth<=1440 && this.screenWidth>1280){
      this.mainWidth = 100;
      this.edaatgalPos = Constants.edaatgalPos1366;
    }else if( this.screenWidth<=1280 && this.screenWidth>1200){
      this.mainWidth = 100;
      this.edaatgalPos = Constants.edaatgalPos1280;
    }else if( this.screenWidth<=1200 && this.screenWidth>1010){
      this.mainWidth = 80;
      this.edaatgalPos = Constants.edaatgalPos1024;
    }else{
      this.mainWidth = 130;
      this.edaatgalPos = Constants.edaatgalPos;
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
  getType(){
    return this.mainService.type == "APPROVED"?"Гүйцэтгэл":"Өмнөх оноос";
  }
  getReleaseDate(code){
    this.mainService.baseGet(Constants.HOST + Constants.BUDGET_RELEASE_DATE + "?code=" + code + "&year=" + this.params["year"], null, true).then((result: any) => {  
      this.updateDate = result[0].updateDate
      this.description = result[0].description;
    }).catch((error) => {
      console.log(error);
    });
  }
}
