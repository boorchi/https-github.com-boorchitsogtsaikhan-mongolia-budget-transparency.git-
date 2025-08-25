import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { MainService } from '../../../services/main.service';
import { Constants } from '../../../services/constants';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material/tree';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';


interface FoodNode {
  name: string;
  id: string;
  root: string;
  children?: FoodNode[];
  expanded: boolean
}



/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  id: string;
  root: string;
  expanded: boolean;
  level: number;
}

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.scss']
})
export class SubMenuComponent implements OnInit {
  count = 0;
  year = 2020;
  type= 1;
  total = 0;
  legalSubType = [];
  categories = [];
  children= [];
  dates = [];
  urlName = 'legacy';
  activeNode : any;
  @Input()
  rootType;
  @Input()
  isOpendata;
  @Input()
  subType;
  years = [2020, 2019, 2018, 2017, 2016, 2015]
  
  constructor(private mainService: MainService, private route: ActivatedRoute,  private router: Router) { 
    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd) { 
        this.urlName = val.url;
      }
    });
    this.route.queryParams.subscribe(params => {   
      this.getLegalYearCount(params["type"]);
      this.getLegalSubType(this.year, params["type"]);      
  });
 
  }

  ngOnInit() {
    this.getLegalSubType(this.year, this.rootType);
    this.getBoostYear();   
  }

  getLegalYearCount(type) {
    this.categories=[];
    this.children=[];
    this.dataSource.data = [];
    this.mainService.baseGet(Constants.HOST + Constants.LEGALYEARCOUNT, {type}, true).then((result: []) => {
      var res = Object.keys(result).map((key) => [key, result[key]]);        
      res.forEach((element, index, array) => {
        this.children=[];
        element[1].forEach((ele, index, array) => {
        var el = {
          name: ele.name,
          id: ele.id,
          root: element[0]
        }
          this.children.push(el);
        })
        var value = {        
          name: element[0],
          children: this.children,          
          expanded: true
        }
        this.categories.push(value);
        if(index == res.length - 1){
          this.dataSource.data = this.categories.sort((a)=> -a.name)
        }
        
      });
      this.setNode();
    }).catch((error) => {
      console.log(error);
    });
  }

  getBoostYear() {
      var yearsData = [];
      this.years.forEach((element, index, array) => {        
        var value = {        
          name: element,
          children: [],
          expanded: false
        }
        yearsData.push(value);
        this.dataSourceBoost.data = yearsData;
        
      });    
  }

  logNode(node){
    console.log(node);
    this.activeNode = node;
    var url_data = this.urlName.split('?');
    var url = url_data[0];
    var param = '';
    if(url_data.length > 1){
      param = url_data[1];      
    }else{
      param = this.router.url;
      param = param.split('?')[1];
    }
    
    var query = this.setQueryParam(param, "subType", node.id);
    
    query["year"] = node.root;
    delete query["legalId"]; 
    this.router.navigate([url], { queryParams: query});
  }

  setNode(){
    var that = this;
    this.treeControl.dataNodes.forEach((element, index, array) => {
      if(element.level == 0){
        if(this.getQueryParam(this.router.url, "year", element.name)){
          that.treeControl.expand(this.treeControl.dataNodes[index]);
        }        
      }
    });
    // console.log(this.treeControl.dataNodes);
    // this.treeControl.expand(this.treeControl.dataNodes[0]);
  }

  boostNode(node){  
   
    this.router.navigate(["opendata"], { queryParams: {year: node.name, subType: this.subType}});
  }

  getLegalSubType(year,type) {
    this.mainService.baseGet(Constants.HOST + Constants.LEGALSUBTYPE, {year, type}, true).then((result: any) => {
      this.legalSubType = result;
    }).catch((error) => {
      console.log(error);
    });
  }
  
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      id: node.id,
      root: node.root,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
      node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  dataSourceBoost = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

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

  getQueryParam(param, change, value){    
    var status = false;
    var params = param.split("&");    
    params.forEach(function(entry) {
      var p = entry.split('=');      
      if(p[0]===change && p[1] === value){       
        status = true;
      }    
    });    
    return status;
  }
}
