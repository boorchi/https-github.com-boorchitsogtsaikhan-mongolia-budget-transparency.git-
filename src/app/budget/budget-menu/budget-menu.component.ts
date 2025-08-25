import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Constants } from 'src/app/services/constants';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-budget-menu',
  templateUrl: './budget-menu.component.html',
  styleUrls: ['./budget-menu.component.scss']
})
export class BudgetMenuComponent implements OnInit {

  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;
  showMenu = true
  urlName = '';
  @Input()
  menu;

  params = {year: Constants.year, category: Constants.category};

  constructor(private router: Router, private mainService: MainService) { 
    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd) {
        this.urlName = val.url;
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

  toggle(event){
    // $(event.currentTarget).toggleClass("open");
    var $this = $(event.currentTarget);
    if ($this.next('ul').length) {
      $this.next('ul').toggle(200);
      $this.parent('li').siblings().find('ul').not($this.parent('li').find('ul')).slideUp(200);
      $this.next('ul').find('li ul').slideUp(200);
      $this.find('.up-menu').toggle(200);
      $this.find('.down-menu').toggle(200);
      return false;
    }
  }

  set(element){
    var $this = element;
    if ($this.next('ul').length) {
      $this.next('ul').toggle(200);
      $this.parent('li').siblings().find('ul').not($this.parent('li').find('ul')).slideUp(200);
      $this.next('ul').find('li ul').slideUp(200);
      $this.find('.up-menu').toggle(200);
      $this.find('.down-menu').toggle(200);
      return false;
    }
  }
  ngOnInit(): void {    
    var $this = this;
    setTimeout(function () {
      $this.set($(".navigation ul li.active> a"));
    }, 500); 
  
   
  } 

}
