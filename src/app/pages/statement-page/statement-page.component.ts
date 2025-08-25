import { Component, OnInit, ViewChild } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { Constants } from 'src/app/services/constants';
import { PeriodicElement } from 'src/app/statement-data/statement-data.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-statement-page',
  templateUrl: './statement-page.component.html',
  styleUrls: ['./statement-page.component.scss']
})
export class StatementPageComponent implements OnInit {

  chartType = 'pie';
  budgetType:boolean = true;
  labels = [];
  series = [];
  colors = ['#28c66f','#6639b6','#795448','#fc5621','#9b26af','#1db7ab','#02a8f3','#5f7c8a','#ffca30','#e75558','#fcaf32','#0081ff','#313851','#6639b6','#795448'];
  chart  = [];
  statements: any;
  showData = [];
  stat = {};
  isLoad = false;
  title = "";
  titleTez = ["Гүйлгээний тоо /ТЕЗ/", "Мөнгөн дүн сая.төг /ТЕЗ/"];
  constructor(private mainService: MainService, private route: ActivatedRoute, private router: Router) { 
    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd) {
        
        if(val.url.split('?').length > 1){
          this.searchStatement();
        }
      }
  });
  }
  displayedColumns: string[] = ['tez', 'name', 'account', 'eza', 'subject', 'amount','datetime'];
  dataSource : any;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.getStat();
    this.getChartTez();
    this.title = this.titleTez[0];
  }

  changeType(){
    var $this = this;
    var other = 0;
    this.budgetType =! this.budgetType;
    this.isLoad = false;
    this.labels = [];
    this.series = [];
    if(!this.budgetType){
      this.title = this.titleTez[0];
      this.chart.forEach(item => {
        if(item["perCnt"] >= 3){
          this.labels.push(item["tezName"]);
          this.series.push(item["count"]);
        }else{
          other += item["count"];
        }
        
      });  
      this.labels.push("Бусад");
      this.series.push(other);
       
      setTimeout(function(){ $this.isLoad = true; }, 100);
    }else{
      this.title = this.titleTez[1];
      this.chart.forEach(item => {
        if(item["perAmt"] >= 3){
          this.labels.push(item["tezName"]);
          this.series.push(item["total"]);
        }else{
          other += item["total"];
        }
        
      });  

      this.labels.push("Бусад");
      this.series.push(other);
       
      setTimeout(function(){ $this.isLoad = true; }, 100);
      
    }
  }
  searchStatement(){
    this.mainService.baseGet(Constants.HOST + "websan/api/ehuulga", null, true).then((result: any) => {    

      const datas: PeriodicElement[] = result;
      this.dataSource = new MatTableDataSource(datas);       
      this.dataSource.sort = this.sort;
      this.showData = result;     
    }).catch((error) => {
      console.log(error);
    });
  }
  
  getStat(){
    this.mainService.baseGet(Constants.HOST + "websan/api/estat", null, true).then((result: {}) => {  

      this.stat = result;
    }).catch((error) => {
      console.log(error);
    });
  }

  getChartTez(){
    this.mainService.baseGet(Constants.HOST + "websan/api/egraphtez", null, true).then((result: []) => { 
     
      this.chart = result;
      this.changeType();      
   
    }).catch((error) => {
      console.log(error);
    });
  }
}
