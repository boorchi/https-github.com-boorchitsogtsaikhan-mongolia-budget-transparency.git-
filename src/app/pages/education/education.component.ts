import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';

import { MainService } from '../../services/main.service';
import { Constants } from '../../services/constants';

import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url: string): SafeUrl {
    if (!url) return '';
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}

@Pipe({ name: 'safeResource' })
export class SafeResourcePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url: string): SafeResourceUrl {
    if (!url) return '';
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  trustedDashboardUrl : SafeResourceUrl;
  typeVid = 2;
  typeImg = 1;
  typeUndes = '';
  typeTusuv = '';
  typeSudalgaa = '';
  typeyariltslaga = '';
  type='';
  title ='';
  id = '';
  subType = '';
  news = [];
  newsVideo = [];
  videoById :any;
  thumbnail :any;
  thumbnails = [];
  videoByTumbS : '';
  newsImg = [];
  urlName = '';
  video = '';
  image = '';
  
  vid: any;
  onlyUrl: any;
  onlyVid: any;
  onlyDesc: any;

  params = {year: Constants.year, category: Constants.category}
  fileUrl = Constants.PATH;

  constructor(private mainService: MainService, private route: ActivatedRoute, private router: Router,private sanitizer: DomSanitizer) {
    // Initialize with empty safe URL to prevent undefined errors
    this.trustedDashboardUrl = this.sanitizer.bypassSecurityTrustResourceUrl('');

    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd) {
        this.urlName = val.url;
      }
    });
    this.route.queryParams.subscribe(params => {
      this.subType = params['subType'];
      this.id = params['id'];
      this.getNewsVideo(this.subType,this.typeVid, null);
      this.getNewsImg(this.subType,this.typeImg, null);
      this.getVideoByid(this.id);
      this.getTitle(this.subType)
    });
  } 

  ngOnInit() {
  }

  removeTags(content){
    if (content){
      var plainText = content.replace(/<[^>]*>/g, '');
      return plainText;
    }
  }
  
  getNews(type) {
    let limit = 4;
    this.mainService.baseGet(Constants.HOST + Constants.NEWS, {type,limit}, true).then((result: any) => {
      this.news = result;
    }).catch((error) => {
      console.log(error);
    });
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
  showType: any;
  getTitle(subType){
    this.showType = subType;
    if (subType == 1) {
      this.title = "<b>Төсвийн тухай үндсэн ойлголт</b>"
    } else if (subType == 2) {
      this.title = "<b>Иргэдийн төсвийн тухай</b>"
    } else if (subType == 3) {
      this.title = "<b>Төсвийн талаар судалгааны ажил</b>"
    } else if (subType == 4){
      this.title = "<b>Төсөвтэй xолбоотой ярилцлага</b>"
    } else {
      this.title = "<b>Иргэдийн боловсролд</b>";
    }
  }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  getVideoByid(id){
    if(id){
      this.mainService.baseGet(Constants.HOST + Constants.NEWSBYID, {id}, true).then((result: any) => {
        if(result && result.url) {
          this.trustedDashboardUrl = this.sanitizer.bypassSecurityTrustResourceUrl(result.url);
        }
    }).catch((error) => {
      console.log(error);
      this.trustedDashboardUrl = this.sanitizer.bypassSecurityTrustResourceUrl('');
    });
    } else {
      id = 1;
      this.mainService.baseGet(Constants.HOST + Constants.NEWSBYID, {id}, true).then((result: any) => {
        if(result && result.url) {
          this.trustedDashboardUrl = this.sanitizer.bypassSecurityTrustResourceUrl(result.url);
        }
    }).catch((error) => {
      console.log(error);
      this.trustedDashboardUrl = this.sanitizer.bypassSecurityTrustResourceUrl('');
    });
    }
  }
  getNewsVideo(subType,type,limit) {    
    type = this.typeVid;
    if(subType){
      this.mainService.baseGet(Constants.HOST + Constants.NEWSSUB, {subType,type}, true).then((result: any[]) => {
          this.newsVideo = result.reverse();
          result.forEach(item => {
              this.videoByTumbS = item.url;
              var tumbl = this.videoByTumbS.split('/');
              var tumbl_img = tumbl[4] ;
              this.thumbnail = 'https://img.youtube.com/vi/' +tumbl_img+ '/hqdefault.jpg';
              item.url = this.thumbnail;
          });
      }).catch((error) => {
        console.log(error);
      });
    }else{
      subType = 1
      this.mainService.baseGet(Constants.HOST + Constants.NEWSSUB, {subType,type}, true).then((result: any[]) => {
          this.newsVideo = result.reverse();
          result.forEach(item => {
            this.videoByTumbS = item.url;
            var tumbl = this.videoByTumbS.split('/');
            var tumbl_img = tumbl[4]  ;
            this.thumbnail = 'https://img.youtube.com/vi/' +tumbl_img+ '/hqdefault.jpg';
            item.url = this.thumbnail;
        });
      }).catch((error) => {
        console.log(error);
      });
    }
    
  }
  getNewsImg(subType,type, limit) {
    type = this.typeImg;
    subType = 1;
    if(subType){
    this.mainService.baseGet(Constants.HOST + Constants.NEWSSUB, {subType,type}, true).then((result: any[]) => {
        this.newsImg = result.reverse();
    }).catch((error) => {
      console.log(error);
    });
    } else {
      subType = 1
      this.mainService.baseGet(Constants.HOST + Constants.NEWSSUB, {subType,type}, true).then((result: any[]) => {
          this.newsImg = result.reverse();
      }).catch((error) => {
        console.log(error);
      });
    }
  }

  showNews(index, code){
    
    var url_data = this.urlName.split('?');
    var url = "news";
    var param = '';
    if(url_data.length > 1){
      param = url_data[0];
    }
    var query = this.setQueryParam(param, "id", code.id);
    this.router.navigate([url], { queryParams: query});
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
