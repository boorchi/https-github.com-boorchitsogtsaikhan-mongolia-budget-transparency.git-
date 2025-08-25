import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
import { Constants } from '../../services/constants';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
declare var Raphael: any;

@Component({
  selector: 'app-oronnutag',
  templateUrl: './oronnutag.component.html',
  styleUrls: ['./oronnutag.component.scss']
})
export class OronnutagComponent implements OnInit {  
  selectedType = '';
  ontList: any[] = [];
  ont: any;
  aimagName: any;
  aimagCode: any;
  population: any;
  place: any;
  center: any;
  sum: any;
  suuriOrlogo: any;
  suuriZarlaga: any;
  prefValue: any;
  percent:any;
  tovloruuleh:any;
  tovloruulehPercent:any;
  tovloruulehValue:any;
  demjleg:any;
  demjlegValue:any;
  demjlegPercent:any;
  tentsel: any;
  oldChange = "P11";  
  type: string;
  hugjliinSan = {value:0,percent:0,data:0};
  tsetserleg = {value:0,percent:0,data:0,calc:0};
  surguuli = {value:0,percent:0,data:0,calc:0};
  emneleg = {value:0,percent:0,data:0,calc:0};
  kadastr = {value:0,percent:0,data:0,calc:0};
  hamgaalal = {value:0,percent:0,data:0,calc:0};
  bolovsrol = {value:0, data:''}
  dedButets = {value:0, data:''}
  eruulMend = {value:0, data:''}
  onUdirdlaga = {value:0, data:''}
  soylSport = {value:0, data:''}
  turiinUilchilgee = {value:0, data:''}
  colors = Constants.colors;
  aus = {};
  width = 1000;
  height = 600;
  screenHeight: number;
  screenWidth: number;

  breakpoint: any;
  params = {year: Constants.year, category: Constants.category}
  constructor(private mainService: MainService, private route: ActivatedRoute, private router: Router) { 
    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd) {
    
        if(val.url.split('?').length > 1){
          this.setQueryParam(val.url.split('?')[1]);                 
          this.changeYear();          
        }
        this.getReleaseDate("Sheet7");
        
        
      }
  });
  } 
  setQueryParam(param){
    var query = {};
    var params = param.split("&");
    params.forEach(function(entry) {
        var p = entry.split('=');
        this.params[p[0]] = p[1];
    },this);    
  }
  ngOnInit(): void {   
    this.generateMap();     
    this.getWidth();
  }
  onChange(event) {
    this.aus[this.oldChange].attr("fill", "#0081ff");
    this.aus[event.target.value].attr("fill", "#313852");
    this.oldChange = event.target.value;
    this.selectedType = event.target.value;
    this.getOnt(this.mainService.year,this.selectedType);
    this.getOntHO(this.mainService.year,this.selectedType);
  }
  changeYear() {    
    if(this.ont){
      this.getOnt(this.params["year"],this.oldChange );
      this.getOntHO(this.params["year"],this.oldChange );
    }
    
    
  }
  down(){
    this.mainService.scroll("description");
  }
  getOntList() {
    this.mainService.baseGet(Constants.HOST + Constants.ORONNUTAG_MAIN, null, true).then((result: any) => {     
      this.ontList = result;
    }).catch((error) => {
      console.log(error);
    });
  }

  getOnt(year,aimagCode) {
    this.mainService.baseGet(Constants.HOST + Constants.ORONNUTAG_AIMAG+  "?year=" + this.params["year"] + "&aimagCode=" + aimagCode + "&category=" + this.params["category"], null, true).then((result: any) => {
      this.aimagName = result.aimagName;
      this.aimagCode = result.aimagCode;
      this.population = result.population;
      this.sum = result.sum;
      this.suuriOrlogo = result.suuriOrlogo;
      this.suuriZarlaga = result.suuriZarlaga;
      this.place = result.place;
      this.center = result.center;
      this.tentsel = result.tentsel;
      this.hugjliinSan.data = result.hugjliinSan;
      this.hugjliinSan.value = result.hugjliinSanValue;
      this.hugjliinSan.percent = result.hugjliinSanPercent;
      this.tsetserleg.data = result.tsetserleg;
      this.tsetserleg.value = result.tsetserlegValue;
      this.tsetserleg.percent = result.tsetserlegPercent;
      this.tsetserleg.calc = result.tsetserlegCalcPercent;
      this.surguuli.data = result.surguuli;
      this.surguuli.value = result.surguuliValue;
      this.surguuli.percent = result.surguuliPercent;
      this.surguuli.calc = result.surguuliCalcPercent;
      this.emneleg.data = result.emneleg;
      this.emneleg.value = result.emnelegValue;
      this.emneleg.percent = result.emnelegPercent;
      this.emneleg.calc = result.emnelegCalcPercent;
      this.kadastr.data = result.kadastr;
      this.kadastr.value = result.kadastrValue;
      this.kadastr.percent = result.kadastrPercent;
      this.kadastr.calc = result.kadastrCalcPercent;
      this.hamgaalal.data = result.hamgaalal;
      this.hamgaalal.value = result.hamgaalalValue;
      this.hamgaalal.percent = result.hamgaalalPercent;
      this.hamgaalal.calc = result.hamgaalalCalcPercent;
      this.prefValue = result.totalValue;
      this.percent = result.totalPercent;
      this.demjleg=result.demjleg;
      this.demjlegValue=result.demjlegValue;
      this.demjlegPercent=result.demjlegPercent;
      
      this.tovloruuleh=result.tovloruuleh;
      this.tovloruulehPercent=result.tovloruulehPercent;
      this.tovloruulehValue=result.tovloruulehValue;
      this.ont = result;
      console.log(this.ont);
    }).catch((error) => {
      console.log(error);
    });
  }

  getOntHO(year, aimagCode) {
    this.mainService.baseGet(Constants.HOST + Constants.ORONNUTAG_AIMAGHO+  "?year=" + this.params["year"] + "&aimagCode=" + aimagCode, null, true).then((result: any) => {
      this.bolovsrol.value = result.bolovsrolValue
      this.bolovsrol.data = result.bolovsrol
      this.eruulMend.value = result.eruulMendValue
      this.eruulMend.data = result.eruulMend
      this.dedButets.value = result.dedButetsValue
      this.dedButets.data = result.dedButets
      this.turiinUilchilgee.value = result.turiinUilchilgeeValue
      this.turiinUilchilgee.data = result.turiinUilchilgee
      this.soylSport.value = result.soyolSportValue
      this.soylSport.data = result.soyolSport
      this.onUdirdlaga.value = result.onUdirdlagaValue
      this.onUdirdlaga.data = result.onUdirdlaga
    }).catch((error) => {
      this.bolovsrol = {value:0, data:''}
      this.dedButets = {value:0, data:''}
      this.eruulMend = {value:0, data:''}
      this.onUdirdlaga = {value:0, data:''}
      this.soylSport = {value:0, data:''}
      this.turiinUilchilgee = {value:0, data:''}
    });
  }

  getSubList(data){
    if (data != null) {
      return data.split(",");
    } 
    return []; 
  }

  generateMap(){
    var attr = {
      fill: "#0081ff",
      stroke: "#0197b8",
      "stroke-width": 0.1,
      "stroke-linejoin": "round",
      "transform": " s3.5,3.5,0,0"
    };
    this.type = this.mainService.type;
    this.getOntList();
    // this.screenHeight = window.innerHeight;
    // this.screenWidth = window.innerWidth;
    // if(this.screenWidth<=1680 && this.screenWidth>1440){
    //   this.width = 600;
    //   this.height = 400;
    // }else if( this.screenWidth<=1440 && this.screenWidth>1200){
    //   this.width = 600;
    //   this.height = 400;
    // }else if( this.screenWidth<=1200 && this.screenWidth>1010){
    //   this.width = 600;
    //   this.height = 400;
    // }else{
    //   this.width = 1000;
    //   this.height = 600;
    // }
    
    this.width = 1000;
    this.height = 600;
    var i=0;    
    console.log(this.width, this.height);
    var widthR = this.width;
    var heightR = this.height;
    var R = Raphael("paper");
    R.setViewBox(0,0,widthR,heightR,true);
    R.setSize('100%', '60%');
    var year = 2020;
    var ont = this;
    for (var state in Constants.paths)
			{   
        i++;
        var id = Constants.paths[state].county;
        this.aus[id] = R.path(Constants.paths[state].path).attr(attr)
        this.aus[id].name = Constants.paths[state].name;
        this.aus[id].node.setAttribute("id",id);
        this.aus[id].hover(function(){          
                this.animate({
                    fill: '#313852',
                    "text-transform" : "uppercase"
                }, 200);               
        }, function(){
          if(!this.node.hasAttribute("class")){
            this.animate({
              fill: attr.fill
          }, 200);
          }        
        }).click(function(){
          ont.aus[ont.oldChange].attr("fill", "#0081ff");
          ont.aus[ont.oldChange].node.removeAttribute("class");
          ont.aus[this.node.getAttribute("id")].attr("fill", "#313852");
          this.node.setAttribute("class", "active");
          ont.oldChange = this.node.getAttribute("id");
          ont.getOnt(ont.mainService.year,this.node.getAttribute("id"));
          ont.getOntHO(ont.mainService.year, this.node.getAttribute("id"));    
        })        
      }
      var centerImg = "../../../assets/image/center.png";
      var dorno = R.text(685,420,"Дорноговь").attr({"font-size": "12px", "font-weight": "500", "text-transform":"uppercase", fill: "#fff"}).show();
      var dornoimg = R.image(centerImg, 685,360, 25, 25);
      var gobisumber = R.text(655,280,"Говьсүмбэр").attr({"font-size": "12px", "font-weight": "500", "text-transform":"uppercase", fill: "#fff"}).show();
      var dornoimg = R.image(centerImg, 645,290, 25, 25);
      var uvurhangai = R.text(480,360,"Өвөрхангай").attr({"font-size": "12px", "font-weight": "500", fill: "#fff"}).show();
      var uvurhangaiimg = R.image(centerImg, 480,320, 25, 25);
      var bulgan = R.text(515,160,"Булган").attr({"font-size": "12px", "font-weight": "500", fill: "#fff"}).show();
      var bulganimg = R.image(centerImg, 495,190, 25, 25);
      var dundgobi = R.text(595,360,"Дундговь").attr({"font-size": "12px", "font-weight": "500", fill: "#fff"}).show();
      var bulganimg = R.image(centerImg, 580,325, 25, 25);
      var umnugobi = R.text(545,460,"Өмнөговь").attr({"font-size": "12px", "font-weight": "500", fill: "#fff"}).show();
      var umnugobiimg = R.image(centerImg, 535,420, 25, 25);
      var ulaanbaatar = R.text(605,220,"Улаанбаатар").attr({"font-size": "12px", "font-weight": "500", fill: "#fff"}).show();
      var ulaanbaatarimg = R.image(centerImg, 595,230, 25, 25);
      var selenge = R.text(585,155,"Сэлэнгэ").attr({"font-size": "12px", "font-weight": "500", fill: "#fff"}).show();
      var selengeimg = R.image(centerImg, 575,125, 25, 25);
      var orhon = R.text(560,185,"Орхон").attr({"font-size": "12px", "font-weight": "500", fill: "#fff"}).show();
      var orhonimg = R.image(centerImg, 520,185, 25, 25);
      var huvsgul = R.text(410,125,"Хөвсгөл").attr({"font-size": "12px", "font-weight": "500", fill: "#fff"}).show();
      var huvsgulimg = R.image(centerImg, 400,155, 25, 25);
      var arhangai = R.text(430,235,"Архангай").attr({"font-size": "12px", "font-weight": "500", fill: "#fff"}).show();
      var arhangaiimg = R.image(centerImg, 430,250, 25, 25);
      var gobialtai = R.text(280,350,"Говь-Алтай").attr({"font-size": "12px", "font-weight": "500", fill: "#fff"}).show();
      var gobialtaiimg = R.image(centerImg, 280,300, 25, 25);
      var bayanhongor = R.text(400,380,"Баянхонгор").attr({"font-size": "12px", "font-weight": "500", fill: "#fff"}).show();
      var bayanhongorimg = R.image(centerImg, 400,320, 25, 25);
      var zavhan = R.text(310,220,"Завхан").attr({"font-size": "12px", "font-weight": "500", fill: "#fff"}).show();
      var zavhanimg = R.image(centerImg, 310,240, 25, 25);
      var bayanulgii = R.text(100,210,"Баян-Өлгий").attr({"font-size": "12px", "font-weight": "500", fill: "#fff"}).show();
      var bayanulgiiimg = R.image(centerImg, 100,180, 25, 25);
      var uvs = R.text(200,180,"Увс").attr({"font-size": "12px", "font-weight": "500", fill: "#fff"}).show();
      var uvsimg = R.image(centerImg, 160,140, 25, 25);
      var hovd = R.text(200,300,"Ховд").attr({"font-size": "12px", "font-weight": "500", fill: "#fff"}).show();
      var hovdimg = R.image(centerImg, 160,240, 25, 25);
      var dornod = R.text(820,190,"Дорнод").attr({"font-size": "12px", "font-weight": "500", fill: "#fff"}).show();
      var dornodimg = R.image(centerImg, 820,210, 25, 25);
      var suhbaatar = R.text(800,330,"Сүхбаатар").attr({"font-size": "12px", "font-weight": "500", fill: "#fff"}).show();
      var suhbaatarimg = R.image(centerImg, 770,290, 25, 25);
      var hentii = R.text(710,210,"Хэнтий").attr({"font-size": "12px", "font-weight": "500", fill: "#fff"}).show();
      var hentiiimg = R.image(centerImg, 700,230, 25, 25);
      var darhan = R.text(635,175,"Дархан").attr({"font-size": "12px", "font-weight": "500", fill: "#fff"}).show();
      var darhanimg = R.image(centerImg, 585,165, 25, 25);
      var tuv = R.text(565,265,"Төв").attr({"font-size": "12px", "font-weight": "500", fill: "#fff"}).show();
      var darhanimg = R.image(centerImg, 585,245, 25, 25);
  }
  releaseDate: any;
  updateDate: any;
  description: any;
  getReleaseDate(code){
    this.updateDate = "";
    this.description = "";
    this.mainService.baseGet(Constants.HOST + Constants.BUDGET_RELEASE_DATE + "?code=" + code + "&year=" + this.params["year"], null, true).then((result: any) => {  
      if(result.length > 0){
        this.updateDate = result[0].updateDate
        this.description = result[0].description;
      }      
    }).catch((error) => {
      console.log(error);
    });
  }
  getWidth(){
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    if(this.screenWidth<=1680 && this.screenWidth>1440){
      this.breakpoint = 3;
    }else if( this.screenWidth<=1440 && this.screenWidth>1200){
      this.breakpoint = 4;
    }else if( this.screenWidth<=1200 && this.screenWidth>1010){
      this.breakpoint = 4;
    }else{
      this.breakpoint = 3;
    }
  }
}
