import { Component, ViewChild, Input, OnInit } from "@angular/core";
import { MainService } from 'src/app/services/main.service';
import { Constants } from 'src/app/services/constants';
import { HostListener } from "@angular/core";
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
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
  selector: 'ulsiintusuv-charts',
  templateUrl: './ulsiintusuvcharts.component.html',
  styleUrls: ['./ulsiintusuvcharts.component.scss']
})
export class UlsiintusuvchartsComponent implements OnInit {

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

    
  @Input()
  colors = [];

  @Input()
  legend: any;

  @Input()
  isZarlaga: any;

  @Input()
  isOrlogo: any;
  
  @Input()
  percent: any;
  @Input()
  prefValue: any;

  @Input()
  befPercent: any;
  
  width = 0;
  labelWidth = 0;
  fontSize = "13px";
  screenHeight: number;
  screenWidth: number;
  public innerWidth: any;
  
  params = {year: Constants.year, category: this.mainService.type}
  
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: any;

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    console.log(this.legend);
    if(!this.legend){
      this.width = 500;
    }else{
      this.width = 600;
    }
    // if(this.screenWidth<=1680 && this.screenWidth>1440){
    //   this.width = 450;
    // }else if( this.screenWidth<=1440 && this.screenWidth>1200){
    //   this.width = 350;
    // }else if( this.screenWidth<=1200 && this.screenWidth>1010){
    //   this.width = 300;
    // }else{
    //   this.width = 500;
    // }
  }
  constructor(private mainService: MainService, private router: Router) {
    this.onResize();
    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd) {
        if(val.url.split('?').length > 1){
          this.setQueryParam(val.url.split('?')[1]);          
        }
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
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.getWidth();
    const handleSelect = (event, chartContext, config) => {    
      this.mainService.orlogoSub(this.sub, config.dataPointIndex);
    }
    this.chartOptions = {
      fontFamily: "Montserrat, sans-serif",
      series: this.values,
      chart: {
        width: "100%",
        type: "donut",
        events: {         
          legendClick: function(chartContext, seriesIndex, config) {
          },
          dataPointSelection: handleSelect
        },
      },
      dataLabels: {
        enabled: false,
        style: {
          fontSize: '16px'
      },
        dropShadow: {
          enabled: false
        }
      },
      labels: this.names,
      colors: this.colors,
      stroke: {
        width: 0,
      },
      legend: {
        show: this.legend,
        position: "bottom",
        width: this.labelWidth,
        horizontalAlign: 'left', 
        fontSize: this.fontSize,
        offsetX: 100,
      },
      tooltip: {
        enabled: false,  
        y: {
          formatter: function(value, series) {
            return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
          },
          title: {
              formatter: (seriesName) => seriesName,
          },
      },
      },  
      plotOptions: {
        pie: {
          donut: {
            size: '75%',
            
          }
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
    
  }
  getWidth(){
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    if(this.screenWidth<=1680 && this.screenWidth>1440){
      if(!this.legend){
        this.width = 450;
      }else{
        this.labelWidth = 350;
        this.fontSize = "10px";
        this.width = 550;
      }
    }else if( this.screenWidth<=1440 && this.screenWidth>1200){
      if(!this.legend){
        this.width = 350;
      }else{
        this.width = 450;
      }
    }else if( this.screenWidth<=1200 && this.screenWidth>1010){
      if(!this.legend){
        this.width = 300;
      }else{
        this.width = 400;
      }
    }else{
      if(!this.legend){
        this.width = 500;
      }else{
        this.width = 600;
      }
    }
  }
  
  getType(){
    return this.mainService.type == "APPROVED"?"гүйцэтгэл":"өмнөх оноос";
  }

  checkType(){
    return this.mainService.type == "APPROVED"; 
  }
  

}
