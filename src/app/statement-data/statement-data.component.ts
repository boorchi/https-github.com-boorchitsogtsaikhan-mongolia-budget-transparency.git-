// import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
// import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
// import { MainService } from '../services/main.service';
// import { MatTableDataSource } from '@angular/material/table';
// import { MatSort } from '@angular/material/sort';
// import { Constants } from '../services/constants';
// import { MatPaginator } from '@angular/material/paginator';
// import { DataTableDirective } from 'angular-datatables';
// import { Subject } from 'rxjs';


// export interface PeriodicElement {
//   tez: string;
//   name: string;
//   account: string;
//   eza: string;
//   subject: string;
//   amount: number;
//   datetime: string
// }

// @Component({
//   selector: 'app-statement-data',
//   templateUrl: './statement-data.component.html',
//   styleUrls: ['./statement-data.component.scss']
// })
// export class StatementDataComponent implements AfterViewInit, OnDestroy, OnInit {


//   @ViewChild(DataTableDirective, {static: false})
//   dtElement: DataTableDirective;
  
//   statements: any;
//   showData = [];
//   dtOptions: DataTables.Settings = {};
//   dtTrigger: Subject<any> = new Subject();
//   constructor(private mainService: MainService, private route: ActivatedRoute, private router: Router) { 
//     router.events.subscribe((val) => {
//       if(val instanceof NavigationEnd) {
//         if(val.url.split('?').length > 1){
//           this.searchStatement(val.url.split('?')[1]);
//         }
//       }
//   });
//   }
//   displayedColumns: string[] = ['tez', 'name', 'account', 'eza', 'subject', 'amount','datetime'];
//   dataSource : any;

  
//   ngOnInit() {
   
//   }
//   getTez(type){
//     return "Сангийн сайд";
//   }

  
//   searchStatement(search){
//       this.dtOptions = {
//         ajax: Constants.HOST + "websan/api/ehuulga?" + search,
//         columns: [{
//           title: 'Төсвийн ерөнхийлөн захирагч',
//           data: 'tezName'
//         }, {
//           title: 'Төсвийн байгууллага',
//           data: 'name'
//         }, {
//           title: 'Бэлтгэн нийлүүлэгч',
//           data: 'account'
//         }, {
//           title: 'Үйлчилгээний төрөл',
//           data: 'eza'
//         }, {
//           title: 'Гүйлгээний утга',
//           data: 'subject',
//           width: "20%",
//         }, {
//           title: 'Мөнгөн дүн',
//           data: 'amount',
//           className: "number",         
//           render: $.fn.dataTable.render.number(',', '.', 2, '')
//         }, {
//           title: 'Огноо',
//           data: 'datetime.time',
//           render: function ( data, type, row ) {
//             return (row.datetime.year + 1900) + '/' + '0' + (row.datetime.month + 1) + '/' + row.datetime.date;
//         }          
//         }],
//         language: {
//           processing: "Уншиж байна...",
//           search: "Хайх:",
//           lengthMenu: "Хуудсанд _MENU_ -аар харуулах",
//           info: "Нийт _TOTAL_ гүйлгээнээс _START_ ээс _END_ хүртэл",
//           infoEmpty: "",
//           infoFiltered: "(filtrado _MAX_ elementos total)",
//           infoPostFix: "",
//           loadingRecords: "Уншиж байна...",
//           zeroRecords: "Мэдээлэл алга байна",
//           emptyTable: "Харуулах мэдээлэл алга",
//           paginate: {
//             first: "Эхнийх",
//             previous: "Өмнөх",
//             next: "Дараах",
//             last: "Сүүлийнх"
//           }
//         }
//       };
//       this.showData = ["show"];     
//   }

//   ngAfterViewInit(): void {
//     this.dtTrigger.next();
//   }

//   ngOnDestroy(): void {
//     this.dtTrigger.unsubscribe();
//   }

//   rerender(): void {
//     this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
//       dtInstance.destroy();
//       this.dtTrigger.next();
//     });
//   }
// }
