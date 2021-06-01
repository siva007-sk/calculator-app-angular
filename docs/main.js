(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\ReactApplication\calculator-app-angular\Calculator\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var decimal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! decimal.js */ "QSgb");
/* harmony import */ var decimal_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(decimal_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _themes_theme1_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./themes/theme1.json */ "z9o2");
var _themes_theme1_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./themes/theme1.json */ "z9o2", 1);
/* harmony import */ var _themes_theme2_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./themes/theme2.json */ "fvK/");
var _themes_theme2_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./themes/theme2.json */ "fvK/", 1);
/* harmony import */ var _themes_theme3_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./themes/theme3.json */ "j0Dd");
var _themes_theme3_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./themes/theme3.json */ "j0Dd", 1);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







const _c0 = function (a0, a1, a2, a3) { return { "background-color": a0, color: a1, border: a2, "box-shadow": a3 }; };
function AppComponent_ng_container_29_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppComponent_ng_container_29_ng_container_2_ng_container_1_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r7.takeAction($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const button_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", button_r3)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction4"](3, _c0, ctx_r4.themeStyle.delResetKeyBackground, ctx_r4.themeStyle.colorDelReset, ctx_r4.themeStyle.delResetKeyBackground, "2px 2px" + ctx_r4.themeStyle.delResetKeyShadow));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", button_r3, " ");
} }
function AppComponent_ng_container_29_ng_container_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppComponent_ng_container_29_ng_container_2_ng_template_2_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r10.takeAction($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const button_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", button_r3)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction4"](3, _c0, ctx_r6.themeStyle.numericKeysBackground, ctx_r6.themeStyle.textPrimary, ctx_r6.themeStyle.numericKeysBackground, "2px 2px" + ctx_r6.themeStyle.numericKeysShadow));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", button_r3, " ");
} }
function AppComponent_ng_container_29_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AppComponent_ng_container_29_ng_container_2_ng_container_1_Template, 3, 8, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, AppComponent_ng_container_29_ng_container_2_ng_template_2_Template, 2, 8, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const button_r3 = ctx.$implicit;
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", button_r3 == "DEL")("ngIfElse", _r5);
} }
function AppComponent_ng_container_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, AppComponent_ng_container_29_ng_container_2_Template, 4, 2, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", item_r1);
} }
const _c1 = function (a0) { return { color: a0 }; };
const _c2 = function (a0) { return { color: a0, padding: "5px" }; };
const _c3 = function (a0, a1) { return { "background-color": a0, border: a1 }; };
const _c4 = function (a0, a1, a2) { return { "radio-btn1": a0, "radio-btn2": a1, "radio-btn3": a2 }; };
const _c5 = function (a0, a1, a2) { return { "background-color": a0, border: a1, color: a2 }; };
class AppComponent {
    constructor() {
        this.buttonList = [
            ['7', '8', '9', 'DEL'],
            ['4', '5', '6', '+'],
            ['1', '2', '3', '-'],
            ['.', '0', '/', 'x'],
        ];
        this.resultsFlag = false;
        this.resultDisplay = '';
        this.number1 = new decimal_js__WEBPACK_IMPORTED_MODULE_0__["Decimal"](0);
        this.number2 = new decimal_js__WEBPACK_IMPORTED_MODULE_0__["Decimal"](0);
        this.operator = '';
        this.themeStyle = _themes_theme1_json__WEBPACK_IMPORTED_MODULE_1__;
        this.selectedTheme = {
            theme1: true,
            theme2: false,
            theme3: false,
        };
    }
    takeAction(event) {
        if (this.resultsFlag) {
            this.resultDisplay = '';
            this.resultsFlag = false;
            this.operator = '';
        }
        if (this.resultDisplay.length == 12) {
            return;
        }
        const key = event.target.id;
        if (key == '+' || key == '-' || key == 'x' || key == '/') {
            if (this.operator == '') {
                this.operator = key;
                this.resultDisplay += key;
            }
            else {
                this.number1 = new decimal_js__WEBPACK_IMPORTED_MODULE_0__["Decimal"](this.resultDisplay.split(this.operator)[0]);
                this.number2 = new decimal_js__WEBPACK_IMPORTED_MODULE_0__["Decimal"](this.resultDisplay.split(this.operator)[1]);
                this.resultDisplay = `${this.calculate()}`;
                this.operator = key;
                this.resultDisplay += key;
            }
        }
        else if (key == 'DEL') {
            this.resultDisplay = this.resultDisplay.substr(0, this.resultDisplay.length - 1);
        }
        else {
            this.resultDisplay += key;
        }
    }
    getResult() {
        this.resultsFlag = true;
        this.number1 = new decimal_js__WEBPACK_IMPORTED_MODULE_0__["Decimal"](this.resultDisplay.split(this.operator)[0]);
        this.number2 = new decimal_js__WEBPACK_IMPORTED_MODULE_0__["Decimal"](this.resultDisplay.split(this.operator)[1]);
        this.resultDisplay = `${this.calculate()}`;
    }
    reset() {
        this.resultDisplay = '';
        this.number1 = new decimal_js__WEBPACK_IMPORTED_MODULE_0__["Decimal"](0);
        this.number2 = new decimal_js__WEBPACK_IMPORTED_MODULE_0__["Decimal"](0);
        this.operator = '';
    }
    calculate() {
        if (this.operator == '+') {
            return this.number1.add(this.number2);
        }
        if (this.operator == '-') {
            return this.number1.sub(this.number2);
        }
        if (this.operator == 'x') {
            return this.number1.mul(this.number2);
        }
        if (this.operator == '/') {
            return this.number1.div(this.number2);
        }
        return 0;
    }
    changeTheme(event) {
        let radio = event.target.value;
        switch (radio) {
            case '1':
                this.selectedTheme = {
                    theme1: true,
                    theme2: false,
                    theme3: false,
                };
                this.themeStyle = _themes_theme1_json__WEBPACK_IMPORTED_MODULE_1__;
                break;
            case '2':
                this.selectedTheme = {
                    theme1: false,
                    theme2: true,
                    theme3: false,
                };
                this.themeStyle = _themes_theme2_json__WEBPACK_IMPORTED_MODULE_2__;
                break;
            case '3':
                this.selectedTheme = {
                    theme1: false,
                    theme2: false,
                    theme3: true,
                };
                this.themeStyle = _themes_theme3_json__WEBPACK_IMPORTED_MODULE_3__;
                break;
            default:
                this.selectedTheme = {
                    theme1: true,
                    theme2: false,
                    theme3: false,
                };
                this.themeStyle = _themes_theme1_json__WEBPACK_IMPORTED_MODULE_1__;
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 35, vars: 62, consts: [[1, "container"], [1, "calculator"], [1, "theme-label"], [3, "ngStyle"], [1, "header"], [1, "heading", 3, "ngStyle"], [1, "theme-switch"], ["for", "theme", 1, "theme-title", 3, "ngStyle"], ["id", "theme", 1, "themeRadio", 3, "ngStyle"], [1, "btn-1"], ["type", "radio", "name", "1", "id", "1", "value", "1", 3, "checked", "click"], [3, "ngClass"], [1, "btn-2"], ["type", "radio", "name", "2", "id", "2", "value", "2", 3, "checked", "click"], [1, "btn-3"], ["type", "radio", "name", "3", "id", "3", "value", "3", 3, "checked", "click"], [1, "display"], ["type", "text", "name", "display", "id", "display", "disabled", "", 1, "display-input", 3, "ngModel", "ngStyle", "ngModelChange"], [1, "keypad", 3, "ngStyle"], [4, "ngFor", "ngForOf"], [1, "action"], [1, "blueKey", 3, "ngStyle", "click"], [1, "redKey", 3, "ngStyle", "click"], [1, "buttons"], [4, "ngIf", "ngIfElse"], ["regularButtons", ""], [1, "blueKey", 3, "id", "ngStyle", "click"], [3, "id", "ngStyle", "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " Calc ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " THEME ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppComponent_Template_input_click_18_listener($event) { return ctx.changeTheme($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppComponent_Template_input_click_21_listener($event) { return ctx.changeTheme($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppComponent_Template_input_click_24_listener($event) { return ctx.changeTheme($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_27_listener($event) { return ctx.resultDisplay = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, AppComponent_ng_container_29_Template, 3, 1, "ng-container", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppComponent_Template_button_click_31_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, " Reset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AppComponent_Template_button_click_33_listener() { return ctx.getResult(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, " = ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background-color", ctx.themeStyle.mainBackground);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](20, _c1, ctx.themeStyle.colorHeadings));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](22, _c1, ctx.themeStyle.colorHeadings));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](24, _c1, ctx.themeStyle.colorHeadings));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](26, _c1, ctx.themeStyle.colorHeadings));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](28, _c2, ctx.themeStyle.colorHeadings));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](30, _c3, ctx.themeStyle.keypadBackground, ctx.themeStyle.keypadBackground));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx.selectedTheme.theme1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](33, _c4, ctx.selectedTheme.theme1, ctx.selectedTheme.theme2, ctx.selectedTheme.theme3));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx.selectedTheme.theme2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](37, _c4, ctx.selectedTheme.theme1, ctx.selectedTheme.theme2, ctx.selectedTheme.theme3));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx.selectedTheme.theme3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](41, _c4, ctx.selectedTheme.theme1, ctx.selectedTheme.theme2, ctx.selectedTheme.theme3));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.resultDisplay)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](45, _c5, ctx.themeStyle.screenBackground, ctx.themeStyle.screenBackground, ctx.themeStyle.colorHeadings));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](49, _c3, ctx.themeStyle.keypadBackground, ctx.themeStyle.keypadBackground));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.buttonList);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction4"](52, _c0, ctx.themeStyle.delResetKeyBackground, ctx.themeStyle.colorDelReset, ctx.themeStyle.delResetKeyBackground, "2px 2px" + ctx.themeStyle.delResetKeyShadow));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction4"](57, _c0, ctx.themeStyle.equalsKeyBackground, ctx.themeStyle.colorEqual, ctx.themeStyle.equalsKeyBackground, "2px 2px" + ctx.themeStyle.equalsKeyShadow));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".container[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.calculator[_ngcontent-%COMP%] {\n  max-width: 350px;\n}\n\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  margin-bottom: 1rem;\n}\n\n.heading[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.theme-switch[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: 40%;\n}\n\n.theme-title[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 700;\n}\n\n.theme-label[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  width: 100%;\n}\n\n.theme-label[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: 25%;\n}\n\n.theme-label[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  font-size: 0.8em;\n  font-weight: 700;\n}\n\n.themeRadio[_ngcontent-%COMP%] {\n  border-radius: 1rem;\n  display: flex;\n  height: 1.7rem;\n  align-items: center;\n  justify-content: space-around;\n  width: 100%;\n  padding: 0px 40px 0px 32px;\n}\n\n.themeRadio[_ngcontent-%COMP%]   .btn-1[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  height: 20px;\n  width: 20px;\n  cursor: pointer;\n  transform: translate(-30px, -10px);\n  z-index: 3;\n}\n\n.themeRadio[_ngcontent-%COMP%]   .btn-1[_ngcontent-%COMP%]   .radio-btn1[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 15px;\n  width: 15px;\n  border-radius: 50%;\n  transform: translate(-28px, -7px);\n}\n\n.themeRadio[_ngcontent-%COMP%]   .btn-1[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .radio-btn1[_ngcontent-%COMP%] {\n  background-color: #d03f2f;\n}\n\n.themeRadio[_ngcontent-%COMP%]   .btn-2[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  height: 20px;\n  width: 20px;\n  cursor: pointer;\n  transform: translate(-7px, -10px);\n  z-index: 3;\n}\n\n.themeRadio[_ngcontent-%COMP%]   .btn-2[_ngcontent-%COMP%]   .radio-btn2[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 15px;\n  width: 15px;\n  border-radius: 50%;\n  transform: translate(-4px, -7px);\n}\n\n.themeRadio[_ngcontent-%COMP%]   .btn-2[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .radio-btn2[_ngcontent-%COMP%] {\n  background-color: #ca5502;\n}\n\n.themeRadio[_ngcontent-%COMP%]   .btn-3[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  height: 20px;\n  width: 20px;\n  cursor: pointer;\n  transform: translate(16px, -10px);\n  z-index: 3;\n}\n\n.themeRadio[_ngcontent-%COMP%]   .btn-3[_ngcontent-%COMP%]   .radio-btn3[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 15px;\n  width: 15px;\n  border-radius: 50%;\n  transform: translate(19px, -7px);\n}\n\n.themeRadio[_ngcontent-%COMP%]   .btn-3[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .radio-btn3[_ngcontent-%COMP%] {\n  background-color: #00e0d1;\n}\n\n.radio[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 700;\n  z-index: 3;\n  transform: translate(12px, 3px);\n}\n\n.display[_ngcontent-%COMP%] {\n  height: 4rem;\n  border-radius: 5px;\n  margin-bottom: 1rem;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.display-input[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  font-weight: 700;\n  font-size: 2rem;\n  text-align: end;\n  padding: 1rem;\n}\n\n.keypad[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  padding: 0.5rem;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  justify-content: space-around;\n}\n\nbutton[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  height: 3rem;\n  width: 100%;\n  margin: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 700;\n  border-radius: 10px;\n}\n\nbutton[_ngcontent-%COMP%]:active {\n  transform: translateY(1px);\n}\n\n.blueKey[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n\n.action[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.redKey[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQ0E7RUFDSSxnQkFBQTtBQUVKOztBQUFBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBR0o7O0FBREE7RUFDSSxnQkFBQTtBQUlKOztBQUhBO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBTUo7O0FBSkE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FBT0o7O0FBTkE7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFTSjs7QUFSSTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQVVSOztBQVJRO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBVVo7O0FBVEE7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtBQVlKOztBQVZRO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSxVQUFBO0FBWVo7O0FBWFE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtBQWFaOztBQVhRO0VBQ0kseUJBQUE7QUFhWjs7QUFYUTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0VBQ0EsVUFBQTtBQWFaOztBQVpRO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7QUFjWjs7QUFiUTtFQUNJLHlCQUFBO0FBZVo7O0FBYlE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtFQUNBLFVBQUE7QUFlWjs7QUFkUTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0FBZ0JaOztBQWZRO0VBQ0kseUJBQUE7QUFpQlo7O0FBZEE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLCtCQUFBO0FBaUJKOztBQWhCQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFtQko7O0FBaEJBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQW1CSjs7QUFqQkE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUFvQko7O0FBbEJBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtBQXFCSjs7QUFuQkE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQXNCSjs7QUFwQkE7RUFDSSwwQkFBQTtBQXVCSjs7QUFyQkE7RUFDSSxpQkFBQTtBQXdCSjs7QUF0QkE7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQXlCSjs7QUF2QkE7RUFDSSxpQkFBQTtBQTBCSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyXHJcbiAgICBoZWlnaHQ6IDEwMHZoXHJcbiAgICBkaXNwbGF5OiBmbGV4XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxyXG5cclxuLmNhbGN1bGF0b3JcclxuICAgIG1heC13aWR0aDogMzUwcHhcclxuXHJcbi5oZWFkZXJcclxuICAgIGRpc3BsYXk6IGZsZXhcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlblxyXG4gICAgd2lkdGg6IDEwMCVcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW1cclxuXHJcbi5oZWFkaW5nXHJcbiAgICBmb250LXdlaWdodDogNzAwXHJcbi50aGVtZS1zd2l0Y2hcclxuICAgIGRpc3BsYXk6IGZsZXhcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyXHJcbiAgICB3aWR0aDogNDAlXHJcblxyXG4udGhlbWUtdGl0bGVcclxuICAgIGZvbnQtc2l6ZTogMC43cmVtXHJcbiAgICBmb250LXdlaWdodDogNzAwXHJcbi50aGVtZS1sYWJlbFxyXG4gICAgZGlzcGxheTogZmxleFxyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZFxyXG4gICAgYWxpZ24taXRlbXM6ICBjZW50ZXJcclxuICAgIHdpZHRoOiAxMDAlXHJcbiAgICB1bFxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXhcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZFxyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcclxuICAgICAgICB3aWR0aDogMjUlXHJcblxyXG4gICAgICAgIGxpXHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmVcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhlbVxyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwXHJcbi50aGVtZVJhZGlvXHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtXHJcbiAgICBkaXNwbGF5OiBmbGV4XHJcbiAgICBoZWlnaHQ6IDEuN3JlbVxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmRcclxuICAgIHdpZHRoOiAxMDAlXHJcbiAgICBwYWRkaW5nOiAwcHggNDBweCAwcHggMzJweFxyXG4gICAgLmJ0bi0xXHJcbiAgICAgICAgaW5wdXRcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlXHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDBcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlclxyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMzBweCwgLTEwcHgpXHJcbiAgICAgICAgICAgIHotaW5kZXg6IDNcclxuICAgICAgICAucmFkaW8tYnRuMVxyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGVcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNXB4XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNXB4XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJVxyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjhweCwtN3B4KVxyXG5cclxuICAgICAgICBpbnB1dDpjaGVja2VkIH4gLnJhZGlvLWJ0bjFcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDYsIDYzJSwgNTAlKVxyXG4gICAgLmJ0bi0yXHJcbiAgICAgICAgaW5wdXRcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlXHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDBcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlclxyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtN3B4LCAtMTBweClcclxuICAgICAgICAgICAgei1pbmRleDogM1xyXG4gICAgICAgIC5yYWRpby1idG4yXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxyXG4gICAgICAgICAgICBoZWlnaHQ6IDE1cHhcclxuICAgICAgICAgICAgd2lkdGg6IDE1cHhcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC00cHgsLTdweClcclxuICAgICAgICBpbnB1dDpjaGVja2VkIH4gLnJhZGlvLWJ0bjJcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI1LCA5OCUsIDQwJSlcclxuICAgIC5idG4tM1xyXG4gICAgICAgIGlucHV0XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxyXG4gICAgICAgICAgICBvcGFjaXR5OiAwXHJcbiAgICAgICAgICAgIGhlaWdodDogMjBweFxyXG4gICAgICAgICAgICB3aWR0aDogMjBweFxyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXJcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTZweCwgLTEwcHgpXHJcbiAgICAgICAgICAgIHotaW5kZXg6IDNcclxuICAgICAgICAucmFkaW8tYnRuM1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGVcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNXB4XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNXB4XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJVxyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxOXB4LC03cHgpXHJcbiAgICAgICAgaW5wdXQ6Y2hlY2tlZCB+IC5yYWRpby1idG4zXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgxNzYsIDEwMCUsIDQ0JSlcclxuXHJcbiAgICBcclxuLnJhZGlvXHJcbiAgICBmb250LXNpemU6IDAuN3JlbVxyXG4gICAgZm9udC13ZWlnaHQ6IDcwMFxyXG4gICAgei1pbmRleDogM1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTJweCwgM3B4KSBcclxuLmRpc3BsYXlcclxuICAgIGhlaWdodDogNHJlbVxyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtXHJcbiAgICBkaXNwbGF5OiBmbGV4XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyXHJcbiAgICBcclxuXHJcbi5kaXNwbGF5LWlucHV0XHJcbiAgICBoZWlnaHQ6IDEwMCVcclxuICAgIHdpZHRoOiAxMDAlXHJcbiAgICBmb250LXdlaWdodDogNzAwXHJcbiAgICBmb250LXNpemU6IDJyZW1cclxuICAgIHRleHQtYWxpZ246IGVuZFxyXG4gICAgcGFkZGluZzogMXJlbVxyXG5cclxuLmtleXBhZFxyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4XHJcbiAgICBwYWRkaW5nOiAwLjVyZW1cclxuXHJcbi5idXR0b25zXHJcbiAgICBkaXNwbGF5OiBmbGV4XHJcbiAgICB3aWR0aDogMTAwJVxyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmRcclxuXHJcbmJ1dHRvblxyXG4gICAgZm9udC1zaXplOiAxLjVyZW1cclxuICAgIGhlaWdodDogM3JlbVxyXG4gICAgd2lkdGg6IDEwMCVcclxuICAgIG1hcmdpbjogNXB4XHJcbiAgICBkaXNwbGF5OiBmbGV4XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlclxyXG4gICAgZm9udC13ZWlnaHQ6IDcwMFxyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweFxyXG5cclxuYnV0dG9uOmFjdGl2ZVxyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweClcclxuXHJcbi5ibHVlS2V5XHJcbiAgICBmb250LXNpemU6IDEuMnJlbVxyXG5cclxuLmFjdGlvblxyXG4gICAgZGlzcGxheTogZmxleFxyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmRcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcclxuXHJcbi5yZWRLZXlcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtXHJcblxyXG4gICAgICAgICAgICAiXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"]] }); })();


/***/ }),

/***/ "fvK/":
/*!************************************!*\
  !*** ./src/app/themes/theme2.json ***!
  \************************************/
/*! exports provided: mainBackground, toggleBackground, keypadBackground, screenBackground, toggle, equalsKeyBackground, equalsKeyShadow, numericKeysBackground, numericKeysShadow, delResetKeyBackground, delResetKeyShadow, textPrimary, colorEqual, colorDelReset, colorHeadings, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"mainBackground\":\"#e6e6e6\",\"toggleBackground\":\" #d1cccc\",\"keypadBackground\":\" #d1cccc\",\"screenBackground\":\"#ededed\",\"toggle\":\"#ca5502\",\"equalsKeyBackground\":\"#ca5502\",\"equalsKeyShadow\":\"#893901\",\"numericKeysBackground\":\"#e5e4e1\",\"numericKeysShadow\":\"#a69d91\",\"delResetKeyBackground\":\"#377f86\",\"delResetKeyShadow\":\"#1b5f65\",\"textPrimary\":\"#35352c\",\"colorEqual\":\"#ffffff\",\"colorDelReset\":\"#ffffff\",\"colorHeadings\":\"#35352c\"}");

/***/ }),

/***/ "j0Dd":
/*!************************************!*\
  !*** ./src/app/themes/theme3.json ***!
  \************************************/
/*! exports provided: mainBackground, toggleBackground, keypadBackground, screenBackground, toggle, equalsKeyBackground, equalsKeyShadow, numericKeysBackground, numericKeysShadow, delResetKeyBackground, delResetKeyShadow, textPrimary, colorEqual, colorDelReset, colorHeadings, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"mainBackground\":\"#160628\",\"toggleBackground\":\" #1d0934\",\"keypadBackground\":\" #1d0934\",\"screenBackground\":\"#1d0934\",\"toggle\":\"#00e0d1\",\"equalsKeyBackground\":\"#00e0d1\",\"equalsKeyShadow\":\" #6cf9f2\",\"numericKeysBackground\":\"#341c4f\",\"numericKeysShadow\":\"#871c9c\",\"delResetKeyBackground\":\"#58077d\",\"delResetKeyShadow\":\"#bc15f4\",\"textPrimary\":\"#ffe53d\",\"colorEqual\":\"#1b2428\",\"colorDelReset\":\"#ffffff\",\"colorHeadings\":\"#ffe53d\"}");

/***/ }),

/***/ "z9o2":
/*!************************************!*\
  !*** ./src/app/themes/theme1.json ***!
  \************************************/
/*! exports provided: mainBackground, toggleBackground, keypadBackground, screenBackground, equalsKeyBackground, toggle, equalsKeyShadow, numericKeysBackground, numericKeysShadow, delResetKeyBackground, delResetKeyShadow, textPrimary, colorEqual, colorDelReset, colorHeadings, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"mainBackground\":\"#3a4764\",\"toggleBackground\":\" #232c43\",\"keypadBackground\":\" #232c43\",\"screenBackground\":\"#182034\",\"equalsKeyBackground\":\"#d03f2f\",\"toggle\":\"#d03f2f\",\"equalsKeyShadow\":\"#93261a\",\"numericKeysBackground\":\"#eae3dc\",\"numericKeysShadow\":\"#b4a597\",\"delResetKeyBackground\":\"#637097\",\"delResetKeyShadow\":\"#404e72\",\"textPrimary\":\"#444b5a\",\"colorEqual\":\"#ffffff\",\"colorDelReset\":\"#ffffff\",\"colorHeadings\":\"#ffffff\"}");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map