import { Component, OnInit, Input } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { Constants } from 'src/app/services/constants';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-orlogo-sub',
  templateUrl: './orlogo-sub.component.html',
  styleUrls: ['./orlogo-sub.component.scss']
})
export class OrlogoSubComponent implements OnInit {

  @Input()
  datas: any;

  @Input()
  befDatas: any;
  
  screenHeight: number;
  screenWidth: number;

  breakpoint: any;
  colors = Constants.colors;
  params = {year: Constants.year, category: Constants.category};
  constructor(private mainService: MainService, private route: ActivatedRoute, private router: Router) { 
    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd) {
        if(val.url.split('?').length > 1){
          this.setQueryParam(val.url.split('?')[1]);          
        }
      }
    });
  }

  ngOnInit(): void {
    this.getWidth();
  }
  onResize(event) {
    if(event.target.innerWidth && event.target.innerWidth>1440){
      this.breakpoint = 4;
    }else if( event.target.innerWidth<=1440 && event.target.innerWidth>1200){
      this.breakpoint = 3;
    }else if( event.target.innerWidth<=1200 && event.target.innerWidth>1010){
      this.breakpoint = 2;
    }else{
      this.breakpoint = 4;
    }
  }
  getWidth(){
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    if(this.screenWidth<=1680 && this.screenWidth>1440){
      this.breakpoint = 4;
    }else if( this.screenWidth<=1440 && this.screenWidth>1200){
      this.breakpoint = 3;
    }else if( this.screenWidth<=1200 && this.screenWidth>1010){
      this.breakpoint = 2;
    }else{
      this.breakpoint = 4;
    }
  }
  setQueryParam(param){
    var query = {};
    var params = param.split("&");
    params.forEach(function(entry) {
        var p = entry.split('=');
        this.params[p[0]] = p[1];
    },this);    
  }

  tiles: Tile[] = [
    {text: 'Орлогын албан татвар', cols: 1, rows: 3, color: 'lightgreen'},
    {text: 'Нийгмийн даатгал', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Хөрөнгийн албан татвар', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Онцгой албан татвар', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Орлогын албан татвар', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Тусгай зориулалт', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Бусад', cols: 1, rows: 1, color: 'lightgreen'},
  ];

  getPercent3Level(item){
    var data = 0;
    // console.log(item);
    // this.befDatas.forEach(function(entry, index) {  
    //     data = Math.floor(parseFloat(((item.approvedValue - entry.approvedValue) / entry.approvedValue).toFixed(2)) * 100);
    // }); 
    return data;
  }

  getType(){
    return this.mainService.type == "APPROVED"?"гүйцэтгэл":"Өмнөх оноос";
  }

  checkType(){
    return this.mainService.type == "APPROVED";
  }
  

}
