import { Injectable, Output, EventEmitter  } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { Constants } from './constants';
import { NgAnimateScrollService } from 'ng-animate-scroll';

@Injectable({
    providedIn: 'root',
  })
export class MainService {
    info: any = {};
    type: string = Constants.types[0];
    year: string = new Date().getFullYear().toString();

    @Output() budgetType = new EventEmitter();
    @Output() budgetYear = new EventEmitter();
    @Output() budgetOrlogoSub = new EventEmitter();
    @Output() budgetOrlogoSub1 = new EventEmitter();
    @Output() budgetZarlagaSub = new EventEmitter();
    @Output() budgetZarlagaSub1 = new EventEmitter();
    @Output() budgetNde = new EventEmitter();
    @Output() boostDataSub = new EventEmitter();

    constructor(public http: HttpClient, private route: Router, private router: Router, private animateScrollService: NgAnimateScrollService) {
        this.http = http;        
    }

    baseGet(url, params?, noauth = false) {
        return new Promise((resolve, reject) => {
            const headers = new HttpHeaders();
            headers.append('Content-Type', 'application/json');            
            this.http.get(url, { headers: headers, params: params })
                .subscribe(res => {
                    resolve(this.isJSON(res));
                }, (err) => {
                    reject(this.isJSON(err));
                });
        });
    }  

    basePost(url, data, noauth = false, isLoading = true) {
        try {
            return new Promise((resolve, reject) => {
                // this.startMultipleRequest(isLoading);
               
                this.http.post(url, JSON.stringify(data), {
                    headers: new HttpHeaders({
                        'Content-Type': 'application/json'
                    })
                })
                .subscribe(res => {
                    resolve(this.isJSON(res));
                        this.handleMultipleRequestLoader(isLoading);
                    }, (err) => {                           
                        reject(this.isJSON(err));
                });               
            });
        } catch (error) {
        }
    } 

    statementData(url, data, noauth = false, isLoading = true) {
        try {
            return new Promise((resolve, reject) => {
                // this.startMultipleRequest(isLoading);
               
                this.http.post(url, JSON.stringify(data), {
                    headers: new HttpHeaders({
                        'Access-Control-Allow-Origin':'*',
                        'X-API-KEY': 'a126d3c56b9b6ab9e22ff89b8c18ad517146586f',
                        "Authorization": "Basic " + btoa("ehuulga:$3huu1ga2o2o")
                    })
                })
                .subscribe(res => {
                    resolve(this.isJSON(res));
                        this.handleMultipleRequestLoader(isLoading);
                    }, (err) => {                           
                        reject(this.isJSON(err));
                });
               
            });
        } catch (error) {
        }
    }
   
    isJSON(str) {
        try {
            if (typeof str._body === 'string') {
                return JSON.parse(/** @type {?} */(str._body));
            }
            if (str._body instanceof ArrayBuffer) {
                return JSON.parse(str.text());
            }
            return str;
        } catch (e) {
            return str;
        }
    }

    handleMultipleRequestLoader(isLoading = true) {
        if (!isLoading) {
            return;
        }
    // if (--this.shared.activeAjaxCount <= 0) {
    //     this.shared.loading = false;
    // }
    }   
 
    changeType(type){
        this.type = type;        
    }

    changeYear(year){   
        this.year = year;     
        this.budgetYear.emit(year);
    }

    orlogoSub(index, data){
        switch(index){
            case 0:this.budgetOrlogoSub.emit(data); break;
            case 1:this.budgetOrlogoSub1.emit(data); break;
        }
    }

    boostSub(index){
        this.boostDataSub.emit(index);
    }

    ndeSub(data){
        this.budgetNde.emit(data); 
        
    }

    zarlagaSub(index, data){
        switch(index){
            case 0:this.budgetZarlagaSub.emit(data); break;
            case 1:this.budgetZarlagaSub1.emit(data); break;
        }
    }

    scroll(element, time = 750){
        this.animateScrollService.scrollToElement(element, time);
    }

}
