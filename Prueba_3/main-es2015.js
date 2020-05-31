(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid encabezado p-0 pt-3 pb-3 animate__animated animate__fadeInDown\"> BRANDNEWS </div>\n<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/home/home.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/home/home.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row mt-5 mb-4 animate__animated animate__fadeInLeft\">\n        <div class=\"col-md-1\"></div>\n        <div class=\"col-md-10\">\n            <p class=\"new m-0\">News</p>\n        </div>\n        <div class=\"col-md-1\"></div>\n        <div class=\"col-md-1\"></div>\n        <div class=\"col-md-10 mt-1\">\n            <input type=\"text\" class=\"search\" placeholder=\"Search by user\">\n        </div>\n        <div class=\"col-md-1\"></div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-1\"></div>\n    <div class=\"col-md-10\">\n        <div class=\"card carta animate__animated animate__bounceIn\" *ngFor=\"let dato of datos; let i = index\" [routerLink]=\"['/home', dato.id]\">\n            <div class=\"card-body\">\n                <h1 class=\"card-title tituloC\">{{ dato.id }}</h1>\n                <h5 class=\"card-title tituloC\">{{ dato.title }}</h5>\n                <p class=\"card-text textoC\">{{ dato.body }}</p>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-1\"></div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/component/single/single.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/component/single/single.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-12\">\n        <div class=\"row\">\n            <div class=\"col-1\"></div>\n            <div class=\"col-10\">\n                <p class=\"tituloS mt-5 mb-0 animate__animated animate__fadeInDown\">{{ dt.title }}</p>\n                <p class=\"userB mb-0 animate__animated animate__fadeInDown\">By user: 1</p>\n                <p class=\"textoS mt-1 mb-0 animate__animated animate__flipInX\">{{ dt.body }}</p>\n                <p class=\"t_comments mb-0 mt-4 animate__animated animate__flipInX\">Comments</p>\n                <div class=\"card mb-3 animate__animated animate__bounceIn\" *ngFor=\"let dtC of dtCs\">\n                    <div class=\"card-body p-0 mb-4\">\n                        <p class=\"card-title m-0\">{{ dtC.name }} - <span class=\"spn_T\">May 25th</span></p>\n                        <p class=\"correo m-0\"><i>{{ dtC.email }}</i></p>\n                        <p class=\"card-text\">{{ dtC.body }}</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-1\"></div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".encabezado {\r\n    position: relative;\r\n    text-align: center;\r\n    background: black;\r\n    color: white;\r\n    font-size: 17px;\r\n    font-weight: 700;\r\n    letter-spacing: 7px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lbmNhYmV6YWRvIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiA3cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'prueba';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/home/home.component */ "./src/app/component/home/home.component.ts");
/* harmony import */ var _component_single_single_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/single/single.component */ "./src/app/component/single/single.component.ts");



// Rutas






let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _component_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _component_single_single_component__WEBPACK_IMPORTED_MODULE_8__["SingleComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _app_routes__WEBPACK_IMPORTED_MODULE_3__["APP_ROUTING"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: APP_ROUTING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTING", function() { return APP_ROUTING; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/home/home.component */ "./src/app/component/home/home.component.ts");
/* harmony import */ var _component_single_single_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/single/single.component */ "./src/app/component/single/single.component.ts");



const APP_ROUTES = [
    { path: 'home', component: _component_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'home/:id', component: _component_single_single_component__WEBPACK_IMPORTED_MODULE_2__["SingleComponent"] },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
const APP_ROUTING = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(APP_ROUTES);


/***/ }),

/***/ "./src/app/component/home/home.component.css":
/*!***************************************************!*\
  !*** ./src/app/component/home/home.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textoC {\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    color: gray;\r\n}\r\n\r\n.carta {\r\n    border-radius: 5px;\r\n    box-shadow: 10px 10px 21px -4px rgba(174, 174, 174, 0.75);\r\n    margin-bottom: 20px;\r\n    cursor: pointer;\r\n    transition: -webkit-transform .5s;\r\n    transition: transform .5s;\r\n    transition: transform .5s, -webkit-transform .5s;\r\n    -webkit-transition: transform .5s;\r\n    -moz-transition: transform .5s;\r\n    -ms-transition: transform .5s;\r\n    transform: scale(1);\r\n    -webkit-transform: scale(1);\r\n    -moz-transform: scale(1);\r\n    -ms-transform: scale(1);\r\n}\r\n\r\n.carta:hover {\r\n    transform: scale(1.04);\r\n    -webkit-transform: scale(1.04);\r\n    -moz-transform: scale(1.04);\r\n    -ms-transform: scale(1.04);\r\n}\r\n\r\n.tituloC {\r\n    font-weight: 400;\r\n}\r\n\r\n.new {\r\n    position: relative;\r\n    font-weight: 700;\r\n    font-size: 38px;\r\n}\r\n\r\n.search {\r\n    position: relative;\r\n    width: 300px;\r\n    border: 1px solid rgba(227, 227, 226);\r\n    border-radius: 5px;\r\n    padding: 6px 6px 6px 16px;\r\n    font-size: 13px;\r\n    background-image: url('search.svg');\r\n    background-repeat: no-repeat;\r\n    background-position: 96% 50%;\r\n    background-size: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBR2xCLHlEQUF5RDtJQUN6RCxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlDQUF5QjtJQUF6Qix5QkFBeUI7SUFBekIsZ0RBQXlCO0lBQ3pCLGlDQUFpQztJQUNqQyw4QkFBOEI7SUFDOUIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0Isd0JBQXdCO0lBQ3hCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1oscUNBQXFDO0lBQ3JDLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLG1DQUE0QztJQUM1Qyw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0b0Mge1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGNvbG9yOiBncmF5O1xyXG59XHJcblxyXG4uY2FydGEge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxMHB4IDEwcHggMjFweCAtNHB4IHJnYmEoMTc0LCAxNzQsIDE3NCwgMC43NSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDEwcHggMTBweCAyMXB4IC00cHggcmdiYSgxNzQsIDE3NCwgMTc0LCAwLjc1KTtcclxuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAyMXB4IC00cHggcmdiYSgxNzQsIDE3NCwgMTc0LCAwLjc1KTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjVzO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjVzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjVzO1xyXG4gICAgLW1zLXRyYW5zaXRpb246IHRyYW5zZm9ybSAuNXM7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbn1cclxuXHJcbi5jYXJ0YTpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDQpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDQpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMDQpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4wNCk7XHJcbn1cclxuXHJcbi50aXR1bG9DIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5uZXcge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMzhweDtcclxufVxyXG5cclxuLnNlYXJjaCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIyNywgMjI3LCAyMjYpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogNnB4IDZweCA2cHggMTZweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChzcmMvYXNzZXRzL3NlYXJjaC5zdmcpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDk2JSA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/component/home/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/component/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_datos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/datos.service */ "./src/app/services/datos.service.ts");



let HomeComponent = class HomeComponent {
    constructor(datosService) {
        this.datosService = datosService;
        this.datos = [];
    }
    ngOnInit() {
        this.datosService.getDatos()
            .subscribe(resp => this.datos = resp);
    }
};
HomeComponent.ctorParameters = () => [
    { type: _services_datos_service__WEBPACK_IMPORTED_MODULE_2__["DatosService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/component/home/home.component.css")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/component/single/single.component.css":
/*!*******************************************************!*\
  !*** ./src/app/component/single/single.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tituloS {\r\n    position: relative;\r\n    font-size: 35px;\r\n    font-weight: 700;\r\n}\r\n\r\n.userB {\r\n    font-size: 11px;\r\n    color: #78baff;\r\n}\r\n\r\n.textoS {\r\n    font-weight: 500;\r\n    font-size: 14px;\r\n}\r\n\r\n.spn_T {\r\n    color: #03A9F4;\r\n    font-size: 11px;\r\n}\r\n\r\n.correo {\r\n    position: relative;\r\n    font-size: 13px;\r\n}\r\n\r\n.card {\r\n    background: transparent;\r\n    border: 0px;\r\n    border-bottom: 1px solid rgba(0, 0, 0, .125);\r\n}\r\n\r\n.t_comments {\r\n    position: relative;\r\n    font-size: 29px;\r\n    font-weight: 300;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3NpbmdsZS9zaW5nbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLDRDQUE0QztBQUNoRDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L3NpbmdsZS9zaW5nbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXR1bG9TIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi51c2VyQiB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBjb2xvcjogIzc4YmFmZjtcclxufVxyXG5cclxuLnRleHRvUyB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uc3BuX1Qge1xyXG4gICAgY29sb3I6ICMwM0E5RjQ7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbn1cclxuXHJcbi5jb3JyZW8ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjEyNSk7XHJcbn1cclxuXHJcbi50X2NvbW1lbnRzIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtc2l6ZTogMjlweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/component/single/single.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/single/single.component.ts ***!
  \******************************************************/
/*! exports provided: SingleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleComponent", function() { return SingleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_datos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/datos.service */ "./src/app/services/datos.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _models_dato_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/dato.models */ "./src/app/models/dato.models.ts");





let SingleComponent = class SingleComponent {
    constructor(datosService, route) {
        this.datosService = datosService;
        this.route = route;
        this.dt = new _models_dato_models__WEBPACK_IMPORTED_MODULE_4__["DatoModel"]();
        this.dtCs = [];
    }
    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        this.datosService.getDt(id)
            .subscribe((resp) => {
            this.dt = resp;
            this.dt.id = id;
        });
        this.datosService.getComments(id)
            .subscribe((resp) => {
            this.dtCs = resp;
        });
    }
};
SingleComponent.ctorParameters = () => [
    { type: _services_datos_service__WEBPACK_IMPORTED_MODULE_2__["DatosService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
SingleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-single',
        template: __webpack_require__(/*! raw-loader!./single.component.html */ "./node_modules/raw-loader/index.js!./src/app/component/single/single.component.html"),
        styles: [__webpack_require__(/*! ./single.component.css */ "./src/app/component/single/single.component.css")]
    })
], SingleComponent);



/***/ }),

/***/ "./src/app/models/dato.models.ts":
/*!***************************************!*\
  !*** ./src/app/models/dato.models.ts ***!
  \***************************************/
/*! exports provided: DatoModel, CommentModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatoModel", function() { return DatoModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentModel", function() { return CommentModel; });
class DatoModel {
    constructor() {
        this.title = 'title';
        this.body = 'body';
        this.userId = '0';
        this.id = '0';
    }
}
class CommentModel {
    constructor() {
        this.postId = '0';
        this.id = '0';
        this.name = 'name';
        this.email = 'email';
        this.body = 'body';
    }
}


/***/ }),

/***/ "./src/app/services/datos.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/datos.service.ts ***!
  \*******************************************/
/*! exports provided: DatosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatosService", function() { return DatosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let DatosService = class DatosService {
    constructor(http) {
        this.http = http;
        this.url = 'https://jsonplaceholder.typicode.com/posts';
    }
    getDt(id) {
        return this.http.get(`${this.url}/${id}`);
    }
    getComments(id) {
        return this.http.get(`${this.url}/${id}/comments`);
    }
    getDatos() {
        return this.http.get(this.url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.crearArreglo));
    }
    crearArreglo(datosObject) {
        return datosObject;
    }
};
DatosService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DatosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DatosService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
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
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\PRUEBA PARA EMPLEO\Prueba_3 ( APP )\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map