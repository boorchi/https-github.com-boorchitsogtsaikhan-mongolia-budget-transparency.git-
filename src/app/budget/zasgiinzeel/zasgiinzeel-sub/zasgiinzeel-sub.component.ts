import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-zasgiinzeel-sub',
  templateUrl: './zasgiinzeel-sub.component.html',
  styleUrls: ['./zasgiinzeel-sub.component.scss']
})
export class ZasgiinzeelSubComponent implements OnInit {

  names = [];
  valueszas = [];
  orlogoList = [];
  orlogoSub1List = [];
  orlogoValues = [];
  orlogoNames = [];
  orlogoSub1Values = [];
  orlogoSub1Names = [];
  sum = 0;
  
  @Input()
  name: any;

  @Input()
  percent: any;

  @Input()
  budget: any;

  @Input()
  process: any;

  @Input()
  processBudget: any;

  @Input()
  colorCode: any;
  
  @Input()
  code: any;

  @Input()
  ass: any;

  @Input()
  loan: any;

  @Input()
  colors: any;

  @Input()
  description: any;

  constructor() { }

  ngOnInit(): void {
    this.getValue();
  }
  getValue(){
    this.valueszas = [];
    this.names = ["Зээл","Тусламж"];
    this.valueszas.push(this.loan);
    this.valueszas.push(this.ass);
    this.sum = this.loan + this.ass;
  }

  ngOnChanges(): void {
    this.names = ["Зээл","Тусламж"];
    this.valueszas = [];
    this.valueszas.push(this.loan);
    this.valueszas.push(this.ass);
    this.sum = this.loan + this.ass;
    this.colors = ['#ff9f43' ,'#28c66f', '#b754ea']
  }

}
