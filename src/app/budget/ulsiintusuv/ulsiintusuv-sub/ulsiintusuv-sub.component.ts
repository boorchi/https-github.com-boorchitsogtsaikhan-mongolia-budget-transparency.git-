import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-ulsiintusuv-sub',
  templateUrl: './ulsiintusuv-sub.component.html',
  styleUrls: ['./ulsiintusuv-sub.component.scss']
})
export class UlsiintusuvSubComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  tiles: Tile[] = [
    {text: 'Орлогын албан татвар', cols: 1, rows: 3, color: 'lightgreen'},
    {text: 'Нийгмийн даатгал', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Хөрөнгийн албан татвар', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Онцгой албан татвар', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Орлогын албан татвар', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Тусгай зориулалт', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Бусад', cols: 1, rows: 1, color: 'lightgreen'},
  ];


}
