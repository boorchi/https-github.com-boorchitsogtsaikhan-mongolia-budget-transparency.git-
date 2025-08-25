import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MainService } from '../../services/main.service';
import { Constants } from '../../services/constants';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class HelpComponent  implements OnInit {

  search = "";
  menuState:string = 'out';
  dics = [];
  showDetail = false;
  dic = {};
  constructor(private mainService: MainService) { }

  toggleMenu(){
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }

  ngOnInit() {
  	
    this.getDetailJob();
  }

  

  getDetailJob() {
    this.mainService.baseGet(Constants.HOST + Constants.DICTIONARY, {search:this.search}, true).then((result: any) => {
      this.dics = result;
      this.showDetail = false;
    }).catch((error) => {
      console.log(error);
    });
  }

  select(dic){
    this.dic = dic;
    this.showDetail = true;
  }
  

}
