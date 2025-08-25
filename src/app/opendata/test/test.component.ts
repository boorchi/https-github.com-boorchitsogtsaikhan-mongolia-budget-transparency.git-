import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Constants } from '../../services/constants';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { MainService } from '../../services/main.service';
import 'datatables.net';
import * as DataTables from 'datatables.net';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  
  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;
  

  searchParam = {
    years:[], 
    tezCode:"", 
    tzCode:"", 
    orgCode:"",
    searchType:'category'
  }

  searchZarlagaParam = {
    years:[], 
    tezCode:"", 
    tzCode:"", 
    orgCode:"",
    searchType:'category'
  }

  chartType = 'table';
  typeName = '';
  typeData = 'Орлого'
  map = [];
  showRepair = 0;
  subType: any;
  showType = '0';
  datasSeason = [1, 2, 3, 4];
  datasMonth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  show = false;
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();
  showData = [];
  boostFiles = [];
  boostDatas = [];
  year = 2020;
  host = Constants.PATH;
  maxLevel = 5;
  colors = ['#28c66f','#6639b6','#795448','#fc5621','#9b26af','#1db7ab','#02a8f3','#5f7c8a','#ffca30','#e75558','#fcaf32','#0081ff','#313851','#6639b6','#795448'];
  mainColor = "";
  level = 0;
  levelIndex = 0;
  title = "";
  constructor(private mainService: MainService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
        this.subType = params["subType"];   
        if(params["year"]){
          this.year = params["year"];          
        }  
        // this.getFiles(this.subType, this.year);   
    });    

    this.mainService.boostDataSub.subscribe(data => {        
      this.loadData(data);
    });
  }

  ngOnInit(): void {
    this.getBoostOrlogoTez();
    this.getBoostOrlogoOrg();
    this.getBoostZarlagaTez();
    this.getBoostZarlagaOrg();
    this.getBoostZarlagaTz();

  }

  data : [];
  orlogoData = {};
  type = 2;
  boostYear = 2021
  searchBoost(){
    this.title = "Төсвийн орлогын дата";
    this.mainColor = "#28c66f";
    this.colors[0] = this.mainColor;
    this.typeName = '';
    var columns = [{
      title: 'Төсвийн ерөнхийлөн захирагч',
      data: 'tezName'
    }, {
      title: 'Төсвийн байгууллага',
      data: 'tuvOrgName'
    },
    {
      title: 'Төлөвлөсөн',
      data: 'plannedValue',
      className: "number",         
      render: $.fn.dataTable.render.number(',', '.', 2, '')
    },
    {
      title: 'Гүйцэтгэl',
      data: 'executeValue',
      
    }, {
      title: 'Гүйцэтгэл',
      data: 'executeValue',
      className: "number",         
      render: $.fn.dataTable.render.number(',', '.', 2, '')
    }
      
    ];

    this.mainService.baseGet(Constants.HOST + "websan/api/boostOrlogo", this.searchParam, true).then((result: []) => { 
      this.orlogoData = {};     
      this.data = result;  
      if(this.searchParam.searchType === 'category'){
        this.setCategory(result);
      }
      if(this.searchParam.searchType === 'tez'){
        this.setTez(result);
      }
      if(this.searchParam.searchType === 'org'){
        this.setOrg(result);
      } 
    }).catch((error) => {
      console.log(error);
    });
  
    this.showData = ["show"];   
  }

  searchBoostZarlaga(){
    this.title = "Төсвийн зарлагын дата";
    this.mainColor = "#ea5455";
    this.colors[0] = "#ea5455";   
    this.typeName = '';
    var columns = [{
      title: 'Төсвийн ерөнхийлөн захирагч',
      data: 'tezName'
    }, {
      title: 'Төсвийн байгууллага',
      data: 'tuvOrgName'
    },
    {
      title: 'Төлөвлөсөн',
      data: 'plannedValue',
      className: "number",         
      render: $.fn.dataTable.render.number(',', '.', 2, '')
    },
    {
      title: 'Гүйцэтгэl',
      data: 'executeValue',
      
    }, {
      title: 'Гүйцэтгэл',
      data: 'executeValue',
      className: "number",         
      render: $.fn.dataTable.render.number(',', '.', 2, '')
    }
      
    ];

    this.mainService.baseGet(Constants.HOST + "websan/api/boostZarlaga", this.searchZarlagaParam, true).then((result: []) => { 
      this.orlogoData = {};     
      this.data = result;  
      if(this.searchZarlagaParam.searchType === 'category'){
        this.setCategoryZarlaga(result);
      }
      if(this.searchZarlagaParam.searchType === 'plan'){
        this.setPlan(result);
      }
      if(this.searchZarlagaParam.searchType === 'spec'){
        this.setSpec(result);
      } 
    }).catch((error) => {
      console.log(error);
    });
  
    this.showData = ["show"];   
  }

  setCategory(result){
    this.maxLevel = 5;
    this.map = [];
    this.typeName = "Нэгдсэн төсвийн ангиллал";
    this.type = 1;
    this.level = 0;
    var item = {};
      var l0 = "zeroCategoryCode";
      var l1 = "firstCategoryCode";
      var l2 = "secondCategoryCode";
      var l3 = "thirdCategoryCode";
      var l4 = "fourthCategoryCode";
      var n0 = "zeroCategoryName";
      var n1 = "firstCategoryName";
      var n2 = "secondCategoryName";
      var n3 = "thirdCategoryName";
      var n4 = "fourthCategoryName";
    for(var i = 0; i < result.length; i++){         
      item = result[i];
      if(!this.orlogoData.hasOwnProperty(item[l0])){
        this.orlogoData[item[l0]] = {name : item[n0], data: {}
        ,planned: 0, execute: 0, count: 0};
      }          
      if(!this.orlogoData[item[l0]]["data"].hasOwnProperty(item[l1])){
        this.orlogoData[item[l0]]["data"][item[l1]] = {name : item[n1], data: {}
        ,planned: 0, execute: 0, count: 0};
      }
      if(!this.orlogoData[item[l0]]["data"][item[l1]]["data"].hasOwnProperty(item[l2])){
        this.orlogoData[item[l0]]["data"][item[l1]]["data"][item[l2]] = {name : item[n2], data: {}
        ,planned: 0, execute: 0, count: 0};
      }
      if(!this.orlogoData[item[l0]]["data"][item[l1]]["data"][item[l2]]["data"].hasOwnProperty(item[l3])){
        this.orlogoData[item[l0]]["data"][item[l1]]["data"][item[l2]]["data"][item[l3]] = {name : item[n3], data: {}
        ,planned: 0, execute: 0, count: 0};
      }
      if(!this.orlogoData[item[l0]]["data"][item[l1]]["data"][item[l2]]["data"][item[l3]]["data"].hasOwnProperty(item[l4])){
        this.orlogoData[item[l0]]["data"][item[l1]]["data"][item[l2]]["data"][item[l3]]["data"][item[l4]] = {name : item[n4],
           planned: 0, execute: 0, count: 0};
      }
      this.orlogoData[item[l0]]["planned"] +=  item["plannedValue"];
      this.orlogoData[item[l0]]["execute"] +=  item["executeValue"];
      this.orlogoData[item[l0]][item["budgetType"]] = {};
      this.orlogoData[item[l0]][item["budgetType"]]["planned"] +=  item["plannedValue"];
      this.orlogoData[item[l0]][item["budgetType"]]["execute"] +=  item["executeValue"];
      this.orlogoData[item[l0]]["count"] ++; 
      
      this.orlogoData[item[l0]]["data"][item[l1]]["planned"] +=  item["plannedValue"];
      this.orlogoData[item[l0]]["data"][item[l1]]["execute"] +=  item["executeValue"];
      this.orlogoData[item[l0]]["data"][item[l1]]["count"] ++; 

      this.orlogoData[item[l0]]["data"][item[l1]]["data"][item[l2]]["planned"] +=  item["plannedValue"];
      this.orlogoData[item[l0]]["data"][item[l1]]["data"][item[l2]]["execute"] +=  item["executeValue"];
      this.orlogoData[item[l0]]["data"][item[l1]]["data"][item[l2]]["count"] ++; 

      this.orlogoData[item[l0]]["data"][item[l1]]["data"][item[l2]]["data"][item[l3]]["planned"] +=  item["plannedValue"];
      this.orlogoData[item[l0]]["data"][item[l1]]["data"][item[l2]]["data"][item[l3]]["execute"] +=  item["executeValue"];
      this.orlogoData[item[l0]]["data"][item[l1]]["data"][item[l2]]["data"][item[l3]]["count"] ++; 

      this.orlogoData[item[l0]]["data"][item[l1]]["data"][item[l2]]["data"][item[l3]]["data"][item[l4]]["planned"] +=  item["plannedValue"];
      this.orlogoData[item[l0]]["data"][item[l1]]["data"][item[l2]]["data"][item[l3]]["data"][item[l4]]["execute"] +=  item["executeValue"];
      this.orlogoData[item[l0]]["data"][item[l1]]["data"][item[l2]]["data"][item[l3]]["data"][item[l4]]["count"] ++;         
        
      if(i == result.length-1){
        this.loadData();
      }
    }
  }

  setTez(result){
    this.type = 2;
    this.maxLevel = 1;
    this.map = [];
    this.typeName = "Төсвийн ерөнхийлөн захирагч";
    this.level = 0;
    var item = {};
      var l0 = "tezCode";
      var l1 = "tuvOrgName";
      var n0 = "tezName";
      var n1 = "tuvOrgName";
    for(var i = 0; i < result.length; i++){         
      item = result[i];
      if(!this.orlogoData.hasOwnProperty(item[l0])){
        this.orlogoData[item[l0]] = {name : item[n0], data: {}
        ,planned: 0, execute: 0, count: 0};
      }          
      if(!this.orlogoData[item[l0]]["data"].hasOwnProperty(item[l1])){
        this.orlogoData[item[l0]]["data"][item[l1]] = {name : item[n1], data: {}
        ,planned: 0, execute: 0, count: 0};
      }

      this.orlogoData[item[l0]]["planned"] +=  item["plannedValue"];
      this.orlogoData[item[l0]]["execute"] +=  item["executeValue"];
      this.orlogoData[item[l0]]["count"] ++; 
      
      this.orlogoData[item[l0]]["data"][item[l1]]["planned"] +=  item["plannedValue"];
      this.orlogoData[item[l0]]["data"][item[l1]]["execute"] +=  item["executeValue"];
      this.orlogoData[item[l0]]["data"][item[l1]]["count"] ++; 
    
        
      if(i == result.length-1){
        this.loadData();
      }
    }
  }

  setOrg(result){
    this.type = 2;
    this.maxLevel = 1;
    this.map = [];
    this.typeName = "Байгууллага";
    this.level = 0;
    var item = {};
      var l0 = "tuvOrgName";
      var l1 = "tuvDed";
      var n0 = "tuvOrgName";
      var n1 = "tuvDed";
    for(var i = 0; i < result.length; i++){         
      item = result[i];
      if(!this.orlogoData.hasOwnProperty(item[l0])){
        this.orlogoData[item[l0]] = {name : item[n0], data: {}
        ,planned: 0, execute: 0, count: 0};
      }          
      if(!this.orlogoData[item[l0]]["data"].hasOwnProperty(item[l1])){
        this.orlogoData[item[l0]]["data"][item[l1]] = {name : item[n1], data: {}
        ,planned: 0, execute: 0, count: 0};
      }

      this.orlogoData[item[l0]]["planned"] +=  item["plannedValue"];
      this.orlogoData[item[l0]]["execute"] +=  item["executeValue"];
      this.orlogoData[item[l0]]["count"] ++; 
      
      this.orlogoData[item[l0]]["data"][item[l1]]["planned"] +=  item["plannedValue"];
      this.orlogoData[item[l0]]["data"][item[l1]]["execute"] +=  item["executeValue"];
      this.orlogoData[item[l0]]["data"][item[l1]]["count"] ++; 
    
        
      if(i == result.length-1){
        this.loadData();
      }
    }
  }

  setCategoryZarlaga(result){
    this.maxLevel = 5;
    this.map = [];
    this.typeName = "Нэгдсэн төсвийн ангиллал";
    this.type = 1;
    this.level = 0;
    var item = {};
     
      var l0 = "firstCategoryCode";
      var l1 = "secondCategoryCode";
      var l2 = "thirdCategoryCode";
      var l3 = "fourthCategoryCode";
    
      var n0 = "firstCategoryName";
      var n1 = "secondCategoryName";
      var n2 = "thirdCategoryName";
      var n3 = "fourthCategoryName";
    for(var i = 0; i < result.length; i++){         
      item = result[i];
      if(!this.orlogoData.hasOwnProperty(item[l0])){
        this.orlogoData[item[l0]] = {name : item[n0], data: {}
        ,planned: 0, execute: 0, count: 0};
      }          
      if(!this.orlogoData[item[l0]]["data"].hasOwnProperty(item[l1])){
        this.orlogoData[item[l0]]["data"][item[l1]] = {name : item[n1], data: {}
        ,planned: 0, execute: 0, count: 0};
      }
      if(!this.orlogoData[item[l0]]["data"][item[l1]]["data"].hasOwnProperty(item[l2])){
        this.orlogoData[item[l0]]["data"][item[l1]]["data"][item[l2]] = {name : item[n2], data: {}
        ,planned: 0, execute: 0, count: 0};
      }
      if(!this.orlogoData[item[l0]]["data"][item[l1]]["data"][item[l2]]["data"].hasOwnProperty(item[l3])){
        this.orlogoData[item[l0]]["data"][item[l1]]["data"][item[l2]]["data"][item[l3]] = {name : item[n3], data: {}
        ,planned: 0, execute: 0, count: 0};
      }
     
      this.orlogoData[item[l0]]["planned"] +=  item["plannedValue"];
      this.orlogoData[item[l0]]["execute"] +=  item["executeValue"];
      this.orlogoData[item[l0]][item["budgetType"]] = {};
      this.orlogoData[item[l0]][item["budgetType"]]["planned"] +=  item["plannedValue"];
      this.orlogoData[item[l0]][item["budgetType"]]["execute"] +=  item["executeValue"];
      this.orlogoData[item[l0]]["count"] ++; 
      
      this.orlogoData[item[l0]]["data"][item[l1]]["planned"] +=  item["plannedValue"];
      this.orlogoData[item[l0]]["data"][item[l1]]["execute"] +=  item["executeValue"];
      this.orlogoData[item[l0]]["data"][item[l1]]["count"] ++; 

      this.orlogoData[item[l0]]["data"][item[l1]]["data"][item[l2]]["planned"] +=  item["plannedValue"];
      this.orlogoData[item[l0]]["data"][item[l1]]["data"][item[l2]]["execute"] +=  item["executeValue"];
      this.orlogoData[item[l0]]["data"][item[l1]]["data"][item[l2]]["count"] ++; 

      this.orlogoData[item[l0]]["data"][item[l1]]["data"][item[l2]]["data"][item[l3]]["planned"] +=  item["plannedValue"];
      this.orlogoData[item[l0]]["data"][item[l1]]["data"][item[l2]]["data"][item[l3]]["execute"] +=  item["executeValue"];
      this.orlogoData[item[l0]]["data"][item[l1]]["data"][item[l2]]["data"][item[l3]]["count"] ++; 

        
        
      if(i == result.length-1){
        this.loadData();
      }
    }
  }

  setPlan(result){
    this.type = 2;
    this.maxLevel = 1;
    this.map = [];
    this.typeName = "Төсвийн ерөнхийлөн захирагч";
    this.level = 0;
    var item = {};
      var l0 = "tezCode";
      var l1 = "planCode";
      var n0 = "tezName";
      var n1 = "planName";
    for(var i = 0; i < result.length; i++){         
      item = result[i];
      if(!this.orlogoData.hasOwnProperty(item[l0])){
        this.orlogoData[item[l0]] = {name : item[n0], data: {}
        ,planned: 0, execute: 0, count: 0};
      }          
      if(!this.orlogoData[item[l0]]["data"].hasOwnProperty(item[l1])){
        this.orlogoData[item[l0]]["data"][item[l1]] = {name : item[n1], data: {}
        ,planned: 0, execute: 0, count: 0};
      }

      this.orlogoData[item[l0]]["planned"] +=  item["plannedValue"];
      this.orlogoData[item[l0]]["execute"] +=  item["executeValue"];
      this.orlogoData[item[l0]]["count"] ++; 
      
      this.orlogoData[item[l0]]["data"][item[l1]]["planned"] +=  item["plannedValue"];
      this.orlogoData[item[l0]]["data"][item[l1]]["execute"] +=  item["executeValue"];
      this.orlogoData[item[l0]]["data"][item[l1]]["count"] ++; 
    
        
      if(i == result.length-1){
        this.loadData();
      }
    }
  }

  setSpec(result){
    this.type = 2;
    this.maxLevel = 1;
    this.map = [];
    this.typeName = "Байгууллага";
    this.level = 0;
    var item = {};
    var l0 = "tezCode";
    var l1 = "specCode";
    var n0 = "tezName";
    var n1 = "specName";
    for(var i = 0; i < result.length; i++){         
      item = result[i];
      if(!this.orlogoData.hasOwnProperty(item[l0])){
        this.orlogoData[item[l0]] = {name : item[n0], data: {}
        ,planned: 0, execute: 0, count: 0};
      }          
      if(!this.orlogoData[item[l0]]["data"].hasOwnProperty(item[l1])){
        this.orlogoData[item[l0]]["data"][item[l1]] = {name : item[n1], data: {}
        ,planned: 0, execute: 0, count: 0};
      }

      this.orlogoData[item[l0]]["planned"] +=  item["plannedValue"];
      this.orlogoData[item[l0]]["execute"] +=  item["executeValue"];
      this.orlogoData[item[l0]]["count"] ++; 
      
      this.orlogoData[item[l0]]["data"][item[l1]]["planned"] +=  item["plannedValue"];
      this.orlogoData[item[l0]]["data"][item[l1]]["execute"] +=  item["executeValue"];
      this.orlogoData[item[l0]]["data"][item[l1]]["count"] ++; 
    
        
      if(i == result.length-1){
        this.loadData();
      }
    }
  }


  labels = [];
  series = [];
  mainData = [];
  data1 = [];
  data2 = [];

  loadData(data = null){
    
    var $this = this;
    this.labels = [];
    this.series = [];
    this.data1 = [];
    this.data2 = [];
    this.levelIndex = data;    
    if(this.level === 0 && data == null){
      this.mainData = Object.keys(this.orlogoData).map((key) => [key, this.orlogoData[key]]);
    }else{   
    
      if(this.mainData[this.levelIndex][1].hasOwnProperty("data") && this.level < this.maxLevel){
        this.show = false;
        this.map.push(this.mainData[this.levelIndex][1]["name"]);
        this.level++;
        this.mainData = Object.keys(this.mainData[this.levelIndex][1]["data"]).map((key) => [key, this.mainData[this.levelIndex][1]["data"][key]]);

      }else{
        return;
      }
      
    }
    
    if(this.chartType == "pie"){
      this.mainData.forEach(item => {
        this.labels.push(item[1]["name"]);
        this.series.push(item[1]["planned"]);
      });  
    }
    if(this.chartType == "tree"){      
      this.mainData.forEach(item => {
        this.series.push({x: item[1]["name"], y: item[1]["planned"]});
      });  
    }

    if(this.chartType == "bar"){      
      this.mainData.forEach(item => {
        this.labels.push(item[1]["name"]);
        this.data1.push(item[1]["planned"]);
        this.data2.push(item[1]["execute"]);
      });  
    }
    console.log(this.mainData);
    setTimeout(function(){ $this.show = true; }, 1000);
  }

 

  boosOrlogoTez = [];
  boosOrlogoOrg = [];
  boosZarlagaTez = [];
  boosZarlagaOrg = [];
  boosZarlagaTz = [];
  getBoostOrlogoTez(){
    this.mainService.baseGet(Constants.HOST + "websan/api/boostOrlogoTez", null, true).then((result: []) => {
      this.boosOrlogoTez = result;
    }).catch((error) => {
      console.log(error);
    });
  }

  getBoostOrlogoOrg(){
    this.mainService.baseGet(Constants.HOST + "websan/api/boostOrlogoOrg", null, true).then((result: []) => {
      this.boosOrlogoOrg = result;
    }).catch((error) => {
      console.log(error);
    });
  }

  getBoostZarlagaTez(){
    this.mainService.baseGet(Constants.HOST + "websan/api/boostZarlagaTez", null, true).then((result: []) => {
      this.boosZarlagaTez = result;
    }).catch((error) => {
      console.log(error);
    });
  }

  getBoostZarlagaTz(){
    this.mainService.baseGet(Constants.HOST + "websan/api/boostZarlagaTz", null, true).then((result: []) => {
      this.boosZarlagaTz = result;
    }).catch((error) => {
      console.log(error);
    });
  }

  getBoostZarlagaOrg(){
    this.mainService.baseGet(Constants.HOST + "websan/api/boostZarlagaOrg", null, true).then((result: []) => {
      this.boosZarlagaOrg = result;
    }).catch((error) => {
      console.log(error);
    });
  }

  search(params){
    this.dtOptions = {
      ajax: Constants.HOST + "websan/api/ehuulga?search=1&start=2020-08-1&end=2020-08-28&tez=011&_=1597798109649",
      columns: [{
        title: 'Төсвийн ерөнхийлөн захирагч',
        data: 'tezName'
      }, {
        title: 'Төсвийн байгууллага',
        data: 'name'
      }, 
       {
        title: 'Эдийн засгийн ангилал',
        data: 'name'
      },{
        title: 'Төлөвлөгөө',
        data: 'subject',
        
      }, {
        title: 'Гүйцэтгэл',
        data: 'amount',
        className: "number",         
        render: $.fn.dataTable.render.number(',', '.', 2, '')
      }
        
      ],
      language: {
        processing: "Уншиж байна...",
        search: "Хайх:",
        lengthMenu: "Хуудсанд _MENU_ -аар харуулах",
        info: "Нийт _TOTAL_ гүйлгээнээс _START_ ээс _END_ хүртэл",
        infoEmpty: "",
        infoFiltered: "(filtrado _MAX_ elementos total)",
        infoPostFix: "",
        loadingRecords: "Уншиж байна...",
        zeroRecords: "Мэдээлэл алга байна",
        emptyTable: "Харуулах мэдээлэл алга",
        paginate: {
          first: "Эхнийх",
          previous: "Өмнөх",
          next: "Дараах",
          last: "Сүүлийнх"
        }
      }
    };
    this.show = true;
    this.showData = ["show"];   
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: any) => {
      dtInstance.destroy();
      this.dtTrigger.next();
    });
  }

  searchBoostMonth(){
    this.getFiles(this.boostYear)
  }

  searchBoostData(){    
    this.getDatas(this.typeData)

  }  
  
  getFiles(year) {
    this.mainService.baseGet(Constants.HOST + "websan/api/boostFile?year=" + year + "&type=Сар", true).then((result: any) => {
      this.boostFiles = result;
    }).catch((error) => {
      console.log(error);
    });
  }

  getDatas(typeData) {
    this.mainService.baseGet(Constants.HOST + "websan/api/boostData?type=" +typeData, true).then((result: any) => {
      this.boostDatas = result;
    }).catch((error) => {
      console.log(error);
    });
  }
}
