import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/services/constants';
import { MainService } from 'src/app/services/main.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-concept',
  templateUrl: './concept.component.html',
  styleUrls: ['./concept.component.scss']
})
export class ConceptComponent implements OnInit {
 
  params = {year: Constants.year, category: Constants.category};
  slideData = {type:5, datas: []};
  show = false;
  description = ''; 
  
  constructor(private mainService: MainService, private route: ActivatedRoute, private router: Router) { 
    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd) {
        if(val.url.split('?').length > 1){
          this.setQueryParam(val.url.split('?')[1]);          
        }
        this.getBodlogo();
      }
  });
 
  }
  ngOnInit(): void {
  }

  setQueryParam(param){
    var query = {};
    var params = param.split("&");
    params.forEach(function(entry) {
        var p = entry.split('=');
        this.params[p[0]] = p[1];
    },this);    
  }

  getBodlogo(){   
    this.mainService.baseGet(Constants.HOST + Constants.BUDGET_BODLOGO_ZO + "?year=" + this.params["year"] + "&type=O", null, true).then((result: []) => {
      this.slideData["datas"] = [];
      
      result.forEach(function(entry, index) {        
        this.slideData["datas"].push({name: entry["description"], number: index + 1});
      },this);  

      if(result.length == 0){
        this.slideData["datas"].push({name: 'Тухайн онд харуулах өгөгдөл байхгүй байна..', number: 1});
      }

      setTimeout(function () {
        this.show = true;        
      }, 500); 
      this.show = true; 
    }).catch((error) => {
      console.log(error);
    });
  }


  // Add image path helper method
  getImagePath(imagePath: string): string {
    return Constants.getImagePath(imagePath);
  }
}
