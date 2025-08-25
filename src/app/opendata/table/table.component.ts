import { Component, Input, OnInit } from '@angular/core';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;
  constructor() { }
  @Input()
  mainData: any;
  @Input()
  typeName: any;
  ngOnInit(): void {
  }
  levelIndex;
  level = 0;
  @Input()
  orlogoData;
  @Input()
  type;
  @Input()
  color;
  maxLevel = 5
  loadDataTable1(i = null){
    
    var $this = this;
    this.levelIndex = i;    
    if(this.level === 0 && i == null){
      this.mainData = Object.keys(this.orlogoData).map((key) => [key, this.orlogoData[key]]);
    }else{   
      if(this.mainData[this.levelIndex][1].hasOwnProperty("data") && this.level < this.maxLevel){
      
        // this.map.push(this.mainData[this.levelIndex][1]["name"]);
        this.level++;
        this.mainData[this.levelIndex][1]["data"] = Object.keys(this.mainData[this.levelIndex][1]["data"]).map((key) => [key, this.mainData[this.levelIndex][1]["data"][key]]);
        this.mainData[this.levelIndex][1]["show"] = true;
      }else{
        return;
      }
      
    }    
    
   
  }

  loadDataTable(i = null){
    if(i.hasOwnProperty("show")){
      i["show"] = !i["show"];
    }else{
      i["show"] = true;
      i["data"] = Object.keys(i["data"]).map((key) => [key, i["data"][key]]);
    }
   
    
   
  }
}
