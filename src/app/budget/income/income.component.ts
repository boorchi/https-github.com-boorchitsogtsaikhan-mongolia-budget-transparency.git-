import { Component, OnInit } from '@angular/core';
import { Constants } from '../../services/constants';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit {
  colors_income_ded = Constants.colors_income_ded;
  changeText1: boolean;
  changeText2: boolean;
  changeText3: boolean;
  changeText4: boolean;
  description: any;
  slideData = {type:4, datas:  [
		{name: "Гүүрийн байгууламж", text : " 13"}
		,{name: "Авто зам", text : " 143"}
		,{name: "Үер усны хангамж", text : " 117"}
		,{name: "Цахилгаан", text : " 23"}
		,{name: "Цахилгаан", text : " 23"}
		]};
  constructor() {
    this.changeText1 = false;
    this.changeText2 = false;
    this.changeText3 = false;
    this.changeText4 = false;
   }

  ngOnInit(): void {
  }

}
