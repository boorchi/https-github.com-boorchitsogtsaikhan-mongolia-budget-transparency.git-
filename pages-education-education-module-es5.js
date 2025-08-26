function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-education-education-module"], {
  /***/
  "./src/app/pages/education/education.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/education/education.component.ts ***!
    \********************************************************/

  /*! exports provided: SafePipe, SafeResourcePipe, EducationComponent */

  /***/
  function _src_app_pages_education_educationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SafePipe", function () {
      return SafePipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SafeResourcePipe", function () {
      return SafeResourcePipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EducationComponent", function () {
      return EducationComponent;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _services_main_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/main.service */
    "./src/app/services/main.service.ts");
    /* harmony import */


    var _modules_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../modules/menu/menu.component */
    "./src/app/modules/menu/menu.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../footer/footer.component */
    "./src/app/pages/footer/footer.component.ts");

    function EducationComponent_div_3_iframe_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "iframe", 17);
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.trustedDashboardUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
      }
    }

    function EducationComponent_div_3_div_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EducationComponent_div_3_div_9_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var i_r5 = ctx.index;
          var new_r4 = ctx.$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r6.showVid(i_r5, new_r4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "safe");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "slice");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "slice");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var new_r4 = ctx.$implicit;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, new_r4.url), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](8, 6, new_r4.name, 0, 53));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](new_r4.publishDate);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](13, 10, ctx_r3.removeTags(new_r4.description), 0, 20));
      }
    }

    function EducationComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u0423\u043B\u0441\u044B\u043D \u0442\u04E9\u0441\u0432\u0438\u0439\u0433 \u044D\u043D\u0433\u0438\u0439\u043D, \u043E\u0439\u043B\u0433\u043E\u043C\u0436\u0442\u043E\u0439 \u0442\u0430\u0439\u043B\u0431\u0430\u0440\u043B\u0430\u0441\u0430\u043D \"\u0418\u0440\u0433\u044D\u0434\u0438\u0439\u043D \u0442\u04E9\u0441\u04E9\u0432-2018\" \u043D\u043E\u043C\u044B\u0433 \u0421\u0430\u043D\u0433\u0438\u0439\u043D \u044F\u0430\u043C\u043D\u0430\u0430\u0441 \u0430\u043D\u0445 \u0443\u0434\u0430\u0430 \u0431\u043E\u043B\u043E\u0432\u0441\u0440\u0443\u0443\u043B\u0430\u043D \u0433\u0430\u0440\u0433\u0430\u0441\u043D\u044B\u0433 \u0443\u0440\u044C\u0434 \u043C\u044D\u0434\u044D\u044D\u043B\u0436 \u0431\u0430\u0439\u0441\u0430\u043D. \u0422\u044D\u0433\u0432\u044D\u043B \u044D\u043D\u044D \u0443\u0434\u0430\u0430 \u0431\u0438\u0434 \u0442\u0443\u0441 \u043D\u043E\u043C\u043E\u043E\u0441 \u0445\u044D\u0441\u044D\u0433\u0447\u043B\u044D\u043D \u0432\u0438\u0434\u0435\u043E \u0446\u0443\u0432\u0440\u0430\u043B\u0430\u0430\u0440 \u0445\u04AF\u0440\u0433\u044D\u0445\u044D\u044D\u0440 \u0448\u0438\u0439\u0434\u043B\u044D\u044D. \u04E8\u043D\u04E9\u04E9\u0434\u04E9\u0440 \u0442\u04E9\u0441\u04E9\u0432 \u0433\u044D\u0436 \u044E\u0443 \u0431\u043E\u043B\u043E\u0445? \u0422\u04E9\u0441\u0432\u0438\u0439\u043D \u043E\u0440\u043B\u043E\u0433\u043E, \u0442\u04E9\u0441\u0432\u0438\u0439\u043D \u0437\u0430\u0440\u043B\u0430\u0433\u0430 \u0433\u044D\u0436 \u044E\u0443 \u0432\u044D? \u0422\u04E9\u0441\u0432\u0438\u0439\u043D \u0442\u044D\u043D\u0446\u044D\u043B, \u0442\u04E9\u0441\u0432\u0438\u0439\u043D \u0430\u0448\u0438\u0433, \u0442\u04E9\u0441\u0432\u0438\u0439\u043D \u0430\u043B\u0434\u0430\u0433\u0434\u0430\u043B \u0433\u044D\u0436 \u044E\u0443 \u0431\u043E\u043B\u043E\u0445? \u0437\u044D\u0440\u044D\u0433 \u043E\u043B\u043E\u043D \u0430\u0441\u0443\u0443\u043B\u0442\u044B\u043D\u0445\u0430\u0430 \u0445\u0430\u0440\u0438\u0443\u043B\u0442\u044B\u0433 \u043E\u043B\u0436 \u0430\u0432\u0430\u0430\u0440\u0430\u0439. \u0423\u043B\u0441\u044B\u043D \u0442\u04E9\u0441\u0432\u0438\u0439\u043D \u0442\u0430\u043B\u0430\u0430\u0440 \u043C\u044D\u0434\u043B\u044D\u0433\u044D\u044D \u0441\u0430\u0439\u0436\u0440\u0443\u0443\u043B\u0441\u043D\u0430\u0430\u0440 \u0438\u0440\u0433\u044D\u043D \u0442\u0430 \u0442\u04E9\u0441\u04E9\u0432\u0442 \u0442\u0430\u0432\u0438\u0445 \u0445\u044F\u043D\u0430\u043B\u0442, \u043E\u0440\u043E\u043B\u0446\u043E\u043E\u0433\u043E\u043E \u043D\u044D\u043C\u044D\u0433\u0434\u04AF\u04AF\u043B\u0436 \u0447\u0430\u0434\u0430\u0445 \u044E\u043C. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EducationComponent_div_3_iframe_7_Template, 1, 1, "iframe", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EducationComponent_div_3_div_9_Template, 14, 14, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.title, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.trustedDashboardUrl);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.newsVideo);
      }
    }

    function EducationComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EducationComponent_div_11_Template_a_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var i_r9 = ctx.index;
          var new_r8 = ctx.$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.showNews(i_r9, new_r8);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "safe");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "slice");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var new_r8 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, ctx_r1.fileUrl + new_r8.imageUrl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](7, 5, new_r8.name, 0, 70), " ...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](new_r8.publishDate);
      }
    }

    var SafePipe = /*#__PURE__*/function () {
      function SafePipe(sanitizer) {
        _classCallCheck(this, SafePipe);

        this.sanitizer = sanitizer;
      }

      return _createClass(SafePipe, [{
        key: "transform",
        value: function transform(url) {
          if (!url) return '';
          return this.sanitizer.bypassSecurityTrustUrl(url);
        }
      }]);
    }();

    SafePipe.ɵfac = function SafePipe_Factory(t) {
      return new (t || SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]));
    };

    SafePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "safe",
      type: SafePipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'safe'
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]
        }];
      }, null);
    })();

    var SafeResourcePipe = /*#__PURE__*/function () {
      function SafeResourcePipe(sanitizer) {
        _classCallCheck(this, SafeResourcePipe);

        this.sanitizer = sanitizer;
      }

      return _createClass(SafeResourcePipe, [{
        key: "transform",
        value: function transform(url) {
          if (!url) return '';
          return this.sanitizer.bypassSecurityTrustResourceUrl(url);
        }
      }]);
    }();

    SafeResourcePipe.ɵfac = function SafeResourcePipe_Factory(t) {
      return new (t || SafeResourcePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]));
    };

    SafeResourcePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "safeResource",
      type: SafeResourcePipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafeResourcePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'safeResource'
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]
        }];
      }, null);
    })();

    var EducationComponent = /*#__PURE__*/function () {
      function EducationComponent(mainService, route, router, sanitizer) {
        var _this = this;

        _classCallCheck(this, EducationComponent);

        this.mainService = mainService;
        this.route = route;
        this.router = router;
        this.sanitizer = sanitizer;
        this.typeVid = 2;
        this.typeImg = 1;
        this.typeUndes = '';
        this.typeTusuv = '';
        this.typeSudalgaa = '';
        this.typeyariltslaga = '';
        this.type = '';
        this.title = '';
        this.id = '';
        this.subType = '';
        this.news = [];
        this.newsVideo = [];
        this.thumbnails = [];
        this.newsImg = [];
        this.urlName = '';
        this.video = '';
        this.image = '';
        this.params = {
          year: _services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].year,
          category: _services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].category
        };
        this.fileUrl = _services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].PATH; // Initialize with empty safe URL to prevent undefined errors

        this.trustedDashboardUrl = this.sanitizer.bypassSecurityTrustResourceUrl('');
        router.events.subscribe(function (val) {
          if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
            _this.urlName = val.url;
          }
        });
        this.route.queryParams.subscribe(function (params) {
          _this.subType = params['subType'];
          _this.id = params['id'];

          _this.getNewsVideo(_this.subType, _this.typeVid, null);

          _this.getNewsImg(_this.subType, _this.typeImg, null);

          _this.getVideoByid(_this.id);

          _this.getTitle(_this.subType);
        });
      }

      return _createClass(EducationComponent, [{
        key: "getImagePath",
        value: function getImagePath(imagePath) {
          return _services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].getImagePath(imagePath);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "removeTags",
        value: function removeTags(content) {
          if (content) {
            var plainText = content.replace(/<[^>]*>/g, '');
            return plainText;
          }
        }
      }, {
        key: "getNews",
        value: function getNews(type) {
          var _this2 = this;

          var limit = 4;
          this.mainService.baseGet(_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].HOST + _services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].NEWS, {
            type: type,
            limit: limit
          }, true).then(function (result) {
            _this2.news = result;
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }, {
        key: "showVid",
        value: function showVid(index, code) {
          this.vid = code;
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
        key: "getTitle",
        value: function getTitle(subType) {
          this.showType = subType;

          if (subType == 1) {
            this.title = "<b>Төсвийн тухай үндсэн ойлголт</b>";
          } else if (subType == 2) {
            this.title = "<b>Иргэдийн төсвийн тухай</b>";
          } else if (subType == 3) {
            this.title = "<b>Төсвийн талаар судалгааны ажил</b>";
          } else if (subType == 4) {
            this.title = "<b>Төсөвтэй xолбоотой ярилцлага</b>";
          } else {
            this.title = "<b>Иргэдийн боловсролд</b>";
          }
        }
      }, {
        key: "transform",
        value: function transform(url) {
          return this.sanitizer.bypassSecurityTrustResourceUrl(url);
        }
      }, {
        key: "getVideoByid",
        value: function getVideoByid(id) {
          var _this3 = this;

          if (id) {
            this.mainService.baseGet(_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].HOST + _services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].NEWSBYID, {
              id: id
            }, true).then(function (result) {
              if (result && result.url) {
                _this3.trustedDashboardUrl = _this3.sanitizer.bypassSecurityTrustResourceUrl(result.url);
              }
            })["catch"](function (error) {
              console.log(error);
              _this3.trustedDashboardUrl = _this3.sanitizer.bypassSecurityTrustResourceUrl('');
            });
          } else {
            id = 1;
            this.mainService.baseGet(_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].HOST + _services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].NEWSBYID, {
              id: id
            }, true).then(function (result) {
              if (result && result.url) {
                _this3.trustedDashboardUrl = _this3.sanitizer.bypassSecurityTrustResourceUrl(result.url);
              }
            })["catch"](function (error) {
              console.log(error);
              _this3.trustedDashboardUrl = _this3.sanitizer.bypassSecurityTrustResourceUrl('');
            });
          }
        }
      }, {
        key: "getNewsVideo",
        value: function getNewsVideo(subType, type, limit) {
          var _this4 = this;

          type = this.typeVid;

          if (subType) {
            this.mainService.baseGet(_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].HOST + _services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].NEWSSUB, {
              subType: subType,
              type: type
            }, true).then(function (result) {
              _this4.newsVideo = result.reverse();
              result.forEach(function (item) {
                _this4.videoByTumbS = item.url;

                var tumbl = _this4.videoByTumbS.split('/');

                var tumbl_img = tumbl[4];
                _this4.thumbnail = 'https://img.youtube.com/vi/' + tumbl_img + '/hqdefault.jpg';
                item.url = _this4.thumbnail;
              });
            })["catch"](function (error) {
              console.log(error);
            });
          } else {
            subType = 1;
            this.mainService.baseGet(_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].HOST + _services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].NEWSSUB, {
              subType: subType,
              type: type
            }, true).then(function (result) {
              _this4.newsVideo = result.reverse();
              result.forEach(function (item) {
                _this4.videoByTumbS = item.url;

                var tumbl = _this4.videoByTumbS.split('/');

                var tumbl_img = tumbl[4];
                _this4.thumbnail = 'https://img.youtube.com/vi/' + tumbl_img + '/hqdefault.jpg';
                item.url = _this4.thumbnail;
              });
            })["catch"](function (error) {
              console.log(error);
            });
          }
        }
      }, {
        key: "getNewsImg",
        value: function getNewsImg(subType, type, limit) {
          var _this5 = this;

          type = this.typeImg;
          subType = 1;

          if (subType) {
            this.mainService.baseGet(_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].HOST + _services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].NEWSSUB, {
              subType: subType,
              type: type
            }, true).then(function (result) {
              _this5.newsImg = result.reverse();
            })["catch"](function (error) {
              console.log(error);
            });
          } else {
            subType = 1;
            this.mainService.baseGet(_services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].HOST + _services_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].NEWSSUB, {
              subType: subType,
              type: type
            }, true).then(function (result) {
              _this5.newsImg = result.reverse();
            })["catch"](function (error) {
              console.log(error);
            });
          }
        }
      }, {
        key: "showNews",
        value: function showNews(index, code) {
          var url_data = this.urlName.split('?');
          var url = "news";
          var param = '';

          if (url_data.length > 1) {
            param = url_data[0];
          }

          var query = this.setQueryParam(param, "id", code.id);
          this.router.navigate([url], {
            queryParams: query
          });
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

    EducationComponent.ɵfac = function EducationComponent_Factory(t) {
      return new (t || EducationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]));
    };

    EducationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EducationComponent,
      selectors: [["app-education"]],
      decls: 13,
      vars: 3,
      consts: [[1, "budget-outlet"], [3, "menuType"], [1, "budget-body"], ["class", "video-content", 4, "ngIf"], [1, "news-content"], [1, "title-hd", "center"], [1, "desc", "center"], [1, "row"], ["class", "col-md-3", 4, "ngFor", "ngForOf"], [1, "video-content"], [1, "title-hd", "center", 3, "innerHTML"], [1, "center", "desc"], [1, "video-item"], [1, "col-md-8"], ["width", "100%", "height", "100%", "frameborder", "0", 3, "src", 4, "ngIf"], [1, "col-md-4", "news-scroll"], ["class", "top-news", 3, "click", 4, "ngFor", "ngForOf"], ["width", "100%", "height", "100%", "frameborder", "0", 3, "src"], [1, "top-news", 3, "click"], [1, "row", "video"], [1, "col-md-4", "imgs"], ["width", "100%", "height", "90px", "alt", "", 3, "src"], [1, "title"], [1, "col-md-3"], [1, "news-item"], ["routerLink", "/news", 1, "newslink", 3, "click"], [3, "src"], [1, "tit"]],
      template: function EducationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "module-menu", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EducationComponent_div_3_Template, 10, 3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0418\u0440\u0433\u044D\u0434\u0438\u0439\u043D \u0442\u04E9\u0441\u0432\u0438\u0439\u043D \u0442\u0443\u0445\u0430\u0439");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u0421\u0430\u043D\u0433\u0438\u0439\u043D \u044F\u0430\u043C\u043D\u044B \u0441\u0430\u043D\u0430\u0430\u0447\u0438\u043B\u0433\u0430\u0430\u0440 \u0442\u04E9\u0441\u0432\u0438\u0439\u043D \u0438\u043B \u0442\u043E\u0434 \u0431\u0430\u0439\u0434\u043B\u044B\u0433 \u043D\u044D\u043C\u044D\u0433\u0434\u04AF\u04AF\u043B\u044D\u0445, \u0438\u0440\u0433\u044D\u0434\u0438\u0439\u043D \u0442\u04E9\u0441\u0432\u0438\u0439\u043D \u0442\u0443\u0445\u0430\u0439 \u043C\u044D\u0434\u043B\u044D\u0433 \u043C\u044D\u0434\u044D\u044D\u043B\u043B\u0438\u0439\u0433 \u0442\u044D\u043B\u044D\u0445\u0438\u0439\u0433 \u0437\u043E\u0440\u0438\u043B\u0433\u043E\u043E \u0431\u043E\u043B\u0433\u043E\u043D \u0441\u04AF\u04AF\u043B\u0438\u0439\u043D \u0436\u0438\u043B\u04AF\u04AF\u0434\u044D\u0434 \u0438\u0440\u0433\u044D\u043D \u0431\u04AF\u0440\u0434 \u043E\u0439\u043B\u0433\u043E\u043C\u0436\u0442\u043E\u0439 \u0431\u0430\u0439\u0434\u043B\u0430\u0430\u0440 \u201C\u0418\u0440\u0433\u044D\u0434\u0438\u0439\u043D \u0442\u04E9\u0441\u04E9\u0432\u201D \u0442\u043E\u0432\u0445\u0438\u043C\u043E\u043B \u0431\u043E\u043B\u043E\u043D \u0442\u04E9\u0441\u0432\u0438\u0439\u043D \u0433\u04AF\u0439\u0446\u044D\u0442\u0433\u044D\u043B\u0438\u0439\u043D \u043C\u044D\u0434\u044D\u044D\u0433 \u0446\u0430\u0445\u0438\u043C \u0445\u044D\u043B\u0431\u044D\u0440\u044D\u044D\u0440 \u0431\u044D\u043B\u0442\u0433\u044D\u043D \u0445\u04AF\u0440\u0433\u044D\u0436 \u0431\u0430\u0439\u0433\u0430\u0430 \u0431\u0438\u043B\u044D\u044D. \u041C\u043E\u043D\u0433\u043E\u043B \u0423\u043B\u0441\u044B\u043D \u0417\u0430\u0441\u0433\u0438\u0439\u043D \u0433\u0430\u0437\u0430\u0440, \u0421\u0430\u043D\u0433\u0438\u0439\u043D \u044F\u0430\u043C \u0442\u04E9\u0441\u04E9\u0432, \u0441\u0430\u043D\u0445\u04AF\u04AF, \u043D\u0438\u0439\u0433\u043C\u0438\u0439\u043D \u0445\u0430\u0440\u0438\u043B\u0446\u0430\u0430\u043D\u044B \u0431\u04AF\u0445\u0438\u0439 \u043B \u0445\u0443\u0443\u043B\u0438\u0439\u043D \u0445\u04AF\u0440\u044D\u044D\u043D\u0434 \u044F\u043C\u0430\u0440 \u0437\u043E\u0440\u0438\u043B\u0442\u044B\u0433 \u0448\u0438\u0439\u0434\u0432\u044D\u0440\u043B\u044D\u0436 \u044F\u043C\u0430\u0440 \u04AF\u0440 \u0434\u04AF\u043D\u0434 \u0445\u04AF\u0440\u044D\u0445 \u0447\u0438\u0433\u043B\u044D\u043B\u044D\u044D\u0440 \u0431\u043E\u043B\u043E\u0432\u0441\u0440\u0443\u0443\u043B\u0436 \u0423\u043B\u0441\u044B\u043D \u0418\u0445 \u0425\u0443\u0440\u0430\u043B\u0434 \u04E9\u0440\u0433\u04E9\u043D \u0431\u0430\u0440\u044C\u0441\u0430\u043D 2020 \u043E\u043D\u044B \u0442\u04E9\u0441\u0432\u0438\u0439\u043D \u0442\u04E9\u0441\u043B\u0438\u0439\u0433 \u0438\u0440\u0433\u044D\u043D \u0442\u0430\u043D\u0434 \u0445\u04AF\u0440\u0433\u044D\u0445 \u0437\u043E\u0440\u0438\u043B\u0433\u043E\u043E\u0440 \u044D\u043D\u044D\u0445\u04AF\u04AF \u0442\u043E\u0432\u0445\u0438\u043C\u043B\u044B\u0433 \u0431\u044D\u043B\u0442\u0433\u044D\u043D \u0442\u0430\u043D\u0438\u043B\u0446\u0443\u0443\u043B\u0436 \u0431\u0430\u0439\u043D\u0430. \u042D\u043D\u044D\u0445\u04AF\u04AF \u0442\u043E\u0432\u0445\u0438\u043C\u043E\u043B\u0442\u043E\u0439 \u0442\u0430\u043D\u0438\u043B\u0446\u0441\u0430\u043D\u0430\u0430\u0440 \u0418\u0440\u0433\u044D\u043D \u0422\u0430 \u0438\u0440\u044D\u0445 \u043E\u043D\u0434 \u0443\u043B\u0441 \u043E\u0440\u043D\u044B \u044D\u0434\u0438\u0439\u043D \u0437\u0430\u0441\u0433\u0438\u0439\u043D \u0447\u0430\u0434\u0430\u0432\u0445 \u0445\u044D\u0440\u0445\u044D\u043D \u0441\u0430\u0439\u0436\u0440\u0430\u0445, \u0442\u04E9\u0441\u0432\u0438\u0439\u043D \u043E\u0440\u043B\u043E\u0433\u044B\u043D \u0448\u0438\u043D\u044D\u0447\u043B\u044D\u043B\u0438\u0439\u043D \u0431\u043E\u0434\u043B\u043E\u0433\u044B\u0433 \u0445\u044D\u0440\u044D\u0433\u0436\u04AF\u04AF\u043B\u0441\u043D\u044D\u044D\u0440 \u043E\u0440\u043B\u043E\u0433\u043E \u0445\u044D\u0440\u0445\u044D\u043D \u0442\u043E\u0433\u0442\u0432\u043E\u0440\u0442\u043E\u0439 \u04E9\u0441\u04E9\u0445, \u043D\u0438\u0439\u0433\u043C\u0438\u0439\u043D \u0441\u0443\u0443\u0440\u044C \u04AF\u0439\u043B\u0447\u0438\u043B\u0433\u044D\u044D\u043D\u0438\u0439 \u0447\u0430\u043D\u0430\u0440, \u0445\u04AF\u0440\u0442\u044D\u044D\u043C\u0436, \u0438\u0440\u0433\u044D\u0434\u0438\u0439\u043D \u0431\u043E\u0434\u0438\u0442 \u043E\u0440\u043B\u043E\u0433\u043E \u0445\u044D\u0440\u0445\u044D\u043D \u043D\u044D\u043C\u044D\u0433\u0434\u044D\u0445, \u0443\u043B\u0441 \u043E\u0440\u043D\u044B \u0445\u04E9\u0433\u0436\u0438\u043B \u044F\u043C\u0430\u0440 \u0442\u04AF\u0432\u0448\u0438\u043D\u0434 \u0445\u04AF\u0440\u044D\u0445 \u0447\u0438\u0433\u043B\u044D\u043B\u044D\u044D\u0440 \u0431\u043E\u0434\u0438\u0442 \u043C\u044D\u0434\u044D\u044D\u043B\u043B\u0438\u0439\u0433 \u0430\u0432\u043D\u0430 \u0433\u044D\uFFFD\uFFFD\u044D\u0433\u0442 \u0438\u0442\u0433\u044D\u043B\u0442\u044D\u0439 \u0431\u0430\u0439\u043D\u0430. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, EducationComponent_div_11_Template, 10, 9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-footer");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("menuType", "education");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showType == 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.newsImg);
        }
      },
      directives: [_modules_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      pipes: [SafePipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__["SlicePipe"]],
      styles: [".title-hd[_ngcontent-%COMP%] {\n  color: #0081ff;\n  font-weight: 400;\n  text-transform: uppercase;\n  font-size: 20px;\n  padding: 50px;\n}\n.title-hd[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #0081ff;\n  font-size: 20px !important;\n}\nspan[_ngcontent-%COMP%] {\n  font-size: small;\n  font-weight: 400;\n}\n.news-content[_ngcontent-%COMP%] {\n  padding: 0px 30px 30px 30px;\n}\n.news-content[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  padding-bottom: 50px;\n  text-align: justify;\n}\n.video-content[_ngcontent-%COMP%] {\n  padding: 0px 30px 30px 30px;\n}\n.video-content[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  padding-bottom: 50px;\n  text-align: justify;\n}\n.video-item[_ngcontent-%COMP%] {\n  background: #fff;\n  width: 100%;\n  min-height: 120px;\n  border-radius: 10px;\n  box-shadow: 3px 3px 8px 0px #c8c8c8;\n  padding: 20px;\n}\n.video-item[_ngcontent-%COMP%]   .video[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.video-item[_ngcontent-%COMP%]   .video[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 15px;\n}\n.video-item[_ngcontent-%COMP%]   .video[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 400;\n}\n.video-item[_ngcontent-%COMP%]   .video[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding-top: 5px;\n  font-size: 12px;\n  margin-bottom: 0 !important;\n}\n.news-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  background: #fff;\n  width: 100%;\n  min-height: 120px;\n  height: 280px;\n  border-radius: 10px;\n  box-shadow: 3px 3px 8px 0px #c8c8c8;\n  padding: 20px;\n  margin-bottom: 20px;\n}\n.news-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.news-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 156px;\n  width: 100%;\n}\n.news-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  background-color: rgba(21, 21, 21, 0.2);\n  opacity: 0.8;\n}\n.news-item[_ngcontent-%COMP%]   .newslink[_ngcontent-%COMP%]   .tit[_ngcontent-%COMP%] {\n  font-weight: 700;\n  padding-top: 5px;\n  font-size: 15px;\n  color: #505054;\n}\n.news-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  bottom: 35px;\n  position: absolute;\n  color: #505054;\n}\n.news-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding-top: 15px;\n  font-size: 12px;\n  color: #505054;\n  margin-bottom: 0 !important;\n}\nimg[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.image[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.badge[_ngcontent-%COMP%] {\n  font-weight: 400;\n  margin-right: 10px;\n}\n.top-news[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.news-scroll[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  overflow-x: hidden;\n  max-height: calc(100vh - 300px);\n}\n@media screen and (max-width: 1024px) {\n  .title-hd[_ngcontent-%COMP%] {\n    color: #0081ff;\n    font-weight: 400;\n    text-transform: uppercase;\n    font-size: 20px;\n    padding: 50px;\n  }\n  .title-hd[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n    color: #0081ff;\n    font-size: 20px !important;\n  }\n\n  span[_ngcontent-%COMP%] {\n    font-size: small;\n    font-weight: 400;\n  }\n\n  .news-content[_ngcontent-%COMP%] {\n    padding: 0px 30px 30px 30px;\n  }\n  .news-content[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n    padding-bottom: 50px;\n    text-align: justify;\n  }\n\n  .video-content[_ngcontent-%COMP%] {\n    padding: 0px 30px 30px 30px;\n  }\n  .video-content[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n    padding-bottom: 50px;\n    text-align: justify;\n  }\n\n  .video-item[_ngcontent-%COMP%] {\n    background: #fff;\n    width: 100%;\n    min-height: 120px;\n    border-radius: 10px;\n    box-shadow: 3px 3px 8px 0px #c8c8c8;\n    padding: 20px;\n  }\n  .video-item[_ngcontent-%COMP%]   .video[_ngcontent-%COMP%] {\n    cursor: pointer;\n  }\n  .video-item[_ngcontent-%COMP%]   .video[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-weight: 600;\n    font-size: 12px;\n  }\n  .video-item[_ngcontent-%COMP%]   .video[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 8px;\n    font-weight: 400;\n  }\n  .video-item[_ngcontent-%COMP%]   .video[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    padding-top: 5px;\n    font-size: 10px;\n    margin-bottom: 0 !important;\n  }\n\n  .news-item[_ngcontent-%COMP%] {\n    cursor: pointer;\n    background: #fff;\n    width: 100%;\n    min-height: 120px;\n    height: 280px;\n    border-radius: 10px;\n    box-shadow: 3px 3px 8px 0px #c8c8c8;\n    padding: 20px;\n    margin-bottom: 20px;\n  }\n  .news-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    text-decoration: none;\n  }\n  .news-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 156px;\n    width: 100%;\n  }\n  .news-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n    background-color: rgba(21, 21, 21, 0.2);\n    opacity: 0.8;\n  }\n  .news-item[_ngcontent-%COMP%]   .newslink[_ngcontent-%COMP%]   .tit[_ngcontent-%COMP%] {\n    font-weight: 700;\n    padding-top: 5px;\n    font-size: 15px;\n    color: #505054;\n  }\n  .news-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 13px;\n    font-weight: 500;\n    bottom: 35px;\n    position: absolute;\n    color: #505054;\n  }\n  .news-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    padding-top: 15px;\n    font-size: 12px;\n    color: #505054;\n    margin-bottom: 0 !important;\n  }\n\n  img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .image[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n\n  .badge[_ngcontent-%COMP%] {\n    font-weight: 400;\n    margin-right: 10px;\n  }\n\n  .top-news[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n\n  .news-scroll[_ngcontent-%COMP%] {\n    overflow-y: auto;\n    overflow-x: hidden;\n    max-height: calc(100vh - 300px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ib29yY2hpdHNvZ3RzYWlraGFuL0Rvd25sb2Fkcy93ZWJzYW5fZnJvbnQtbWFzdGVyL3NyYy9hcHAvcGFnZXMvZWR1Y2F0aW9uL2VkdWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZWR1Y2F0aW9uL2VkdWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNDSjtBREFJO0VBQ0ksY0FBQTtFQUNBLDBCQUFBO0FDRVI7QURFQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENBO0VBRUksMkJBQUE7QUNDSjtBREFJO0VBR0ksb0JBQUE7RUFFQSxtQkFBQTtBQ0RSO0FESUE7RUFTSSwyQkFBQTtBQ1RKO0FERUk7RUFHSSxvQkFBQTtFQUVBLG1CQUFBO0FDSFI7QURPQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFHQSxtQ0FBQTtFQUNBLGFBQUE7QUNKSjtBREtJO0VBQ0ksZUFBQTtBQ0hSO0FESVE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUNGWjtBREtRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDSFo7QURLUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0FDSFo7QURRQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUdBLG1DQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDTEo7QURNSTtFQUNJLHFCQUFBO0FDSlI7QURLUTtFQUNJLGFBQUE7RUFDQSxXQUFBO0FDSFo7QURLUTtFQUNJLHVDQUFBO0VBQ0EsWUFBQTtBQ0haO0FET1E7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNMWjtBRFFJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ05SO0FEUUk7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFFQSxjQUFBO0VBQ0EsMkJBQUE7QUNQUjtBRFdBO0VBQ0ksV0FBQTtBQ1JKO0FEVUE7RUFDSSxrQkFBQTtBQ1BKO0FEU0E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FDTko7QURRQTtFQUNJLG1CQUFBO0FDTEo7QURPQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtBQ0pKO0FEVUE7RUFFQTtJQUNJLGNBQUE7SUFDQSxnQkFBQTtJQUNBLHlCQUFBO0lBQ0EsZUFBQTtJQUNBLGFBQUE7RUNSRjtFRFNFO0lBQ0ksY0FBQTtJQUNBLDBCQUFBO0VDUE47O0VEV0Y7SUFDSSxnQkFBQTtJQUNBLGdCQUFBO0VDUkY7O0VEVUY7SUFFSSwyQkFBQTtFQ1JGO0VEU0U7SUFHSSxvQkFBQTtJQUVBLG1CQUFBO0VDVk47O0VEYUY7SUFTSSwyQkFBQTtFQ2xCRjtFRFdFO0lBR0ksb0JBQUE7SUFFQSxtQkFBQTtFQ1pOOztFRGlCRjtJQUNJLGdCQUFBO0lBQ0EsV0FBQTtJQUNBLGlCQUFBO0lBQ0EsbUJBQUE7SUFHQSxtQ0FBQTtJQUNBLGFBQUE7RUNkRjtFRGVFO0lBQ0ksZUFBQTtFQ2JOO0VEY007SUFDSSxnQkFBQTtJQUNBLGVBQUE7RUNaVjtFRGVNO0lBQ0ksY0FBQTtJQUNBLGdCQUFBO0VDYlY7RURlTTtJQUNJLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLDJCQUFBO0VDYlY7O0VEa0JGO0lBQ0ksZUFBQTtJQUNBLGdCQUFBO0lBQ0EsV0FBQTtJQUNBLGlCQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBR0EsbUNBQUE7SUFDQSxhQUFBO0lBQ0EsbUJBQUE7RUNmRjtFRGdCRTtJQUNJLHFCQUFBO0VDZE47RURlTTtJQUNJLGFBQUE7SUFDQSxXQUFBO0VDYlY7RURlTTtJQUNJLHVDQUFBO0lBQ0EsWUFBQTtFQ2JWO0VEaUJNO0lBQ0ksZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7SUFDQSxjQUFBO0VDZlY7RURrQkU7SUFDSSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxjQUFBO0VDaEJOO0VEa0JFO0lBQ0ksaUJBQUE7SUFDQSxlQUFBO0lBRUEsY0FBQTtJQUNBLDJCQUFBO0VDakJOOztFRHFCRjtJQUNJLFdBQUE7RUNsQkY7O0VEb0JGO0lBQ0ksa0JBQUE7RUNqQkY7O0VEbUJGO0lBQ0ksZ0JBQUE7SUFDQSxrQkFBQTtFQ2hCRjs7RURrQkY7SUFDSSxtQkFBQTtFQ2ZGOztFRGlCRjtJQUNJLGdCQUFBO0lBQ0Esa0JBQUE7SUFDQSwrQkFBQTtFQ2RGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9lZHVjYXRpb24vZWR1Y2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlLWhkIHtcbiAgICBjb2xvcjogIzAwODFmZjtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBhZGRpbmc6IDUwcHg7XG4gICAgYiB7XG4gICAgICAgIGNvbG9yOiAjMDA4MWZmO1xuICAgICAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbiAgICB9XG59XG5cbnNwYW4ge1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5uZXdzLWNvbnRlbnR7XG4gICAgLy8gbWFyZ2luLWxlZnQ6IDMyMHB4O1xuICAgIHBhZGRpbmc6IDBweCAzMHB4IDMwcHggMzBweDtcbiAgICAuZGVzY3tcbiAgICAgICAgLy8gcGFkZGluZy1sZWZ0OjUwcHg7XG4gICAgICAgIC8vIHBhZGRpbmctcmlnaHQ6NTBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206NTBweDtcbiAgICAgICAgLy8gd2lkdGg6IDcwJTtcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICB9XG59XG4udmlkZW8tY29udGVudHtcbiAgICAvLyBtYXJnaW4tbGVmdDogMzIwcHg7XG4gICAgLmRlc2N7XG4gICAgICAgIC8vIHBhZGRpbmctbGVmdDo1MHB4O1xuICAgICAgICAvLyBwYWRkaW5nLXJpZ2h0OjUwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOjUwcHg7XG4gICAgICAgIC8vIHdpZHRoOiA3MCU7XG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgfVxuICAgIHBhZGRpbmc6IDBweCAgMzBweCAzMHB4IDMwcHg7XG59XG4udmlkZW8taXRlbXtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAzcHggM3B4IDhweCAwcHggcmdiYSgyMDAsMjAwLDIwMCwxKTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDNweCAzcHggOHB4IDBweCByZ2JhKDIwMCwyMDAsMjAwLDEpO1xuICAgIGJveC1zaGFkb3c6IDNweCAzcHggOHB4IDBweCByZ2JhKDIwMCwyMDAsMjAwLDEpO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgLnZpZGVvIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgc3BhbntcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDsgXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b20gOjAgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLm5ld3MtaXRlbXtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMjBweDtcbiAgICBoZWlnaHQ6IDI4MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAzcHggM3B4IDhweCAwcHggcmdiYSgyMDAsMjAwLDIwMCwxKTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDNweCAzcHggOHB4IDBweCByZ2JhKDIwMCwyMDAsMjAwLDEpO1xuICAgIGJveC1zaGFkb3c6IDNweCAzcHggOHB4IDBweCByZ2JhKDIwMCwyMDAsMjAwLDEpO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBhe1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIGhlaWdodDogMTU2cHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBpbWc6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMSwgMjEsIDIxLCAwLjIpO1xuICAgICAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5uZXdzbGluayB7XG4gICAgICAgIC50aXR7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgIGNvbG9yOiAjNTA1MDU0OyBcbiAgICAgICAgfSAgICAgICBcbiAgICB9XG4gICAgc3BhbntcbiAgICAgICAgZm9udC1zaXplOiAxM3B4OyBcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgYm90dG9tOiAzNXB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGNvbG9yOiAjNTA1MDU0OyBcbiAgICB9XG4gICAgcCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIFxuICAgICAgICBjb2xvcjogIzUwNTA1NDsgXG4gICAgICAgIG1hcmdpbi1ib3R0b20gOjAgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbmltZ3tcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5pbWFnZXtcbiAgICB0ZXh0LWFsaWduOiAgY2VudGVyO1xufVxuLmJhZGdle1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLnRvcC1uZXdze1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ubmV3cy1zY3JvbGwge1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAzMDBweCk7IC8vIEFkanVzdCAzMDBweCB0byBoZWFkZXIrZm9vdGVyK3BhZGRpbmdcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTM2NnB4KSB7XG5cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuXG4udGl0bGUtaGQge1xuICAgIGNvbG9yOiAjMDA4MWZmO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcGFkZGluZzogNTBweDtcbiAgICBiIHtcbiAgICAgICAgY29sb3I6ICMwMDgxZmY7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuc3BhbiB7XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuLm5ld3MtY29udGVudHtcbiAgICAvLyBtYXJnaW4tbGVmdDogMzIwcHg7XG4gICAgcGFkZGluZzogMHB4IDMwcHggMzBweCAzMHB4O1xuICAgIC5kZXNje1xuICAgICAgICAvLyBwYWRkaW5nLWxlZnQ6NTBweDtcbiAgICAgICAgLy8gcGFkZGluZy1yaWdodDo1MHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTo1MHB4O1xuICAgICAgICAvLyB3aWR0aDogNzAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIH1cbn1cbi52aWRlby1jb250ZW50e1xuICAgIC8vIG1hcmdpbi1sZWZ0OiAzMjBweDtcbiAgICAuZGVzY3tcbiAgICAgICAgLy8gcGFkZGluZy1sZWZ0OjUwcHg7XG4gICAgICAgIC8vIHBhZGRpbmctcmlnaHQ6NTBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206NTBweDtcbiAgICAgICAgLy8gd2lkdGg6IDcwJTtcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICB9XG4gICAgcGFkZGluZzogMHB4ICAzMHB4IDMwcHggMzBweDtcbn1cblxuLnZpZGVvLWl0ZW17XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogM3B4IDNweCA4cHggMHB4IHJnYmEoMjAwLDIwMCwyMDAsMSk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAzcHggM3B4IDhweCAwcHggcmdiYSgyMDAsMjAwLDIwMCwxKTtcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDhweCAwcHggcmdiYSgyMDAsMjAwLDIwMCwxKTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIC52aWRlbyB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHNwYW57XG4gICAgICAgICAgICBmb250LXNpemU6IDhweDsgXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b20gOjAgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLm5ld3MtaXRlbXtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMjBweDtcbiAgICBoZWlnaHQ6IDI4MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAzcHggM3B4IDhweCAwcHggcmdiYSgyMDAsMjAwLDIwMCwxKTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDNweCAzcHggOHB4IDBweCByZ2JhKDIwMCwyMDAsMjAwLDEpO1xuICAgIGJveC1zaGFkb3c6IDNweCAzcHggOHB4IDBweCByZ2JhKDIwMCwyMDAsMjAwLDEpO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBhe1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIGhlaWdodDogMTU2cHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBpbWc6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMSwgMjEsIDIxLCAwLjIpO1xuICAgICAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5uZXdzbGluayB7XG4gICAgICAgIC50aXR7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgIGNvbG9yOiAjNTA1MDU0OyBcbiAgICAgICAgfSAgICAgICBcbiAgICB9XG4gICAgc3BhbntcbiAgICAgICAgZm9udC1zaXplOiAxM3B4OyBcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgYm90dG9tOiAzNXB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGNvbG9yOiAjNTA1MDU0OyBcbiAgICB9XG4gICAgcCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIFxuICAgICAgICBjb2xvcjogIzUwNTA1NDsgXG4gICAgICAgIG1hcmdpbi1ib3R0b20gOjAgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbmltZ3tcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5pbWFnZXtcbiAgICB0ZXh0LWFsaWduOiAgY2VudGVyO1xufVxuLmJhZGdle1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLnRvcC1uZXdze1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ubmV3cy1zY3JvbGwge1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAzMDBweCk7IC8vIEFkanVzdCAzMDBweCB0byBoZWFkZXIrZm9vdGVyK3BhZGRpbmdcbn1cbn0iLCIudGl0bGUtaGQge1xuICBjb2xvcjogIzAwODFmZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nOiA1MHB4O1xufVxuLnRpdGxlLWhkIGIge1xuICBjb2xvcjogIzAwODFmZjtcbiAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbnNwYW4ge1xuICBmb250LXNpemU6IHNtYWxsO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4ubmV3cy1jb250ZW50IHtcbiAgcGFkZGluZzogMHB4IDMwcHggMzBweCAzMHB4O1xufVxuLm5ld3MtY29udGVudCAuZGVzYyB7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4udmlkZW8tY29udGVudCB7XG4gIHBhZGRpbmc6IDBweCAzMHB4IDMwcHggMzBweDtcbn1cbi52aWRlby1jb250ZW50IC5kZXNjIHtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi52aWRlby1pdGVtIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDNweCAzcHggOHB4IDBweCAjYzhjOGM4O1xuICAtbW96LWJveC1zaGFkb3c6IDNweCAzcHggOHB4IDBweCAjYzhjOGM4O1xuICBib3gtc2hhZG93OiAzcHggM3B4IDhweCAwcHggI2M4YzhjODtcbiAgcGFkZGluZzogMjBweDtcbn1cbi52aWRlby1pdGVtIC52aWRlbyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi52aWRlby1pdGVtIC52aWRlbyAudGl0bGUge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE1cHg7XG59XG4udmlkZW8taXRlbSAudmlkZW8gc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi52aWRlby1pdGVtIC52aWRlbyBwIHtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5uZXdzLWl0ZW0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMjBweDtcbiAgaGVpZ2h0OiAyODBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAzcHggM3B4IDhweCAwcHggI2M4YzhjODtcbiAgLW1vei1ib3gtc2hhZG93OiAzcHggM3B4IDhweCAwcHggI2M4YzhjODtcbiAgYm94LXNoYWRvdzogM3B4IDNweCA4cHggMHB4ICNjOGM4Yzg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ubmV3cy1pdGVtIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ubmV3cy1pdGVtIGEgaW1nIHtcbiAgaGVpZ2h0OiAxNTZweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubmV3cy1pdGVtIGEgaW1nOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMSwgMjEsIDIxLCAwLjIpO1xuICBvcGFjaXR5OiAwLjg7XG59XG4ubmV3cy1pdGVtIC5uZXdzbGluayAudGl0IHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogIzUwNTA1NDtcbn1cbi5uZXdzLWl0ZW0gc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYm90dG9tOiAzNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiAjNTA1MDU0O1xufVxuLm5ld3MtaXRlbSBwIHtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM1MDUwNTQ7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pbWFnZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJhZGdlIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4udG9wLW5ld3Mge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ubmV3cy1zY3JvbGwge1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAzMDBweCk7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAudGl0bGUtaGQge1xuICAgIGNvbG9yOiAjMDA4MWZmO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcGFkZGluZzogNTBweDtcbiAgfVxuICAudGl0bGUtaGQgYiB7XG4gICAgY29sb3I6ICMwMDgxZmY7XG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICBzcGFuIHtcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cblxuICAubmV3cy1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAwcHggMzBweCAzMHB4IDMwcHg7XG4gIH1cbiAgLm5ld3MtY29udGVudCAuZGVzYyB7XG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgfVxuXG4gIC52aWRlby1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAwcHggMzBweCAzMHB4IDMwcHg7XG4gIH1cbiAgLnZpZGVvLWNvbnRlbnQgLmRlc2Mge1xuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIH1cblxuICAudmlkZW8taXRlbSB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogM3B4IDNweCA4cHggMHB4ICNjOGM4Yzg7XG4gICAgLW1vei1ib3gtc2hhZG93OiAzcHggM3B4IDhweCAwcHggI2M4YzhjODtcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDhweCAwcHggI2M4YzhjODtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG4gIC52aWRlby1pdGVtIC52aWRlbyB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC52aWRlby1pdGVtIC52aWRlbyAudGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG4gIC52aWRlby1pdGVtIC52aWRlbyBzcGFuIHtcbiAgICBmb250LXNpemU6IDhweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG4gIC52aWRlby1pdGVtIC52aWRlbyBwIHtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubmV3cy1pdGVtIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMjBweDtcbiAgICBoZWlnaHQ6IDI4MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAzcHggM3B4IDhweCAwcHggI2M4YzhjODtcbiAgICAtbW96LWJveC1zaGFkb3c6IDNweCAzcHggOHB4IDBweCAjYzhjOGM4O1xuICAgIGJveC1zaGFkb3c6IDNweCAzcHggOHB4IDBweCAjYzhjOGM4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICAubmV3cy1pdGVtIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICAubmV3cy1pdGVtIGEgaW1nIHtcbiAgICBoZWlnaHQ6IDE1NnB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5uZXdzLWl0ZW0gYSBpbWc6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjEsIDIxLCAyMSwgMC4yKTtcbiAgICBvcGFjaXR5OiAwLjg7XG4gIH1cbiAgLm5ld3MtaXRlbSAubmV3c2xpbmsgLnRpdCB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogIzUwNTA1NDtcbiAgfVxuICAubmV3cy1pdGVtIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGJvdHRvbTogMzVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29sb3I6ICM1MDUwNTQ7XG4gIH1cbiAgLm5ld3MtaXRlbSBwIHtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICM1MDUwNTQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5pbWFnZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmJhZGdlIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuXG4gIC50b3AtbmV3cyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuXG4gIC5uZXdzLXNjcm9sbCB7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDMwMHB4KTtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EducationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-education',
          templateUrl: './education.component.html',
          styleUrls: ['./education.component.scss']
        }]
      }], function () {
        return [{
          type: _services_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/education/education.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/education/education.module.ts ***!
    \*****************************************************/

  /*! exports provided: EducationModule */

  /***/
  function _src_app_pages_education_educationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EducationModule", function () {
      return EducationModule;
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


    var _education_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./education.component */
    "./src/app/pages/education/education.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _footer_footer_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../footer/footer.module */
    "./src/app/pages/footer/footer.module.ts");
    /* harmony import */


    var src_app_modules_menu_menu_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/modules/menu/menu.module */
    "./src/app/modules/menu/menu.module.ts");

    var routes = [{
      path: '',
      component: _education_component__WEBPACK_IMPORTED_MODULE_2__["EducationComponent"]
    }];

    var EducationModule = /*#__PURE__*/_createClass(function EducationModule() {
      _classCallCheck(this, EducationModule);
    });

    EducationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: EducationModule
    });
    EducationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function EducationModule_Factory(t) {
        return new (t || EducationModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _footer_footer_module__WEBPACK_IMPORTED_MODULE_4__["FooterModule"], src_app_modules_menu_menu_module__WEBPACK_IMPORTED_MODULE_5__["MenuModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EducationModule, {
        declarations: [_education_component__WEBPACK_IMPORTED_MODULE_2__["EducationComponent"], _education_component__WEBPACK_IMPORTED_MODULE_2__["SafePipe"], _education_component__WEBPACK_IMPORTED_MODULE_2__["SafeResourcePipe"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _footer_footer_module__WEBPACK_IMPORTED_MODULE_4__["FooterModule"], src_app_modules_menu_menu_module__WEBPACK_IMPORTED_MODULE_5__["MenuModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EducationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_education_component__WEBPACK_IMPORTED_MODULE_2__["EducationComponent"], _education_component__WEBPACK_IMPORTED_MODULE_2__["SafePipe"], _education_component__WEBPACK_IMPORTED_MODULE_2__["SafeResourcePipe"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _footer_footer_module__WEBPACK_IMPORTED_MODULE_4__["FooterModule"], src_app_modules_menu_menu_module__WEBPACK_IMPORTED_MODULE_5__["MenuModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-education-education-module-es5.js.map