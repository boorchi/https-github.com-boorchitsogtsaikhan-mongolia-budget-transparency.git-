import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Constants } from 'src/app/services/constants';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-dis-list',
  templateUrl: './dis-list.component.html',
  styleUrls: ['./dis-list.component.scss']
})
export class DisListComponent implements OnInit {

  discussions: any = []
  iframe: any
  constructor(private mainService: MainService, private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    
    this.mainService.baseGet(Constants.HOST + "websan/api/discussions", null, true).then((result: any) => {
      if (result) {
        this.discussions = result
      }
    }).catch((error) => {
      console.log(error);
    });
    // this.route.queryParams.subscribe(params => {
    //   if(params.id){
    //     this.mainService.baseGet(Constants.HOST + "websan/api/survey" + "?id=" + params.id, null, true).then((result: any) => {
    //       if(result){
    //         this.survey = result
    //         this.iframe = this.sanitizer.bypassSecurityTrustHtml(result.embed);
    //       }
    //     }).catch((error) => {
    //       console.log(error);
    //     });
    //   }
    // })
  }


}
