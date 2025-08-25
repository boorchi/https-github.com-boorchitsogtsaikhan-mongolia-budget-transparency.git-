import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {MatGridListModule} from '@angular/material/grid-list';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

import { Constants } from 'src/app/services/constants';
@Component({
  selector: 'module-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input()
  slideData: any;

  @Input()
  slideData1: any;

  @Output() changeEvent = new EventEmitter();
  
  params = {year: Constants.year, category: Constants.category}
  constructor(private mainService: MainService, private route: ActivatedRoute, private router: Router) { 
    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd) {
        if(val.url.split('?').length > 1){
          this.setQueryParam(val.url.split('?')[1]);          
        }
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
  
  change(index){

  }
  // slideData: {type:1, datas: [{name: "oyutan", budget: "1000", subs: ["oyutnii too 4000","oyutnii too 4000","oyutnii too 4000"]}]};
  customOptions1: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    
    navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  customOptions2: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],  
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }
  colors = Constants.colors;
  customOptions3: OwlOptions = {
    center: true,
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
    startPosition: 1,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }

  customOptions4: OwlOptions = {
    center: true,
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText:["<div class='nav-btn prev-slide-invest'></div>","<div class='nav-btn next-slide-invest'></div>"],
    startPosition: 1,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }

  customOptions5: OwlOptions = {
    center: true,
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
     navText: ["",""],
    // navText:["<div class='nav-btn prev-slide-invest'></div>","<div class='nav-btn next-slide-invest'></div>"],
    startPosition: 0,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }
  customOptions6: OwlOptions = {
    center: true,
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
     navText: ["",""],
    // navText:["<div class='nav-btn prev-slide-invest'></div>","<div class='nav-btn next-slide-invest'></div>"],
    startPosition: 0,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }
  customOptions7: OwlOptions = {
    center: true,
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
     navText: ["",""],
    // navText:["<div class='nav-btn prev-slide-invest'></div>","<div class='nav-btn next-slide-invest'></div>"],
    startPosition: 0,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }
  customOptions8: OwlOptions = {
    center: true,
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText:["<div class='nav-btn prev-slide-black'></div>","<div class='nav-btn next-slide-black'></div>"],
    startPosition: 0,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

  customOptions9: OwlOptions = {
    center: true,
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText:["<div class='nav-btn prev-slide-black-1'></div>","<div class='nav-btn next-slide-black-1'></div>"],
    startPosition: 0,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

  customOptions10: OwlOptions = {
    center: true,
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText:["<div class='nav-btn prev-slide-black-1'></div>","<div class='nav-btn next-slide-black-1'></div>"],
    startPosition: 0,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

  changed(event: any){
    this.changeEvent.emit(event);
  }

  ngOnInit(): void {
  }
  getDescription(description){
    if(description === "0"){
      return [];
    }
    

    return description.split(","); 
  }
  getList(text){
    return text.split("|");
  }
  getNumber(text){
    return text.slice(0, text.indexOf(' '));
  }
  
  getType(){
    return this.mainService.type == "APPROVED"?"гүйцэтгэл":"Өмнөх оноос";
  }

  checkType(){
    return this.mainService.type == "APPROVED";
  }
}
