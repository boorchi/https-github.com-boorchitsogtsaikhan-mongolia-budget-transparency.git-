import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
import { Constants } from '../../services/constants';
import * as CanvasJS from '../../../assets/canvasjs.min';

@Component({
  selector: 'app-macro',
  templateUrl: './macro.component.html',
  styleUrls: ['./macro.component.scss']
})
export class MacroComponent implements OnInit {
  macroList: any[] = [];
  macro: any[] = [];
  macroName: any;
  show= false;
  show1= false;
  
  params = {year: Constants.year, category: Constants.category}
  colors = Constants.colorsMacro;
  constructor(private mainService: MainService) { }
  
  // Add image path helper method
  getImagePath(imagePath: string): string {
    return Constants.getImagePath(imagePath);
  }
  

  ngOnInit(): void {
    this.getMacro();
   this.getReleaseDate("Sheet16");
    
   }
   
   getMacro() {    
    this.mainService.baseGet(Constants.HOST + Constants.BUDGET_MACRO_MAIN, null, true).then((result: any) => {
      this.macro = result;
      console.log(this.macro);
    }).catch((error) => {
      console.log(error);
    });
  }
  
  showChart(index, code){ 
    if(index == 1 || index == 2){
      this.show1=true;
      this.show=false;
      this.macroName = this.macro[index];
      this.params["code"] = code;
      this.mainService.baseGet(Constants.HOST + Constants.BUDGET_MACRO_ITEM + "?code=" + this.params["code"], null, true).then((result: any) => {
        var datas1 = [];
        var value1 = {      
          type: "line",    
          dataPoints: []
        } 
        var points = [];
        result.forEach((element, index, array) => {
        points.push({ y: element.value, label: element.year, color: this.colors[index] });
        if(index === array.length - 1) {
          value1.dataPoints = points;
          datas1.push(value1);
          this.render1(datas1);
        }
          
        });
      }).catch((error) => {
        console.log(error);
      });
    }else{
      this.show1=false;
      this.show=true;
      this.macroName = this.macro[index];
      this.params["code"] = code;
      this.mainService.baseGet(Constants.HOST + Constants.BUDGET_MACRO_ITEM + "?code=" + this.params["code"], null, true).then((result: any) => {
        var datas = [];
        var value = {      
            type: "column",    
            // name: element.year,
            // color: this.colors[index], 
            indexLabel: "{y}",          
            indexLabelFontColor: "#fff",
            indexLabelPlacement: "inside",
            showInLegend: false, 
            legendMarkerColor: "#333",
            legendText: this.macroName.name,
            dataPoints: []
            // {x: index, y: element.value, label:  element.year}
        }  
        var points = [];
        result.forEach((element, index, array) => {
        points.push({ y: element.value, label: element.year, color: this.colors[index] });
        if(index === array.length - 1) {
          value.dataPoints = points;
          datas.push(value);
          this.render(datas);
        }
        });
      }).catch((error) => {
        console.log(error);
      });
    }
  }
render(datas){
  let chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    exportEnabled: true,
    title: {
      text: ""
    },
    axisY:{
      title: "",
      gridThickness: 1,
      gridColor: "#eee"
    },
    axisX: {
      interval: 1,
      tickLength: 15
    },
    data: datas
  });    
  chart.render();
}
render1(datas1){
  let chart = new CanvasJS.Chart("chartContainer1", {
    animationEnabled: true,
    title: {
      text: ""
    },
    axisY:{
      title: "",
      gridThickness: 1,
      gridColor: "#eee"
    },
    axisX: {
      interval: 1,
      tickLength: 15
    },
    data: datas1
  });    
  chart.render();
}
releaseDate: any;
  updateDate: any;
  description: any;
  getReleaseDate(code){
    this.mainService.baseGet(Constants.HOST + Constants.BUDGET_RELEASE_DATE + "?code=Sheet16" + "&year=" + 2021,  null, true).then((result: any) => {  
      this.updateDate = result[0].updateDate
      this.description = result[0].description;
    }).catch((error) => {
      console.log(error);
    });
  }
  }


