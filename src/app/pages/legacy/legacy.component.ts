import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { MainService } from '../../services/main.service';
import { Constants } from '../../services/constants';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
@Component({
  selector: 'app-legacy',
  templateUrl: './legacy.component.html',
  styleUrls: ['./legacy.component.scss']
})
export class LegacyComponent implements OnInit {
  type;
  year = '';
  subType = '';
  legals = [];
  urlName = '';
  legalId = '';
  legalList: any[] = [];
  legal: any[] = [];
  legalName: any;
  onlyLegal: any;
  onlyDesc: any;
  legalFiles = [];
  activeFile : any;
  params = {year: Constants.year, category: Constants.category}
  fileUrl = Constants.PATH;
  trustedDashboardUrl : SafeUrl;
  subName = "";
  subTypes = [];
  navigationSubscription;
  constructor(private mainService: MainService, private route: ActivatedRoute, private router: Router,private sanitizer: DomSanitizer) { 
    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd) {
        this.urlName = val.url;
        // Check for redirect on navigation end
        this.checkForRedirect(val.url);
      }
    });
    this.route.queryParams.subscribe(params => {
      this.year = params['year'];
      this.type = params['type'];
      this.subType = params['subType'];
      this.legalId = params['legalId'];
    });
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.initialiseLegacy();
      }
    });
  }

  checkForRedirect(url: string) {
    const baseUrl = url.split('?')[0]; // Remove query parameters
    if (baseUrl === '/legacy' || baseUrl === '/legacy/') {
      const queryParams = this.route.snapshot.queryParams;
      this.router.navigate(['/legacy/summary'], { 
        queryParams: queryParams 
      });
    }
  }
  
  ngOnInit() {
    // Automatically redirect to summary page when legacy page is opened
    this.redirectToSummary();
  }

  redirectToSummary() {
    // Check if we're on the base legacy route (without any sub-routes)
    if (this.router.url === '/legacy' || this.router.url === '/legacy/') {
      // Redirect to summary page while preserving any query parameters
      this.router.navigate(['/legacy/summary'], { 
        queryParamsHandling: 'preserve' 
      });
    }
  }

  initialiseLegacy() {
    // Check if we should redirect to summary page
    const currentUrl = this.router.url.split('?')[0]; // Remove query parameters for URL check
    if (currentUrl === '/legacy' || currentUrl === '/legacy/') {
      this.redirectToSummary();
      return; // Exit early to prevent loading legacy content
    }

    // Original legacy initialization logic (only runs for other routes)
    // this.legalName = "";
    this.getLegals(this.year,this.type,this.subType);
    if(this.year == null && this.subType ==null){
      this.getDefLegals(this.type);
    }
    if(this.legalId){
      this.setLegal(null, this.legalId);
    }else{
      this.legalName = "";
    }
  }

  

  setLegal(index, legalId){  
    this.mainService.baseGet(Constants.HOST + Constants.LEGAL +"?id=" + legalId, null, true).then((result: any) => {
      this.onlyLegal = result.name;
      this.onlyDesc = result.description;
      this.legalName = result;
    }).catch((error) => {
      console.log(error);
    });

    this.mainService.baseGet(Constants.HOST + Constants.LEGAL_FILE +"?id=" + legalId, null, true).then((result: any) => {
      this.legalFiles = result;
      this.activeFile = this.legalFiles[0];
      this.trustedDashboardUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.fileUrl + this.activeFile.fileUrl);
    }).catch((error) => {
      console.log(error);
    });
    
    
  }

  showFile(i){
    this.activeFile = this.legalFiles[i];
    this.trustedDashboardUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.fileUrl + this.activeFile.fileUrl);
  }

  getType(){
    if(this.activeFile){
      if(this.activeFile["fileUrl"].toLowerCase().indexOf("pdf") > -1){
        return 1;
      }
      if(this.activeFile["fileUrl"].toLowerCase().indexOf("png") > -1 || this.activeFile["fileUrl"].toLowerCase().indexOf("jpg") > -1){
        return 2;
      }
    }
    
    return 0;
  }

  showLegal(index, code){ 
    this.legalName = code;    
    var url_data = this.urlName.split('?');
    var url = url_data[0];
    var param = '';
    if(url_data.length > 1){
      param = url_data[1];
    }
    var query = this.setQueryParam(param, "legalId", this.legalName.id);
    this.router.navigate([url], { queryParams: query});    
    this.params["legalId"] = this.legalName.id;
    this.mainService.baseGet(Constants.HOST + Constants.LEGAL +"?id=" + this.params["legalId"], null, true).then((result: any) => {
      this.onlyLegal = result.name;
      this.onlyDesc = result.description;      
    }).catch((error) => {
      console.log(error);
    });
  }
  backLegal(index, code){
    this.legalName = code;
    this.legalName = ""
  }

  getLegals(year,type,subType) {
    this.mainService.baseGet(Constants.HOST + Constants.LEGALS, {year, type, subType}, true).then((result: any) => {     
        this.legals = result;
    }).catch((error) => {
      console.log(error);
    });

    this.mainService.baseGet(Constants.HOST + Constants.LEGALSUBTYPE, {year, type}, true).then((result: any) => {     
        this.subTypes = result;
    }).catch((error) => {
     
        console.log(error);
    });
  }

  getDefLegals(type) {
    this.mainService.baseGet(Constants.HOST + Constants.LEGALS,type, true).then((result: any) => {     
        this.legals = result.sort((a)=> -a.id);
    }).catch((error) => {
      console.log(error);
    });
  }


  getSubname(sub){
    var name = "";
    this.subTypes.forEach(element => {
      if(sub == element["id"]){        
        name = element["subType"];
      }
    });
    return name;
  }
  removeTags(content){
    if(content){
      var plainText = content.replace(/<[^>]*>/g, '');
      return plainText;
    }
    return "";
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
