import { Component, OnInit, Input } from '@angular/core';
import { Constants } from 'src/app/services/constants';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { MainService } from 'src/app/services/main.service';
@Component({
  selector: 'module-base-number',
  templateUrl: './base-number.component.html',
  styleUrls: ['./base-number.component.scss']
})
export class BaseNumberComponent implements OnInit {

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
  width = '200px';

  type;
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

}
