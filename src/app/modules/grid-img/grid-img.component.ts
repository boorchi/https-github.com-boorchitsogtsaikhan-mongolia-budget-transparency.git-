import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'module-grid-img',
  templateUrl: './grid-img.component.html',
  styleUrls: ['./grid-img.component.scss']
})
export class GridImgComponent implements OnInit {

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
  type: any;

  @Input()
  toggle: any;

  constructor() { }

  ngOnInit(): void {
  }

}
