// import { Component, Input, OnInit, ViewChild } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { ChartComponent } from 'ng-apexcharts';
// import { MainService } from 'src/app/services/main.service';

// @Component({
//   selector: 'statement-charts',
//   templateUrl: './charts.component.html',
//   styleUrls: ['./charts.component.scss']
// })
// export class ChartsComponent implements OnInit {

//   isDataLoaded = false;
//   @Input()
//   values: any;

//   @Input()
//   names: any;

//   @Input()
//   title: any;

//   @Input()
//   legend: any;

//   @Input()
//   chartType;

//   @Input()
//   colors;

//   @Input()
//   series = [];  

//   @Input()
//   labels = [];
  
//   @ViewChild("chart") chart: ChartComponent;
//   public chartOptions: any;

//   constructor(private mainService: MainService, private route: ActivatedRoute, private router: Router) { 
   
//   }
  


//   ngOnInit() {
  
//     if(this.chartType === "pie"){
//       this.getPie();
//     }
//     if(this.chartType === "tree"){
//       this.getTree();
//     }
//     // if(this.chartType === "bar"){      
//     //   this.getBar();
//     // }
//     // if(this.chartType === "column"){      
//     //   this.getColumn();
//     // }

//   }
  
//   getPie(){
//     const handleSelect = (event, chartContext, config) => {    
//       this.mainService.boostSub(config.dataPointIndex);
//     }
//     this.chartOptions = {
//       series: this.series,
//       chart: {
//         width: 650,
//         type: "donut",
//         events: {         
//           legendClick: function(chartContext, seriesIndex, config) {          
//           },
//           dataPointSelection: handleSelect
//         },
//         toolbar: {
//           show: true
//         },        
//       },
//       plotOptions: {
//         pie: {
//           donut: {
//             labels: {
//               show: true,
//               total: {
//                 show: true,
//                 showAlways: true,
//                 label: 'Нийт',
//                 fontSize: '22px',
//                 fontFamily: 'Helvetica, Arial, sans-serif',
//                 fontWeight: 600,
//                 color: '#373d3f',
//                 formatter: function (w) {
//                   return w.globals.seriesTotals.reduce((a, b) => {
//                     return a + b
//                   }, 0)
//                 }
//               },
//             }
//           }
//         }
//       },
//       labels: this.labels,
//       dataLabels: {
//         enabled: true,
//         style: {
//           fontSize: '16px'
//       },
//         dropShadow: {
//           enabled: false
//         }
//       },
     
//       colors:this.colors,
//       responsive: [
//         {
//           breakpoint: 480,
//           options: {
//             chart: {
//               width: 200
//             },
//             legend: {
//               position: "bottom"
//             }
//           }
//         }
//       ]
//     };
//     this.isDataLoaded = true;
//   }

//   getTree(){
//     var height = 350;
//     if(this.series.length > 5){
//       height = 75 * this.series.length;
//     }
//     if(height > 600){
//       height = 600;
//     }
//     const handleSelect = (event, chartContext, config) => {    
//       this.mainService.boostSub(config.dataPointIndex);
//     }
//     this.chartOptions = {
//       series: [
//         {
//           data: this.series
//         }
//       ],
//       colors: [this.colors[0]],
//       chart: {
//         height: height,
//         type: "treemap",
//         events: {         
//           legendClick: function(chartContext, seriesIndex, config) {          
//           },
//           dataPointSelection: handleSelect
//         },
//         toolbar: {
//           show: true
//         }
//       },
//       dataLabels: {
//         enabled: true,
//         style: {
//           fontSize: '32px'
//       },
//         dropShadow: {
//           enabled: false
//         }
//       },
//       tooltip: {
//         enabled: true,  
//         y: {
//           formatter: function(value, series) {
//             return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
//           },
//           title: {
//               formatter: (seriesName) => seriesName + ": ",
//           },
//       },
//       },
//       title: {
//         text: "Basic Treemap"
//       }
//     };
//     this.isDataLoaded = true;
//   }

//   // getBar(){    
//   //   const handleSelect = (event, chartContext, config) => {    
//   //     this.mainService.boostSub(config.dataPointIndex);
//   //   }
//   //   this.chartOptions = {
//   //     series: [
//   //       {
//   //         name: "төлөвлөгөө",
//   //         data: this.data1
//   //       },
//   //       {
//   //         name: "гүйцэтгэл",

//   //         data: this.data2
//   //       }
//   //     ],
//   //     chart: {
//   //       type: "bar",
//   //       height: this.data1.length * 200,
//   //       events: {         
//   //         legendClick: function(chartContext, seriesIndex, config) {          
//   //         },
//   //         dataPointSelection: handleSelect
//   //       },
//   //       toolbar: {
//   //         show: true
//   //       }
//   //     },
//   //     plotOptions: {
//   //       bar: {
//   //         horizontal: true,
//   //         dataLabels: {
//   //           position: "top"
//   //         }
//   //       }
//   //     },
//   //     dataLabels: {
//   //       enabled: true,
//   //       offsetX: -6,
//   //       style: {
//   //         fontSize: "12px",
//   //         colors: ["#fff"]
//   //       }
//   //     },
//   //     stroke: {
//   //       show: true,
//   //       width: 1,
//   //       colors: ["#fff"]
//   //     },
//   //     xaxis: {
//   //       categories: this.labels
//   //     }
//   //   };
//   //   this.isDataLoaded = true;
//   // }

//   // getColumn(){    
//   //   const handleSelect = (event, chartContext, config) => {    
//   //     this.mainService.boostSub(config.dataPointIndex);
//   //   }
//   //   this.chartOptions = {
//   //     series: [
//   //       {
//   //         name: "төлөвлөгөө",
//   //         data: this.data1
//   //       },
//   //       {
//   //         name: "гүйцэтгэл",

//   //         data: this.data2
//   //       }
//   //     ],
//   //     chart: {
//   //       type: "bar",
//   //       //  height: "70%",
//   //       events: {         
//   //         legendClick: function(chartContext, seriesIndex, config) {          
//   //         },
//   //         dataPointSelection: handleSelect
//   //       },
//   //       toolbar: {
//   //         show: true
//   //       }
//   //     },
//   //     plotOptions: {
//   //       // bar: {
//   //       //   horizontal: true,
//   //       //   dataLabels: {
//   //       //     position: "top"
//   //       //   }
//   //       // }
//   //     },
//   //     dataLabels: {
//   //       enabled: true,
//   //       offsetX: -6,
//   //       style: {
//   //         fontSize: "12px",
//   //         colors: ["#fff"]
//   //       }
//   //     },
//   //     stroke: {
//   //       show: true,
//   //       width: 1,
//   //       colors: ["#fff"]
//   //     },
//   //     xaxis: {
//   //       categories: this.labels
//   //     }
//   //   };
//   //   this.isDataLoaded = true;
//   // }

  

// }
