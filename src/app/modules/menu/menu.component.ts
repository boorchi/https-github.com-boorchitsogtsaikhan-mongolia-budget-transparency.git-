import { Component, OnInit, Input } from '@angular/core';
import { MainService } from '../../services/main.service';
import { Constants } from '../../services/constants';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'module-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input()
  menuType;
  @Input()
  activeMenu = "";
  openDataList: any[] = [
    {name:"Огноо", id: 1, type: "date", func: "date()"}
  ];
  searchList: any[] = [
    {name:"Огноо", id: 1, type: "date", func: "date()"}
  ];
  showMenu = true
  categories = [];
  tezlist = [];
  orglist = [];
  ezalist = [];
  urlName = '';
  filter = false;
  selectedTez = "";
  selectedYear = "2019";
  chartType = "table";

  amounts: any[] = [
    {name:'0-100,000', value: '0-100000'}, 
    {name:'100,001-1,000,000', value: '100001-1000000'}, 
    {name:'1,000,000 дээш', value: '1000000'}
  ];

  form = {
    valid_start: true,
    valid_end: true,
    valid_tez: true,
    valid_org: true
  }

  showFilter(id){
    this.filter = true;
  }
  model: NgbDateStruct;
  date_start: any;
  date_end: any;
  orgName = "";
  toOrg: any;
  type = "";
  selectedOptions = [];

  date: {year: number, month: number};
  constructor(private mainService: MainService, private route: ActivatedRoute, private router: Router,private calendar: NgbCalendar) {

    router.events.subscribe((val) => {
      // see also
      if(val instanceof NavigationEnd) {
        this.urlName = val.url;
        this.getTez(val.url);
      }
  });
  }
  selectToday() {
    this.model = this.calendar.getToday();
    
  }
  onChange(tez){
    this.getOrglist(this.selectedTez);
  }
  ngOnInit(): void {
    this.getCategories();
    this.getTezlist();
    this.getEzalist();
    this.getOrglist(this.selectedTez);
  }

  getTez(url){
    
    if(url.split('?').length > 1){
      var data = url.split('?')[1];
      if(data.split('start=').length > 1){
        var start = data.split('start=')[1].split("&")[0];     
        this.date_start = {year: parseInt(start.split("-")[0]), month: parseInt(start.split("-")[1]), day: parseInt(start.split("-")[2])}
       
      }
      if(data.split('end=').length > 1){
        var end = data.split('end=')[1].split("&")[0];     
        this.date_end = {year: parseInt(end.split("-")[0]), month: parseInt(end.split("-")[1]), day: parseInt(end.split("-")[2])}
             
      }
      if(data.split('tez=').length > 1){
        this.selectedTez = data.split('tez=')[1].split("&")[0];        
      }
    }
  }

  getCategories() {
    this.mainService.baseGet(Constants.HOST + Constants.LEGALSUBTYPE, true).then((result: any) => {
      this.categories = result;
    }).catch((error) => {
      console.log(error);
    });
  }

  getTezlist() {
    this.mainService.baseGet(Constants.HOST + "websan/api/ehuulga/tezlist", true).then((result: any) => {      
      this.tezlist = result;
    }).catch((error) => {
      console.log(error);
    });
  }

  getOrglist(tez) {
    this.mainService.baseGet(Constants.HOST + "websan/api/ehuulga/orglist?tez=" + tez, true).then((result: any) => {      
      this.orglist = result;
    }).catch((error) => {
      console.log(error);
    });
  }

  getEzalist() {
    this.mainService.baseGet(Constants.HOST + "websan/api/ehuulga/ezalist", true).then((result: any) => {      
      this.ezalist = result;
    }).catch((error) => {
      console.log(error);
    });
  }



  searchStatement(){


    var url_data = this.urlName.split('?');
    var url = url_data[0];
    var param = '';
    var category = '';
   
    var start = '';
    var end = '';
    var query = '';
    if(this.date_start){
      start = this.date_start.year + '-0' + this.date_start.month + '-' + this.date_start.day;
      this.form.valid_start = true;
    }else{
      this.form.valid_start = false;
    }
    if(this.date_end){
      end = this.date_end.year + '-0' + this.date_end.month + '-' + this.date_end.day;
      this.form.valid_end = true;
      ;
    }else{
      this.form.valid_end = false;
    }
    //var query = this.setQueryParam(param, "category", category);
    var params = {search:1,start:start, end: end, tez: this.selectedTez};
    if(this.selectedTez){
      this.form.valid_tez = true;
    }else{
      this.form.valid_tez = false;
    }
    if(this.orgName){
      params["orgname"] = this.orgName;
      this.form.valid_org = true;
    }
    else{
      this.form.valid_org = false;
    }
    if(this.toOrg){
      params["toorg"] = this.toOrg;
    }
    if(this.type){
      params["type"] = this.type;
    }
    if(this.selectedOptions){
      params["numbers"] = this.selectedOptions;
    }
    
    if(this.form.valid_start && this.form.valid_end && this.form.valid_tez && this.form.valid_org){
      this.router.navigate([url], { queryParams: params}).then(() => {
        window.location.reload();
      });
    }
    
    
  }

  boostSearch(){
    var url_data = this.urlName.split('?');
    var url = url_data[0];   

    this.router.navigate([url], { queryParams: {
      search:1,
      subType:'boost', tez: this.selectedTez,
      show: this.chartType
  }}).then(() => {
  });
    
  }

  setQueryParam(param, change, value){
    var query = {};
    var params = param.split("&");
    var find = false;
    params.forEach(function(entry) {
      var p = entry.split('=');
      if(p[0]===change){
        query[change] = value;
        find = true;
      }else{
        query[p[0]] = p[1];
      }
    });
    if(!find){
      query[change] = value;
    }
    return query;
  }

}
