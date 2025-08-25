import { Component, OnInit, ViewChild } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { Constants } from 'src/app/services/constants';
import { PeriodicElement } from 'src/app/statement-data/statement-data.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-statedemo',
  templateUrl: './statedemo.component.html',
  styleUrls: ['./statedemo.component.scss']
})
export class StatedemoComponent implements OnInit {

  statements: any;
  showData = [];
  constructor(private mainService: MainService, private route: ActivatedRoute, private router: Router) { 
    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd) {
        
        if(val.url.split('?').length > 1){
          this.searchStatement();
        }
      }
  });
  }
  displayedColumns: string[] = ['tez', 'name', 'account', 'eza', 'subject', 'amount','datetime'];
  dataSource : any;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    
  }
  searchStatement(){
    this.mainService.baseGet(Constants.HOST + "websan/api/ehuulga", null, true).then((result: any) => {    

      const datas: PeriodicElement[] = result;
      this.dataSource = new MatTableDataSource(datas);       
      this.dataSource.sort = this.sort;
      this.showData = result;     
    }).catch((error) => {
      console.log(error);
    });
  }
}
