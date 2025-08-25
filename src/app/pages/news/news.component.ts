import { Component, OnInit } from '@angular/core';

import { MainService } from '../../services/main.service';
import { Constants } from '../../services/constants';

import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  id: '';
  news: any;
  newsImg = [];
  name: any;
  imageUrl: any;
  publishDate: any;
  description: any;
  url: any;
  typeImg = 1;
  
  urlName = ''; 
  img: any;

  fileUrl = Constants.PATH;
  constructor(private mainService: MainService, private route: ActivatedRoute, private router: Router) { 
    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd) {
        this.urlName = val.url;
      }
    });
    this.route.queryParams.subscribe(params => {
    this.id = params['id'];
    this.getNews(this.id);
    this.getNewsImg(this.typeImg);
  });}

  ngOnInit(): void {
  }

  getNews(id){
    this.mainService.baseGet(Constants.HOST + Constants.NEWSBYID + "?id=" + id, null, true).then((result: any) => {
      this.name = result.name;
      this.description = result.description;
      this.imageUrl = result.imageUrl;
      this.publishDate = result.publishDate;
      this.url = result.url;
      this.news = result;
    }).catch((error) => {
      console.log(error);
    });
  }
  getNewsImg(type) {
    type = this.typeImg;
    this.mainService.baseGet(Constants.HOST + Constants.NEWS+ "?type=" + type, true).then((result: any) => {
        this.newsImg = result;
    }).catch((error) => {
      console.log(error);
    });
   
  }
  
  showVid(index, code){ 
    this.img = code;
    var url_data = this.urlName.split('?');
    var url = url_data[0];
    var param = '';
    if(url_data.length > 1){
      param = url_data[1];
    }
    var query = this.setQueryParam(param, "id", code.id);
    this.router.navigate([url], { queryParams: query});    
  }
  removeTags(content){
    if (content){
      var plainText = content.replace(/<[^>]*>/g, '');
      return plainText;
    }
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
