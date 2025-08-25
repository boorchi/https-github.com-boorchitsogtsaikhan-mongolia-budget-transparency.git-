import { Component, OnInit, Input } from '@angular/core';
import { Constants } from 'src/app/services/constants';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-simple-number',
  templateUrl: './simple-number.component.html',
  styleUrls: ['./simple-number.component.scss']
})
export class SimpleNumberComponent implements OnInit {

  @Input()
  text1: any;
  @Input()
  text2: any;
  @Input()
  showHelp: any;
  @Input()
  baseNumber: any;
  @Input()
  percent: any;
  @Input()
  befPercent: any;
  @Input()
  prefValue: any;
  @Input()
  color = 'red';
  @Input()
  width = 200;

  type;
  labelWidth = 0;
  fontSize = "13px";
  screenHeight: number;
  screenWidth: number;
  params = {year: Constants.year, category: Constants.category};
  constructor(private mainService: MainService, private route: ActivatedRoute, private router: Router) { 
    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd) {
        if(val.url.split('?').length > 1){
          this.setQueryParam(val.url.split('?')[1]);          
        }
      }
      this.getWidth();
    });
  }

  ngOnInit(): void {
     this.getWidth();
  }
  setQueryParam(param){
    var query = {};
    var params = param.split("&");
    params.forEach(function(entry) {
        var p = entry.split('=');
        this.params[p[0]] = p[1];
    },this);  
  }

  getType(){
    return this.mainService.type == "APPROVED"?"гүйцэтгэл":"өмнөх оноос";
  }

  checkType(){
    return this.mainService.type == "APPROVED";
  }
  getWidth(){
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    
    if(this.screenWidth<=1680 && this.screenWidth>1440){
      this.width = 200;
    }else if( this.screenWidth<=1440 && this.screenWidth>1366){
      this.width = 150;
    }else if( this.screenWidth<=1366 && this.screenWidth>1280){
      this.width = 150;
    }else if( this.screenWidth<=1280 && this.screenWidth>1200){
      this.width = 150;
    }else if( this.screenWidth<=1200 && this.screenWidth>1010){
      this.width = 150;
    }else{
      this.width = 200;
    }
  }

}
