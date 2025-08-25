import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/services/constants';
import { MainService } from 'src/app/services/main.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-coviddemo',
  templateUrl: './coviddemo.component.html',
  styleUrls: ['./coviddemo.component.scss']
})
export class CoviddemoComponent implements OnInit {
  description: any;  
  
  sheet = "Sheet23";

  params = {year: Constants.year, category: Constants.category};
  datas = [];
  slideData = {type:10, datas: []};
  loList = [];
  def = '';
  
  // Add image path helper method
  getImagePath(imagePath: string): string {
    return Constants.getImagePath(imagePath);
  }
  
  // Helper method for dynamic image paths
  getSelectedImage(): string {
    if (this.selected && this.selected.code) {
      return this.getImagePath(`image/${this.selected.code}.png`);
    }
    return '';
  }
  show = false;
  isLoNull = false;
  isNull = false;
  colors = Constants.colors_covid;
  year =  this.params["year"];
  event = [];
  total = "";
  ulsiinTusuv = 0;
  totalApp = 0;
  percentTotal = 0;
  perfoValueTotal = 0;
  percent = 0;
  perfoValue = 0;
  beforeYear = 0;
  covid = Constants.covid;
  sum = 0;
  zarlagaTotal = {"approvedValue":0, "perfoValue":0,"percent": 0};


  index = 0;


  covidMain = []
  selected: any = {}
  covidList = []
  selectedSlide: any = {}

  constructor(private mainService: MainService, private route: ActivatedRoute, private router: Router) { 
      router.events.subscribe((val) => {
        if(val instanceof NavigationEnd) {
          if(val.url.split('?').length > 1){
            this.setQueryParam(val.url.split('?')[1]);          
          }
          this.getDatas();
          this.getReleaseDate(this.sheet);
        }
  });
   
  }
  ngOnInit(): void {
    this.slideData["datas"] = [];
    this.slideData["datas"].push({title: "Эдийн засаг нийгмийн хөгжлийг дэмжихэд чиглэсэн буцалтгүй тусламж", budget: 110, name: "Монгол-Японы сургалтын эмнэлэг", content: "Ковид-19 цар тахалтай тэмцэхэд Засгийн газрын нөөц хөрөнгө болон Монгол Улсын 2020 төсвийн тодотголоор нэмж хуваарилсан хөрөнгийн гүйцэтгэл. Монгол япон сургалтын эмнэлэг .Ковид-19 цар тахалтай тэмцэхэд Засгийн газрын нөөц хөрөнгө болон Монгол Улсын 2020 төсвийн тодотголоор нэмж хуваарилсан хөрөнгийн гүйцэтгэл. "})
    this.slideData["datas"].push({title: "Эдийн засаг нийгмийн хөгжлийг дэмжихэд чиглэсэн буцалтгүй тусламж", budget: 110, name: "Монгол-Японы сургалтын эмнэлэг", content: "Ковид-19 цар тахалтай тэмцэхэд Засгийн газрын нөөц хөрөнгө болон Монгол Улсын 2020 төсвийн тодотголоор нэмж хуваарилсан хөрөнгийн гүйцэтгэл "})
    
    setTimeout(function () {
      this.show = true;        
    }, 500);
  }

  
  
  setQueryParam(param){
      var query = {};
      var params = param.split("&");
      params.forEach(function(entry) {
          var p = entry.split('=');
          this.params[p[0]] = p[1];
      },this);    
      this.getChanges(params) 
  }
  getChanges(params){
    var old = this.params["year"];
    this.beforeYear = 0;
    this.beforeYear = this.params["year"]-1;
    // if(params != old){
      // console.log("chang")
    //  this.ezaLevelDatas = []
    // }
  }
  getDatas(){   
    this.sum = 0;
    this.covidMain = [];
      this.zarlagaTotal = {"approvedValue":0, "perfoValue":0,"percent": 0};
      this.mainService.baseGet(Constants.HOST + "websan/api/covid" + "?year=" + this.params["year"] + "&category=" + this.params["category"], null, true).then((result: []) => {
        this.datas = result;
        this.datas.forEach(element => {
          if(element.code){
            this.covidMain.push(element)
            this.sum += element.value;
          }
        });
      }).catch((error) => {
        console.log(error);
      });

     
    } 
   
    releaseDate: any;
    updateDate: any;
      getReleaseDate(code){
        this.updateDate = "";
        this.description = "";
        this.mainService.baseGet(Constants.HOST + Constants.BUDGET_RELEASE_DATE + "?code=" + code + "&year=" + this.params["year"], null, true).then((result: any) => {    
          this.releaseDate = result;
          if(result.length > 0){
            this.updateDate = result[0].updateDate
            this.description = result[0].description;
          }
        }).catch((error) => {
          console.log(error);
        });
      } 

      select(item){
        this.show = false
        this.covidList = []
        this.slideData["datas"] = [];
        this.selected = item
        this.index = this.covidMain.indexOf(item)
        this.datas.forEach(element => {
          let code2 = element.code2.split('-')
          if(parseInt(code2[1]) > 0 && item.code === code2[0]){
           
            this.covidList.push(element)
            
            this.slideData["datas"].push({title: "", budget: 110, name: "", content: element.descrtion})
          }
          this.show = true
        });

        this.selectedSlide = this.covidList[0];
        this.mainService.scroll("covid-detail");

      }

      changed(event: any){
        this.selectedSlide = this.covidList[event.startPosition]
      }

}
