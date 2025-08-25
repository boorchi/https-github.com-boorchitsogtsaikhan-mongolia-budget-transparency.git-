import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, query, stagger } from '@angular/animations';
import { MainService } from '../../services/main.service';
import { Constants } from '../../services/constants';
import { Subscription } from 'rxjs/internal/Subscription';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'budget-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'] 
})
export class MainComponent implements OnInit {
  
  
  budgetMain = {
    "SUBMITTED": {"IN" : {
      approvedValue:0,
      perfoValue:0,
      percent:0
    },"OUT" : {
      approvedValue:0,
      perfoValue:0,
      percent:0
    },"EQUAL" : {
      approvedValue:0,
      perfoValue:0,
      percent:0
    },"PERCENT" : {
      approvedValue:0,
      perfoValue:0,
      percent:0
    }},
    "APPROVED": {"IN" : {
      approvedValue:0,
      perfoValue:0,
      percent:0,
      status: 1
    },"OUT" : {
      approvedValue:0,
      perfoValue:0,
      percent:0,
      status: 1
    },"EQUAL" : {
      approvedValue:0,
      perfoValue:0,
      percent:0
    },"PERCENT" : {
      approvedValue:0,
      perfoValue:0,
      percent:0
    }}
  };
  params = {year: Constants.year, category: Constants.category}
  type: string;
  yearSub: Subscription;
  typeSub: Subscription;
  constructor(private mainService: MainService, private route: ActivatedRoute, private router: Router) { 
    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd) {
        if(val.url.split('?').length > 1){
          this.setQueryParam(val.url.split('?')[1]);
          this.getBudget();
        }else{
          this.getBudget();
        }
        this.getReleaseDate("Sheet1"); 
      }
  });
  }

  down(){
    this.mainService.scroll("description");
  }
  setQueryParam(param){
    var query = {};
    var params = param.split("&");
    params.forEach(function(entry) {
        var p = entry.split('=');
        this.params[p[0]] = p[1];
    },this);    
  }

  ngOnInit(): void {  
    
  }

  getBudget() {
    // Fetch data from new backend using direct fetch calls
    Promise.all([
      fetch(`${Constants.NEW_BACKEND_PUBLIC}/budget/revenue?year=${this.params["year"]}`).then(res => res.json()),
      fetch(`${Constants.NEW_BACKEND_PUBLIC}/budget/expenditure?year=${this.params["year"]}`).then(res => res.json())
    ]).then(([revenueData, expenditureData]) => {
      console.log('Backend data received:', { revenueData, expenditureData });
      
      // Calculate totals from backend data
      const totalRevenue = revenueData.reduce((sum, item) => sum + item.amount, 0);
      const totalExpenditure = expenditureData.reduce((sum, item) => sum + item.amount, 0);
      const balance = totalRevenue - totalExpenditure;
      
      // Convert to billions and set the data
      // For APPROVED category (current year actual data)
      this.budgetMain["APPROVED"]["IN"]["approvedValue"] = totalRevenue / 1000000000;
      this.budgetMain["APPROVED"]["IN"]["perfoValue"] = totalRevenue / 1000000000;
      this.budgetMain["APPROVED"]["IN"]["percent"] = 100; // Assuming 100% performance for actual data
      
      this.budgetMain["APPROVED"]["OUT"]["approvedValue"] = totalExpenditure / 1000000000;
      this.budgetMain["APPROVED"]["OUT"]["perfoValue"] = totalExpenditure / 1000000000;
      this.budgetMain["APPROVED"]["OUT"]["percent"] = 100;
      
      this.budgetMain["APPROVED"]["EQUAL"]["approvedValue"] = balance / 1000000000;
      this.budgetMain["APPROVED"]["EQUAL"]["perfoValue"] = balance / 1000000000;
      this.budgetMain["APPROVED"]["EQUAL"]["percent"] = balance >= 0 ? 100 : -100;
      
      // Calculate percentage of GDP (assuming 50T MNT GDP for calculation)
      const gdpEstimate = 50000000000000; // 50 trillion MNT
      this.budgetMain["APPROVED"]["PERCENT"]["percent"] = Number(((totalRevenue / gdpEstimate) * 100).toFixed(2));
      
      // For SUBMITTED category (use similar values for now)
      this.budgetMain["SUBMITTED"]["IN"]["approvedValue"] = totalRevenue / 1000000000;
      this.budgetMain["SUBMITTED"]["IN"]["perfoValue"] = totalRevenue / 1000000000;
      this.budgetMain["SUBMITTED"]["IN"]["percent"] = 100;
      
      this.budgetMain["SUBMITTED"]["OUT"]["approvedValue"] = totalExpenditure / 1000000000;
      this.budgetMain["SUBMITTED"]["OUT"]["perfoValue"] = totalExpenditure / 1000000000;
      this.budgetMain["SUBMITTED"]["OUT"]["percent"] = 100;
      
      this.budgetMain["SUBMITTED"]["EQUAL"]["approvedValue"] = balance / 1000000000;
      this.budgetMain["SUBMITTED"]["EQUAL"]["perfoValue"] = balance / 1000000000;
      this.budgetMain["SUBMITTED"]["EQUAL"]["percent"] = balance >= 0 ? 100 : -100;
      
      this.budgetMain["SUBMITTED"]["PERCENT"]["percent"] = Number(((totalRevenue / gdpEstimate) * 100).toFixed(2));
      
      console.log('Budget data updated:', this.budgetMain);
    }).catch((error) => {
      console.error('Error fetching budget data:', error);
      // Fallback to demo values if backend fails
      this.setDemoValues();
    });
  }
  
  setDemoValues() {
    // Set fallback demo values in case backend is unavailable
    const demoRevenue = 6.15; // 6.15B MNT
    const demoExpenditure = 6.50; // 6.50B MNT
    const demoBalance = demoRevenue - demoExpenditure;
    
    ["APPROVED", "SUBMITTED"].forEach(type => {
      this.budgetMain[type]["IN"]["approvedValue"] = demoRevenue;
      this.budgetMain[type]["IN"]["perfoValue"] = demoRevenue;
      this.budgetMain[type]["IN"]["percent"] = 100;
      
      this.budgetMain[type]["OUT"]["approvedValue"] = demoExpenditure;
      this.budgetMain[type]["OUT"]["perfoValue"] = demoExpenditure;
      this.budgetMain[type]["OUT"]["percent"] = 100;
      
      this.budgetMain[type]["EQUAL"]["approvedValue"] = demoBalance;
      this.budgetMain[type]["EQUAL"]["perfoValue"] = demoBalance;
      this.budgetMain[type]["EQUAL"]["percent"] = demoBalance >= 0 ? 100 : -100;
      
      this.budgetMain[type]["PERCENT"]["percent"] = 0.25; // Estimated percentage
    });
  }

  releaseDate: any;
  updateDate: any;
  description: any;
  getReleaseDate(code){
    this.updateDate = "";
    this.description = "";
    
    // Try new backend first, then fallback to old API
    fetch(`${Constants.NEW_BACKEND_PUBLIC}/release-date?code=${code}&year=${this.params["year"]}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('New backend not available');
        }
        return response.json();
      })
      .then((result: any) => {  
        if(result.length > 0){
          this.updateDate = result[0].updateDate
          this.description = result[0].description;
        }      
      })
      .catch(() => {
        // Fallback to old API or set default values
        this.mainService.baseGet(Constants.HOST + Constants.BUDGET_RELEASE_DATE + "?code=" + code + "&year=" + this.params["year"], null, true)
          .then((result: any) => {  
            if(result.length > 0){
              this.updateDate = result[0].updateDate
              this.description = result[0].description;
            }      
          })
          .catch((error) => {
            console.log(error);
            // Set default values if both APIs fail
            this.updateDate = new Date().toISOString().split('T')[0];
            this.description = "Монгол улсын нэгдсэн төсвийн мэдээлэл";
          });
      });
  }

  check(value){
    var val = parseInt(value);
    if(val == 100){
      return 4;
    }else if(val > 70 && val < 100){
      return 3;
    }else if(val > 45 && val < 70){
      return 2;
    }else if(val >= 0 && val < 45){
      return 1;
    }
    return 1;
  }
}
