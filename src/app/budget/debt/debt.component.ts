import { Component, OnInit, Input } from '@angular/core';
import * as CanvasJS from '../../../assets/canvasjs.min';
import { MainService } from '../../services/main.service';
import { Constants } from '../../services/constants';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-debt',
  templateUrl: './debt.component.html',
  styleUrls: ['./debt.component.scss']
})

export class DebtComponent implements OnInit {
	@Input()
	options: Object;

	slideData = {type:3, datas:  [
		{name: "Зорилт 1", text : " Засгийн газрын гадаад,	дотоод үнэт цаас, зээлийн төлбөрүүдийг эдийн засаг, төсөвт дарамт учруулахгүйгээр төлж дахин санхүүжилтийн эрсдэлийг бууруулна."}
		,{name: "Зорилт 2", text : " Гадаад зээллэгээр хэрэгжүүлэх төсөл хөтөлбөрүүдэд зардал, үр өгөөжийн тооцооллыг хийж, зөвхөн үр ашигтай төслүүдийг санхүүжүүлэх зарчмыг баримталж, тэдгээрийн зарцуулалтад тавих хяналтыг сайжруулна."}
		,{name: "Зорилт 3", text : " Болзошгүй өр төлбөрийн төсөвт үзүүлэх нөлөөллийг үнэлэх, болзошгүй эрсдэлээс сэргийлэх тогтолцоог хөгжүүлнэ."}
		,{name: "Зорилт 4", text : " Орчин үеийн технологийн дэвшлийг ашигласан Засгийн газрын үнэт цаасны арилжааны дэд бүтцийг бүрдүүлнэ. Гадаад, дотоодын хөрөнгө оруулагчдын арилжаанд оролцох боломжийг нэмэгдүүлж, зах зээлийн нээлттэй, өрсөлдөөнт, хүртээмжтэй байдлыг хангаж, Засгийн газрын үнэт цаасны хөрвөх чадварыг сайжруулна."}
		,{name: "Зорилт 5", text : " Засгийн газрын өрийн удирдлагын тогтолцоог сайжруулж, орчин үеийн чиг хандлагад нийцүүлэх."}
		]}; 
	debtList: any[] = [];
	debtDeitalList: any[] = [];
	debt: any[] = [];
	bond: any[] = [];
	debtName: any;
	type:any;
	year:any;
	name: any;
	selectedtype:any;
	selectedyear:any;
	selectedname:any;
	gadaadperfo:any;
	dotoodperfo:any;
	gadaadloan:any;
	params = {year: Constants.year, category: Constants.category}
	colors = Constants.colorsDebit;
	customOptions: OwlOptions = {
		loop: true,
		mouseDrag: false,
		touchDrag: false,
		pullDrag: false,
		dots: false,
		navSpeed: 700,
		navText: ['', ''],
		responsive: {
		  0: {
			items: 1
		  },
		  400: {
			items: 2
		  },
		  740: {
			items: 3
		  },
		  940: {
			items: 3
		  }
		},
		nav: true
	  }
  constructor(private mainService: MainService, private route: ActivatedRoute, private router: Router) {
	router.events.subscribe((val) => {
		if(val instanceof NavigationEnd) {
		  if(val.url.split('?').length > 1){
			this.setQueryParam(val.url.split('?')[1]);
		  }
		this.getBond();
		this.getDebt();	
		this.showChart();
		this.showChart2();
		this.getDebtPaymentIndex();
		}
	});
   }
  setQueryParam(param){
    var query = {};
    var params = param.split("&");
    params.forEach(function(entry) {
        var p = entry.split('=');
        this.params[p[0]] = p[1];
    },this);
    this.getChanges(param)
  }
  getChanges(param){
    var old = this.params["year"];
  }

  ngOnInit() {
	  
	this.getReleaseDate("Sheet13");
	}

	getBond() {
		this.mainService.baseGet(Constants.HOST + Constants.BUDGET_DEBT_BOND, null, true).then((result: any) => {
			this.bond = result;
		}).catch((error) => {
		  	console.log(error);
		});
	}

	getDebt() {    
		this.mainService.baseGet(Constants.HOST + Constants.BUDGET_DEBT_MAIN + "?year=" + this.params["year"], null, true).then((result: any) => {
		  this.debt = result;
		  
		}).catch((error) => {
		  console.log(error);
		});
	  }
	showChart(){ 
		this.mainService.baseGet(Constants.HOST + Constants.BUDGET_DEBT_MAIN + "?year=" + this.params["year"], null, true).then((result: any) => {
		  var datas = [];
		  var types = {};
		  result.forEach((element, index, array) => {
			 
			if (element.typeName in types){
				
				types[element.typeName].push({y: element.approvedValue, label: element.year});
			}else{
				types[element.typeName] = [];
				types[element.typeName].push({y: element.approvedValue, label: element.year});
			}
			
			
		  });
		  console.log(types)
		var i = 0;
		for (const [key, value] of Object.entries(types)) {
					
			var val = {    
				type: "stackedColumn",   
				indexLabelFontColor: "#fff",
				showInLegend: true,
				indexLabel: "{y}",
				name: key,
				color: this.colors[i], 
				dataPoints: value,
				dataPoints1: value
			  }  
			  datas.push(val);
			  i++;
			  if(i === Object.entries(types).length){
				this.render(datas);
			  }
		}

		
		}).catch((error) => {
		  console.log(error);
		});
	  }
	showChart2(){ 
		this.mainService.baseGet(Constants.HOST + Constants.BUDGET_DEBT_ITEM, null, true).then((result: any) => {
		  var datas2 = [];
		  var debts = this;
		  
		  var types = {};
		  result.forEach((element, index, array) => {
			// var value = {    
			//   type: "stackedColumn",   
			//   indexLabelFontColor: "#fff",
			//   indexLabel: "{y}",
			//   elementType: element.type,
			//   name: element.typeName,
			//   color: this.colors[index], 
			//   dataPoints: [{ y: element.perfoValue, label: element.year, click: onClick }]
			// }  
			
			if (element.typeName in types){
				types[element.typeName].push({y: element.perfoValue, label: element.year,index, type: element.type});
			}else{
				types[element.typeName] = [];
				types[element.typeName].push({y: element.perfoValue, label: element.year,index, type: element.type});
			}
			
		  });
	
		  	var i = 0;
			for (const [key, value] of Object.entries(types)) {
				var val = {    
					type: "stackedColumn",   
					indexLabelFontColor: "#fff",
					indexLabel: "{y}",
					name: key,
					color: this.colors[i], 
					dataPoints: value, click: onClick
				}  
				datas2.push(val);
		
				i++;
				if(i === Object.entries(types).length){
					this.render2(datas2);
				}
			}

			function onClick(e){
				this.type = e.dataPoint.type;
				this.year = e.dataPoint.label;
				this.name = e.dataSeries.name;
				debts.getDebtItemDetail(this.type,this.year,this.name);
			}	
		  
		}).catch((error) => {
		  console.log(error);
		});
		
	}
	
	getDebtItemDetail(type,year,name){
		this.selectedtype = type;
		this.selectedname = name;
		this.selectedyear = year;
		this.mainService.baseGet(Constants.HOST + Constants.BUDGET_DEBT_DETAIL + "?year=" + year + "&type=" + type, null, true).then((result: any) => {
			this.debtDeitalList= result
			}).catch((error) => {
			console.log(error);
		});
	}

	paymentIndex1 = [];
	paymentIndex1Years = [];
	paymentIndex2 = [];
	paymentIndex2Years = [];
	isIndex1Loaded = false;
	isIndex2Loaded = false;
	getDebtPaymentIndex(){
		this.mainService.baseGet(Constants.HOST + Constants.BUDGET_DEBT_PAYMENT_INDEX + "?type=HZ10", null, true).then((result: any) => {
			
			var datas = Object.keys(result).map((key) => [key, result[key]]);
			datas.forEach((element, index, array) => {
				if(this.paymentIndex1Years.length == 0){
					this.paymentIndex1.push({
						name: element[1][0]["codeName"],
						type: "column",
						data: []
					});
					this.paymentIndex1.push({
						name: element[1][1]["codeName"] + " %",
						type: "line",
						data: []
					});
					this.paymentIndex1.push({
						name: element[1][2]["codeName"] + " %",
						type: "line",
						data: []
					});
				}
				this.paymentIndex1[0]["data"].push(element[1][0]["perfoValue"]);
				this.paymentIndex1[1]["data"].push(element[1][1]["perfoValue"]);
				this.paymentIndex1[2]["data"].push(element[1][2]["perfoValue"]);
				this.paymentIndex1Years.push(parseInt(element[0]));
			});
			this.isIndex1Loaded = true;
			}).catch((error) => {
			console.log(error);
		});

		this.mainService.baseGet(Constants.HOST + Constants.BUDGET_DEBT_PAYMENT_INDEX + "?type=UD10", null, true).then((result: any) => {
			
			var datas = Object.keys(result).map((key) => [key, result[key]]);
			datas.forEach((element, index, array) => {
				if(this.paymentIndex2Years.length == 0){
					this.paymentIndex2.push({
						name: element[1][0]["codeName"],
						type: "line",
						data: []
					});
					this.paymentIndex2.push({
						name: element[1][1]["codeName"],
						type: "line",
						data: []
					});
					this.paymentIndex2.push({
						name: element[1][2]["codeName"],
						type: "line",
						data: []
					});
				}
				this.paymentIndex2[0]["data"].push(element[1][0]["perfoValue"]);
				this.paymentIndex2[1]["data"].push(element[1][1]["perfoValue"]);
				this.paymentIndex2[2]["data"].push(element[1][2]["perfoValue"]);
				this.paymentIndex2Years.push(parseInt(element[0]));
			});
			this.isIndex2Loaded = true;
			}).catch((error) => {
			console.log(error);
		});
	}
	
	render(datas){
		console.log(datas);
		var tooltip = this;
		let chart = new CanvasJS.Chart("chartContainer", {
		    animationEnabled: true,
			exportEnabled: true,
			title: {
				text: ""
			},
			axisY:{
				title: "",
				gridThickness: 1,
				gridColor: "#eee"
			},
			axisX: {
				interval: 1
			},
			toolTip: {
				shared: true,
				content: tooltip.toolTipContent
			},
			dataPointMinHeight: 450,
		    data: datas
		});    
		
		var minValue = 3000;
		var data = chart.options.data;
		for(var i = 0; i < data.length; i++) {
			for(var j =0; j < data[i].dataPoints.length; j++) {
				data[i].dataPoints[j]["tLabel"] = data[i].dataPoints[j].y;
			if(data[i].dataPoints[j].y < 2000) {
				var p = data[i].dataPoints[j].y;
				data[i].dataPoints[j].y = minValue;
				data[i].dataPoints[j].indexLabel = p + "";				
				// data[i].dataPoints[j].toolTipContent = "{name}: " + p;        
			}			
			
			
			
			}
		}

  chart.render();
	}

	toolTipContent(e) {

		var str = "";
		var total = 0;
		var str2, str3;
		for (var i = 0; i < e.entries.length; i++){
			var  str1 = "<span style= \"color:"+e.entries[i].dataSeries.color + "\"> "+e.entries[i].dataSeries.name+"</span>: <strong>"+e.entries[i].dataPoint.tLabel+"</strong><br/>";
			total = e.entries[i].dataPoint.tLabel + total;
			str = str.concat(str1);
		}
		str2 = "";
		total = Math.round(total * 100) / 100;
		str3 = "<span>Нийт:</span><strong> "+total+"</strong><br/>";
		return (str2.concat(str)).concat(str3);
	}

	render2(datas2){
		let chart = new CanvasJS.Chart("chartContainer2", {
		    animationEnabled: true,
			exportEnabled: true,
			title: {
				text: ""
			},
			axisY:{
				title: "",
				gridThickness: 1,
				gridColor: "#eee"
			},
			toolTip:{
				content:"{name}: {y}" 

			},
		    data: datas2
		});    
		chart.render();
	
	}

	releaseDate: any;
	updateDate: any;
	description: any;
	getReleaseDate(code){
	  this.mainService.baseGet(Constants.HOST + Constants.BUDGET_RELEASE_DATE + "?code=" + code + "&year=" + this.params["year"], null, true).then((result: any) => {     
		// this.releaseDate = result;
		this.updateDate = result[0].updateDate
		this.description = result[0].description;
	  }).catch((error) => {
		console.log(error);
	  });
	}
}
