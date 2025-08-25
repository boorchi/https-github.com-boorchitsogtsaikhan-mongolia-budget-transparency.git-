function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-news-news-module"], {
  /***/
  "./src/app/pages/news/news.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/news/news.component.ts ***!
    \**********************************************/

  /*! exports provided: NewsComponent */

  /***/
  function _src_app_pages_news_newsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsComponent", function () {
      return NewsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/constants */
    "./src/app/services/constants.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/main.service */
    "./src/app/services/main.service.ts");
    /* harmony import */


    var _modules_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../modules/menu/menu.component */
    "./src/app/modules/menu/menu.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../footer/footer.component */
    "./src/app/pages/footer/footer.component.ts");

    function NewsComponent_div_19_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewsComponent_div_19_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var i_r2 = ctx.index;
          var new_r1 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.showVid(i_r2, new_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var new_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.fileUrl + new_r1.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](new_r1.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](new_r1.publishDate);
      }
    }

    var NewsComponent = /*#__PURE__*/function () {
      function NewsComponent(mainService, route, router) {
        var _this = this;

        _classCallCheck(this, NewsComponent);

        this.mainService = mainService;
        this.route = route;
        this.router = router;
        this.newsImg = [];
        this.typeImg = 1;
        this.urlName = '';
        this.fileUrl = _services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].PATH;
        router.events.subscribe(function (val) {
          if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
            _this.urlName = val.url;
          }
        });
        this.route.queryParams.subscribe(function (params) {
          _this.id = params['id'];

          _this.getNews(_this.id);

          _this.getNewsImg(_this.typeImg);
        });
      }

      return _createClass(NewsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getNews",
        value: function getNews(id) {
          var _this2 = this;

          this.mainService.baseGet(_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].HOST + _services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].NEWSBYID + "?id=" + id, null, true).then(function (result) {
            _this2.name = result.name;
            _this2.description = result.description;
            _this2.imageUrl = result.imageUrl;
            _this2.publishDate = result.publishDate;
            _this2.url = result.url;
            _this2.news = result;
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }, {
        key: "getNewsImg",
        value: function getNewsImg(type) {
          var _this3 = this;

          type = this.typeImg;
          this.mainService.baseGet(_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].HOST + _services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].NEWS + "?type=" + type, true).then(function (result) {
            _this3.newsImg = result;
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }, {
        key: "showVid",
        value: function showVid(index, code) {
          this.img = code;
          var url_data = this.urlName.split('?');
          var url = url_data[0];
          var param = '';

          if (url_data.length > 1) {
            param = url_data[1];
          }

          var query = this.setQueryParam(param, "id", code.id);
          this.router.navigate([url], {
            queryParams: query
          });
        }
      }, {
        key: "removeTags",
        value: function removeTags(content) {
          if (content) {
            var plainText = content.replace(/<[^>]*>/g, '');
            return plainText;
          }
        }
      }, {
        key: "setQueryParam",
        value: function setQueryParam(param, change, value) {
          var query = {};
          var params = param.split("&");
          var find = false;
          params.forEach(function (entry) {
            var p = entry.split('=');

            if (p[0] === change) {
              query[change] = value;
              find = true;
            } else {
              query[p[0]] = p[1];
            }
          });

          if (!find) {
            query[change] = value;
          }

          return query;
        }
      }]);
    }();

    NewsComponent.ɵfac = function NewsComponent_Factory(t) {
      return new (t || NewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    NewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NewsComponent,
      selectors: [["app-news"]],
      decls: 21,
      vars: 6,
      consts: [[1, "budget-outlet"], [3, "menuType"], [1, "budget-body"], [1, "news-content"], [1, "row"], [1, "col-md-12"], [1, "col-md-9"], [1, "news-item"], [1, "title"], [1, "img"], [3, "src"], [3, "innerHTML"], ["target", "_blank", 3, "href"], [1, "col-md-3"], [1, "news_menu"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], [1, "new_img"], [1, "new_text"]],
      template: function NewsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "module-menu", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u0424\u0430\u0439\u043B \u0445\u0430\u0440\u0430\u0445");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, NewsComponent_div_19_Template, 10, 3, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-footer");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("menuType", "education");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.fileUrl + ctx.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.url.includes("http") ? ctx.url : ctx.fileUrl + ctx.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.newsImg);
        }
      },
      directives: [_modules_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]],
      styles: [".news-content[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.news-content[_ngcontent-%COMP%]   .news_menu[_ngcontent-%COMP%] {\n  background: #fff;\n  width: 100%;\n  min-height: 120px;\n  border-radius: 10px;\n  box-shadow: 3px 3px 8px 0px #c8c8c8;\n  padding: 20px;\n}\n.news-content[_ngcontent-%COMP%]   .news_menu[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #505054;\n  font-size: 20px;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n.news-content[_ngcontent-%COMP%]   .news_menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.news-content[_ngcontent-%COMP%]   .news_menu[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding-top: 15px;\n}\n.news-content[_ngcontent-%COMP%]   .news_menu[_ngcontent-%COMP%]   .new_img[_ngcontent-%COMP%] {\n  width: 40%;\n  padding-left: 5px;\n}\n.news-content[_ngcontent-%COMP%]   .news_menu[_ngcontent-%COMP%]   .new_img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.news-content[_ngcontent-%COMP%]   .news_menu[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  float: right;\n}\n.news-content[_ngcontent-%COMP%]   .news_menu[_ngcontent-%COMP%]   .new_text[_ngcontent-%COMP%] {\n  width: 60%;\n  padding-left: 5px;\n  line-height: 15px;\n}\n.news-content[_ngcontent-%COMP%]   .news_menu[_ngcontent-%COMP%]   .new_text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 700;\n  line-height: 80%;\n}\n.news-content[_ngcontent-%COMP%]   .news_menu[_ngcontent-%COMP%]   .new_text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 400;\n  margin-bottom: 0;\n}\n.news-content[_ngcontent-%COMP%]   .news-item[_ngcontent-%COMP%] {\n  background: #fff;\n  width: 100%;\n  min-height: 120px;\n  border-radius: 10px;\n  box-shadow: 3px 3px 8px 0px #c8c8c8;\n  padding: 20px;\n}\n.news-content[_ngcontent-%COMP%]   .news-item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  width: 80%;\n  margin-bottom: 22px;\n  color: #505054;\n  font-size: 30px;\n  line-height: 44px;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n.news-content[_ngcontent-%COMP%]   .news-item[_ngcontent-%COMP%]   .meta-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: row-reverse;\n  margin-bottom: 25px;\n}\n.news-content[_ngcontent-%COMP%]   .news-item[_ngcontent-%COMP%]   .meta-container[_ngcontent-%COMP%]   .uk-float-right[_ngcontent-%COMP%] {\n  float: right;\n}\n.news-content[_ngcontent-%COMP%]   .news-item[_ngcontent-%COMP%]   .meta-container[_ngcontent-%COMP%]   .tw-news-author[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n}\n.news-content[_ngcontent-%COMP%]   .news-item[_ngcontent-%COMP%]   .meta-container[_ngcontent-%COMP%]   .tw-news-author[_ngcontent-%COMP%]   .author-avatar[_ngcontent-%COMP%] {\n  float: left;\n}\n.news-content[_ngcontent-%COMP%]   .news-item[_ngcontent-%COMP%]   .meta-container[_ngcontent-%COMP%]   .tw-news-author[_ngcontent-%COMP%]   .author-info[_ngcontent-%COMP%] {\n  height: 46px;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n  padding-left: 15px;\n}\n.news-content[_ngcontent-%COMP%]   .news-item[_ngcontent-%COMP%]   .meta-container[_ngcontent-%COMP%]   .tw-news-author[_ngcontent-%COMP%]   .single-title-container[_ngcontent-%COMP%]   .meta-container[_ngcontent-%COMP%]   .tw-news-author[_ngcontent-%COMP%]   .author-info[_ngcontent-%COMP%]   .author-name[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n.news-content[_ngcontent-%COMP%]   .news-item[_ngcontent-%COMP%]   .meta-container[_ngcontent-%COMP%]   .tw-news-author[_ngcontent-%COMP%]   .author-name[_ngcontent-%COMP%] {\n  color: #333;\n  text-transform: uppercase;\n}\n.news-content[_ngcontent-%COMP%]   .news-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.news-content[_ngcontent-%COMP%]   .news-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding-top: 15px;\n  margin-bottom: 40px !important;\n}\n.news-content[_ngcontent-%COMP%]   .news-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: auto;\n}\n.news-content[_ngcontent-%COMP%]   .news-item[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 20px;\n}\n.news-content[_ngcontent-%COMP%]   .news-item[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib29yY2hpdHNvZ3RzYWlraGFuL0Rvd25sb2Fkcy93ZWJzYW5fZnJvbnQtbWFzdGVyL3NyYy9hcHAvcGFnZXMvbmV3cy9uZXdzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9uZXdzL25ld3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7QURBSTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFHQSxtQ0FBQTtFQUNBLGFBQUE7QUNFUjtBRERRO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FDR1o7QUREUTtFQUNJLGVBQUE7QUNHWjtBRERRO0VBQ0ksaUJBQUE7QUNHWjtBRERRO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0FDR1o7QURGWTtFQUNJLFdBQUE7QUNJaEI7QURBUTtFQUNJLFlBQUE7QUNFWjtBREFRO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNFWjtBRERZO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQ0doQjtBRERZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNHaEI7QURDSTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFHQSxtQ0FBQTtFQUNBLGFBQUE7QUNDUjtBREFRO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUNFWjtBREFRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FDRVo7QUREWTtFQUNJLFlBQUE7QUNHaEI7QUREWTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDR2hCO0FERmdCO0VBQ0ksV0FBQTtBQ0lwQjtBREZnQjtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNJcEI7QURGZ0I7RUFDSSxrQkFBQTtBQ0lwQjtBREZnQjtFQUNJLFdBQUE7RUFDQSx5QkFBQTtBQ0lwQjtBREFRO0VBQ0ksZUFBQTtBQ0VaO0FEQVE7RUFDSSxpQkFBQTtFQUNBLDhCQUFBO0FDRVo7QURBUTtFQUNJLFdBQUE7QUNFWjtBREFRO0VBTUksa0JBQUE7RUFDQSxtQkFBQTtBQ0haO0FESFk7RUFFSSxXQUFBO0VBQ0EsWUFBQTtBQ0loQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25ld3MvbmV3cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXdzLWNvbnRlbnR7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICAubmV3c19tZW51IHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDEyMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDNweCAzcHggOHB4IDBweCByZ2JhKDIwMCwyMDAsMjAwLDEpO1xuICAgICAgICAtbW96LWJveC1zaGFkb3c6IDNweCAzcHggOHB4IDBweCByZ2JhKDIwMCwyMDAsMjAwLDEpO1xuICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDhweCAwcHggcmdiYSgyMDAsMjAwLDIwMCwxKTtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgLnRpdGxle1xuICAgICAgICAgICAgY29sb3I6ICM1MDUwNTQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgfVxuICAgICAgICBzcGFue1xuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLm5ld19pbWd7XG4gICAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICBcbiAgICAgICAgaWZyYW1le1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIC5uZXdfdGV4dHtcbiAgICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA4MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwe1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5uZXdzLWl0ZW0ge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWluLWhlaWdodDogMTIwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogM3B4IDNweCA4cHggMHB4IHJnYmEoMjAwLDIwMCwyMDAsMSk7XG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogM3B4IDNweCA4cHggMHB4IHJnYmEoMjAwLDIwMCwyMDAsMSk7XG4gICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggOHB4IDBweCByZ2JhKDIwMCwyMDAsMjAwLDEpO1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAudGl0bGV7XG4gICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjJweDtcbiAgICAgICAgICAgIGNvbG9yOiAjNTA1MDU0O1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgfVxuICAgICAgICAubWV0YS1jb250YWluZXJ7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgICAgICAgICAudWstZmxvYXQtcmlnaHQge1xuICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50dy1uZXdzLWF1dGhvcntcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICAuYXV0aG9yLWF2YXRhciB7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYXV0aG9yLWluZm8ge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ2cHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuc2luZ2xlLXRpdGxlLWNvbnRhaW5lciAubWV0YS1jb250YWluZXIgLnR3LW5ld3MtYXV0aG9yIC5hdXRob3ItaW5mbyAuYXV0aG9yLW5hbWUge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5hdXRob3ItbmFtZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzcGFue1xuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4IWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgLmltZ3tcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4iLCIubmV3cy1jb250ZW50IHtcbiAgcGFkZGluZzogMjBweDtcbn1cbi5uZXdzLWNvbnRlbnQgLm5ld3NfbWVudSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAzcHggM3B4IDhweCAwcHggI2M4YzhjODtcbiAgLW1vei1ib3gtc2hhZG93OiAzcHggM3B4IDhweCAwcHggI2M4YzhjODtcbiAgYm94LXNoYWRvdzogM3B4IDNweCA4cHggMHB4ICNjOGM4Yzg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4ubmV3cy1jb250ZW50IC5uZXdzX21lbnUgLnRpdGxlIHtcbiAgY29sb3I6ICM1MDUwNTQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5uZXdzLWNvbnRlbnQgLm5ld3NfbWVudSBzcGFuIHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLm5ld3MtY29udGVudCAubmV3c19tZW51IHAge1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cbi5uZXdzLWNvbnRlbnQgLm5ld3NfbWVudSAubmV3X2ltZyB7XG4gIHdpZHRoOiA0MCU7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuLm5ld3MtY29udGVudCAubmV3c19tZW51IC5uZXdfaW1nIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm5ld3MtY29udGVudCAubmV3c19tZW51IGlmcmFtZSB7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5uZXdzLWNvbnRlbnQgLm5ld3NfbWVudSAubmV3X3RleHQge1xuICB3aWR0aDogNjAlO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG59XG4ubmV3cy1jb250ZW50IC5uZXdzX21lbnUgLm5ld190ZXh0IHNwYW4ge1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogODAlO1xufVxuLm5ld3MtY29udGVudCAubmV3c19tZW51IC5uZXdfdGV4dCBwIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLm5ld3MtY29udGVudCAubmV3cy1pdGVtIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDNweCAzcHggOHB4IDBweCAjYzhjOGM4O1xuICAtbW96LWJveC1zaGFkb3c6IDNweCAzcHggOHB4IDBweCAjYzhjOGM4O1xuICBib3gtc2hhZG93OiAzcHggM3B4IDhweCAwcHggI2M4YzhjODtcbiAgcGFkZGluZzogMjBweDtcbn1cbi5uZXdzLWNvbnRlbnQgLm5ld3MtaXRlbSAudGl0bGUge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW4tYm90dG9tOiAyMnB4O1xuICBjb2xvcjogIzUwNTA1NDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBsaW5lLWhlaWdodDogNDRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5uZXdzLWNvbnRlbnQgLm5ld3MtaXRlbSAubWV0YS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbi5uZXdzLWNvbnRlbnQgLm5ld3MtaXRlbSAubWV0YS1jb250YWluZXIgLnVrLWZsb2F0LXJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLm5ld3MtY29udGVudCAubmV3cy1pdGVtIC5tZXRhLWNvbnRhaW5lciAudHctbmV3cy1hdXRob3Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLm5ld3MtY29udGVudCAubmV3cy1pdGVtIC5tZXRhLWNvbnRhaW5lciAudHctbmV3cy1hdXRob3IgLmF1dGhvci1hdmF0YXIge1xuICBmbG9hdDogbGVmdDtcbn1cbi5uZXdzLWNvbnRlbnQgLm5ld3MtaXRlbSAubWV0YS1jb250YWluZXIgLnR3LW5ld3MtYXV0aG9yIC5hdXRob3ItaW5mbyB7XG4gIGhlaWdodDogNDZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG4ubmV3cy1jb250ZW50IC5uZXdzLWl0ZW0gLm1ldGEtY29udGFpbmVyIC50dy1uZXdzLWF1dGhvciAuc2luZ2xlLXRpdGxlLWNvbnRhaW5lciAubWV0YS1jb250YWluZXIgLnR3LW5ld3MtYXV0aG9yIC5hdXRob3ItaW5mbyAuYXV0aG9yLW5hbWUge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ubmV3cy1jb250ZW50IC5uZXdzLWl0ZW0gLm1ldGEtY29udGFpbmVyIC50dy1uZXdzLWF1dGhvciAuYXV0aG9yLW5hbWUge1xuICBjb2xvcjogIzMzMztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5uZXdzLWNvbnRlbnQgLm5ld3MtaXRlbSBzcGFuIHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLm5ld3MtY29udGVudCAubmV3cy1pdGVtIHAge1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweCAhaW1wb3J0YW50O1xufVxuLm5ld3MtY29udGVudCAubmV3cy1pdGVtIGltZyB7XG4gIHdpZHRoOiBhdXRvO1xufVxuLm5ld3MtY29udGVudCAubmV3cy1pdGVtIC5pbWcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ubmV3cy1jb250ZW50IC5uZXdzLWl0ZW0gLmltZyBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-news',
          templateUrl: './news.component.html',
          styleUrls: ['./news.component.scss']
        }]
      }], function () {
        return [{
          type: _services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/news/news.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/news/news.module.ts ***!
    \*******************************************/

  /*! exports provided: NewsModule */

  /***/
  function _src_app_pages_news_newsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsModule", function () {
      return NewsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _news_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./news.component */
    "./src/app/pages/news/news.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_modules_menu_menu_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/modules/menu/menu.module */
    "./src/app/modules/menu/menu.module.ts");
    /* harmony import */


    var _footer_footer_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../footer/footer.module */
    "./src/app/pages/footer/footer.module.ts");

    var routes = [{
      path: '',
      component: _news_component__WEBPACK_IMPORTED_MODULE_2__["NewsComponent"]
    }];

    var NewsModule = /*#__PURE__*/_createClass(function NewsModule() {
      _classCallCheck(this, NewsModule);
    });

    NewsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: NewsModule
    });
    NewsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function NewsModule_Factory(t) {
        return new (t || NewsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), src_app_modules_menu_menu_module__WEBPACK_IMPORTED_MODULE_4__["MenuModule"], _footer_footer_module__WEBPACK_IMPORTED_MODULE_5__["FooterModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NewsModule, {
        declarations: [_news_component__WEBPACK_IMPORTED_MODULE_2__["NewsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], src_app_modules_menu_menu_module__WEBPACK_IMPORTED_MODULE_4__["MenuModule"], _footer_footer_module__WEBPACK_IMPORTED_MODULE_5__["FooterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_news_component__WEBPACK_IMPORTED_MODULE_2__["NewsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), src_app_modules_menu_menu_module__WEBPACK_IMPORTED_MODULE_4__["MenuModule"], _footer_footer_module__WEBPACK_IMPORTED_MODULE_5__["FooterModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-news-news-module-es5.js.map