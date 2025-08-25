import { Component, OnInit } from '@angular/core';

import { MainService } from 'src/app/services/main.service';
import { Constants } from 'src/app/services/constants';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-ulsiintusuv',
  templateUrl: './ulsiintusuv.component.html',
  styleUrls: ['./ulsiintusuv.component.scss']
})
export class UlsiintusuvComponent implements OnInit {
  isDataLoaded = false;
  isSub1 = false;
  isSub2 = false;
  isSub3 = false;
  isSubZarlaga = false;
  sub2Head;
  names = [];
  valueszas = [];
  orlogoList = [];
  orlogoSub1List = [];
  orlogoSub2List = [];
  orlogoValues = [];
  orlogoNames = [];
  orlogoSub1Values = [];
  
  orlogoSub1Values1 = 0;
  orlogoSub1ValuesBef = 0;
  orlogoSub1Names = [];
  orlogoSub2Values = [];
  orlogoSub2ValuesPer = 0;
  beforlogoSub2ValuesPer = 0;
  beforlogoSub2ValuesPerPer = 0;
  orlogoSub2Names = [];
  ulsiintusuvTEZ = [];
  ulsiintusuvTEZDetail = [];
  ulsiintusuvTEZ_capital_cost: any;
  ulsiintusuvTEZ_process_cost: any;
  ulsiintusuvTEZ_loan: any;
  ulsiintusuvTEZ_repayment_loan: any;
  ulsiintusuvTEZ_total: any;

  valuesUls = [];
  ulsList = [];
  ulsListPer = [];
  ulsSub1List = [];
  ulsValues = [];
  ulsValuesPer = [];
  ulsNames = [];
  ulsSub1Values = [];
  ulsSub1Names = [];
  ulsProcess= 0;
  
  befulsProcess= 0;
  
  befulsProcess1= 0;
  ulsProcess1= 0;
  ulsProcess2= 0;
  percentorlogo:any;
  percentorlogoBefore:any;
  percentChart ="";
  ulsPerVal = [];
  prefValueChart = "";
  ulsPrefVal = [];
  ulsPrefValPer:any;
  ulsZarlagaValuesPer: any;

  ulsPrefVal1 = [];
  ulsPrefVal2 = 0;

  valuesZarlagaUls = [];
  ulsZarlagaList = [];
  ulsZarlagaSub1List = [];
  ulsZarlagaValues = [];
  ulsZarlagaNames = [];
  ulsZarlagaSub1Values = [];
  ulsZarlagaSub1Names = [];
  ulsZarlagaProcess= 0;
  
  befulsZarlagaProcess= 0;
  percentZarlagaChart ="";
  ulsZarlagaPerVal = [];
  prefZarlagaValueChart = "";
  ulsZarlagaPrefVal = [];
  
  orlogoDetailList = [];
  isLegend = false;
  isOrlogo = true;
  isZarlaga = false;
  isChart = false;
  sum = 0;
  sum1 = 0;
  sumZarlaga = 0;
  process = 0;
  
  width = 222;

  width1Temp = 0;
  maxProcess: number = 0;
  widprocessCost = [];

  width2Temp = 0;
  maxCapital: number = 0;
  widcapitalCost = [];
  
  
  width3Temp = 0;
  maxLoan: number = 0;
  widloan = [];
  
  width4Temp = 0;
  maxRepay: number = 0;
  widrepaymentLoan = [];
  appendValues = [];

  ulsRow: any;

  params = {year: Constants.year, category: Constants.category}

  constructor(private mainService: MainService, private router: Router) {    

    this.mainService.budgetOrlogoSub.subscribe(data => {  
     
      // this.isSub2 = true;
      this.sub2Head = this.orlogoSub1Names[data];
      
      if(data === 1){
        this.orlogoTo();
      }     
     
    });

    this.mainService.budgetOrlogoSub1.subscribe(data => {     
     
      this.sub2Head = this.orlogoSub2Names[data];
      this.orlogoDetail(this.orlogoSub2List[data]["level"]);
      
     
    });
    // this.orlogoDetail(this.orlogoSub2List[data]["level"]);
    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd) {
        if(val.url.split('?').length > 1){
          this.setQueryParam(val.url.split('?')[1]);          
        }
        this.loadData();

        if(this.isSubZarlaga == true){
          this.zarlagaTo();
        }
      }
    });
  
  }
  ngOnInit(): void {
    this.getReleaseDate("Sheet2");
  }
  beforeYear = 0;

  loadData() {  
    this.ulsValues = [];  
    this.ulsNames = [];
    this.ulsZarlagaValues = [];
    this.ulsZarlagaNames = [];
    this.ulsPrefVal = [];
    this.mainService.baseGet(Constants.HOST + Constants.BUDGET_ULSIINTUSUV_INOUT + "?year=" + this.params["year"] + "&category="+this.params["category"], null, true).then((result: any) => {
      this.ulsList = result;
      result.forEach(item => {
        if(item.type == "IN"){
          this.ulsValues.push(item["value"]);
          this.ulsPrefVal = item["perfoValue"];
          this.ulsProcess = parseFloat((item["perfoValue"] / item["value"] * 100).toFixed(2));
          this.ulsNames.push("Нийт орлого")
        }
      });     

      this.sum = this.ulsValues.reduce(function(a, b){
        return a + b;
      }, 0);      
      this.isLegend = false;
      this.isDataLoaded = true;
      this.beforeOrlogo();
    }).catch((error) => {
      console.log(error);
    });


    this.mainService.baseGet(Constants.HOST + Constants.BUDGET_ULSIINTUSUV_INOUT + "?year=" + this.params["year"] + "&category="+this.params["category"], null, true).then((result: any) => {
      this.ulsZarlagaList = result;
      result.forEach(item => {
        if(item.type == "OUT"){
          this.ulsZarlagaValues.push(item["value"]);
          this.ulsZarlagaPrefVal = item["perfoValue"];
          this.ulsZarlagaProcess = parseFloat((item["perfoValue"] / item["value"] * 100).toFixed(2));
          this.ulsZarlagaNames.push("Нийт зарлага")
        }
      });     
      this.sumZarlaga = this.ulsZarlagaValues.reduce(function(a, b){
        return a + b;
      }, 0);
      
      this.isLegend = false;
      this.isDataLoaded = true;
      this.beforeZar();
    }).catch((error) => {
      console.log(error);
    });

    
  }
  beforeOrlogo(){
    this.mainService.baseGet(Constants.HOST + Constants.BUDGET_ULSIINTUSUV_INOUT + "?year=" + this.beforeYear + "&category="+this.params["category"], null, true).then((result: any) => {
      this.ulsListPer = result;
      result.forEach(item => {
        if(item.type == "IN"){
          this.ulsPrefValPer = item["value"];
        }
      });
      this.befulsProcess = isFinite(Math.floor(parseFloat(((this.sum - this.ulsPrefValPer) / this.sum).toFixed(2)) * 100)) ? Math.floor(parseFloat(((this.sum - this.ulsPrefValPer) / this.sum).toFixed(2)) * 100) : 0;
      
    }).catch((error) => {
      console.log(error);
    });
  }

  beforeZar(){
    this.mainService.baseGet(Constants.HOST + Constants.BUDGET_ULSIINTUSUV_INOUT + "?year=" + this.beforeYear + "&category="+this.params["category"], null, true).then((result: any) => {
      this.ulsZarlagaList = result;
      result.forEach(item => {
        if(item.type == "OUT"){
          this.ulsZarlagaValuesPer = item["value"];
        }
      });  
      this.befulsZarlagaProcess = isFinite(Math.floor(parseFloat(((this.sumZarlaga - this.ulsZarlagaValuesPer) / this.ulsZarlagaValuesPer).toFixed(2)) * 100)) ? Math.floor(parseFloat(((this.sumZarlaga - this.ulsZarlagaValuesPer) / this.ulsZarlagaValuesPer).toFixed(2)) * 100) : 0;
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
    this.beforeYear = this.params["year"]-1;
    if(params != old){
      this.isSub1 = false;
      this.isSub2 = false;
      this.isSub3 = false;
    }
  }

  orlogo(){
    this.isOrlogo = true;
    this.isZarlaga = false;
  }
  zarlaga(){
    this.isOrlogo = false;
    this.isZarlaga = true;
  }
  orlogoClick(){
    this.orlogoUlsiintusuv();
    this.isSubZarlaga = false;
    if(!this.isSubZarlaga){
      this.getReleaseDate("Sheet2");
    }
    this.mainService.scroll("description");
  }
  zarlagaClick(){
    this.isSub1 = false;
    this.isSubZarlaga = true;
    if(this.isSubZarlaga){
      this.getReleaseDate("Sheet3");
    }
    this.zarlagaTo();
    this.mainService.scroll("description");
  }


  orlogoUlsiintusuv(){
    this.orlogoSub1Values = [];
    this.orlogoSub1Names = [];

    this.ulsPrefVal1 = [];
    this.mainService.baseGet(Constants.HOST + Constants.BUDGET_ULSIINTUSUV + "?year=" + this.params["year"] + "&category="+this.params["category"], null, true).then((result: any) => {
      this.orlogoSub1List = result;
      result.forEach(item => {
        this.orlogoSub1Values.push(item["approvedValue"]);
        this.orlogoSub1Values1 +=item["approvedValue"];
        this.ulsPrefVal1 = item["perfoValue"];
        this.ulsProcess1 = parseFloat((item["perfoValue"] / item["approvedValue"] * 100).toFixed(2));
        this.orlogoSub1Names.push(item["typeName"]);
      });

      

      this.isSub1 = true;
    }).catch((error) => {
      console.log(error);
    });
    this.mainService.baseGet(Constants.HOST + Constants.BUDGET_ULSIINTUSUV + "?year=" + this.beforeYear + "&category="+this.params["category"], null, true).then((result: any) => {
      result.forEach(item => {
        this.orlogoSub1ValuesBef += (item["approvedValue"]);
      });
      
      this.befulsProcess1 = Math.floor(parseFloat(((this.orlogoSub1Values1 - this.orlogoSub1ValuesBef) / this.orlogoSub1Values1).toFixed(2)) * 100);
    }).catch((error) => {
      console.log(error);
    });
  }

  orlogoTo(){
    this.orlogoSub2Values = [];
    this.orlogoSub2Names = [];
    
    this.ulsPrefVal2 = 0;
    this.orlogoSub2ValuesPer = 0;
    this.mainService.baseGet(Constants.HOST + Constants.BUDGET_ULSIINTUSUV_TO + "?year=" + this.params["year"] + "&category="+this.params["category"], null, true).then((result: any) => {
      this.orlogoSub2List = result;
      // console.log(result);
      result.forEach(item => {
        this.orlogoSub2Values.push(item["approvedValue"]);
        this.orlogoSub2ValuesPer += item["approvedValue"];
        this.ulsPrefVal2 += item["perfoValue"];
        this.orlogoSub2Names.push(item["levelName"]);
      });
      
      this.ulsProcess2 = 0;
      this.ulsProcess2 = parseFloat((this.ulsPrefVal2 / this.orlogoSub2ValuesPer * 100).toFixed(2));
      this.sum1 = 0;
      this.sum1 = this.orlogoSub2Values.reduce(function(a, b){
        return a + b;
      }, 0);
      this.isSub2 = true;
      var service = this.mainService;
      setTimeout(function(){ this.isSub2 = true;
        service.scroll("sub-top");
      }, 1000);
      this.beforeOrlogoLevel3()
    }).catch((error) => {
      console.log(error);
    });
  }
  beforeOrlogoLevel3(){
    this.mainService.baseGet(Constants.HOST + Constants.BUDGET_ULSIINTUSUV_TO + "?year=" + this.beforeYear + "&category="+this.params["category"], null, true).then((result: any) => {
      result.forEach(item => {
        this.beforlogoSub2ValuesPer += item["approvedValue"];
      });
      this.beforlogoSub2ValuesPer = isFinite(parseFloat(((this.sum1 - this.beforlogoSub2ValuesPer)/this.beforlogoSub2ValuesPer*100).toFixed(2))) ? parseFloat(((this.sum1 - this.beforlogoSub2ValuesPer)/this.beforlogoSub2ValuesPer*100).toFixed(2)) : 0;
    }).catch((error) => {
      console.log(error);
    });
  }
  orLevel: any;
  orlogoDetail(level){
    this.orLevel = level;
    this.mainService.baseGet(Constants.HOST + Constants.BUDGET_ULSIINTUSUV_DETAIL + "?year=" + this.params["year"] + "&category="+this.params["category"] + "&level=" + this.orLevel, null, true).then((result: any) => {
        this.orlogoDetailList = result;
        this.isSub3 = true;
        // this.mainService.scroll("sub-top");
    }).catch((error) => {
      console.log(error);
    });
  }
  zarlagaTo(){
    this.isSubZarlaga = true;
    this.mainService.baseGet(Constants.HOST + Constants.BUDGET_ULSIINTUSUV_MAIN + "?year=" + this.params["year"] + "&category="+this.params["category"], null, true).then((result: any) => {
      
      result = result[0];
      this.ulsiintusuvTEZ_capital_cost = result.capitalCost;
      this.ulsiintusuvTEZ_process_cost = result.processCost;
      this.ulsiintusuvTEZ_loan = result.loan;
      this.ulsiintusuvTEZ_repayment_loan = result.repaymentLoan;
      this.ulsiintusuvTEZ_total = result.total;

    }).catch((error) => {
      console.log(error);
    });

    this.widcapitalCost = [];
    this.widprocessCost = [];
    this.widloan = [];
    this.widrepaymentLoan = [];
    this.appendValues = [];
    
    this.mainService.baseGet(Constants.HOST + Constants.BUDGET_ULSIINTUSUV_ITEM + "?year=" + this.params["year"] + "&category="+this.params["category"], null, true).then((result: any) => {
     
      this.ulsiintusuvTEZDetail = result;
      this.ulsRow = result.length;
      result.forEach(item => {
          let defaultVal = 0;
          defaultVal += item["capitalCost"] > 0 ? 0: 1;
          defaultVal += item["processCost"] > 0 ? 0: 1;
          defaultVal += item["loan"] > 0 ? 0: 1;
          defaultVal += item["repaymentLoan"] > 0 ? 0: 1;
          this.widcapitalCost.push(item["capitalCost"]);
          this.widprocessCost.push(item["processCost"]);
          this.widloan.push(item["loan"]);
          this.widrepaymentLoan.push(item["repaymentLoan"]); 
          switch(defaultVal) {
            case 1:
              this.appendValues.push(40);  
              break;
            case 2:
              this.appendValues.push(60);  
              break;
            case 3:
              this.appendValues.push(120);  
              break;           
            default:
              this.appendValues.push(0);  
          }
           
          // console.log(defaultVal);     
      });     
     
      this.maxProcess =  this.widprocessCost.reduce((a, b) => Math.max(a, b));
      this.maxCapital = this.widcapitalCost.reduce((a, b) => Math.max(a, b));
      this.maxLoan = this.widloan.reduce((a, b) => Math.max(a, b));
      this.maxRepay = this.widrepaymentLoan.reduce((a, b) => Math.max(a, b));
      
      var max = this.maxProcess;
      if(this.maxCapital > max){
        max = this.maxCapital;
      }
      if(this.maxLoan > max){
        max = this.maxLoan;
      }
      if(this.maxRepay > max){
        max = this.maxRepay;
      }

      this.width1Temp = this.width/max;
      this.width2Temp = this.width/max;
      this.width3Temp = this.width/max;
      this.width4Temp = this.width/max;
      
    }).catch((error) => {
      console.log(error);
    });
  }
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
}
