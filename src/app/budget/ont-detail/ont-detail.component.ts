import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';
import { Constants } from '../../services/constants';

@Component({
  selector: 'app-ont-detail',
  templateUrl: './ont-detail.component.html',
  styleUrls: ['./ont-detail.component.scss']
})
export class OntDetailComponent implements OnInit {
  colors = Constants.colors;
  changeText1: boolean;
  changeText2: boolean;
  changeText3: boolean;
  changeText4: boolean;
  description: any;
  orlogoSub1Values = [10656.1,1141.7];
  orlogoSub1Names = ["Өмнөговь","Улаанбаатар"];
  isOrlogo=true;
  sum = 0;
  details = [];
  data = {};
  slideData = {type:4, datas:  [
		{name: "Гүүрийн байгууламж", text : " 13"}
		,{name: "Авто зам", text : " 143"}
		,{name: "Үер усны хангамж", text : " 117"}
		,{name: "Цахилгаан", text : " 23"}
		,{name: "Цахилгаан", text : " 23"}
		]}; 
    
  screenHeight: number;
  screenWidth: number;

  breakpoint: any;
   params = {year: Constants.year, category: Constants.category};
   datas =  [{
              "year": this.params["year"],
              "type": "TX10",
              "typeName": "Санхүүгийн дэмжлэг",
              "value": 0
          },
          {
              "year": this.params["year"],
              "type": "TX11",
              "typeName": "Төвлөрүүлэх орлого",
              "value": 0
          },
          {
              "year": this.params["year"],
              "type": "TX12",
              "typeName": "Тусгай зориулалтын шилжүүлэг",
              "value": 0
          },
          {
              "year": this.params["year"],
              "type": "TX13",
              "typeName": "Орон нутгийн хөгжлийн сан",
              "value": 0
          }];
  
     
   constructor(private mainService: MainService, private route: ActivatedRoute, private router: Router) { 
       router.events.subscribe((val) => {
         if(val instanceof NavigationEnd) {
           if(val.url.split('?').length > 1){
             this.setQueryParam(val.url.split('?')[1]);          
           }
           this.getDatas();
         }
   });
    this.changeText1 = false;
    this.changeText2 = false;
    this.changeText3 = false;
    this.changeText4 = false;
   
   }
   ngOnInit(): void {
     this.getWidth();
    this.getReleaseDate("Sheet20");
   }
   getWidth(){
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    if(this.screenWidth<=1680 && this.screenWidth>1440){
      this.breakpoint = 4;
    }else if( this.screenWidth<=1440 && this.screenWidth>1200){
      this.breakpoint = 4;
    }else if( this.screenWidth<=1200 && this.screenWidth>1010){
      this.breakpoint = 6;
    }else{
      this.breakpoint = 4;
    }
  }
   down(){
    this.mainService.scroll("description");
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
       if(params != old){
        this.details = null
       }
     }
 
     getDatas(){   
       this.mainService.baseGet(Constants.HOST + Constants.BUDGET_TUSVIIN_HARITSAA + "?year=" + this.params["year"] + "&category=" + this.params["category"], null, true).then((result: []) => {
        if(result.length > 0){
          this.datas = result;  
        }
              
       }).catch((error) => {
         console.log(error);
       });
     }

     show(data){
      this.data = data;

      this.mainService.baseGet(Constants.HOST + Constants.BUDGET_TUSVIIN_HARITSAA_DETAIL + "?year=" + this.params["year"] + "&category=" + this.params["category"]+ "&type=" + data["type"], null, true).then((result: []) => {
       this.details = result;
              console.log(this.details)
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
}
