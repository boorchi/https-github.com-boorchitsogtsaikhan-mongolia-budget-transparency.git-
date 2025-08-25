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
  ApexTitleSubtitle, 
  ApexDataLabels,  
  ApexPlotOptions,
  ApexLegend

} from "ng-apexcharts";
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'boost-charts',
  templateUrl: './boost-chart.component.html',
  styleUrls: ['./boost-chart.component.scss']
})
export class BoostChartComponent implements OnInit{

  isDataLoaded = false;
  @Input()
  values: any;

  @Input()
  names: any;

  @Input()
  title: any;

  @Input()
  legend: any;

  @Input()
  chartType;

  @Input()
  colors;

  @Input()
  series = [];

  @Input()
  data1 = [];

  @Input()
  data2 = [];

  @Input()
  labels = [];
  
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: any;

  constructor(private mainService: MainService, private route: ActivatedRoute, private router: Router) { 
   
  }
  


  ngOnInit() {
    this.getWidth();
    if(this.chartType === "pie"){
      this.getPie();
    }
    if(this.chartType === "tree"){
      this.getTree();
    }
    if(this.chartType === "bar"){      
      this.getBar();
    }
    if(this.chartType === "column"){      
      this.getColumn();
    }

  }
  
  getPie(){
    const handleSelect = (event, chartContext, config) => {    
      this.mainService.boostSub(config.dataPointIndex);
    }
    this.chartOptions = {
      series: this.series,
      chart: {
        width: 600,
        type: "pie",
        events: {         
          legendClick: function(chartContext, seriesIndex, config) {          
          },
          dataPointSelection: handleSelect
        },
        toolbar: {
          show: true
        }
      },
      labels: this.labels,
      dataLabels: {
        enabled: true,
        style: {
          fontSize: '16px'
      },
        dropShadow: {
          enabled: false
        }
      },
      colors:this.colors,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
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

  getTree(){
    var height = 350;
    if(this.series.length > 5){
      height = 75 * this.series.length;
    }
    if(height > 600){
      height = 600;
    }
    const handleSelect = (event, chartContext, config) => {    
      this.mainService.boostSub(config.dataPointIndex);
    }
    this.chartOptions = {
      series: [
        {
          data: this.series
        }
      ],
      colors: [this.colors[0]],
      chart: {
        height: height,
        type: "treemap",
        events: {         
          legendClick: function(chartContext, seriesIndex, config) {          
          },
          dataPointSelection: handleSelect
        },
        toolbar: {
          show: true
        }
      },
      dataLabels: {
        enabled: true,
        style: {
          fontSize: '32px'
      },
        dropShadow: {
          enabled: false
        }
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
      title: {
        text: "Basic Treemap"
      }
    };
    this.isDataLoaded = true;
  }

  getBar(){    
    const handleSelect = (event, chartContext, config) => {    
      this.mainService.boostSub(config.dataPointIndex);
    }
    this.chartOptions = {
      series: [
        {
          name: "төлөвлөгөө",
          data: this.data1
        },
        {
          name: "гүйцэтгэл",

          data: this.data2
        }
      ],
      chart: {
        type: "bar",
        height: this.data1.length * 200,
        events: {         
          legendClick: function(chartContext, seriesIndex, config) {          
          },
          dataPointSelection: handleSelect
        },
        toolbar: {
          show: true
        }
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: "top"
          }
        }
      },
      dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
          fontSize: "12px",
          colors: ["#fff"]
        }
      },
      stroke: {
        show: true,
        width: 1,
        colors: ["#fff"]
      },
      xaxis: {
        categories: this.labels
      }
    };
    this.isDataLoaded = true;
  }

  getColumn(){    
    const handleSelect = (event, chartContext, config) => {    
      this.mainService.boostSub(config.dataPointIndex);
    }
    this.chartOptions = {
      series: [
        {
          name: "төлөвлөгөө",
          data: this.data1
        },
        {
          name: "гүйцэтгэл",

          data: this.data2
        }
      ],
      chart: {
        type: "bar",
        //  height: "70%",
        events: {         
          legendClick: function(chartContext, seriesIndex, config) {          
          },
          dataPointSelection: handleSelect
        },
        toolbar: {
          show: true
        }
      },
      plotOptions: {
        // bar: {
        //   horizontal: true,
        //   dataLabels: {
        //     position: "top"
        //   }
        // }
      },
      dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
          fontSize: "12px",
          colors: ["#fff"]
        }
      },
      stroke: {
        show: true,
        width: 1,
        colors: ["#fff"]
      },
      xaxis: {
        categories: this.labels
      }
    };
    this.isDataLoaded = true;
  }

  getMultiLine(){
   
  }
  getWidth(){
    
  }
  

}
