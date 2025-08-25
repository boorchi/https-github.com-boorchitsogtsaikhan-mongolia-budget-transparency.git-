import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Constants } from 'src/app/services/constants';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-dis-show',
  templateUrl: './dis-show.component.html',
  styleUrls: ['./dis-show.component.scss']
})
export class DisShowComponent implements OnInit {

  
  discussion: any = {}
  iframe: any
  commentData: any = {
    comment: '',
    email: '',
    name: '',
    discussion_id: '',
  }
  id: any = ''
  comments: any = []
  constructor(private mainService: MainService, private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    
    this.route.queryParams.subscribe(params => {
      if(params.id){
        this.commentData.discussion_id = params.id
        this.mainService.baseGet(Constants.HOST + "websan/api/discussion" + "?id=" + params.id, null, true).then((result: any) => {
          if(result){
            this.discussion = result
            this.iframe = this.sanitizer.bypassSecurityTrustResourceUrl(Constants.PATH + result.imageUrl);
            this.getComments(params.id)
            this.id = params.id
          }
        }).catch((error) => {
          console.log(error);
        });
      }
    })
  }

  sendComment(){
    if(this.id){
      this.mainService.basePost(Constants.HOST + "websan/api/sendComment", this.commentData).then((result: any) => {
        this.getComments(this.id)
      }).catch((error) => {
        console.log(error);
      });
    }
    
  }

  getComments(id: any){
    this.mainService.baseGet(Constants.HOST + "websan/api/getComment" + "?id=" + id, null, true).then((result: any) => {
          this.comments = result
    }).catch((error) => {
      console.log(error);
    });
  }

}
