import { Component, ViewChild, Input, OnInit } from "@angular/core";
import { MainService } from 'src/app/services/main.service';
import { Constants } from 'src/app/services/constants';
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
  selector: 'app-nchart',
  templateUrl: './nchart.component.html',
  styleUrls: ['./nchart.component.scss']
})
export class NchartComponent implements OnInit {
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
  percentChart: any;
  
  @Input()
  befpercentChart: any;
  
  @Input()
  prefValueChart: any;
  
  @Input()
  colors = [];

  @Input()
  legend: any;

  width = 0;
  labelWidth = 0;
  fontSize = "13px";
  screenHeight: number;
  screenWidth: number;

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: any;
  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.getWidth();
    const handleSelect = (event, chartContext, config) => {    
      this.mainService.ndeSub(this.sub);
    }
    this.chartOptions = {
      series: this.values,
      chart: {
        width: "100%",
        type: "donut",
        fontFamily: 'Montserrat, sans-serif',
        events: {         
          legendClick: function(chartContext, seriesIndex, config) {
            console.log(seriesIndex);
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
      colors: this.colors,
      stroke: {
        width: 0,
      },
      legend: {
        show:this.legend,
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
              formatter: (seriesName) => "",
          },
      },
      },  
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: false,
            enabledOnSeries: undefined,
            formatter: function (val, opts) {
                return val
            },
            textAnchor: 'middle',
            distributed: false,
            offsetX: 0,
            offsetY: 0,
            style: {
                fontSize: '14px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 'bold',
                colors: undefined
            },
            background: {
              enabled: true,
              foreColor: '#fff',
              padding: 4,
              borderRadius: 2,
              borderWidth: 1,
              borderColor: '#fff',
              opacity: 0.9,
              dropShadow: {
                enabled: false,
                top: 1,
                left: 1,
                blur: 1,
                color: '#fff',
                opacity: 0.45
              }
            },
            dropShadow: {
                enabled: false,
                top: 1,
                left: 1,
                blur: 1,
                color: '#fff',
                opacity: 0.45
            }
          },
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
        this.width = 600;
      }
    }else if( this.screenWidth<=1440 && this.screenWidth>1200){
      if(!this.legend){
        this.width = 350;
      }else{
        this.labelWidth = 350;
        this.fontSize = "9px";
        this.width = 480;
      }
    }else if( this.screenWidth<=1200 && this.screenWidth>1010){
      if(!this.legend){
        this.width = 300;
      }else{
        this.labelWidth = 350;
        this.fontSize = "9px";
        this.width = 440;
      }
    }else{
      if(!this.legend){
        this.width = 500;
      }else{
        this.width = 600;
      }
    }
  }

}
