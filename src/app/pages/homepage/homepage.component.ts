import { Component, OnInit } from '@angular/core';
import { MainService } from '../../services/main.service';
import { Constants } from '../../services/constants';

import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';
import { constants } from 'buffer';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  typeVid = 1;
  typeImg = 2;
  typeUndes = 3;
  typeTusuv = 4;
  typeSudalgaa = 5;
  typeyariltslaga = 6;
  address = [];
  contacts = [];
  links = [];
  newsVideo = [];
  newsImg = [];
  bond: any[] = [];
  videoById: SafeResourceUrl;
  home = [];
  url = Constants.HOST;
  colors = Constants.colors_home;
  urlName = '';
  id = '';
  vid: any;
  onlyUrl: any;
  onlyVid: any;
  onlyDesc: any;
  thumbnail :any;
  thumbnails = [];
  videoByTumbS : '';
  condition = true;
  spvid_temp: Text;
  spvid: any;
  type = "APPROVED";
  budgetMain = {
    "SUBMITTED": {"IN" : {
      approvedValue:0,
      perfoValue:0,
      percent:0
    },"OUT" : {
      approvedValue:0,
      perfoValue:0,
      percent:0
    },"EQUAL" : {
      approvedValue:0,
      perfoValue:0,
      percent:0
    },"PERCENT" : {
      approvedValue:0,
      perfoValue:0,
      percent:0
    }},
    "APPROVED": {"IN" : {
      approvedValue:0,
      perfoValue:0,
      percent:0,
      status: 1
    },"OUT" : {
      approvedValue:0,
      perfoValue:0,
      percent:0,
      status: 1
    },"EQUAL" : {
      approvedValue:0,
      perfoValue:0,
      percent:0
    },"PERCENT" : {
      approvedValue:0,
      perfoValue:0,
      percent:0
    }}
  };
  budgetMainBef: any;
  budgetMainBefO: any;
  
  params = {year: Constants.year, category: Constants.category, submited : Constants.submited}
  constructor(private mainService: MainService, private route: ActivatedRoute, private router: Router,private sanitizer: DomSanitizer) { 
    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd) {
        this.urlName = val.url;
      }
    });
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      this.getVideoByid(this.id);
    });
  }

  ngOnInit(): void {
    this.videoById = this.sanitizer.bypassSecurityTrustResourceUrl('');
    this.getHome();
    this.getBond();
    this.getAddress();
    this.getContact();
    this.getLink();
    this.getNewsVideo(this.typeVid);
    this.getNewsImg(this.typeImg);
    this.getBudget();
    this.getPopup();
  }
  changeType(type){
    this.mainService.type = type;
  }
  popup: any;
  host = Constants.PATH;
  getPopup(){
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
    document.body.style.overflow = "hidden";
    this.condition = true;
    this.mainService.baseGet(Constants.HOST + Constants.BUDGET_HOMEPOPUP, null, true).then((result: any) => {     
      if(result.length > 0){
        this.popup = result[0];
      }else{
        document.body.style.overflow = "initial";
      }
    }).catch((error) => {
      console.log(error);
    });
  }
  closePopup(){
    document.body.style.overflow = "initial";
    this.condition = false
  }
  getBudget() {    
    this.mainService.baseGet(Constants.HOST + Constants.BUDGET_MAIN + "?year=" + Constants.year, null, true).then((result: any) => {     
      result.forEach(item => {
        this.budgetMain[item.type][item.code]["approvedValue"] = item["approvedValue"];
        this.budgetMain[item.type][item.code]["perfoValue"] = item["perfoValue"];
        this.budgetMain[item.type][item.code]["percent"] = Number(item["percent"]).toFixed(2);        
      });
    }).catch((error) => {
      console.log(error);
    });
    this.mainService.baseGet(Constants.HOST + Constants.BUDGET_MAIN + "?year=" + Constants.year + "&type=SUBMITTED&code=IN", null, true).then((result: any) => {     
      result.forEach(item => {
        if(item.type === "SUBMITTED" && item.code === "IN"){
        this.budgetMainBef = Number(item["percent"]).toFixed(2);   
        }     
      });
    }).catch((error) => {
      console.log(error);
    });
    this.mainService.baseGet(Constants.HOST + Constants.BUDGET_MAIN + "?year=" + Constants.year + "&type=SUBMITTED&code=OUT", null, true).then((result: any) => {     
      result.forEach(item => {
        if(item.type === "SUBMITTED" && item.code === "OUT"){
          this.budgetMainBefO = Number(item["percent"]).toFixed(2);  
        }      
      });
    }).catch((error) => {
      console.log(error);
    });
  }

  down(){
    this.mainService.scroll("down");
  }
  getVideoByid(id){
    if(id){
      this.mainService.baseGet(Constants.HOST + Constants.NEWSBYID, {id}, true).then((result: any) => {
        if (result && result.url) {
          this.videoById = this.sanitizer.bypassSecurityTrustResourceUrl(result.url);
        }
    }).catch((error) => {
      console.log(error);
    });
    } else {
      id = 1;
      this.mainService.baseGet(Constants.HOST + Constants.NEWSBYID, {id}, true).then((result: any) => {
        if (result && result.url) {
          this.videoById = this.sanitizer.bypassSecurityTrustResourceUrl(result.url);
        }
    }).catch((error) => {
      console.log(error);
    });
    }

  }

  showVid(index, code){ 
    this.vid = code;
    var url_data = this.urlName.split('?');
    var url = url_data[0];
    var param = '';
    if(url_data.length > 1){
      param = url_data[1];
    }
    var query = this.setQueryParam(param, "id", code.id);
    this.router.navigate([url], { queryParams: query});    
  }
  getBond() {
		this.mainService.baseGet(Constants.HOST + Constants.BUDGET_DEBT_BOND, null, true).then((result: any) => {
      this.bond = result;
		}).catch((error) => {
		  	console.log(error);
		});
  }
  getHome() {
		this.mainService.baseGet(Constants.HOST + Constants.BUDGET_DEBT_HOME, null, true).then((result: any) => {
      this.home = result;
      console.log(result)
		}).catch((error) => {
		  	console.log(error);
		});
	}
  getAddress() {
    this.mainService.baseGet(Constants.HOST + Constants.ADDRESS, null, true).then((result: any) => {
      if(result.length > 0){
        this.address = result;
      }
    }).catch((error) => {
      console.log(error);
    });
  }
  getContact() {
    this.mainService.baseGet(Constants.HOST + Constants.CONTACTS, null, true).then((result: any) => {
      if(result.length > 0){
        this.contacts = result;
      }
    }).catch((error) => {
      console.log(error);
    });
  }
  getLink() {
    this.mainService.baseGet(Constants.HOST + Constants.LINKS, null, true).then((result: any) => {
      if(result.length > 0){
        this.links = result;
      }
    }).catch((error) => {
      console.log(error);
    });
  }
  getNewsVideo(type) {
    this.mainService.baseGet(Constants.HOST + Constants.NEWS, {type, limit:4}, true).then((result: any) => {
      if(result.length > 0){
        this.newsVideo = result;
      }
    }).catch((error) => {
      console.log(error);
    });
  }
  getNewsImg(type) {
    this.mainService.baseGet(Constants.HOST + Constants.NEWS, {type, limit:4}, true).then((result: any) => {
      if(result.length > 0){
        this.newsImg = result;
        result.forEach(item => {
          this.videoByTumbS = item.url;
          var tumbl = this.videoByTumbS.split('/');
          var tumbl_img = tumbl[4] ;
          this.thumbnail = 'https://img.youtube.com/vi/' +tumbl_img+ '/hqdefault.jpg';
          item.url = this.thumbnail;
      });
      }
    }).catch((error) => {
      console.log(error);
    });
  }
  removeTags(content){
    var plainText = content.replace(/<[^>]*>/g, '');
    return plainText;
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
  check(value){
    var val = parseInt(value);
    if(val == 100){
      return 4;
    }else if(val > 70 && val < 100){
      return 3;
    }else if(val > 45 && val < 70){
      return 2;
    }else if(val => 0 && val < 45){
      return 1;
    }
    return 1;
  }

  getImagePath(imagePath: string): string {
    return Constants.getImagePath(imagePath);
  }
}
