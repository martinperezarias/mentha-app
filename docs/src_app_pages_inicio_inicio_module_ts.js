"use strict";
(self["webpackChunkmentha_app"] = self["webpackChunkmentha_app"] || []).push([["src_app_pages_inicio_inicio_module_ts"],{

/***/ 5652:
/*!*******************************************************!*\
  !*** ./src/app/pages/inicio/inicio-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioRoutingModule": () => (/* binding */ InicioRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _inicio_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inicio.component */ 5461);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    { path: '', component: _inicio_component__WEBPACK_IMPORTED_MODULE_0__.InicioComponent },
];
class InicioRoutingModule {
}
InicioRoutingModule.ɵfac = function InicioRoutingModule_Factory(t) { return new (t || InicioRoutingModule)(); };
InicioRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: InicioRoutingModule });
InicioRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](InicioRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5461:
/*!**************************************************!*\
  !*** ./src/app/pages/inicio/inicio.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioComponent": () => (/* binding */ InicioComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _features_bloque_uno_bloque_uno_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../features/bloque-uno/bloque-uno.component */ 8289);
/* harmony import */ var _features_bloque_dos_bloque_dos_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../features/bloque-dos/bloque-dos.component */ 3709);
/* harmony import */ var _features_bloque_tres_bloque_tres_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../features/bloque-tres/bloque-tres.component */ 3548);
/* harmony import */ var _features_bloque_comentarios_bloque_comentarios_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../features/bloque-comentarios/bloque-comentarios.component */ 9366);
/* harmony import */ var _features_bloque_contacto_bloque_contacto_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../features/bloque-contacto/bloque-contacto.component */ 8652);
/* harmony import */ var _features_always_ready_always_ready_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../features/always-ready/always-ready.component */ 9499);







class InicioComponent {
    constructor() { }
    ngOnInit() {
    }
}
InicioComponent.ɵfac = function InicioComponent_Factory(t) { return new (t || InicioComponent)(); };
InicioComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: InicioComponent, selectors: [["app-inicio"]], decls: 6, vars: 0, template: function InicioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-bloque-uno")(1, "app-bloque-dos")(2, "app-bloque-tres")(3, "app-bloque-comentarios")(4, "app-bloque-contacto")(5, "app-always-ready");
    } }, directives: [_features_bloque_uno_bloque_uno_component__WEBPACK_IMPORTED_MODULE_0__.BloqueUnoComponent, _features_bloque_dos_bloque_dos_component__WEBPACK_IMPORTED_MODULE_1__.BloqueDosComponent, _features_bloque_tres_bloque_tres_component__WEBPACK_IMPORTED_MODULE_2__.BloqueTresComponent, _features_bloque_comentarios_bloque_comentarios_component__WEBPACK_IMPORTED_MODULE_3__.BloqueComentariosComponent, _features_bloque_contacto_bloque_contacto_component__WEBPACK_IMPORTED_MODULE_4__.BloqueContactoComponent, _features_always_ready_always_ready_component__WEBPACK_IMPORTED_MODULE_5__.AlwaysReadyComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmljaW8uY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 3633:
/*!***********************************************!*\
  !*** ./src/app/pages/inicio/inicio.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioModule": () => (/* binding */ InicioModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _inicio_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inicio-routing.module */ 5652);
/* harmony import */ var _inicio_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inicio.component */ 5461);
/* harmony import */ var src_app_features_features_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/features/features.module */ 5790);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class InicioModule {
}
InicioModule.ɵfac = function InicioModule_Factory(t) { return new (t || InicioModule)(); };
InicioModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: InicioModule });
InicioModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _inicio_routing_module__WEBPACK_IMPORTED_MODULE_0__.InicioRoutingModule,
            src_app_features_features_module__WEBPACK_IMPORTED_MODULE_2__.FeaturesModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](InicioModule, { declarations: [_inicio_component__WEBPACK_IMPORTED_MODULE_1__.InicioComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _inicio_routing_module__WEBPACK_IMPORTED_MODULE_0__.InicioRoutingModule,
        src_app_features_features_module__WEBPACK_IMPORTED_MODULE_2__.FeaturesModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_inicio_inicio_module_ts.js.map