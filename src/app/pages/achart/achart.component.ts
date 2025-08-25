// import { Component, OnInit,ViewChild } from '@angular/core';
// import { ChartComponent } from "ng-apexcharts";

// import {
//   ApexNonAxisChartSeries,
//   ApexResponsive,
//   ApexChart,
//   ApexDataLabels,
//   ApexFill
// } from "ng-apexcharts";

// export type ChartOptions = {
//   series: ApexNonAxisChartSeries;
//   chart: ApexChart;
//   responsive: ApexResponsive[];
//   labels: any;
//   dataLabels: ApexDataLabels;
//   fill: ApexFill;
// };

// @Component({
//   selector: 'app-achart',
//   templateUrl: './achart.component.html',
//   styleUrls: ['./achart.component.css']
// })
// export class AchartComponent{

//     @ViewChild("chart") chart: ChartComponent;
//     public chartOptions: Partial<ChartOptions>;
  
//     constructor() {
//       this.chartOptions = {
//         series: [44],
//         chart: {
//           type: "donut"
//         },
//         labels: ["Team A"],
//         dataLabels: {
//           enabled: false          
//         },
//         fill: {
//           type: "gradient"
//         },
//       };
//     }
//   }