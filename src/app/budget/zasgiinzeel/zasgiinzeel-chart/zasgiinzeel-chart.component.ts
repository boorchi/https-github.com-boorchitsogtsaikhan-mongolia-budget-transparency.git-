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
  selector: 'zasgiinzeel-chart',
  templateUrl: './zasgiinzeel-chart.component.html',
  styleUrls: ['./zasgiinzeel-chart.component.scss']
})
export class ZasgiinzeelChartComponent implements OnInit {

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
  
  params = {year: Constants.year, category: Constants.category}
  
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: any;
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
  ngOnInit(){
    
  }
  ngOnChanges() {
    this.chartOptions = {
      series: this.values,
      chart: {
        fontFamily: 'Montserrat, sans-serif',
        width: "100%",
        // background: '#fff',
        type: "donut",
        events: {         
          legendClick: function(chartContext, seriesIndex, config) {
          },
        }, 
      },
      
      labels: this.names,
      colors:['#28c66f' ,'#ff9f43', '#b754ea'],
      stroke: {
        width: 0,
      },
      legend: {
        show: false,
        position: "bottom",
        width: 400,
        horizontalAlign: 'left', 
        offsetX: 100,
        markers: {
          radius: 0
        }, 
      },
      plotOptions: {
        pie: {
          donut: {
            size: '75%',
            // background: "#fff"
          },
          formatter: function (val) {
            return val + ""
          },
        }
      },    
      tooltip: {
        enabled: true,  
        y: {
          formatter: function(value, series) {
            return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
          },
          title: {
              formatter: (seriesName) => seriesName,
          },
      },
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

  

}

