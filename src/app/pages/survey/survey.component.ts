import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { param } from 'jquery';
import { Constants } from 'src/app/services/constants';
import { MainService } from 'src/app/services/main.service';
@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {

  surveys: any = []
  
  constructor(private mainService: MainService, private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.mainService.baseGet(Constants.HOST + "websan/api/surveys", null, true).then((result: any) => {
      if (result) {
        this.surveys = result
      }
    }).catch((error) => {
      console.log(error);
    });

  }

}
