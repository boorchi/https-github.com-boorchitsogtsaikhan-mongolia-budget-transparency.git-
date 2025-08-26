import { Component, ViewChild, Input, OnInit } from "@angular/core";
import { MainService } from 'src/app/services/main.service';
import { Constants } from 'src/app/services/constants';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { HostListener } from "@angular/core";
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};
@Component({
  selector: 'app-zasgiinzeel-sub-chart',
  templateUrl: './zasgiinzeel-sub-chart.component.html',
  styleUrls: ['./zasgiinzeel-sub-chart.component.scss']
})
export class ZasgiinzeelSubChartComponent implements OnInit {

  isDataLoaded = false;
  @Input()
  values: any;

  @Input()
  names: any;

  @Input()
  title: any;

  @Input()
  sub: any;

  @Input()
  sum: any;

  @Input()
  process: any;
  
  width = 500;
  screenHeight: number;
  screenWidth: number;
  public innerWidth: any;
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: any;

  params = {year: Constants.year, category: Constants.category}
  
  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    console.log(this.screenHeight, this.screenWidth);
  
    if(this.screenWidth<=1680 && this.screenWidth>1440){
      this.width = 450;
    }else if( this.screenWidth<=1440 && this.screenWidth>1200){
      this.width = 350;
    }else if( this.screenWidth<=1200 && this.screenWidth>1010){
      this.width = 300;
    }else{
      this.width = 500;
    }
  }
  constructor(private mainService: MainService, private route: ActivatedRoute, private router: Router) { 
    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd) {
        if(val.url.split('?').length > 1){
        this.setQueryParam(val.url.split('?')[1]);
        }
      }
    });
    this.onResize();
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
    // if(params != old){
      // console.log("chang")
    //  this.ezaLevelDatas = []
    // }
  }
  ngOnInit() {
    const handleSelect = (event, chartContext, config) => {    
      this.mainService.orlogoSub(this.sub, config.dataPointIndex);
    }
    this.chartOptions = {
      series: this.values,
      chart: {
        fontFamily: 'Montserrat, sans-serif',
        width: "100%",
        type: "donut",
        events: {         
          legendClick: function(chartContext, seriesIndex, config) {
          },
          dataPointSelection: handleSelect
        },
      },
      dataLabels: {
        enabled: true,
        style: {
          fontSize: '16px'
      },
        dropShadow: {
          enabled: false
        }
      },
      labels: this.names,
      colors:['#ff9f43' ,'#28c66f', '#b754ea'],
      stroke: {
        width: 0,
      },
      legend: {
        position: "bottom",
        width: 400,
        horizontalAlign: 'left', 
        offsetX: 100,
      },
      plotOptions: {
        pie: {
          donut: {
            size: '75%',
            
          },
          formatter: function (val) {
            return val + "%"
          },
        }
      },      
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 300
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
    this.isDataLoaded = true;
    // setTimeout(function(){ this.isDataLoaded = true;}, 1000);
    
    
  }

  getImagePath(imagePath: string): string {
    return Constants.getImagePath(imagePath);
  }

  

}
