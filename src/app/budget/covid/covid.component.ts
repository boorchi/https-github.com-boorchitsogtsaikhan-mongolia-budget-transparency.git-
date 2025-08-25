import { Component, OnInit } from '@angular/core';
import { Constants } from '../../services/constants';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.scss']
})
export class CovidComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Add image path helper method
  getImagePath(imagePath: string): string {
    return Constants.getImagePath(imagePath);
  }

}
