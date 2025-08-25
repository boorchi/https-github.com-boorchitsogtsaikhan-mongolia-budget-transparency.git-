import { Component, ViewChild, Input, OnInit } from "@angular/core";
import { Constants } from 'src/app/services/constants';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { MainService } from 'src/app/services/main.service';
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
  selector: 'budget-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit{

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
  isZarlaga: any;

  @Input()
  isOrlogo: any;

  @Input()
  legend: any;

  @Input()
  chartType = "donut";

  @Input()
  series = [];

  @Input()
  labels = [];

  @Input()
  percent = 0;

  @Input()
  befPercent: any;

  @Input()
  prefValue = 0;

  width = 0;
  labelWidth = 0;
  fontSize = "13px";
  screenHeight: number;
  screenWidth: number;
  real: any;
  
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: any;

  params = {year: Constants.year, category: Constants.category};
  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
  }
  constructor(private mainService: MainService, private route: ActivatedRoute, private router: Router) { 
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
    this.getWidth();
    if(this.chartType === "donut"){
      this.getDonut();
    }
    if(this.chartType === "multi"){      
      this.getMulti();
    }
    if(this.chartType === "multi-line"){      
      this.getMultiLine();
    }
  }
  
  getDonut(){
    const handleSelect = (event, chartContext, config) => {    
      this.mainService.orlogoSub(this.sub, config.dataPointIndex);
    }
    
    this.chartOptions = {
      series: this.values,
      chart: {
        fontFamily: "Montserrat, sans-serif",
        width: '100%',
        type: "donut",
        startAngle: 55,
        events: {         
          legendClick: function(chartContext, seriesIndex, config) {          
          },
          dataPointSelection: handleSelect
        },
      },
      labels: this.names,
      dataLabels: {
        enabled: true,
        style: {
          fontSize: '16px'
      },
        dropShadow: {
          enabled: false
        }
      },
      colors:['#008ffb' ,'#28c66f', '#b754ea'],
      stroke: {
        width: 0,
      },
      
      legend: {
        position: "bottom",
        width: this.labelWidth,
        horizontalAlign: 'left', 
        offsetX: 100,
        fontSize: this.fontSize,
        markers: {
          radius: 0
      },      

      },
      tooltip: {
        enabled: true,  
        y: {
          formatter: function(value, series) {
            return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
          },
          title: {
              formatter: (seriesName) => seriesName + ": ",
          },
      },
      },
      plotOptions: {
        pie: {
          donut: {
            size: '75%', 
          },
          startAngle: 55,
          rotate: 20   ,
          formatter: function (val) {
            return val + "%"
          },
        }
      },      
      responsive: [
        {
          breakpoint: 1024,
          options: {
            chart: {
              width: 400
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

  getMulti(){    
    this.chartType = "multi" ;
    this.chartOptions = {
      series: this.series,
      chart: {
      height: 350,
      type: 'line',
      fontFamily: "Montserrat, sans-serif",
      toolbar: {
        show: false
      } 
    },
    stroke: {
      width: [0, 4, 4]
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [0,1,2]
    },
    labels: this.labels,
    xaxis: {
      type: 'year'
    },
    yaxis: [
      
    {      
    
    }, {
      opposite: true,      
    }]
    };
    this.isDataLoaded = true;  
  }

  getMultiLine(){
    this.chartType = "multi" ;
    this.chartOptions = {
      series: this.series,
      chart: {
      height: 350,
      type: 'line',
      fontFamily: "Montserrat, sans-serif",
      toolbar: {
        show: false
      } 
    },
    stroke: {
      width: [3,3,3]
    },
    dataLabels: {
      enabled: true
    },
    labels: this.labels,
    xaxis: {
      type: 'year'
    }
      
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
        this.labelWidth = 350;
        this.fontSize = "10px";
        this.width = 480;
      }
    }else if( this.screenWidth<=1200 && this.screenWidth>1010){
      if(!this.legend){
        this.width = 300;
      }else{
        this.labelWidth = 360;
        this.fontSize = "10px";
        this.width = 458;
      }
    }else{
      if(!this.legend){
        this.width = 500;
      }else{
        this.width = 580;
      }
    }
  }
  getValues(){
    var sum = 0;
    this.values.forEach(element => {
      sum += element;
    });
    return sum;
  }

}
