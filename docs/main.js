"use strict";
(self["webpackChunkmentha_app"] = self["webpackChunkmentha_app"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_inicio_inicio_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/inicio/inicio.module */ 3633)).then((m) => m.InicioModule),
        pathMatch: 'full'
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 2544);



class AppComponent {
    constructor() {
        this.title = 'mentha-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 39, vars: 0, consts: [["role", "main", 1, "content"], [1, "navbar"], [1, "container"], [1, "navbar-brand"], ["src", "../assets/images/logo-mentha.png", "alt", "mentha-logo", 1, "logo-img"], [1, "navbar-nav", "d-flex", "flex-row", "justify-content-evenly"], [1, "nav-item"], [1, "nav-link"], [1, "d-flex", "justify-content-center"], [1, "d-flex", "w-75", "justify-content-between", "align-items-center"], [1, "brand-container", "d-flex", "flex-column", "align-items-center"], [1, "brand-name"], [1, "contact-data", "d-flex", "flex-column"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "material-symbols-outlined"], [1, "m-0"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "material-symbols-outlined", "mail"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "nav", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5)(6, "li", 6)(7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Nosotros");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 6)(10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Soluciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 6)(13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Casos de \u00E9xito");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 6)(16, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Metodolog\u00EDa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 6)(19, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "footer", 8)(23, "div", 9)(24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "MENTHA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12)(29, "div", 13)(30, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "call");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "+34 234 567 896");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 16)(35, "mat-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "info@site.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon], styles: ["nav[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1000;\n  width: 100%;\n  height: 74px;\n  background: #dbdbdb4d;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  padding: 0;\n}\nnav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 50px;\n}\nnav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\n  width: 60%;\n}\nnav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  font-size: 17px;\n  cursor: pointer;\n}\nnav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  font-weight: 500;\n  transition: all 0.2s ease-in;\n}\nnav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #242424;\n}\nfooter[_ngcontent-%COMP%] {\n  height: 180px;\n  background-color: #333333;\n}\nfooter[_ngcontent-%COMP%]   .brand-name[_ngcontent-%COMP%] {\n  color: #fff;\n  font-family: \"Josefin Sans\", sans-serif;\n  font-size: 16px;\n}\nfooter[_ngcontent-%COMP%]   .logo-img[_ngcontent-%COMP%] {\n  width: 125px;\n}\nfooter[_ngcontent-%COMP%]   .contact-data[_ngcontent-%COMP%] {\n  width: 180px;\n  color: #fff;\n  cursor: pointer;\n}\nfooter[_ngcontent-%COMP%]   .contact-data[_ngcontent-%COMP%]   .mail[_ngcontent-%COMP%] {\n  color: #468ac9;\n}\nfooter[_ngcontent-%COMP%]   .contact-data[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSwyQ0FBQTtFQUNBLFVBQUE7QUFDRjtBQUNJO0VBQ0UsWUFBQTtBQUNOO0FBQUU7RUFDRSxVQUFBO0FBRUo7QUFESTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FBR047QUFGTTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FBSVI7QUFIUTtFQUNFLGNBQUE7QUFLVjtBQUhBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FBTUY7QUFMRTtFQUNFLFdBQUE7RUFDQSx1Q0FBQTtFQUNBLGVBQUE7QUFPSjtBQU5FO0VBQ0UsWUFBQTtBQVFKO0FBUEU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFTSjtBQVJJO0VBQ0UsY0FBQTtBQVVOO0FBVEk7RUFDRSxpQkFBQTtBQVdOIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdlxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZVxyXG4gIHotaW5kZXg6IDEwMDBcclxuICB3aWR0aDogMTAwJVxyXG4gIGhlaWdodDogNzRweFxyXG4gIGJhY2tncm91bmQ6ICNkYmRiZGI0ZFxyXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNCkgMHB4IDNweCA4cHhcclxuICBwYWRkaW5nOiAwXHJcbiAgLm5hdmJhci1icmFuZFxyXG4gICAgaW1nXHJcbiAgICAgIGhlaWdodDogNTBweFxyXG4gIC5uYXZiYXItbmF2XHJcbiAgICB3aWR0aDogNjAlXHJcbiAgICAubmF2LWl0ZW1cclxuICAgICAgZm9udC1zaXplOiAxN3B4XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlclxyXG4gICAgICBhXHJcbiAgICAgICAgY29sb3I6ICNmZmZcclxuICAgICAgICBmb250LXdlaWdodDogNTAwXHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluXHJcbiAgICAgICAgJjpob3ZlclxyXG4gICAgICAgICAgY29sb3I6ICMyNDI0MjRcclxuICAgICAgICAgIFxyXG5mb290ZXJcclxuICBoZWlnaHQ6IDE4MHB4XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzM1xyXG4gIC5icmFuZC1uYW1lXHJcbiAgICBjb2xvcjogI2ZmZlxyXG4gICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmXHJcbiAgICBmb250LXNpemU6IDE2cHhcclxuICAubG9nby1pbWdcclxuICAgIHdpZHRoOiAxMjVweFxyXG4gIC5jb250YWN0LWRhdGFcclxuICAgIHdpZHRoOiAxODBweFxyXG4gICAgY29sb3I6ICNmZmZcclxuICAgIGN1cnNvcjogcG9pbnRlclxyXG4gICAgLm1haWxcclxuICAgICAgY29sb3I6ICM0NjhhYzlcclxuICAgIHBcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQiXX0= */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _features_features_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features/features.module */ 5790);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 2544);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);







class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _features_features_module__WEBPACK_IMPORTED_MODULE_2__.FeaturesModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _features_features_module__WEBPACK_IMPORTED_MODULE_2__.FeaturesModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule] }); })();


/***/ }),

/***/ 9499:
/*!*****************************************************************!*\
  !*** ./src/app/features/always-ready/always-ready.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlwaysReadyComponent": () => (/* binding */ AlwaysReadyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class AlwaysReadyComponent {
    constructor() { }
    ngOnInit() {
    }
}
AlwaysReadyComponent.ɵfac = function AlwaysReadyComponent_Factory(t) { return new (t || AlwaysReadyComponent)(); };
AlwaysReadyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlwaysReadyComponent, selectors: [["app-always-ready"]], decls: 9, vars: 0, consts: [[1, "container-background"], [1, "container-filter"], [1, "dum-text", "txt-one"], [1, "dum-text", "txt-two"], [1, "dum-text", "txt-three"]], template: function AlwaysReadyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "ALW");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "AYS RE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "ADY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, styles: [".container-background[_ngcontent-%COMP%] {\n  background-image: url('travel-bg-img.jpg');\n  background-color: #cccccc;\n  background-size: 100%;\n  height: 100%;\n}\n\n.container-filter[_ngcontent-%COMP%] {\n  background-color: #6666664d;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.container-filter[_ngcontent-%COMP%]   .dum-text[_ngcontent-%COMP%] {\n  font-family: Roboto, \"sans-serif\";\n  font-weight: bold;\n  font-size: 96px;\n}\n\n.container-filter[_ngcontent-%COMP%]   .txt-one[_ngcontent-%COMP%] {\n  color: #54fedf;\n}\n\n.container-filter[_ngcontent-%COMP%]   .txt-two[_ngcontent-%COMP%] {\n  color: #0099ff;\n}\n\n.container-filter[_ngcontent-%COMP%]   .txt-three[_ngcontent-%COMP%] {\n  color: #8f1beb;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsd2F5cy1yZWFkeS5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBDQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFBQTtFQUNFLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBR0Y7O0FBRkU7RUFDRSxpQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUlKOztBQUhFO0VBQ0UsY0FBQTtBQUtKOztBQUpFO0VBQ0UsY0FBQTtBQU1KOztBQUxFO0VBQ0UsY0FBQTtBQU9KIiwiZmlsZSI6ImFsd2F5cy1yZWFkeS5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItYmFja2dyb3VuZFxyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdHJhdmVsLWJnLWltZy5qcGdcIilcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjXHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlXHJcbiAgaGVpZ2h0OiAxMDAlXHJcbi5jb250YWluZXItZmlsdGVyXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2NjY2NjRkXHJcbiAgaGVpZ2h0OiAxMDAlXHJcbiAgZGlzcGxheTogZmxleFxyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlclxyXG4gIC5kdW0tdGV4dFxyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgJ3NhbnMtc2VyaWYnXHJcbiAgICBmb250LXdlaWdodDogYm9sZFxyXG4gICAgZm9udC1zaXplOiA5NnB4XHJcbiAgLnR4dC1vbmVcclxuICAgIGNvbG9yOiAjNTRmZWRmXHJcbiAgLnR4dC10d29cclxuICAgIGNvbG9yOiAjMDA5OWZmXHJcbiAgLnR4dC10aHJlZVxyXG4gICAgY29sb3I6ICM4ZjFiZWIiXX0= */"], changeDetection: 0 });


/***/ }),

/***/ 9366:
/*!*****************************************************************************!*\
  !*** ./src/app/features/bloque-comentarios/bloque-comentarios.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BloqueComentariosComponent": () => (/* binding */ BloqueComentariosComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class BloqueComentariosComponent {
    constructor() { }
    ngOnInit() {
    }
}
BloqueComentariosComponent.ɵfac = function BloqueComentariosComponent_Factory(t) { return new (t || BloqueComentariosComponent)(); };
BloqueComentariosComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BloqueComentariosComponent, selectors: [["app-bloque-comentarios"]], decls: 20, vars: 0, consts: [[1, "container-background", "d-flex"], [1, "w-50"], [1, "w-50", "mt-5", "text-center"], [1, "h3", "component-subtitle"], [1, "comment-container"], [1, "quote-icon"], [1, "comment-text", "mb-3"], [1, "author-container", "mt-1", "d-flex", "justify-content-around"], [1, "text-bold", "w-25"], [1, "img-container"], [1, "m-0", "text-bold"], [1, "button", "my-5"]], template: function BloqueComentariosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Que m\u00E1s dicen sobre nosotros");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u00ABLa formaci\u00F3n con MENTHA fue muy enriquecedora. Despu\u00E9s de explicar la teor\u00EDa, hicimos ejercicios con casos pr\u00E1cticos reales muy \u00FAtiles, que clarificaron dudas y ayudaron a consolidar lo visto.\u00BB ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7)(10, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Marcelino Envases SRL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div")(14, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Frank Kinney ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Financial Director ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " CONTACTANOS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, styles: [".container-background[_ngcontent-%COMP%] {\n  background-image: url('coment-bg-img.jpg');\n  background-size: cover;\n  height: 100%;\n  min-height: 700px;\n}\n\n.component-subtitle[_ngcontent-%COMP%] {\n  font-family: \"Lora\", sans-serif;\n  font-size: 48px;\n  color: #fff;\n  font-weight: bolder;\n}\n\n.comment-container[_ngcontent-%COMP%] {\n  margin: 70px 15% 20px;\n  background-color: #fff;\n  border-radius: 25px;\n  padding: 20px 35px;\n}\n\n.quote-icon[_ngcontent-%COMP%] {\n  width: 70px;\n  transform: rotate(180deg);\n}\n\n.comment-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #00000080;\n}\n\n.author-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.img-container[_ngcontent-%COMP%] {\n  margin: 0 25px;\n  width: 45px;\n  height: 45px;\n  border-radius: 50%;\n  background-color: #00000060;\n}\n\n.text-bold[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.button[_ngcontent-%COMP%] {\n  border-radius: 50px;\n  padding: 14px 42px;\n  font-weight: bold;\n  font-size: 18px;\n  letter-spacing: 1.5px;\n  border: none;\n  background-color: #8f1beb50;\n  color: #ffffff;\n  transition: all 0.2s ease-out;\n}\n\n.button[_ngcontent-%COMP%]:hover {\n  background-color: #8f1beb;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb3F1ZS1jb21lbnRhcmlvcy5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBDQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFDQTtFQUNFLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUVGOztBQUFBO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFHRjs7QUFEQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBQUlGOztBQUZBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBS0Y7O0FBSEE7RUFDRSxlQUFBO0FBTUY7O0FBSkE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FBT0Y7O0FBTEE7RUFDRSxnQkFBQTtBQVFGOztBQU5BO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0FBU0Y7O0FBUEE7RUFDRSx5QkFBQTtBQVVGIiwiZmlsZSI6ImJsb3F1ZS1jb21lbnRhcmlvcy5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItYmFja2dyb3VuZFxyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvY29tZW50LWJnLWltZy5qcGdcIilcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyXHJcbiAgaGVpZ2h0OiAxMDAlXHJcbiAgbWluLWhlaWdodDogNzAwcHhcclxuXHJcbi5jb21wb25lbnQtc3VidGl0bGVcclxuICBmb250LWZhbWlseTogJ0xvcmEnLCBzYW5zLXNlcmlmXHJcbiAgZm9udC1zaXplOiA0OHB4XHJcbiAgY29sb3I6ICNmZmZcclxuICBmb250LXdlaWdodDogYm9sZGVyIFxyXG5cclxuLmNvbW1lbnQtY29udGFpbmVyIFxyXG4gIG1hcmdpbjogNzBweCAxNSUgMjBweFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZcclxuICBib3JkZXItcmFkaXVzOiAyNXB4XHJcbiAgcGFkZGluZzogMjBweCAzNXB4XHJcblxyXG4ucXVvdGUtaWNvbiBcclxuICB3aWR0aDogNzBweFxyXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZylcclxuXHJcbi5jb21tZW50LXRleHRcclxuICBmb250LXNpemU6IDE2cHhcclxuICBjb2xvcjogIzAwMDAwMDgwXHJcblxyXG4uYXV0aG9yLWNvbnRhaW5lciBwIFxyXG4gIGZvbnQtc2l6ZTogMTRweFxyXG5cclxuLmltZy1jb250YWluZXIgXHJcbiAgbWFyZ2luOiAwIDI1cHhcclxuICB3aWR0aDogNDVweFxyXG4gIGhlaWdodDogNDVweFxyXG4gIGJvcmRlci1yYWRpdXM6IDUwJVxyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA2MFxyXG5cclxuLnRleHQtYm9sZCBcclxuICBmb250LXdlaWdodDogNzAwXHJcblxyXG4uYnV0dG9uXHJcbiAgYm9yZGVyLXJhZGl1czogNTBweFxyXG4gIHBhZGRpbmc6IDE0cHggNDJweFxyXG4gIGZvbnQtd2VpZ2h0OiBib2xkXHJcbiAgZm9udC1zaXplOiAxOHB4XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4XHJcbiAgYm9yZGVyOiBub25lXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhmMWJlYjUwXHJcbiAgY29sb3I6ICNmZmZmZmZcclxuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2Utb3V0XHJcblxyXG4uYnV0dG9uOmhvdmVyXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhmMWJlYiJdfQ== */"] });


/***/ }),

/***/ 8652:
/*!***********************************************************************!*\
  !*** ./src/app/features/bloque-contacto/bloque-contacto.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BloqueContactoComponent": () => (/* binding */ BloqueContactoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class BloqueContactoComponent {
    constructor() { }
    ngOnInit() {
    }
}
BloqueContactoComponent.ɵfac = function BloqueContactoComponent_Factory(t) { return new (t || BloqueContactoComponent)(); };
BloqueContactoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BloqueContactoComponent, selectors: [["app-bloque-contacto"]], decls: 28, vars: 0, consts: [[1, "container-background"], [1, "contact-container", "p-5"], [1, "h4", "contact-title", "text-center"], [1, "d-flex", "align-items-center", "justify-content-between", "mt-4"], [1, "comment-container", "d-flex", "justify-content-center", "mb-3"], [1, "comment-text"], [1, "input-container"], [1, "w-100"], ["type", "text", "placeholder", "Introduzca su nombre", 1, "my-1", "w-100", "input-contact"], [1, "d-flex", "justify-content-between", "mt-2"], [1, "flex-input"], ["type", "text", "placeholder", "+12 345 678 910", 1, "input-contact"], ["type", "text", "placeholder", "Introduzca su correo", 1, "input-contact"], [1, "button-contact", "mt-4", "w-100"], [1, "upper-background"], [1, "lower-background"]], template: function BloqueContactoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Solicita una reuni\u00F3n inicial personalizada ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Nuestros especialistas se pondr\u00E1n en contacto SIN CARGO para coordinar una reuni\u00F3n inicial totalmente gratis. Estaremos felices de poder co-crear contigo! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "form")(11, "div", 7)(12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9)(16, "div", 10)(17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "N\u00FAmero de contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10)(21, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Correo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "SOLICITAR CONTACTO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 14)(27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container-background[_ngcontent-%COMP%] {\n  position: relative;\n  height: 90%;\n}\n\n.upper-background[_ngcontent-%COMP%] {\n  background-color: #f0f3f6;\n  height: 50%;\n}\n\n.lower-background[_ngcontent-%COMP%] {\n  height: 50%;\n  bottom: 0;\n  background-color: #8f1beb;\n}\n\n.contact-container[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 60%;\n  height: auto;\n  background-color: #fff;\n  border-radius: 30px;\n  margin: 8% 20%;\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n}\n\n.contact-title[_ngcontent-%COMP%] {\n  font-family: \"Lora\", sans-serif;\n  font-size: 35px;\n}\n\n.comment-container[_ngcontent-%COMP%] {\n  width: 40%;\n  font-size: 16px;\n  color: #00000080;\n  line-height: 28px;\n}\n\n.comment-text[_ngcontent-%COMP%] {\n  font-family: \"Lato\", sans-serif;\n  width: 80%;\n  font-weight: 300;\n}\n\n.input-container[_ngcontent-%COMP%] {\n  width: 55%;\n}\n\n.input-contact[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #f2f2f2;\n  border: none;\n  outline: none;\n  padding: 8px;\n  border-radius: 10px;\n}\n\n.flex-input[_ngcontent-%COMP%] {\n  width: 49%;\n}\n\n.input-contact[_ngcontent-%COMP%]::placeholder {\n  font-size: 12;\n  font-weight: 300;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  font-weight: 300;\n}\n\n.button-contact[_ngcontent-%COMP%] {\n  background-color: #8f1beb8c;\n  border: none;\n  color: #fff;\n  padding: 8px;\n  border-radius: 10px;\n  font-weight: 500;\n  transition: all 0.3s ease;\n}\n\n.button-contact[_ngcontent-%COMP%]:hover {\n  background-color: #8f1beb;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb3F1ZS1jb250YWN0by5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUNBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FBRUY7O0FBQUE7RUFDRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0FBR0Y7O0FBREE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxxREFBQTtBQUlGOztBQUZBO0VBQ0UsK0JBQUE7RUFDQSxlQUFBO0FBS0Y7O0FBSEE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFNRjs7QUFKQTtFQUNFLCtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBT0Y7O0FBTEE7RUFDRSxVQUFBO0FBUUY7O0FBTkE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQVNGOztBQVBBO0VBQ0UsVUFBQTtBQVVGOztBQVBBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FBVUY7O0FBUkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBV0Y7O0FBVEE7RUFDRSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQVlGOztBQVZBO0VBQ0UseUJBQUE7QUFhRiIsImZpbGUiOiJibG9xdWUtY29udGFjdG8uY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWJhY2tncm91bmQgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlXHJcbiAgaGVpZ2h0OiA5MCVcclxuXHJcbi51cHBlci1iYWNrZ3JvdW5kIFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYzZjZcclxuICBoZWlnaHQ6IDUwJVxyXG5cclxuLmxvd2VyLWJhY2tncm91bmQgXHJcbiAgaGVpZ2h0OiA1MCVcclxuICBib3R0b206IDBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGYxYmViXHJcblxyXG4uY29udGFjdC1jb250YWluZXIgXHJcbiAgcG9zaXRpb246IGFic29sdXRlXHJcbiAgd2lkdGg6IDYwJVxyXG4gIGhlaWdodDogYXV0b1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZcclxuICBib3JkZXItcmFkaXVzOiAzMHB4XHJcbiAgbWFyZ2luOiA4JSAyMCVcclxuICBib3gtc2hhZG93OiByZ2JhKDEwMCwgMTAwLCAxMTEsIDAuMikgMHB4IDdweCAyOXB4IDBweFxyXG5cclxuLmNvbnRhY3QtdGl0bGUgXHJcbiAgZm9udC1mYW1pbHk6ICdMb3JhJywgc2Fucy1zZXJpZlxyXG4gIGZvbnQtc2l6ZTogMzVweFxyXG5cclxuLmNvbW1lbnQtY29udGFpbmVyIFxyXG4gIHdpZHRoOiA0MCVcclxuICBmb250LXNpemU6IDE2cHhcclxuICBjb2xvcjogIzAwMDAwMDgwXHJcbiAgbGluZS1oZWlnaHQ6IDI4cHhcclxuXHJcbi5jb21tZW50LXRleHQgXHJcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZlxyXG4gIHdpZHRoOiA4MCVcclxuICBmb250LXdlaWdodDogMzAwXHJcblxyXG4uaW5wdXQtY29udGFpbmVyIFxyXG4gIHdpZHRoOiA1NSVcclxuXHJcbi5pbnB1dC1jb250YWN0IFxyXG4gIHdpZHRoOiAxMDAlXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMlxyXG4gIGJvcmRlcjogbm9uZVxyXG4gIG91dGxpbmU6IG5vbmVcclxuICBwYWRkaW5nOiA4cHhcclxuICBib3JkZXItcmFkaXVzOiAxMHB4XHJcblxyXG4uZmxleC1pbnB1dCBcclxuICB3aWR0aDogNDklXHJcblxyXG4gICAgICBcclxuLmlucHV0LWNvbnRhY3Q6OnBsYWNlaG9sZGVyIFxyXG4gIGZvbnQtc2l6ZTogMTJcclxuICBmb250LXdlaWdodDogMzAwXHJcblxyXG5sYWJlbCBcclxuICBkaXNwbGF5OiBibG9ja1xyXG4gIGZvbnQtc2l6ZTogMTRweFxyXG4gIGZvbnQtd2VpZ2h0OiAzMDBcclxuXHJcbi5idXR0b24tY29udGFjdFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICM4ZjFiZWI4Y1xyXG4gIGJvcmRlcjogbm9uZVxyXG4gIGNvbG9yOiAjZmZmXHJcbiAgcGFkZGluZzogOHB4XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweFxyXG4gIGZvbnQtd2VpZ2h0OiA1MDBcclxuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2VcclxuXHJcbi5idXR0b24tY29udGFjdDpob3ZlclxyXG4gIGJhY2tncm91bmQtY29sb3I6ICM4ZjFiZWJcclxuIl19 */"] });


/***/ }),

/***/ 3709:
/*!*************************************************************!*\
  !*** ./src/app/features/bloque-dos/bloque-dos.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BloqueDosComponent": () => (/* binding */ BloqueDosComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);


function BloqueDosComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7)(1, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const card_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r1.body);
} }
class BloqueDosComponent {
    constructor() {
        this.cardContent = [
            { title: 'Clientes', body: '+50', icon: 'av_timer' },
            { title: 'Proyectos', body: '+20', icon: 'energy_program_time_used' },
            { title: 'Presencia Global', body: '5', icon: 'account_tree' },
            { title: 'Workshops', body: '+20', icon: 'bolt' },
        ];
    }
    ngOnInit() {
    }
}
BloqueDosComponent.ɵfac = function BloqueDosComponent_Factory(t) { return new (t || BloqueDosComponent)(); };
BloqueDosComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BloqueDosComponent, selectors: [["app-bloque-dos"]], decls: 8, vars: 1, consts: [[1, "section-container", "d-flex", "flex-column"], [1, "title-container", "w-100", "d-flex", "justify-content-center"], [1, "w-50"], [1, "h3", "my-5", "text-center", "w-100"], [1, "image-container"], [1, "d-flex", "flex-wrap", "justify-content-center", "align-content-center", "container", "card-container"], ["class", "card-style p-4 m-2 d-flex flex-column justify-content-center align-items-center text-center", 4, "ngFor", "ngForOf"], [1, "card-style", "p-4", "m-2", "d-flex", "flex-column", "justify-content-center", "align-items-center", "text-center"], [1, "m-0", "card-title"], [1, "m-0", "card-body"]], template: function BloqueDosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Un nuevo concepto de REINVENCI\u00D3N ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BloqueDosComponent_div_7_Template, 5, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cardContent);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: [".section-container[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #f0f3f6;\n}\n\n.title-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  max-width: 570px;\n}\n\n.title-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Lora\", sans-serif;\n  font-size: 42px;\n  font-weight: bold;\n}\n\n.image-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 310px;\n  background-image: url('fist-group-bg-img.jpg');\n  background-position: 50% 20%;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.card-container[_ngcontent-%COMP%] {\n  position: relative;\n  bottom: 115px;\n}\n\n.card-container[_ngcontent-%COMP%]   .card-style[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 250px;\n  border-radius: 15px;\n  background: linear-gradient(#8f1beb, #54fedf);\n  color: #fff;\n  cursor: default;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\n  transition: all 0.2s ease-in-out;\n}\n\n.card-container[_ngcontent-%COMP%]   .card-style[_ngcontent-%COMP%]:hover {\n  transform: translateY(-10px);\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;\n}\n\n.card-container[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%], .card-container[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  font-family: \"Lato\", sans-serif;\n  font-weight: bold;\n}\n\n.card-container[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n\n.card-container[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  font-size: 48px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb3F1ZS1kb3MuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFRTtFQUNFLGdCQUFBO0FBQ0o7O0FBQUk7RUFDRSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUVOOztBQUFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSw4Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQUdGOztBQURBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FBSUY7O0FBSEU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHFGQUFBO0VBQ0EsZ0NBQUE7QUFLSjs7QUFKRTtFQUNFLDRCQUFBO0VBQ0EseUZBQUE7QUFNSjs7QUFMRTtFQUNFLCtCQUFBO0VBQ0EsaUJBQUE7QUFPSjs7QUFORTtFQUNFLGVBQUE7QUFRSjs7QUFQRTtFQUNFLGVBQUE7QUFTSiIsImZpbGUiOiJibG9xdWUtZG9zLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24tY29udGFpbmVyXHJcbiAgaGVpZ2h0OiAxMDAlXHJcbiAgYmFja2dyb3VuZDogI2YwZjNmNlxyXG5cclxuLnRpdGxlLWNvbnRhaW5lclxyXG4gIGRpdlxyXG4gICAgbWF4LXdpZHRoOiA1NzBweFxyXG4gICAgcFxyXG4gICAgICBmb250LWZhbWlseTogJ0xvcmEnLCBzYW5zLXNlcmlmXHJcbiAgICAgIGZvbnQtc2l6ZTogNDJweFxyXG4gICAgICBmb250LXdlaWdodDogYm9sZFxyXG4gIFxyXG4uaW1hZ2UtY29udGFpbmVyXHJcbiAgd2lkdGg6IDEwMCVcclxuICBoZWlnaHQ6IDMxMHB4XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9maXN0LWdyb3VwLWJnLWltZy5qcGdcIilcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgMjAlXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdFxyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXJcclxuXHJcbi5jYXJkLWNvbnRhaW5lclxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG4gIGJvdHRvbTogMTE1cHhcclxuICAuY2FyZC1zdHlsZVxyXG4gICAgd2lkdGg6IDI1MHB4XHJcbiAgICBoZWlnaHQ6IDI1MHB4XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzhmMWJlYiwgIzU0ZmVkZilcclxuICAgIGNvbG9yOiAjZmZmXHJcbiAgICBjdXJzb3I6IGRlZmF1bHRcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggNHB4IDZweCAtMXB4LCByZ2JhKDAsIDAsIDAsIDAuMDYpIDBweCAycHggNHB4IC0xcHhcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXRcclxuICAuY2FyZC1zdHlsZTpob3ZlclxyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KVxyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCAyMHB4IDI1cHggLTVweCwgcmdiYSgwLCAwLCAwLCAwLjA0KSAwcHggMTBweCAxMHB4IC01cHhcclxuICAuY2FyZC10aXRsZSwgLmNhcmQtYm9keVxyXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZlxyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRcclxuICAuY2FyZC10aXRsZVxyXG4gICAgZm9udC1zaXplOiAyNHB4XHJcbiAgLmNhcmQtYm9keVxyXG4gICAgZm9udC1zaXplOiA0OHB4Il19 */"] });


/***/ }),

/***/ 3548:
/*!***************************************************************!*\
  !*** ./src/app/features/bloque-tres/bloque-tres.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BloqueTresComponent": () => (/* binding */ BloqueTresComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 2544);



function BloqueTresComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8)(1, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const card_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r1.title);
} }
class BloqueTresComponent {
    constructor() {
        this.cardContent = [
            { title: 'Productividad', icon: 'av_timer' },
            { title: 'Huella', icon: 'fingerprint' },
            { title: 'Organización', icon: 'account_tree' },
            { title: 'Energía', icon: 'bolt' },
            { title: 'Equipos', icon: 'groups' },
            { title: 'Sustenibilidad', icon: 'pedal_bike' },
            { title: 'Soluciones IT', icon: 'computer' },
            { title: 'Sostenibilidad', icon: 'public' },
        ];
    }
    ngOnInit() {
    }
}
BloqueTresComponent.ɵfac = function BloqueTresComponent_Factory(t) { return new (t || BloqueTresComponent)(); };
BloqueTresComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BloqueTresComponent, selectors: [["app-bloque-tres"]], decls: 12, vars: 1, consts: [[1, "section-container", "pb-1"], ["src", "../../../assets/images/mentha-leaf.png", "alt", "mentha-leaf", 1, "left-leaf"], ["src", "../../../assets/images/mentha-leaf.png", "alt", "mentha-leaf", 1, "rigth-leaf"], ["key", "second-component-container", 1, "pt-4", "px-4", "container-background"], [1, "text-center"], [1, "h3", "mb-3", "text-center", "component-title"], [1, "d-flex", "flex-wrap", "mb-5", "justify-content-center", "align-content-center", "container"], ["class", "card-style p-4 m-2 d-flex flex-column align-items-center justify-content-center text-center", 4, "ngFor", "ngForOf"], [1, "card-style", "p-4", "m-2", "d-flex", "flex-column", "align-items-center", "justify-content-center", "text-center"], [1, "mb-1"], [1, "m-0", "card-title"]], template: function BloqueTresComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1)(2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Hemos organizado nuestro talento en distintos departamentos:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "MENTHA LEAVES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Cada uno de ellos nuclea el expertice de nuestro partners, as\u00ED como la experiencia acumulada de cada proyecto realizado.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, BloqueTresComponent_div_11_Template, 5, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cardContent);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon], styles: [".section-container[_ngcontent-%COMP%] {\n  background: linear-gradient(#f0f3f6, #00b9ff);\n  position: relative;\n}\n\n.left-leaf[_ngcontent-%COMP%], .rigth-leaf[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -100px;\n}\n\n.left-leaf[_ngcontent-%COMP%] {\n  left: 40px;\n  height: 220px;\n}\n\n.rigth-leaf[_ngcontent-%COMP%] {\n  right: 50px;\n  height: 190px;\n  transform: rotate(90deg);\n}\n\n.component-title[_ngcontent-%COMP%] {\n  font-family: \"Josefin Sans\", sans-serif;\n  font-size: 50px;\n  font-weight: bold;\n}\n\n.card-style[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 250px;\n  border-radius: 15px;\n  background-color: #0099ff;\n  color: #fff;\n  cursor: default;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;\n  transition: all 0.2s ease-in-out;\n}\n\n.card-style[_ngcontent-%COMP%]:hover {\n  transform: translateY(-10px);\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;\n}\n\n.mat-icon[_ngcontent-%COMP%] {\n  height: 90px;\n  width: 90px;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  font-size: 64px;\n  background: linear-gradient(#8f1beb, #00b9ff);\n  border-radius: 50%;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-family: \"Josefin Sans\", sans-serif;\n  font-size: 28px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb3F1ZS10cmVzLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkNBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBRUY7O0FBQUE7RUFDRSxVQUFBO0VBQ0EsYUFBQTtBQUdGOztBQURBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtBQUlGOztBQUZBO0VBQ0UsdUNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFLRjs7QUFIQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EscUZBQUE7RUFDQSxnQ0FBQTtBQU1GOztBQUxBO0VBQ0UsNEJBQUE7RUFDQSx5RkFBQTtBQVFGOztBQVBBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSw2Q0FBQTtFQUNBLGtCQUFBO0FBVUY7O0FBVEE7RUFDRSx1Q0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQVlGIiwiZmlsZSI6ImJsb3F1ZS10cmVzLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24tY29udGFpbmVyXHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmMGYzZjYsICMwMGI5ZmYpXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlXHJcblxyXG4ubGVmdC1sZWFmLCAucmlndGgtbGVhZlxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZVxyXG4gIHRvcDogLTEwMHB4XHJcblxyXG4ubGVmdC1sZWFmXHJcbiAgbGVmdDogNDBweFxyXG4gIGhlaWdodDogMjIwcHhcclxuXHJcbi5yaWd0aC1sZWFmXHJcbiAgcmlnaHQ6IDUwcHhcclxuICBoZWlnaHQ6IDE5MHB4XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpXHJcbiAgXHJcbi5jb21wb25lbnQtdGl0bGVcclxuICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWZcclxuICBmb250LXNpemU6IDUwcHhcclxuICBmb250LXdlaWdodDogYm9sZFxyXG5cclxuLmNhcmQtc3R5bGVcclxuICB3aWR0aDogMjUwcHhcclxuICBoZWlnaHQ6IDI1MHB4XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk5ZmZcclxuICBjb2xvcjogI2ZmZlxyXG4gIGN1cnNvcjogZGVmYXVsdFxyXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggNHB4IDZweCAtMXB4LCByZ2JhKDAsIDAsIDAsIDAuMDYpIDBweCAycHggNHB4IC0xcHhcclxuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0XHJcbi5jYXJkLXN0eWxlOmhvdmVyXHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KVxyXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggMjBweCAyNXB4IC01cHgsIHJnYmEoMCwgMCwgMCwgMC4wNCkgMHB4IDEwcHggMTBweCAtNXB4XHJcbi5tYXQtaWNvblxyXG4gIGhlaWdodDogOTBweFxyXG4gIHdpZHRoOiA5MHB4XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcclxuICBhbGlnbi1pdGVtczogY2VudGVyXHJcbiAgZGlzcGxheTogZmxleFxyXG4gIGZvbnQtc2l6ZTogNjRweFxyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjOGYxYmViLCAjMDBiOWZmKVxyXG4gIGJvcmRlci1yYWRpdXM6IDUwJVxyXG4uY2FyZC10aXRsZVxyXG4gIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZlxyXG4gIGZvbnQtc2l6ZTogMjhweFxyXG4gIGZvbnQtd2VpZ2h0OiBib2xkXHJcbiJdfQ== */"] });


/***/ }),

/***/ 8289:
/*!*************************************************************!*\
  !*** ./src/app/features/bloque-uno/bloque-uno.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BloqueUnoComponent": () => (/* binding */ BloqueUnoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class BloqueUnoComponent {
    constructor() { }
    ngOnInit() {
    }
}
BloqueUnoComponent.ɵfac = function BloqueUnoComponent_Factory(t) { return new (t || BloqueUnoComponent)(); };
BloqueUnoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BloqueUnoComponent, selectors: [["app-bloque-uno"]], decls: 14, vars: 0, consts: [[1, "container-background", "d-flex", "flex-column", "justify-content-between"], [1, "d-flex", "flex-column", "align-items-center", "bg-opacity"], ["src", "../../../assets/images/logo-mentha.png", "alt", "brand-logo", 1, "mt-2", "brand-logo"], [1, "h4", "mb-4", "brand-name"], [1, "h3", "mb-5", "brand-slogan"], [1, "d-flex"], [1, "button", "m-5"]], template: function BloqueUnoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " MENTHA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Always Ready to make Impact Happens. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5)(8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " LEAVES ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " SOLUCIONES ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " CONTACTO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } }, styles: [".container-background[_ngcontent-%COMP%] {\n  background-image: url('homepage-min.jpg');\n  background-position: 50% 80%;\n  background-color: #cccccc;\n  background-size: 100%;\n  background-attachment: fixed;\n  padding-top: 74px;\n  height: 125%;\n}\n\n.bg-opacity[_ngcontent-%COMP%] {\n  height: 125%;\n  background-color: #17171760;\n}\n\n.brand-name[_ngcontent-%COMP%], .brand-slogan[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.brand-logo[_ngcontent-%COMP%] {\n  height: 415px;\n}\n\n.brand-name[_ngcontent-%COMP%] {\n  font-family: \"Josefin Sans\", sans-serif;\n  font-size: 60px;\n}\n\n.brand-slogan[_ngcontent-%COMP%] {\n  font-family: \"Lora\", sans-serif;\n  font-size: 50px;\n  font-weight: bold;\n}\n\n.button[_ngcontent-%COMP%] {\n  border-radius: 50px;\n  padding: 8px 32px;\n  font-weight: bold;\n  letter-spacing: 1.5px;\n  border: 2px solid #ffffff;\n  background-color: #ffffff50;\n  color: #ffffff;\n  transition: all 0.2s ease-out;\n}\n\n.button[_ngcontent-%COMP%]:hover {\n  border: 2px solid #8f1beb;\n  background-color: #8f1beb50;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb3F1ZS11bm8uY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5Q0FBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxZQUFBO0VBQ0EsMkJBQUE7QUFFRjs7QUFBQTtFQUNFLFdBQUE7QUFHRjs7QUFEQTtFQUNFLGFBQUE7QUFJRjs7QUFGQTtFQUNFLHVDQUFBO0VBQ0EsZUFBQTtBQUtGOztBQUhBO0VBQ0UsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFNRjs7QUFKQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtBQU9GOztBQUxBO0VBQ0UseUJBQUE7RUFDQSwyQkFBQTtBQVFGIiwiZmlsZSI6ImJsb3F1ZS11bm8uY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWJhY2tncm91bmRcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2hvbWVwYWdlLW1pbi5qcGdcIilcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgODAlXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2NjY1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJVxyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWRcclxuICBwYWRkaW5nLXRvcDogNzRweFxyXG4gIGhlaWdodDogMTI1JVxyXG5cclxuLmJnLW9wYWNpdHlcclxuICBoZWlnaHQ6IDEyNSVcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNzE3NjBcclxuXHJcbi5icmFuZC1uYW1lLCAuYnJhbmQtc2xvZ2FuXHJcbiAgY29sb3I6ICNmZmZcclxuXHJcbi5icmFuZC1sb2dvXHJcbiAgaGVpZ2h0OiA0MTVweFxyXG5cclxuLmJyYW5kLW5hbWUgXHJcbiAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmXHJcbiAgZm9udC1zaXplOiA2MHB4XHJcblxyXG4uYnJhbmQtc2xvZ2FuXHJcbiAgZm9udC1mYW1pbHk6ICdMb3JhJywgc2Fucy1zZXJpZlxyXG4gIGZvbnQtc2l6ZTogNTBweFxyXG4gIGZvbnQtd2VpZ2h0OiBib2xkXHJcblxyXG4uYnV0dG9uXHJcbiAgYm9yZGVyLXJhZGl1czogNTBweFxyXG4gIHBhZGRpbmc6IDhweCAzMnB4XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRcclxuICBsZXR0ZXItc3BhY2luZzogMS41cHhcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjUwXHJcbiAgY29sb3I6ICNmZmZmZmZcclxuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2Utb3V0XHJcblxyXG4uYnV0dG9uOmhvdmVyXHJcbiAgYm9yZGVyOiAycHggc29saWQgIzhmMWJlYlxyXG4gIGJhY2tncm91bmQtY29sb3I6ICM4ZjFiZWI1MCJdfQ== */"] });


/***/ }),

/***/ 5790:
/*!*********************************************!*\
  !*** ./src/app/features/features.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeaturesModule": () => (/* binding */ FeaturesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _bloque_uno_bloque_uno_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bloque-uno/bloque-uno.component */ 8289);
/* harmony import */ var _bloque_dos_bloque_dos_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bloque-dos/bloque-dos.component */ 3709);
/* harmony import */ var _bloque_tres_bloque_tres_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bloque-tres/bloque-tres.component */ 3548);
/* harmony import */ var _bloque_comentarios_bloque_comentarios_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bloque-comentarios/bloque-comentarios.component */ 9366);
/* harmony import */ var _bloque_contacto_bloque_contacto_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bloque-contacto/bloque-contacto.component */ 8652);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 2544);
/* harmony import */ var _always_ready_always_ready_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./always-ready/always-ready.component */ 9499);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);









class FeaturesModule {
}
FeaturesModule.ɵfac = function FeaturesModule_Factory(t) { return new (t || FeaturesModule)(); };
FeaturesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: FeaturesModule });
FeaturesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](FeaturesModule, { declarations: [_bloque_uno_bloque_uno_component__WEBPACK_IMPORTED_MODULE_0__.BloqueUnoComponent,
        _bloque_dos_bloque_dos_component__WEBPACK_IMPORTED_MODULE_1__.BloqueDosComponent,
        _bloque_tres_bloque_tres_component__WEBPACK_IMPORTED_MODULE_2__.BloqueTresComponent,
        _bloque_comentarios_bloque_comentarios_component__WEBPACK_IMPORTED_MODULE_3__.BloqueComentariosComponent,
        _bloque_contacto_bloque_contacto_component__WEBPACK_IMPORTED_MODULE_4__.BloqueContactoComponent,
        _always_ready_always_ready_component__WEBPACK_IMPORTED_MODULE_5__.AlwaysReadyComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule], exports: [_bloque_uno_bloque_uno_component__WEBPACK_IMPORTED_MODULE_0__.BloqueUnoComponent,
        _bloque_dos_bloque_dos_component__WEBPACK_IMPORTED_MODULE_1__.BloqueDosComponent,
        _bloque_tres_bloque_tres_component__WEBPACK_IMPORTED_MODULE_2__.BloqueTresComponent,
        _bloque_comentarios_bloque_comentarios_component__WEBPACK_IMPORTED_MODULE_3__.BloqueComentariosComponent,
        _bloque_contacto_bloque_contacto_component__WEBPACK_IMPORTED_MODULE_4__.BloqueContactoComponent,
        _always_ready_always_ready_component__WEBPACK_IMPORTED_MODULE_5__.AlwaysReadyComponent] }); })();


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map