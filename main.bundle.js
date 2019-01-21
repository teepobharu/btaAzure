webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/add-event/add-event.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-event/add-event.component.html":
/***/ (function(module, exports) {

module.exports = "<head><link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\"></head>\r\n<div>\r\n\t<img src=\"/assets/bg.jpg\" style=\"width:100%; margin-top: -100px; position: absolute;\" > \r\n<div class=\"container\" style=\"margin-top: 60px\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\r\n        <h3> <i class=\"material-icons\" style=\"font-size:20px;color:darkred;\">account_circle</i> Create New Event</h3>\r\n        <button type=\"button\" class=\"btn btn-default pull-right\" style=\"margin: -35px 13px 0px 0px\" (click)=\"goBack()\">\r\nBack</button>\r\n        <hr>\r\n      <form (ngSubmit)=\"onSubmit()\" #f=\"ngForm\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-8\">\r\n            <div class=\"form-group\">\r\n              <label for=\"eventName\">Event Name</label>\r\n              <input type=\"text\"\r\n               id=\"eventName\"\r\n               class=\"form-control\"\r\n               ngModel\r\n               name=\"eventName\"\r\n               required>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-4\">\r\n            <div class=\"form-group\">\r\n              <label for=\"type\">Type:</label>\r\n              <select class=\"form-control\" \r\n                id=\"type\" \r\n                ngModel \r\n                name=\"type\"\r\n                required>\r\n                  <option>Culture</option>\r\n                  <option>Shopping</option>\r\n                  <option>Eating</option>\r\n                  <option>Kids</option>\r\n                  <option>Business</option>\r\n                  <option>Other</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-4\">\r\n            <div class=\"form-group\">\r\n              <label for=\"startdate\">Start Date</label>\r\n              <input type=\"date\" \r\n               \t\tid=\"startdate\"\r\n               \t\tclass=\"form-control\"\r\n               \t\tngModel\r\n               \t\tname=\"startdate\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-4\">\r\n            <div class=\"form-group\">\r\n              <label for=\"enddate\">End Date</label>\r\n              <input type=\"date\" \r\n               \t\tid=\"enddate\"\r\n               \t\tclass=\"form-control\"\r\n               \t\tngModel\r\n               \t\tname=\"enddate\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-4\">\r\n            <div class=\"form-group\">\r\n              <label for=\"time\">Time</label>\r\n              <input type=\"text\"\r\n               id=\"time\"\r\n               class=\"form-control\"\r\n               ngModel\r\n               name=\"time\"\r\n               required>\r\n            </div>\r\n            </div>\r\n          <div class=\"col-sm-4\">\r\n            <div class=\"form-group\">\r\n              <label for=\"cost\">Cost</label>\r\n              <input type=\"text\"\r\n               id=\"cost\"\r\n               class=\"form-control\"\r\n               ngModel\r\n               name=\"cost\"\r\n               required>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-4\">\r\n            <div class=\"form-group\">\r\n              <label for=\"location\">Location</label>\r\n              <input type=\"text\"\r\n               id=\"location\"\r\n               class=\"form-control\"\r\n               ngModel\r\n               name=\"location\"\r\n               required>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-4\">\r\n            <div class=\"form-group\">\r\n              <label for=\"transportation\">Transportation</label>\r\n              <input type=\"text\"\r\n               id=\"transportation\"\r\n               class=\"form-control\"\r\n               ngModel\r\n               name=\"transportation\"\r\n               required>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-12\">\r\n            <div class=\"form-group\">\r\n              <label for=\"description\">Description</label>\r\n              <textarea type=\"text\" \r\n               id=\"description\"\r\n               class=\"form-control\"\r\n               ngModel\r\n               name=\"description\"\r\n               required\r\n               #description=\"ngModel\"></textarea>\r\n               <!-- <span class=\"help-block\" *ngIf=\"!description.valid && description.touched\">Please enter your Description!</span> -->\r\n            </div>\r\n          </div >\r\n          <div class=\"col-sm-12\">\r\n            <div class=\"form-group\">\r\n              <label for=\"picture\">Please upload pictures</label>\r\n              <div style=\"margin-bottom: 10px;\">\r\n                <img *ngFor=\"let url of urls\" [src]=\"url\" width=\"170\" height=\"100\" style=\"margin: 4px\">\r\n                <input type=\"file\" multiple (change)=\"detectFiles($event)\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n      </div>\r\n        <button \r\n        class=\"btn btn-primary\"\r\n        type=\"submit\"\r\n        [disabled]=\"!f.valid\"> Submit </button> \r\n        <button class=\"btn btn-debug\" type=\"button\" (click)=\"upload()\"> Reset </button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <hr>\r\n</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/add-event/add-event.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEventComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__server_service__ = __webpack_require__("../../../../../src/app/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddEventComponent = (function () {
    function AddEventComponent(router, serverService, location, http) {
        this.router = router;
        this.serverService = serverService;
        this.location = location;
        this.http = http;
        this.place = {
            eventName: 'fff',
            type: '',
            startdate: '',
            enddate: '',
            time: '',
            cost: '',
            location: '',
            transportation: '',
            description: ''
        };
        this.urls = new Array();
        this.submitted = false;
        this.moreName = false;
        this.filesToUpload = [];
    }
    AddEventComponent.prototype.ngOnInit = function () { };
    AddEventComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        this.place.eventName = this.addPlaceForm.value.eventName;
        this.place.type = this.addPlaceForm.value.type;
        this.place.startdate = this.addPlaceForm.value.startdate;
        this.place.enddate = this.addPlaceForm.value.enddate;
        this.place.time = this.addPlaceForm.value.time;
        this.place.cost = this.addPlaceForm.value.cost;
        this.place.location = this.addPlaceForm.value.location;
        this.place.transportation = this.addPlaceForm.value.transportation;
        this.place.description = this.addPlaceForm.value.description;
        console.log(this.place);
        this.addPlaceForm.reset();
        this.serverService.createEvent(this.place)
            .subscribe(function (res) {
            console.log(res.json()[0].attID),
                _this.upload(res.json()[0].attID);
        }, function (err) { return console.log('err'); });
    };
    AddEventComponent.prototype.upload = function (id) {
        var _this = this;
        var formData = new FormData();
        var files = this.filesToUpload;
        console.log(files);
        for (var i = 0; i < files.length; i++) {
            formData.append("uploads[]", files[i], files[i]['name']);
        }
        console.log('form data variable :   ' + formData.toString());
        this.http.post('http://localhost:8000/uploadevent/' + id, formData)
            .subscribe(function (files) {
            alert("Success adding the event");
            _this.router.navigate(['/events']);
        });
    };
    AddEventComponent.prototype.detectFiles = function (event) {
        var _this = this;
        this.filesToUpload = event.target.files;
        this.urls = [];
        var files = event.target.files;
        if (files) {
            for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
                var file = files_1[_i];
                var reader = new FileReader();
                reader.onload = function (e) {
                    _this.urls.push(e.target.result);
                };
                reader.readAsDataURL(file);
            }
            console.log(this.urls);
        }
    };
    AddEventComponent.prototype.onReset = function () {
        this.submitted = false;
        this.addPlaceForm.reset();
    };
    AddEventComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */])
    ], AddEventComponent.prototype, "addPlaceForm", void 0);
    AddEventComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-event',
            template: __webpack_require__("../../../../../src/app/add-event/add-event.component.html"),
            styles: [__webpack_require__("../../../../../src/app/add-event/add-event.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__server_service__["a" /* ServerService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */]])
    ], AddEventComponent);
    return AddEventComponent;
}());



/***/ }),

/***/ "../../../../../src/app/add-place/add-place.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n  margin-top: 30px;\r\n}\r\ninput.ng-invalid.ng-touched, select.ng-invalid.ng-touched {\r\n  border: 1px red solid;\r\n}\r\ninput.ng-valid.ng-touched, select.ng-valid.ng-touched {\r\n  border: 1px green solid;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-place/add-place.component.html":
/***/ (function(module, exports) {

module.exports = "<head><link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\"></head>\r\n<div>\r\n\t<img src=\"/assets/bg.jpg\" style=\"width:100%; margin-top: -100px; position: absolute;\" > \r\n<div class=\"container\" style=\"margin-top: 60px\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\r\n        <h3> <i class=\"material-icons\" style=\"font-size:20px;color:darkred;\">account_circle</i> Create New Place</h3>\r\n        <button type=\"button\" class=\"btn btn-default pull-right\" style=\"margin: -35px 13px 0px 0px\" (click)=\"goBack()\">\r\nBack</button>\r\n        <hr>\r\n      <form (ngSubmit)=\"onSubmit()\" #f=\"ngForm\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-6\">\r\n            <div class=\"form-group\" style=\"margin-left: 16px\">\r\n              <label for=\"placeName\">Place Name</label>\r\n              <input type=\"text\"\r\n               id=\"placeName\"\r\n               class=\"form-control\"\r\n               ngModel\r\n               name=\"placeName\"\r\n               required>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-6\">\r\n            <button type=\"button\" class=\"btn btn-link\" style=\"margin: 23px 0px 0px -20px\" (click)=\"addMoreName()\"> + More names can be called?</button>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"moreName\">\r\n            <div class=\"col-sm-4\">\r\n              <div class=\"form-group\">\r\n                <label for=\"placeName2\"><small style=\"color: grey\">Name 2</small></label>\r\n                <input type=\"text\"\r\n                 id=\"placeName2\"\r\n                 class=\"form-control\"\r\n                 ngModel\r\n                 name=\"placeName2\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n              <div class=\"form-group\">\r\n                <label for=\"placeName3\"><small style=\"color: grey\">Name 3</small></label>\r\n                <input type=\"text\"\r\n                 id=\"placeName3\"\r\n                 class=\"form-control\"\r\n                 ngModel\r\n                 name=\"placeName3\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-4\">\r\n              <div class=\"form-group\">\r\n                <label for=\"placeName4\"><small style=\"color: grey\">Name 4</small></label>\r\n                <input type=\"text\"\r\n                 id=\"placeName4\"\r\n                 class=\"form-control\"\r\n                 ngModel\r\n                 name=\"placeName4\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-4\">\r\n            <div class=\"form-group\">\r\n              <label for=\"type\">Type:</label>\r\n              <select class=\"form-control\" \r\n                id=\"type\" \r\n                ngModel \r\n                name=\"type\"\r\n                required>\r\n                  <option>Temple</option>\r\n                  <option>Palace</option>\r\n                  <option>Shopping</option>\r\n                  <option>Park</option>\r\n                  <option>Street</option>\r\n                  <option>Other</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-4\">\r\n            <div class=\"form-group\">\r\n              <label for=\"area\">Area</label>\r\n              <input type=\"text\"\r\n               id=\"area\"\r\n               class=\"form-control\"\r\n               ngModel\r\n               name=\"area\"\r\n               required>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-4\">\r\n            <div class=\"form-group\">\r\n              <label for=\"cost\">Cost</label>\r\n              <input type=\"text\"\r\n               id=\"cost\"\r\n               class=\"form-control\"\r\n               ngModel\r\n               name=\"cost\"\r\n               required>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-4\">\r\n            <div class=\"form-group\">\r\n              <label for=\"operDay\">Operating Days</label>\r\n              <input type=\"text\"\r\n               id=\"operDay\"\r\n               class=\"form-control\"\r\n               ngModel\r\n               name=\"operDay\"\r\n               required>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-4\">\r\n            <div class=\"form-group\">\r\n              <label for=\"operTime\">Operating Time</label>\r\n              <input type=\"text\"\r\n               id=\"operTime\"\r\n               class=\"form-control\"\r\n               ngModel\r\n               name=\"operTime\"\r\n               required>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-4\">\r\n            <div class=\"form-group\">\r\n              <label for=\"suggTime\">Suggested Time</label>\r\n              <input type=\"text\"\r\n               id=\"suggTime\"\r\n               class=\"form-control\"\r\n               ngModel\r\n               name=\"suggTime\"\r\n               required>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-12\">\r\n            <div class=\"form-group\">\r\n              <label for=\"tansportation\">Transportation</label>\r\n              <input type=\"text\"\r\n               id=\"transportation\"\r\n               class=\"form-control\"\r\n               ngModel\r\n               name=\"transportation\"\r\n               required>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-12\">\r\n            <div class=\"form-group\">\r\n              <label for=\"description\">Description</label>\r\n              <textarea type=\"text\" \r\n               id=\"description\"\r\n               class=\"form-control\"\r\n               ngModel\r\n               name=\"description\"\r\n               required\r\n               #description=\"ngModel\"></textarea>\r\n               <!-- <span class=\"help-block\" *ngIf=\"!description.valid && description.touched\">Please enter your Description!</span> -->\r\n            </div>\r\n          </div >\r\n          <div class=\"col-sm-12\">\r\n            <div class=\"form-group\">\r\n              <label for=\"picture\">Please upload pictures</label>\r\n              <div style=\"margin-bottom: 10px;\">\r\n                <img *ngFor=\"let url of urls\" [src]=\"url\" width=\"170\" height=\"100\" style=\"margin: 4px\">\r\n                <input type=\"file\" multiple (change)=\"detectFiles($event)\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        <button \r\n        class=\"btn btn-primary\" \r\n        style=\"margin-left: 16px;\" \r\n        type=\"submit\"\r\n        [disabled]=\"!f.valid\"> Submit </button> \r\n        <button class=\"btn btn-debug\" type=\"button\" (click)=\"upload()\"> Reset </button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <hr>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/add-place/add-place.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPlaceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__server_service__ = __webpack_require__("../../../../../src/app/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddPlaceComponent = (function () {
    function AddPlaceComponent(router, serverService, location, http) {
        this.router = router;
        this.serverService = serverService;
        this.location = location;
        this.http = http;
        this.place = {
            placeName: '',
            type: '',
            operDay: '',
            operTime: '',
            suggTime: '',
            area: '',
            cost: '',
            transportation: '',
            description: ''
        };
        this.name = [];
        this.urls = new Array();
        this.submitted = false;
        this.moreName = false;
        this.filesToUpload = [];
    }
    AddPlaceComponent.prototype.ngOnInit = function () { };
    AddPlaceComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        this.place.placeName = this.addPlaceForm.value.placeName;
        this.place.type = this.addPlaceForm.value.type;
        this.place.operDay = this.addPlaceForm.value.operDay;
        this.place.operTime = this.addPlaceForm.value.operTime;
        this.place.suggTime = this.addPlaceForm.value.suggTime;
        this.place.area = this.addPlaceForm.value.area;
        this.place.cost = this.addPlaceForm.value.cost;
        this.place.transportation = this.addPlaceForm.value.transportation;
        this.place.description = this.addPlaceForm.value.description;
        this.name.push(this.addPlaceForm.value.placeName2);
        this.name.push(this.addPlaceForm.value.placeName3);
        this.name.push(this.addPlaceForm.value.placeName4);
        console.log(this.place);
        this.addPlaceForm.reset();
        this.serverService.createPlace(this.place)
            .subscribe(function (res) {
            console.log(res.json()[0].attID),
                _this.upload(res.json()[0].attID);
            for (var i = 0; i < _this.name.length; i++) {
                if (_this.name[i] != '')
                    _this.setName(i, res.json()[0].attID);
            }
        }, function (err) { return console.log('err'); });
    };
    AddPlaceComponent.prototype.setName = function (i, att) {
        this.serverService.setName(this.name[i], att)
            .subscribe(function (res) { return console.log('yey'); });
    };
    AddPlaceComponent.prototype.upload = function (id) {
        var _this = this;
        var formData = new FormData();
        var files = this.filesToUpload;
        console.log(files);
        for (var i = 0; i < files.length; i++) {
            formData.append("uploads[]", files[i], files[i]['name']);
        }
        console.log('form data variable :   ' + formData.toString());
        this.serverService.uploadImage(id, formData)
            .subscribe(function (files) {
            _this.router.navigate(['/searchPlace']);
            alert("Success adding the place");
        });
    };
    AddPlaceComponent.prototype.addMoreName = function () {
        if (this.moreName == false)
            this.moreName = true;
        else
            this.moreName = false;
    };
    AddPlaceComponent.prototype.detectFiles = function (event) {
        var _this = this;
        this.filesToUpload = event.target.files;
        this.urls = [];
        var files = event.target.files;
        if (files) {
            for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
                var file = files_1[_i];
                var reader = new FileReader();
                reader.onload = function (e) {
                    _this.urls.push(e.target.result);
                };
                reader.readAsDataURL(file);
            }
            console.log(this.urls);
        }
    };
    AddPlaceComponent.prototype.onReset = function () {
        this.submitted = false;
        this.addPlaceForm.reset();
    };
    AddPlaceComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */])
    ], AddPlaceComponent.prototype, "addPlaceForm", void 0);
    AddPlaceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-place',
            template: __webpack_require__("../../../../../src/app/add-place/add-place.component.html"),
            styles: [__webpack_require__("../../../../../src/app/add-place/add-place.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__server_service__["a" /* ServerService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */]])
    ], AddPlaceComponent);
    return AddPlaceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin-events/admin-events.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin-events/admin-events.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: 60px\">\r\n\t<div class=\"row\">\r\n    \t<div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-2 col-md-offset-2\">\r\n    \t\t\t<h2>Unvalidated Events</h2>\r\n\t    \t\t<div class=\"col inline\" *ngFor=\"let place of places\">\r\n\t\t\t        <div class=\"col-sm-12\" style=\"margin-bottom: 5px\">\r\n\t\t\t        <hr>\r\n\t\t\t          <a routerLink=\"/eventdetail/{{ place.attID }}\">\r\n\t\t\t            <div class=\"col-sm-4\">\r\n\t\t\t                <img class=\"rounded\" [src]=\"place.img\" style=\"width: 100%;\">\r\n\t\t\t            </div>\r\n\t\t\t          </a>\r\n\t\t\t            <div class=\"col-sm-8\" style=\"margin-top: 0px\">\r\n\t\t\t              <a routerLink=\"/eventdetail/{{ place.attID }}\">\r\n\t\t\t                <h4 style=\"/*position: absolute; */text-align: left;\">{{ place.name }}</h4>\r\n\t\t\t              </a>\r\n\t\t\t            \r\n\t\t\t            </div>\r\n\t\t\t        </div>\r\n\t\t\t    </div>\r\n\t\t\t\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin-events/admin-events.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminEventsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__server_service__ = __webpack_require__("../../../../../src/app/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminEventsComponent = (function () {
    function AdminEventsComponent(serverService, sanitizer) {
        this.serverService = serverService;
        this.sanitizer = sanitizer;
    }
    AdminEventsComponent.prototype.ngOnInit = function () {
        this.getPlaces();
    };
    AdminEventsComponent.prototype.getPlaces = function () {
        var _this = this;
        this.serverService.getUnvEvents()
            .subscribe(function (res) {
            var data = res.json();
            _this.places = data;
            console.log(_this.places);
            for (var i = 0; i < _this.places.length; i++) {
                _this.callImage(i);
            }
        }, function (error) {
            console.log('error');
        });
        console.log(this.places);
    };
    AdminEventsComponent.prototype.callImage = function (count) {
        var _this = this;
        this.serverService.getEventImage(this.places[count].attID)
            .toPromise()
            .then(function (res) {
            var blob = new Blob([res._body], {
                type: res.headers.get("Content-Type")
            });
            var urlCreator = window.URL;
            _this.imageData = _this.sanitizer.bypassSecurityTrustUrl(urlCreator.createObjectURL(blob));
            _this.places[count]['img'] = _this.imageData;
        });
    };
    AdminEventsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin-events',
            template: __webpack_require__("../../../../../src/app/admin-events/admin-events.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin-events/admin-events.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__server_service__["a" /* ServerService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */]])
    ], AdminEventsComponent);
    return AdminEventsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin-main/admin-main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin-main/admin-main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: 60px\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\r\n\t\t\t<div *ngIf=\"!unvalidatedPlaces==0\">\r\n\t\t    \t<div class=\"col-sm-6 lead text-center\" style=\"height: 250px; color: white; border: solid white; background-color: #f9a9a9;\" routerLink=\"/admin/places\">\r\n\t\t\t    \t\t<p style=\"font-size: 120px;\">{{unvalidatedPlaces}}</p>\r\n\t\t\t    \t\t<p style=\"font-size: 30px;\">Unvalidated <b>Places</b></p>\r\n\t\t    \t</div>\r\n\t\t    </div>\r\n\t\t\t<div *ngIf=\"unvalidatedPlaces==0\">\r\n\t\t    \t<div class=\"col-sm-6 lead text-center\" style=\"height: 250px; color: white; border: solid white; background-color: #B9F4C4;\">\r\n\t\t    \t\t<p style=\"font-size: 120px;\">{{unvalidatedPlaces}}</p>\r\n\t\t    \t\t<p style=\"font-size: 30px;\">Unvalidated <b>Places</b></p>\r\n\t\t    \t</div>\r\n\t\t    </div>\r\n\t\t\t<div *ngIf=\"!unvalidatedEvents==0\">\r\n\t\t    \t<div class=\"col-sm-6 lead text-center\" style=\"height: 250px; color: white; border: solid white; background-color: #f9a9a9;\" routerLink=\"/admin/events\">\r\n\t\t\t    \t\t<p style=\"font-size: 120px;\">{{unvalidatedEvents}}</p>\r\n\t\t\t    \t\t<p style=\"font-size: 30px;\">Unvalidated <b>Events</b></p>\r\n\t\t    \t</div>\r\n\t\t    </div>\r\n\t\t\t<div *ngIf=\"unvalidatedEvents==0\">\r\n\t\t    \t<div class=\"col-sm-6 lead text-center\" style=\"height: 250px; color: white; border: solid white; background-color: #B9F4C4;\">\r\n\t\t    \t\t<p style=\"font-size: 120px;\">{{unvalidatedEvents}}</p>\r\n\t\t    \t\t<p style=\"font-size: 30px;\">Unvalidated <b>Events</b></p>\r\n\t\t    \t</div>\r\n\t\t    </div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin-main/admin-main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminMainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__server_service__ = __webpack_require__("../../../../../src/app/server.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminMainComponent = (function () {
    function AdminMainComponent(serverService) {
        this.serverService = serverService;
        this.unvalidatedPlaces = 0;
        this.unvalidatedEvents = 0;
    }
    AdminMainComponent.prototype.ngOnInit = function () {
        this.unvalidated();
    };
    AdminMainComponent.prototype.unvalidated = function () {
        var _this = this;
        this.serverService.checkUnvalidated()
            .subscribe(function (res) {
            console.log(res.json()[0][0]);
            console.log(res.json()[1][0]);
            if (res.json()[0][0].count1 > 0)
                _this.unvalidatedPlaces = res.json()[0][0].count1;
            else
                _this.unvalidatedPlaces = 0;
            if (res.json()[1][0].count2 > 0)
                _this.unvalidatedEvents = res.json()[1][0].count2;
            else
                _this.unvalidatedEvents = 0;
            console.log(_this.unvalidatedPlaces + ' ' + _this.unvalidatedEvents);
        }, function (err) { console.log('err'); });
    };
    AdminMainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin-main',
            template: __webpack_require__("../../../../../src/app/admin-main/admin-main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin-main/admin-main.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__server_service__["a" /* ServerService */]])
    ], AdminMainComponent);
    return AdminMainComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin-places/admin-places.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin-places/admin-places.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: 60px\">\r\n\t<div class=\"row\">\r\n    \t<div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-2 col-md-offset-2\">\r\n    \t\t\t<h2>Unvalidated Places</h2>\r\n\t    \t\t<div class=\"col inline\" *ngFor=\"let place of places\">\r\n\t\t\t        <div class=\"col-sm-12\" style=\"margin-bottom: 5px\">\r\n\t\t\t        <hr>\r\n\t\t\t          <a routerLink=\"/detail/{{ place.attID }}\">\r\n\t\t\t            <div class=\"col-sm-4\">\r\n\t\t\t                <img class=\"rounded\" [src]=\"place.img\" style=\"width: 100%;\">\r\n\t\t\t            </div>\r\n\t\t\t          </a>\r\n\t\t\t            <div class=\"col-sm-8\" style=\"margin-top: 0px\">\r\n\t\t\t              <a routerLink=\"/detail/{{ place.attID }}\">\r\n\t\t\t                <h4 style=\"/*position: absolute; */text-align: left;\">{{ place.name }}</h4>\r\n\t\t\t              </a>\r\n\t\t\t            \r\n\t\t\t            </div>\r\n\t\t\t        </div>\r\n\t\t\t    </div>\r\n\t\t\t\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin-places/admin-places.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPlacesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__server_service__ = __webpack_require__("../../../../../src/app/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminPlacesComponent = (function () {
    function AdminPlacesComponent(serverService, sanitizer) {
        this.serverService = serverService;
        this.sanitizer = sanitizer;
    }
    AdminPlacesComponent.prototype.ngOnInit = function () {
        this.getPlaces();
    };
    AdminPlacesComponent.prototype.getPlaces = function () {
        var _this = this;
        this.serverService.getUnvPlaces()
            .subscribe(function (res) {
            var data = res.json();
            _this.places = data;
            console.log(_this.places);
            for (var i = 0; i < _this.places.length; i++) {
                _this.callImage(i);
            }
        }, function (error) {
            console.log('error');
        });
        console.log(this.places);
    };
    AdminPlacesComponent.prototype.callImage = function (count) {
        var _this = this;
        this.serverService.getImage(this.places[count].attID)
            .toPromise()
            .then(function (res) {
            var blob = new Blob([res._body], {
                type: res.headers.get("Content-Type")
            });
            var urlCreator = window.URL;
            _this.imageData = _this.sanitizer.bypassSecurityTrustUrl(urlCreator.createObjectURL(blob));
            _this.places[count]['img'] = _this.imageData;
        });
    };
    AdminPlacesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin-places',
            template: __webpack_require__("../../../../../src/app/admin-places/admin-places.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin-places/admin-places.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__server_service__["a" /* ServerService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */]])
    ], AdminPlacesComponent);
    return AdminPlacesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__show_event_show_event_component__ = __webpack_require__("../../../../../src/app/show-event/show-event.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__place_detail_place_detail_component__ = __webpack_require__("../../../../../src/app/place-detail/place-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__event_detail_event_detail_component__ = __webpack_require__("../../../../../src/app/event-detail/event-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_place_add_place_component__ = __webpack_require__("../../../../../src/app/add-place/add-place.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_event_add_event_component__ = __webpack_require__("../../../../../src/app/add-event/add-event.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_place_search_place_component__ = __webpack_require__("../../../../../src/app/search-place/search-place.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__route_info_route_info_component__ = __webpack_require__("../../../../../src/app/route-info/route-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__route_detail_route_detail_component__ = __webpack_require__("../../../../../src/app/route-detail/route-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_page_login_page_component__ = __webpack_require__("../../../../../src/app/login-page/login-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__admin_main_admin_main_component__ = __webpack_require__("../../../../../src/app/admin-main/admin-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__admin_places_admin_places_component__ = __webpack_require__("../../../../../src/app/admin-places/admin-places.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__admin_events_admin_events_component__ = __webpack_require__("../../../../../src/app/admin-events/admin-events.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__give_feedback_give_feedback_component__ = __webpack_require__("../../../../../src/app/give-feedback/give-feedback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__home_page_home_page_component__ = __webpack_require__("../../../../../src/app/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__edit_place_edit_place_component__ = __webpack_require__("../../../../../src/app/edit-place/edit-place.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_16__home_page_home_page_component__["a" /* HomePageComponent */] },
    { path: 'events', component: __WEBPACK_IMPORTED_MODULE_2__show_event_show_event_component__["a" /* ShowEventComponent */] },
    { path: 'addplace', component: __WEBPACK_IMPORTED_MODULE_5__add_place_add_place_component__["a" /* AddPlaceComponent */] },
    { path: 'addevent', component: __WEBPACK_IMPORTED_MODULE_6__add_event_add_event_component__["a" /* AddEventComponent */] },
    { path: 'detail/:id', component: __WEBPACK_IMPORTED_MODULE_3__place_detail_place_detail_component__["a" /* PlaceDetailComponent */] },
    { path: 'eventdetail/:id', component: __WEBPACK_IMPORTED_MODULE_4__event_detail_event_detail_component__["a" /* EventDetailComponent */] },
    { path: 'searchplace', component: __WEBPACK_IMPORTED_MODULE_7__search_place_search_place_component__["a" /* SearchPlaceComponent */] },
    { path: 'edit/:id', component: __WEBPACK_IMPORTED_MODULE_17__edit_place_edit_place_component__["a" /* EditPlaceComponent */] },
    { path: 'routeinfo', component: __WEBPACK_IMPORTED_MODULE_8__route_info_route_info_component__["a" /* RouteInfoComponent */] },
    { path: 'routedetail/:id/:date', component: __WEBPACK_IMPORTED_MODULE_9__route_detail_route_detail_component__["a" /* RouteDetailComponent */] },
    { path: 'admin/main', component: __WEBPACK_IMPORTED_MODULE_11__admin_main_admin_main_component__["a" /* AdminMainComponent */] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_11__admin_main_admin_main_component__["a" /* AdminMainComponent */], pathMatch: 'full' },
    { path: 'admin/places', component: __WEBPACK_IMPORTED_MODULE_12__admin_places_admin_places_component__["a" /* AdminPlacesComponent */] },
    { path: 'admin/events', component: __WEBPACK_IMPORTED_MODULE_13__admin_events_admin_events_component__["a" /* AdminEventsComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_10__login_page_login_page_component__["a" /* LoginPageComponent */] },
    { path: 'feedback/:id', component: __WEBPACK_IMPORTED_MODULE_15__give_feedback_give_feedback_component__["a" /* GiveFeedbackComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_14__profile_profile_component__["a" /* ProfileComponent */] },
    { path: '**', redirectTo: 'home' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.container {\r\n  margin-top: 30px;\r\n}\r\ninput.ng-invalid.ng-touched, select.ng-invalid.ng-touched {\r\n  border: 1px red solid;\r\n}\r\ninput.ng-valid.ng-touched, select.ng-valid.ng-touched {\r\n  border: 1px green solid;\r\n}\r\n\r\n.dropdown-submenu {\r\n    position: relative;\r\n}\r\n\r\n.dropdown-submenu .dropdown-menu {\r\n    top: 0;\r\n    left: 100%;\r\n    margin-top: -1px;\r\n}\r\n.navbar .navbar-nav {\r\n  display: inline-block;\r\n  float: none;\r\n  vertical-align: top;\r\n  font-size: 16px;\r\n  margin: 0px 0px 0px 0px;\r\n}\r\n\r\n.navbar .navbar-collapse {\r\n  text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<<html lang=\"en\">\r\n<head>\r\n\r\n  <meta charset=\"utf-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\r\n  <link href=\"https://fonts.googleapis.com/css?family=Lato\" rel=\"stylesheet\" type=\"text/css\">\r\n  <link href=\"https://fonts.googleapis.com/css?family=Muli\" rel=\"stylesheet\" type=\"text/css\">\r\n  <link href=\"https://fonts.googleapis.com/css?family=Montserrat\" rel=\"stylesheet\" type=\"text/css\">\r\n\r\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\r\n  <style>\r\n  body {\r\n      font: 400 15px/1.8 Lato, sans-serif;\r\n      color: #777;\r\n  }\r\n  h3, h4 {\r\n      margin: 10px 0 30px 0;\r\n      letter-spacing: 10px;\r\n      font-size: 20px;\r\n      color: #111;\r\n  }\r\n  .container {\r\n      padding: 80px 120px;\r\n  }\r\n  .person {\r\n      border: 10px solid transparent;\r\n      margin-bottom: 25px;\r\n      width: 80%;\r\n      height: 80%;\r\n      opacity: 0.7;\r\n  }\r\n  .person:hover {\r\n      border-color: #f1f1f1;\r\n  }\r\n  .carousel-inner img {\r\n      -webkit-filter: grayscale(90%);\r\n      filter: grayscale(90%); /* make all photos black and white */\r\n      width: 100%; /* Set width to 100% */\r\n      margin: auto;\r\n  }\r\n  .carousel-caption h3 {\r\n      color: #fff !important;\r\n  }\r\n  @media (max-width: 600px) {\r\n    .carousel-caption {\r\n      display: none; /* Hide the carousel text when the screen is less than 600 pixels wide */\r\n    }\r\n  }\r\n  .bg-1 {\r\n      background: #2d2d30;\r\n      color: #bdbdbd;\r\n  }\r\n  .bg-1 h3 {color: #fff;}\r\n  .bg-1 p {font-style: italic;}\r\n  .list-group-item:first-child {\r\n      border-top-right-radius: 0;\r\n      border-top-left-radius: 0;\r\n  }\r\n  .list-group-item:last-child {\r\n      border-bottom-right-radius: 0;\r\n      border-bottom-left-radius: 0;\r\n  }\r\n  .thumbnail {\r\n      padding: 0 0 15px 0;\r\n      border: none;\r\n      border-radius: 0;\r\n  }\r\n  .thumbnail p {\r\n      margin-top: 15px;\r\n      color: #555;\r\n  }\r\n  .btn {\r\n      padding: 10px 20px;\r\n      background-color: #333;\r\n      color: #f1f1f1;\r\n      border-radius: 0;\r\n      transition: .2s;\r\n  }\r\n  .btn:hover, .btn:focus {\r\n      border: 1px solid #333;\r\n      background-color: #fff;\r\n      color: #000;\r\n  }\r\n  .modal-header, h4, .close {\r\n      background-color: #333;\r\n      color: #fff !important;\r\n      text-align: center;\r\n      font-size: 30px;\r\n  }\r\n  .modal-header, .modal-body {\r\n      padding: 40px 50px;\r\n  }\r\n  .nav-tabs li a {\r\n      color: #777;\r\n  }\r\n\r\n  .navbar {\r\n      font-family: Muli, sans-serif;\r\n      margin-bottom: 0;\r\n      background-color: #2d2d30;\r\n      border: 0;\r\n      font-size: 11px !important;\r\n      letter-spacing: 1px;\r\n      opacity: 1.0;\r\n  }\r\n  .navbar li a, .navbar .navbar-brand {\r\n      color: #848383 !important;\r\n  }\r\n  .navbar li b, .navbar .navbar-brand {\r\n      color: #e8c63e !important;\r\n  }\r\n  .navbar-nav li a:hover {\r\n      color: #fff !important;\r\n  }\r\n  .navbar-nav li.active a {\r\n      color: #fff !important;\r\n      background-color: #282727 !important;\r\n  }\r\n  .navbar-default .navbar-toggle {\r\n      border-color: transparent;\r\n  }\r\n  .open .dropdown-toggle {\r\n      color: #fff;\r\n      background-color: #555 !important;\r\n  }\r\n\r\n  </style>\r\n</head>\r\n<body id=\"myPage\" data-spy=\"scroll\" data-target=\".navbar\" data-offset=\"50\">\r\n\r\n<nav class=\"navbar navbar-default navbar-fixed-top\">\r\n\t<div class=\"container-fluid\">\r\n\t\t<div class=\"navbar-header\">\r\n\t\t\t<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      \t\t</button>\r\n\t\t\t<a routerLink=\"/\" class=\"navbar-brand\"> BTA</a>\r\n\t\t</div>\r\n\t\t<div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n\t\t\t<ul class=\"nav navbar-nav navbar-right\">\r\n\t\t\t\t<li class=\"{{brightDoH}}\"><a routerLink=\"/\" (click)=\"onClickH()\">Home</a></li>\r\n\t\t\t\t<li class=\"{{brightDoD}}\"><a routerLink=\"/searchplace\" (click)=\"onClickD()\">Destination</a></li>\r\n\t\t\t\t<li class=\"{{brightDoR}}\" *ngIf=\"message=='Login'\"><a routerLink=\"/login\" (click)=\"onClickH()\">Route</a></li>\r\n\t\t\t\t<li class=\"{{brightDoR}}\" *ngIf=\"message!='Login'\"><a routerLink=\"/routeinfo\" (click)=\"onClickR()\">Route</a></li>\r\n\t\t\t\t<li class=\"{{brightDoE}}\"><a routerLink=\"/events\"(click)=\"onClickE()\">Events</a></li>\r\n\t\t\t</ul>\r\n\t\t\t<span *ngIf=\"message=='Login'\">\r\n\t\t\t\t<ul class=\"nav navbar-nav navbar-right\">\r\n\t\t\t\t\t<li class=\"{{brightDoL}}\">\r\n\t\t\t\t\t\t\t<a routerLink=\"/login\" class=\"dropdown-toggle\" role=\"button\" (click)=\"onClickL()\"><span class=\"glyphicon glyphicon-user\"></span> {{message}}</a>\r\n\t\t\t\t\t\t<ul class=\"dropdown-menu\">\r\n\t\t\t\t\t\t\t<li>Favorite</li>\r\n\t\t\t\t\t\t\t<li>History</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</span>\r\n\t\t\t<span *ngIf=\"message!='Login'\">\r\n\t\t\t\t<ul class=\"nav navbar-nav navbar-right\">\r\n\t\t\t\t\t<li class=\"{{brightDoL}}\">\r\n\t\t\t\t\t\t\t<a routerLink=\"/profile\" class=\"dropdown-toggle\" role=\"button\" (click)=\"onClickL()\"><span class=\"glyphicon glyphicon-user\"></span> {{user}}</a>\r\n\t\t\t\t\t\t<ul class=\"dropdown-menu\">\r\n\t\t\t\t\t\t\t<li>Favorite</li>\r\n\t\t\t\t\t\t\t<li>History</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t</div>\r\n</nav>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__server_service__ = __webpack_require__("../../../../../src/app/server.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(data, serverService) {
        this.data = data;
        this.serverService = serverService;
        this.title = 'Bangkok Traveling Assistance';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentMessage.subscribe(function (message) {
            _this.message = message;
            _this.getUser();
        });
    };
    AppComponent.prototype.onClickH = function () {
        this.brightDoH = "active";
        this.brightDoD = "";
        this.brightDoR = "";
        this.brightDoE = "";
        this.brightDoL = "";
    };
    AppComponent.prototype.onClickD = function () {
        this.brightDoD = "active";
        this.brightDoH = "";
        this.brightDoR = "";
        this.brightDoE = "";
        this.brightDoL = "";
    };
    AppComponent.prototype.onClickR = function () {
        this.brightDoR = "active";
        this.brightDoH = "";
        this.brightDoD = "";
        this.brightDoE = "";
        this.brightDoL = "";
    };
    AppComponent.prototype.onClickE = function () {
        this.brightDoE = "active";
        this.brightDoH = "";
        this.brightDoD = "";
        this.brightDoR = "";
        this.brightDoL = "";
    };
    AppComponent.prototype.onClickL = function () {
        this.brightDoL = "active";
        this.brightDoH = "";
        this.brightDoD = "";
        this.brightDoR = "";
        this.brightDoE = "";
    };
    AppComponent.prototype.getUser = function () {
        var _this = this;
        this.serverService.getUser(this.message)
            .subscribe(function (res) { return _this.user = res.json()[0].name; });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_2__server_service__["a" /* ServerService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agm_snazzy_info_window__ = __webpack_require__("../../../../@agm/snazzy-info-window/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_google_signin__ = __webpack_require__("../../../../angular-google-signin/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_google_signin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular_google_signin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__server_service__ = __webpack_require__("../../../../../src/app/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__add_place_add_place_component__ = __webpack_require__("../../../../../src/app/add-place/add-place.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__show_event_show_event_component__ = __webpack_require__("../../../../../src/app/show-event/show-event.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__place_detail_place_detail_component__ = __webpack_require__("../../../../../src/app/place-detail/place-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__search_place_search_place_component__ = __webpack_require__("../../../../../src/app/search-place/search-place.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__type_result_type_result_component__ = __webpack_require__("../../../../../src/app/type-result/type-result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__route_info_route_info_component__ = __webpack_require__("../../../../../src/app/route-info/route-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__login_page_login_page_component__ = __webpack_require__("../../../../../src/app/login-page/login-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__add_event_add_event_component__ = __webpack_require__("../../../../../src/app/add-event/add-event.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__event_detail_event_detail_component__ = __webpack_require__("../../../../../src/app/event-detail/event-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__admin_main_admin_main_component__ = __webpack_require__("../../../../../src/app/admin-main/admin-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__admin_places_admin_places_component__ = __webpack_require__("../../../../../src/app/admin-places/admin-places.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__admin_events_admin_events_component__ = __webpack_require__("../../../../../src/app/admin-events/admin-events.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__route_detail_route_detail_component__ = __webpack_require__("../../../../../src/app/route-detail/route-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__give_feedback_give_feedback_component__ = __webpack_require__("../../../../../src/app/give-feedback/give-feedback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__edit_place_edit_place_component__ = __webpack_require__("../../../../../src/app/edit-place/edit-place.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__home_page_home_page_component__ = __webpack_require__("../../../../../src/app/home-page/home-page.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__add_place_add_place_component__["a" /* AddPlaceComponent */],
                __WEBPACK_IMPORTED_MODULE_12__show_event_show_event_component__["a" /* ShowEventComponent */],
                __WEBPACK_IMPORTED_MODULE_13__place_detail_place_detail_component__["a" /* PlaceDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_15__search_place_search_place_component__["a" /* SearchPlaceComponent */],
                __WEBPACK_IMPORTED_MODULE_16__type_result_type_result_component__["a" /* TypeResultComponent */],
                __WEBPACK_IMPORTED_MODULE_17__route_info_route_info_component__["a" /* RouteInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_18__login_page_login_page_component__["a" /* LoginPageComponent */],
                __WEBPACK_IMPORTED_MODULE_6_angular_google_signin__["GoogleSignInComponent"],
                __WEBPACK_IMPORTED_MODULE_19__add_event_add_event_component__["a" /* AddEventComponent */],
                __WEBPACK_IMPORTED_MODULE_20__event_detail_event_detail_component__["a" /* EventDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_21__admin_main_admin_main_component__["a" /* AdminMainComponent */],
                __WEBPACK_IMPORTED_MODULE_22__admin_places_admin_places_component__["a" /* AdminPlacesComponent */],
                __WEBPACK_IMPORTED_MODULE_23__admin_events_admin_events_component__["a" /* AdminEventsComponent */],
                __WEBPACK_IMPORTED_MODULE_24__route_detail_route_detail_component__["a" /* RouteDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_25__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_26__give_feedback_give_feedback_component__["a" /* GiveFeedbackComponent */],
                __WEBPACK_IMPORTED_MODULE_27__edit_place_edit_place_component__["a" /* EditPlaceComponent */],
                __WEBPACK_IMPORTED_MODULE_28__home_page_home_page_component__["a" /* HomePageComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_14__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyCYae9TLSPJfrpqsEZ82H5LetPE9SoULM0'
                }),
                __WEBPACK_IMPORTED_MODULE_3__agm_snazzy_info_window__["a" /* AgmSnazzyInfoWindowModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__server_service__["a" /* ServerService */], __WEBPACK_IMPORTED_MODULE_10__data_service__["a" /* DataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = (function () {
    function DataService() {
        this.messageSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]("Login");
        this.currentMessage = this.messageSource.asObservable();
    }
    DataService.prototype.changeMessage = function (message) {
        this.messageSource.next(message);
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/edit-place/edit-place.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit-place/edit-place.component.html":
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\r\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n<div>\r\n\t<img src=\"/assets/bg.jpg\" style=\"width:100%; margin-top: -100px; position: absolute;\" > \r\n<div class=\"container\" style=\"margin-top: 60px\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\r\n      <h3> <i class=\"material-icons\" style=\"font-size:20px;color:darkred;\">build</i> Edit Place</h3>\r\n        <div>\r\n            <!-- <button type=\"button\" class=\"btn btn-success pull-right\" style=\"margin: -45px 263px 0px 0px\" (click)=\"validate()\">Validate</button>\r\n            <button type=\"button\" class=\"btn btn-danger pull-right\" style=\"margin: -45px 193px 0px 0px\" (click)=\"delete()\">Delete</button> -->\r\n            <button type=\"button\" class=\"btn btn-warning pull-right\" style=\"margin: -45px 132px 0px 0px\" (click)=\"reviewChange()\"[disabled]=\"!f.valid\">Save+View</button>\r\n            <button type=\"button\" class=\"btn btn-default pull-right\" style=\"margin: -45px 20px 0px 0px\" (click)=\"goBack()\">Back</button>\r\n        </div>\r\n      <hr>\r\n      <form (ngSubmit)=\"onSubmit()\" #f=\"ngForm\">\r\n        <div class=\"row\">\r\n          <h3>{{eplace.placeName}}</h3>\r\n          <div class=\"col-sm-6\">\r\n            <div class=\"form-group\" style=\"margin-left: 16px\">\r\n              \r\n              <label for=\"placeName\">Place Name</label>\r\n              <input type=\"text\" id=\"placeName\" class=\"form-control\" [(ngModel)]=\"eplace.placeName\" name=\"placeName\" required>\r\n            </div>\r\n          </div>\r\n          <!-- <div class=\"col-sm-6\">\r\n            <button type=\"button\" class=\"btn btn-link\" style=\"margin: 23px 0px 0px -20px\" (click)=\"addMoreName()\"> More names</button>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"moreName\">\r\n          <div class=\"col-sm-4\">\r\n            <div class=\"form-group\">\r\n              <label for=\"placeName2\">\r\n                <small style=\"color: grey\">Name 2</small>\r\n              </label>\r\n              <input type=\"text\" id=\"placeName2\" class=\"form-control\" [(ngModel)]=\"eplace.names[0]\" name=\"placeName2\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-4\">\r\n            <div class=\"form-group\">\r\n              <label for=\"placeName3\">\r\n                <small style=\"color: grey\">Name 3</small>\r\n              </label>\r\n              <input type=\"text\" id=\"placeName3\" class=\"form-control\" [(ngModel)]=\"eplace.placeName[1]\" name=\"placeName3\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-4\">\r\n            <div class=\"form-group\">\r\n              <label for=\"placeName4\">\r\n                <small style=\"color: grey\">Name 4</small>\r\n              </label>\r\n              <input type=\"text\" id=\"placeName4\" class=\"form-control\" [(ngModel)]=\"eplace.placeName[2]\" name=\"placeName4\">\r\n            </div>\r\n          </div> -->\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"form-group\">\r\n            <label for=\"type\">Type:</label>\r\n            <select class=\"form-control\" id=\"type\" [(ngModel)]=\"eplace.type\" name=\"type\" required>\r\n              <option value=\"temple\">Temple</option>\r\n              <option value=\"palace\">Palace</option>\r\n              <option value=\"shopping\">Shopping</option>\r\n              <option value=\"park\">Park</option>\r\n              <option value=\"street\">Street</option>\r\n              <option value=\"other\">Other</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"form-group\">\r\n            <label for=\"area\">Area</label>\r\n            <input type=\"text\" id=\"area\" class=\"form-control\" [(ngModel)]=\"eplace.area\" name=\"area\" required>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"form-group\">\r\n            <label for=\"cost\">Cost</label>\r\n            <input type=\"text\" id=\"cost\" class=\"form-control\" [(ngModel)]=\"eplace.cost\" name=\"cost\" required>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"form-group\">\r\n            <label for=\"operDay\">Operating Days</label>\r\n            <input type=\"text\" id=\"operDay\" class=\"form-control\" [(ngModel)]=\"eplace.operDay\" name=\"operDay\" required>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"form-group\">\r\n            <label for=\"operTime\">Operating Time</label>\r\n            <input type=\"text\" id=\"operTime\" class=\"form-control\" [(ngModel)]=\"eplace.operTime\" name=\"operTime\" required>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"form-group\">\r\n            <label for=\"suggTime\">Suggested Time</label>\r\n            <input type=\"text\" id=\"suggTime\" class=\"form-control\" [(ngModel)]=\"eplace.suggTime\" name=\"suggTime\" required>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"tansportation\">Transportation</label>\r\n            <input type=\"text\" id=\"transportation\" class=\"form-control\" [(ngModel)]=\"eplace.transportation\" name=\"transportation\" required>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"description\">Description</label>\r\n            <textarea type=\"text\" id=\"description\" class=\"form-control\" [(ngModel)]=\"eplace.description\" name=\"description\" required></textarea>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"coordinates\">Google Coordinates</label>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6\"> \r\n                Latitude\r\n                <input type=\"text\" id=\"lat\" class=\"form-control\" [(ngModel)]=\"lat\" name=\"lat\" required>\r\n              </div>\r\n              <div class=\"col-sm-6\"> \r\n                Longtitude\r\n                <input type=\"text\" id=\"lng\" class=\"form-control\" [(ngModel)]=\"lng\" name=\"lng\" required>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"picture\">Please upload pictures</label>\r\n            <div style=\"margin-bottom: 10px;\">\r\n              <img *ngFor=\"let url of urls\" [src]=\"url\" width=\"170\" height=\"110\" style=\"margin: 4px\" >\r\n              \r\n               <i *ngIf=\"Upload\" class=\"fa-rotate-180 material-icons\" style=\"fontsize:10px; display: inline;\">chevron_left chevron_left</i>\r\n              <img  [ngStyle]=\"{opacity: Upload? 0.4 : 0.7}\"\r\n                    [src]=\"imageData\" width=\"170\" height=\"110\" style=\"margin: 4px; display: inline;\">\r\n              <small *ngIf=\"Upload\" style=\"color:cornflowerblue; font-size: 1.5em ; opacity:0.7;\">(Old)</small>\r\n              <input type=\"file\" multiple (change)=\"detectFiles($event)\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <button class=\"btn btn-primary\" style=\"margin-left: 16px;\" type=\"submit\" [disabled]=\"!f.valid\"> Submit </button>\r\n        <button class=\"btn btn-debug\" type=\"button\" (click)=\"onReset()\"> Reset </button>\r\n      </form>\r\n    </div>\r\n    <hr>\r\n</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/edit-place/edit-place.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPlaceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__server_service__ = __webpack_require__("../../../../../src/app/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditPlaceComponent = (function () {
    function EditPlaceComponent(router, route, sanitizer, serverService, http, data) {
        this.router = router;
        this.route = route;
        this.sanitizer = sanitizer;
        this.serverService = serverService;
        this.http = http;
        this.data = data;
        this.eplace = {
            //names: [],
            placeName: '',
            type: '',
            operDay: '',
            operTime: '',
            suggTime: '',
            area: '',
            cost: '',
            transportation: '',
            description: '',
            lat: 1.0,
            lng: 1.0
        };
        this.name = [];
        this.urls = new Array();
        this.submitted = false;
        //moreName: boolean = false;
        this.filesToUpload = [];
        this.Upload = false;
    }
    EditPlaceComponent.prototype.ngOnInit = function () {
        this.getPlace();
        this.id = +this.route.snapshot.paramMap.get('id');
        // this.eplace = {
        //   placeName: 'this.place[0].placeName',
        //   type: 'this.place[0].type',
        //   operDay: 'this.place[0].operDay',
        //   operTime: 'this.place[0].operTime',
        //   suggTime: 'this.place[0].suggTime',
        //   area: 'this.place[0].area',
        //   cost: 'this.place[0].cost',
        //   transportation: 'this.place[0].transportation',
        //   description: 'this.place[0].description'
        // };
        console.log('this.eplace');
        console.log(this.eplace);
    };
    // addMoreName() {
    //   if(this.moreName==false) this.moreName = true;
    //   else this.moreName = false;
    // }
    EditPlaceComponent.prototype.getPlace = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.serverService.getPlace(id)
            .subscribe(function (res) {
            console.log(res);
            var data = res.json();
            _this.place = data;
            _this.eplace = {
                placeName: _this.place[0].name,
                //names: [],
                type: _this.place[0].type.toLowerCase(),
                operDay: _this.place[0].operDate,
                operTime: _this.place[0].operTime,
                suggTime: _this.place[0].suggTime,
                area: _this.place[0].zone,
                cost: _this.place[0].cost,
                transportation: _this.place[0].transportation,
                description: _this.place[0].description,
                lat: parseFloat(_this.place[0].lat),
                lng: parseFloat(_this.place[0].lng)
            };
            //   for(var i=0; i<this.eplace.names.length; i++) {
            //     if(this.eplace.names[i]!='') {
            //     }
            //   }
            // //   this.serverService.getNames(res.json()[0].attID)
            // //   .subscribe(
            // //       (res) => {
            // //         console.log(res);
            // //       }
            // // ,(error) => console.log('error')
            // // );
            //console.log(typeof(this.place[0]));
            _this.lat = parseFloat(_this.place[0].lat);
            _this.lng = parseFloat(_this.place[0].lng);
        }, function (error) { return console.log('error'); });
        this.serverService.getImage(id)
            .toPromise()
            .then(function (res) {
            var blob = new Blob([res._body], {
                type: res.headers.get("Content-Type")
            });
            var urlCreator = window.URL;
            _this.imageData = _this.sanitizer.bypassSecurityTrustUrl(urlCreator.createObjectURL(blob));
            console.log(_this.imageData);
        });
    };
    EditPlaceComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.editSubmit();
    };
    EditPlaceComponent.prototype.editSubmit = function () {
        var _this = this;
        this.place.placeName = this.addPlaceForm.value.placeName;
        this.place.type = this.addPlaceForm.value.type;
        this.place.operDay = this.addPlaceForm.value.operDay;
        this.place.operTime = this.addPlaceForm.value.operTime;
        this.place.suggTime = this.addPlaceForm.value.suggTime;
        this.place.area = this.addPlaceForm.value.area;
        this.place.cost = this.addPlaceForm.value.cost;
        this.place.transportation = this.addPlaceForm.value.transportation;
        this.place.description = this.addPlaceForm.value.description;
        this.place.lat = this.addPlaceForm.value.lat;
        this.place.lng = this.addPlaceForm.value.lng;
        this.name.push(this.addPlaceForm.value.placeName2);
        this.name.push(this.addPlaceForm.value.placeName3);
        this.name.push(this.addPlaceForm.value.placeName4);
        this.eplace.lng = this.lng;
        this.eplace.lat = this.lat;
        this.serverService.editPlace(this.eplace, this.route.snapshot.paramMap.get('id'))
            .subscribe(function (res) {
            console.log(res.json()[0]),
                _this.upload(res.json()[0].attID);
            //  for(var i=1; i<this.name.length; i++) {
            //    if(this.name[i]!='') this.serverService.editName(this.place[0].attID, this.eplace.names[i],this.place[0]);
            //  }
        }, function (err) { return console.log('err'); });
    };
    EditPlaceComponent.prototype.detectFiles = function (event) {
        var _this = this;
        this.filesToUpload = event.target.files;
        this.urls = [];
        var files = event.target.files;
        if (files) {
            for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
                var file = files_1[_i];
                var reader = new FileReader();
                reader.onload = function (e) {
                    _this.urls.push(e.target.result);
                };
                reader.readAsDataURL(file);
            }
            console.log(this.urls);
            this.Upload = true;
        }
    };
    EditPlaceComponent.prototype.setName = function (i, att) {
        this.serverService.setName(this.name[i], att)
            .subscribe(function (res) { return console.log('yey'); });
    };
    EditPlaceComponent.prototype.upload = function (id) {
        var _this = this;
        var formData = new FormData();
        var files = this.filesToUpload;
        console.log(files);
        for (var i = 0; i < files.length; i++) {
            formData.append("uploads[]", files[i], files[i]['name']);
        }
        console.log('form data variable :   ' + formData.toString());
        this.serverService.uploadImage(id, formData)
            .subscribe(function (files) {
            if (_this.submitted) {
                _this.router.navigate(['/admin/places']);
            }
            alert("Success adding the place");
        });
    };
    EditPlaceComponent.prototype.goBack = function () {
        this.router.navigate(['/admin/places']);
    };
    EditPlaceComponent.prototype.reviewChange = function () {
        this.editSubmit();
        this.router.navigate(['/detail/' + this.route.snapshot.paramMap.get('id')]);
    };
    EditPlaceComponent.prototype.onReset = function () {
        this.submitted = false;
        this.Upload = false;
        this.urls = [];
        this.addPlaceForm.reset();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* NgForm */])
    ], EditPlaceComponent.prototype, "addPlaceForm", void 0);
    EditPlaceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-place',
            template: __webpack_require__("../../../../../src/app/edit-place/edit-place.component.html"),
            styles: [__webpack_require__("../../../../../src/app/edit-place/edit-place.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_3__server_service__["a" /* ServerService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */]])
    ], EditPlaceComponent);
    return EditPlaceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/event-detail/event-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/event-detail/event-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\r\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n<div>\r\n\t<img src=\"/assets/bg.jpg\" style=\"width:100%; margin-top: -100px; position: absolute;\" > \r\n<div *ngIf=\"place\">\r\n\r\n<div class=\"container\" style=\"margin-top: 60px\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12 col-sm-10 col-md-10 col-sm-offset-1 col-md-offset-1 \">\r\n    <div style=\"padding-left:20px\">\r\n      <h2>{{ place[0].name }}</h2>\r\n    </div>\r\n    <div *ngIf=\"place[0].validated=='N'\">\r\n      <button type=\"button\" class=\"btn btn-success pull-right\" style=\"margin: -45px 263px 0px 0px\" (click)=\"validate()\">Validate</button>\r\n      <button type=\"button\" class=\"btn btn-warning pull-right\" style=\"margin: -45px 201px 0px 0px\" (click)=\"edit()\">Edit</button>\r\n      <button type=\"button\" class=\"btn btn-danger pull-right\" style=\"margin: -45px 123px 0px 0px\" (click)=\"delete()\">Delete</button>\r\n    </div>\r\n\t  <button type=\"button\" class=\"btn btn-default pull-right\" style=\"margin: -45px 53px 0px 0px\" (click)=\"goBack()\">Back</button>\r\n      <hr>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-5\" style=\"height: 250px;\">\r\n        \t<img [src]=\"imageData\" style=\"width: 100%;\">\r\n        </div>\r\n\r\n        <!-- <div class=\"row\">\r\n  \t      <div style=\"height: 250px;\">\r\n  \t      \t<img [src]=\"imageData\" style=\"height: 100%; display: block; margin-left: auto; margin-right: auto;\">\r\n  \t      </div>\r\n  \t  </div> -->\r\n\r\n\r\n        <div class=\"col-sm-7\">\r\n    \t\t  <div class=\"row\" style=\"margin: -15px 6px 10px 6px;\">\r\n        \t\t<h3>Overview</h3>\r\n  \t  \t  \t<div><span>{{ place[0].description }}</span></div>\r\n  \t  \t  </div>\r\n\r\n          <div class=\"row\" style=\"margin: 0px 2px 10px 2px;\">\r\n              <div class=\"col-sm-6\">\r\n                <h4><span class=\"glyphicon glyphicon-calendar\"></span> Operating Day</h4>\r\n              <div><span>{{ place[0].operDate }}</span></div>\r\n              </div>\r\n              <div class=\"col-sm-6\">\r\n                <h4><span class=\"glyphicon glyphicon-time\"></span> Operating Time</h4>\r\n              <div><span>{{ place[0].operTime }}</span></div>\r\n              </div>\r\n          </div>\r\n\r\n          <div class=\"row\" style=\"margin: 0px 2px 10px 2px;\">\r\n              <div class=\"col-sm-6\">\r\n                <h4><i class=\"fa fa-money\" style=\"font-size:24px\"></i> Cost</h4>\r\n              <div><span>{{ place[0].cost }}</span></div>\r\n              </div>\r\n              <div class=\"col-sm-6\">\r\n                <h4><i class=\"fa fa-map-marker\" style=\"font-size:24px\"></i> Zone</h4>\r\n              <div><span>{{ place[0].zone }}</span></div>\r\n              </div>\r\n          </div>\r\n  \t    </div>\r\n      </div>\r\n\r\n      <!-- Starting the Gmap -->\r\n      <div id=\"map\" class=\"col-sm-12\" style=\"margin: 30px 0px 30px 0px;\">\r\n        <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=16>\r\n          <agm-marker\r\n          [latitude]=\"lat\"\r\n          [longitude]=\"lng\"\r\n          ></agm-marker>\r\n        </agm-map>\r\n      </div>\r\n\r\n\r\n\t  <!-- <div class=\"col-sm-12\">\r\n\t    <h3>Comments</h3>\r\n    \t<div class=\"col inline\" *ngFor=\"let comment of comments\">\r\n\t\t    <blockquote>\r\n\t\t\t    <p>{{comment.feedback}}</p>\r\n\t\t\t    <footer>{{comment.name}}</footer>\r\n          <p class=\"pull-right\" style=\"margin-top:-20px; color: darkblue\">Rated <b>{{comment.rating}}%</b></p>\r\n\t\t\t</blockquote>\r\n\t\t</div>\r\n\t  </div> -->\r\n\t</div>\r\n  </div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/event-detail/event-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__server_service__ = __webpack_require__("../../../../../src/app/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EventDetailComponent = (function () {
    function EventDetailComponent(router, route, location, sanitizer, serverService, data) {
        this.router = router;
        this.route = route;
        this.location = location;
        this.sanitizer = sanitizer;
        this.serverService = serverService;
        this.data = data;
        this.user = '';
        this.favorite = true;
    }
    EventDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentMessage.subscribe(function (message) { return _this.user = message; });
        this.getPlace();
    };
    EventDetailComponent.prototype.getPlace = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.serverService.getEvent(id)
            .subscribe(function (res) {
            console.log(res);
            var data = res.json();
            _this.place = data;
            _this.lat = parseFloat(_this.place[0].lat);
            _this.lng = parseFloat(_this.place[0].lng);
        }, function (error) { return console.log('error'); });
        this.serverService.getEventImage(id)
            .toPromise()
            .then(function (res) {
            var blob = new Blob([res._body], {
                type: res.headers.get("Content-Type")
            });
            var urlCreator = window.URL;
            _this.imageData = _this.sanitizer.bypassSecurityTrustUrl(urlCreator.createObjectURL(blob));
            console.log(_this.imageData);
        });
        this.serverService.getComments(id)
            .subscribe(function (res) {
            console.log(res.json());
            _this.comments = res.json();
        });
        this.serverService.checkFav(this.user, id)
            .subscribe(function (res) {
            console.log(res.json());
            if (res.json()[0].count == 0)
                _this.favorite = true;
            else
                _this.favorite = false;
        });
    };
    EventDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    EventDetailComponent.prototype.validate = function () {
        var _this = this;
        this.serverService.valEvent(this.route.snapshot.paramMap.get('id'))
            .subscribe(function (res) {
            alert('This event is validated.');
            _this.router.navigate(['/admin/main']);
        });
    };
    EventDetailComponent.prototype.edit = function () {
    };
    EventDetailComponent.prototype.delete = function () {
        var _this = this;
        this.serverService.delEvent(this.route.snapshot.paramMap.get('id'))
            .subscribe(function (res) {
            alert('This event is deleted.');
            _this.router.navigate(['/admin/main']);
        });
    };
    EventDetailComponent.prototype.favorites = function () {
        if (this.favorite == false) {
            this.serverService.addFav(this.user, this.route.snapshot.paramMap.get('id'))
                .subscribe(function (res) {
                console.log('success add favorite');
            });
            this.favorite = true;
        }
        else {
            this.serverService.removeFav(this.user, this.route.snapshot.paramMap.get('id'))
                .subscribe(function (res) {
                console.log('success add favorite');
            });
            this.favorite = false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], EventDetailComponent.prototype, "place", void 0);
    EventDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-event-detail',
            template: __webpack_require__("../../../../../src/app/event-detail/event-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/event-detail/event-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1__server_service__["a" /* ServerService */],
            __WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */]])
    ], EventDetailComponent);
    return EventDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/give-feedback/give-feedback.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/give-feedback/give-feedback.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: 60px\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\r\n    \t<h2>Your feedback means a lot to other people...</h2>\r\n    \t<hr>\r\n      <form (ngSubmit)=\"onSubmit()\" #f=\"ngForm\">\r\n    \t<h3>Overall trip:</h3>\r\n\r\n\t\t\t\t\t\t<span class=\"col inline pul\" *ngFor=\"let star of stars[0]; index as j;\" style=\"color: #444; font-size: 28px;\">\r\n\t\t\t\t\t\t\t<span *ngIf=\"star==0\" (click)=\"rated(0,j)\" class=\"glyphicon glyphicon-star-empty\"></span>\r\n\t\t\t\t\t\t\t<span *ngIf=\"star==1\" (click)=\"rated(0,j)\" class=\"glyphicon glyphicon-star\"></span>\r\n\t\t\t\t\t\t</span>\r\n            \t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<textarea placeholder=\"How did you feel about the overall trip.\" style=\"width: 100%; height: 80px\"\r\n\t\t\t\t\t\t\tid=\"0\"\r\n\t               \t\t\tclass=\"form-control\"\r\n\t               \t\t\tngModel\r\n\t               \t\t\tname=\"0\"\r\n\t               \t\t\trequired\r\n\t               \t\t\t#0=\"ngModel\"></textarea>\r\n\t\t\t\t\t\t</div>\r\n    \t<hr>\r\n\t\t<div class=\"col inline\" *ngFor=\"let place of route; index as i;\">\r\n\t\t\t<div class=\"col-sm-12\" style=\"margin-bottom: 5px\">\r\n\t\t\t\t<div class=\"row\" style=\"margin-top: -10px\">\r\n\t\t\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t        <h4 style=\"text-align: left;\">{{i+1}}. {{ place.name }}</h4>\r\n\t\t\t\t    </div>\r\n\t\t\t\t\t<div class=\"col-sm-4\">\r\n\t\t                <img [src]=\"place.img\" style=\"width: 100%; margin-left: 21px;\">\r\n\t\t            </div>\r\n\t\t\t\t\t<div class=\"col-sm-8\" style=\"padding-left: 60px\">\r\n\t\t\t\t\t\t<span class=\"col inline\" *ngFor=\"let star of stars[i+1]; index as j;\" style=\"color: #444; font-size: 22px;\">\r\n\t\t\t\t\t\t\t<span *ngIf=\"star==0\" (click)=\"rated(i+1,j)\" class=\"glyphicon glyphicon-star-empty\"></span>\r\n\t\t\t\t\t\t\t<span *ngIf=\"star==1\" (click)=\"rated(i+1,j)\" class=\"glyphicon glyphicon-star\"></span>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<textarea placeholder=\"How did you feel about going to {{place.name}}.\" style=\"width: 100%; height: 80px\"\r\n\t\t\t\t\t\t\tid=\"{{i+1}}\"\r\n\t               \t\t\tclass=\"form-control\"\r\n\t               \t\t\tngModel\r\n\t               \t\t\tname=\"{{i+1}}\"\r\n\t               \t\t\trequired\r\n\t               \t\t\t#{{i+1}}=\"ngModel\"></textarea>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</div>\r\n\t            </div>\r\n\t                <hr>\r\n        \t</div>\r\n\t\t</div>\r\n\t\t<button class=\"btn btn-primary pull-right\" type=\"submit\" style=\"margin: -10px 20px 100px 0px; font-size: 18px;\" [disabled]=\"!f.valid\">Submit</button>\r\n\t</form>\r\n\t</div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/give-feedback/give-feedback.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GiveFeedbackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__server_service__ = __webpack_require__("../../../../../src/app/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var GiveFeedbackComponent = (function () {
    function GiveFeedbackComponent(routed, serverService, sanitizer, router, data) {
        this.routed = routed;
        this.serverService = serverService;
        this.sanitizer = sanitizer;
        this.router = router;
        this.data = data;
        this.user = '';
        this.stars = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
        this.rate = [0];
        this.comments = '';
    }
    GiveFeedbackComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentMessage.subscribe(function (message) { return _this.user = message; });
        this.getRoute();
    };
    GiveFeedbackComponent.prototype.getRoute = function () {
        var _this = this;
        var id = +this.routed.snapshot.paramMap.get('id');
        this.serverService.getRoute(id)
            .subscribe(function (res) {
            console.log(res);
            var data = res.json();
            _this.route = data;
            console.log(_this.route[0]);
            for (var i = 0; i < _this.route.length; i++) {
                _this.stars.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
                _this.rate.push(0);
                _this.callImage(i);
            }
        });
        console.log(this.stars);
    };
    GiveFeedbackComponent.prototype.callImage = function (count) {
        var _this = this;
        this.serverService.getImage(this.route[count].attID)
            .toPromise()
            .then(function (res) {
            var blob = new Blob([res._body], {
                type: res.headers.get("Content-Type")
            });
            var urlCreator = window.URL;
            _this.imageData = _this.sanitizer.bypassSecurityTrustUrl(urlCreator.createObjectURL(blob));
            _this.route[count]['img'] = _this.imageData;
        });
    };
    GiveFeedbackComponent.prototype.rated = function (i, j) {
        for (var k = 0; k < this.stars[i].length; k++) {
            if (k <= j)
                this.stars[i][k] = 1;
            else
                this.stars[i][k] = 0;
        }
        this.rate[i] = j + 1;
        console.log(this.rate);
    };
    GiveFeedbackComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.rate);
        console.log(this.user);
        this.comments = this.fbForm.value;
        console.log(this.comments[0]);
        this.serverService.commentRoute(this.user, this.routed.snapshot.paramMap.get('id'), this.rate[0] * 10, this.comments[0])
            .subscribe(function (res) {
            alert('Your feedback is successfully submitted.');
            _this.router.navigate(['/profile']);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* NgForm */])
    ], GiveFeedbackComponent.prototype, "fbForm", void 0);
    GiveFeedbackComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-give-feedback',
            template: __webpack_require__("../../../../../src/app/give-feedback/give-feedback.component.html"),
            styles: [__webpack_require__("../../../../../src/app/give-feedback/give-feedback.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__server_service__["a" /* ServerService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */]])
    ], GiveFeedbackComponent);
    return GiveFeedbackComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home-page/home-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home-page/home-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n\t<img src=\"/assets/hp3.jpg\" style=\"width:100%; \" >\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home-page/home-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePageComponent = (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__("../../../../../src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login-page/login-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login-page/login-page.component.html":
/***/ (function(module, exports) {

module.exports = "<script defer src=\"https://apis.google.com/js/platform.js\"></script>\r\n<div class=\"justify-content-center\" style=\"margin-top: 60px\">\r\n</div>\r\n<br>\r\n<br>\r\n<br>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-5\">\r\n    </div>\r\n    <div class=\"col-sm-2\">\r\n\t\t<google-signin\r\n\t\t  [clientId]=\"myClientId\"\r\n\t\t  [width]=\"myWidth\"\r\n\t\t  [theme]=\"myTheme\"\r\n\t\t  [scope]=\"myScope\"\r\n\t\t  [longTitle]=\"myLongTitle\"\r\n\t\t  (googleSignInSuccess)=\"onGoogleSignInSuccess($event)\"\r\n\t\t  (click)=\"signIn()\"\r\n      routerLink=\"/\" >\r\n\t\t</google-signin>\r\n\t\t<button class=\"btn btn-link\"\r\n\t        \ttype=\"submit\"\r\n\t        \t(click)=\"signOut()\">Sign out</button>\r\n\t</div>\r\n    <div class=\"col-sm-5\">\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/login-page/login-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__server_service__ = __webpack_require__("../../../../../src/app/server.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPageComponent = (function () {
    function LoginPageComponent(serverService, data) {
        this.serverService = serverService;
        this.data = data;
        this.message = '';
        this.myClientId = '726620124773-ldsc11opkl7c0fsi3b5gnjum03jdsjmd.apps.googleusercontent.com';
    }
    LoginPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentMessage.subscribe(function (message) { return _this.message = message; });
        this.data.changeMessage(this.message);
    };
    LoginPageComponent.prototype.onGoogleSignInSuccess = function (event) {
        var _this = this;
        var googleUser = event.googleUser;
        var id = googleUser.getId();
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' +
            profile
                .getId()); // Do not send to your backend! Use an ID token instead.
        //this.message = profile.getEmail();
        //this.data.changeMessage(this.message);
        console.log('Name: ' + profile.getName());
        var id_token = googleUser.getAuthResponse().id_token;
        console.log("ID Token: " + id_token);
        this.serverService.token(profile.getEmail(), profile.getName())
            .subscribe(function (res) {
            console.log(res.json()[0].uid);
            _this.message = res.json()[0].uid;
            _this.data.changeMessage(_this.message);
        });
    };
    LoginPageComponent.prototype.signIn = function () {
        this.data.changeMessage(this.message);
    };
    LoginPageComponent.prototype.signOut = function () {
        var auth2 = gapi.auth2.getAuthInstance();
        this.message = 'Login';
        this.data.changeMessage(this.message);
        auth2.signOut().then(function () {
            console.log('User signed out.');
        });
    };
    LoginPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login-page',
            template: __webpack_require__("../../../../../src/app/login-page/login-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login-page/login-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__server_service__["a" /* ServerService */],
            __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], LoginPageComponent);
    return LoginPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/place-detail/place-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "blockquote, blockquote p {\r\n    font-size: 15px;\r\n}\r\nagm-map{\r\n  height: 400px;\r\n  width: 100%;\r\n}\r\n.favpop{\r\n  position: fixed;\r\n  width: 50%;\r\n  height: 50px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/place-detail/place-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\r\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n<div>\r\n    <img src=\"/assets/bg5.jpg\" style=\"width:100%; margin-top: -100px; position: absolute;\" > \r\n<div *ngIf=\"place\">\r\n\r\n<div class=\"container\" style=\"margin-top: 60px\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12 col-sm-10 col-md-10 col-sm-offset-1 col-md-offset-1 \">\r\n      <div style=\"padding-left: 20px\"><h2>{{ place[0].name }}</h2>\r\n      </div>\r\n      \r\n      <div *ngIf=\"place[0].validated=='N'\">\r\n        <button type=\"button\" class=\"btn btn-success pull-right\" style=\"margin: -45px 263px 0px 0px\" (click)=\"validate()\">Validate</button>\r\n        <button type=\"button\" class=\"btn btn-warning pull-right\" style=\"margin: -45px 201px 0px 0px\" (click)=\"edit()\">Edit</button>\r\n        <button type=\"button\" class=\"btn btn-danger pull-right\" style=\"margin: -45px 123px 0px 0px\" (click)=\"delete()\">Delete</button>\r\n      </div>\r\n      <button type=\"button\" class=\"btn btn-default pull-right\" style=\"margin: -45px 53px 0px 0px\" (click)=\"goBack()\">Back</button>\r\n        <hr>\r\n      <div class=\"row\" >\r\n        <div class=\"col-sm-5\" style=\"height: 300px; margin-top: 30px;\" >\r\n        \t<img [src]=\"imageData\" style=\"height: 270px; width: 100%; margin-top: 10px;\">\r\n            <div class=\"favpop alert alert-success \"\r\n               [ngClass]=\"{'favpop alert-danger ': !favsuccess }\"\r\n               *ngIf=\"favclick\">{{favstatus}}\r\n            </div>\r\n        </div>\r\n\r\n        <!-- <div class=\"row\">\r\n  \t      <div style=\"height: 250px;\">\r\n  \t      \t<img [src]=\"imageData\" style=\"height: 100%; display: block; margin-left: auto; margin-right: auto;\">\r\n  \t      </div>\r\n  \t  </div> -->\r\n\r\n\r\n        <div class=\"col-sm-7\">\r\n    \t\t  <div class=\"row\" style=\"margin: -15px 6px 10px 6px;\">\r\n        \t\t<h3>Overview</h3>\r\n            <div *ngIf=\"user!='Login'\">\r\n                <div *ngIf=\"favorite==false\" (click)=\"favorites()\" class=\"pull-right\" style=\"color: orange; font-size: 30px; margin-top: -45px;\">\r\n                <span class=\"glyphicon glyphicon-star\"></span>\r\n            </div>\r\n            <div *ngIf=\"favorite==true\" (click)=\"favorites()\" class=\"pull-right\" style=\"color: orange; font-size: 30px; margin-top: -45px;\">\r\n                <span class=\"glyphicon glyphicon-star-empty\"></span>\r\n            </div>\r\n          </div>\r\n            <div><span>{{ place[0].description }} </span> \r\n              <hr> <b>Transportation</b><br>\r\n              <span style=\" font-size: 15px;\"> {{ place[0].transportation }}</span>\r\n              <hr>\r\n            </div>\r\n  \t  \t  </div>\r\n\r\n          <div class=\"row\" style=\"margin: 0px 2px 10px 2px;\">\r\n              <div class=\"col-sm-6\">\r\n                <h4><span class=\"glyphicon glyphicon-calendar\"></span> Operating Day</h4>\r\n              <div><span>{{ place[0].operDate }}</span></div>\r\n              </div>\r\n              <div class=\"col-sm-6\">\r\n                <h4><span class=\"glyphicon glyphicon-time\"></span> Operating Time</h4>\r\n              <div><span>{{ place[0].operTime }}</span></div>\r\n              </div>\r\n          </div>\r\n\r\n          <div class=\"row\" style=\"margin: 0px 2px 10px 2px;\">\r\n              <div class=\"col-sm-6\">\r\n                <h4><i class=\"fa fa-money\" style=\"font-size:24px\"></i> Cost</h4>\r\n              <div><span>{{ place[0].cost }}</span></div>\r\n              </div>\r\n              <div class=\"col-sm-6\">\r\n                <h4><i class=\"fa fa-map-marker\" style=\"font-size:24px\"></i> Zone</h4>\r\n              <div><span>{{ place[0].zone }}</span></div>\r\n              </div>\r\n          </div>\r\n  \t    </div>\r\n      </div>\r\n\r\n      <!-- Starting the Gmap -->\r\n      <div id=\"map\" class=\"col-sm-12\" style=\"margin: 30px 0px 30px 0px;\">\r\n        <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=16>\r\n          <agm-marker\r\n          [latitude]=\"lat\"\r\n          [longitude]=\"lng\"\r\n          ></agm-marker>\r\n        </agm-map>\r\n      </div>\r\n\r\n\r\n      <div class=\"col-sm-12\">\r\n        <h3>Comments</h3>\r\n        <div class=\"col inline\" *ngFor=\"let comment of comments\">\r\n          <blockquote>\r\n            <p>{{comment.feedback}}</p>\r\n            <footer>{{comment.name}}</footer>\r\n            <footer>{{comment.date}}</footer>\r\n            <p class=\"pull-right\" style=\"margin-top:-20px; color: darkblue\">Rated <b>{{comment.rating}}%</b></p>\r\n        </blockquote>\r\n        </div>\r\n\t    </div>\r\n\t</div>\r\n  </div>\r\n\r\n</div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/place-detail/place-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__server_service__ = __webpack_require__("../../../../../src/app/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PlaceDetailComponent = (function () {
    function PlaceDetailComponent(router, route, location, sanitizer, serverService, data) {
        this.router = router;
        this.route = route;
        this.location = location;
        this.sanitizer = sanitizer;
        this.serverService = serverService;
        this.data = data;
        this.user = '';
        this.favorite = true;
        this.favclick = false;
        this.favsuccess = true;
        this.favstatus = '';
        this.editMode = false;
    }
    PlaceDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentMessage.subscribe(function (message) { return _this.user = message; });
        this.id = +this.route.snapshot.paramMap.get('id');
        this.getPlace();
    };
    PlaceDetailComponent.prototype.getPlace = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.serverService.getPlace(id)
            .subscribe(function (res) {
            console.log(res);
            var data = res.json();
            _this.place = data;
            _this.lat = parseFloat(_this.place[0].lat);
            _this.lng = parseFloat(_this.place[0].lng);
        }, function (error) { return console.log('error'); });
        this.serverService.getImage(id)
            .toPromise()
            .then(function (res) {
            var blob = new Blob([res._body], {
                type: res.headers.get("Content-Type")
            });
            var urlCreator = window.URL;
            _this.imageData = _this.sanitizer.bypassSecurityTrustUrl(urlCreator.createObjectURL(blob));
            console.log(_this.imageData);
        });
        this.serverService.getComments(id)
            .subscribe(function (res) {
            console.log(res.json());
            _this.comments = res.json();
        });
        this.serverService.checkFav(this.user, id)
            .subscribe(function (res) {
            console.log(res.json());
            if (res.json()[0].count == 0)
                _this.favorite = true;
            else
                _this.favorite = false;
        });
    };
    PlaceDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    PlaceDetailComponent.prototype.validate = function () {
        var _this = this;
        this.serverService.valPlace(this.route.snapshot.paramMap.get('id'))
            .subscribe(function (res) {
            alert('This place is validated.');
            _this.router.navigate(['/admin/main']);
        });
    };
    PlaceDetailComponent.prototype.edit = function () {
        this.editMode = true;
        this.router.navigate(['/edit/' + this.route.snapshot.paramMap.get('id')]);
    };
    PlaceDetailComponent.prototype.delete = function () {
        var _this = this;
        this.serverService.delPlace(this.route.snapshot.paramMap.get('id'))
            .subscribe(function (res) {
            alert('This place is deleted.');
            _this.router.navigate(['/admin/main']);
        });
    };
    PlaceDetailComponent.prototype.favorites = function () {
        var _this = this;
        if (this.favclick) {
            return;
        }
        this.favclick = true;
        this.favsuccess = true;
        if (this.favorite == false) {
            this.serverService.addFav(this.user, this.route.snapshot.paramMap.get('id'))
                .subscribe(function (res) {
                console.log('success add favorite');
            }, function (error) { _this.favsuccess = false; });
            this.favstatus = 'Removing Success';
            this.favorite = true;
        }
        else {
            this.serverService.removeFav(this.user, this.route.snapshot.paramMap.get('id'))
                .subscribe(function (res) {
                console.log('success remove favorite');
            }, function (error) { _this.favsuccess = false; });
            this.favstatus = 'Adding Success';
            this.favorite = false;
        }
        setTimeout(function () {
            _this.favclick = false;
        }, 500);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PlaceDetailComponent.prototype, "place", void 0);
    PlaceDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-place-detail',
            template: __webpack_require__("../../../../../src/app/place-detail/place-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/place-detail/place-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1__server_service__["a" /* ServerService */],
            __WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */]])
    ], PlaceDetailComponent);
    return PlaceDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: 60px\">\r\n\t<div class=\"row\">\r\n    \t<div class=\"col-xs-12 col-sm-10 col-md-12 col-sm-offset-0 col-md-offset-0\">\r\n    \t\t<h1>Welcome,</h1>\r\n\t\t\t\t<button class=\"btn btn-danger\" routerLink=\"/\" (click)=\"signOut()\" type=\"button\" style=\"margin: 5px; font-size: 18px;\">Logout</button>\r\n    \t\t<hr>\r\n        \t<div class=\"col-sm-5\">\r\n        \t\t<h3>Favorites</h3>\r\n\t    \t\t<div class=\"col inline\" *ngFor=\"let place of places\">\r\n\t\t\t        <div class=\"col-sm-12\" style=\"margin-bottom: 5px\">\r\n\t\t\t        <hr>\r\n\t\t\t          <a routerLink=\"/detail/{{ place.attID }}\">\r\n\t\t\t            <div class=\"col-sm-4\">\r\n\t\t\t                <img class=\"rounded\" [src]=\"place.img\" style=\"width: 100%;\">\r\n\t\t\t            </div>\r\n\t\t\t          </a>\r\n\t\t\t            <div class=\"col-sm-8\" style=\"margin-top: 0px\">\r\n\t\t\t              <a routerLink=\"/detail/{{ place.attID }}\">\r\n\t\t\t                <h4 style=\"/*position: absolute; */text-align: left;\">{{ place.name }}</h4>\r\n\t\t\t                <!-- <img [src]=\"place.img\" style=\"width: 100%;\"> -->\r\n\t\t\t              </a>\r\n\r\n\t\t\t                <!-- <p style=\"line-height: 25px; height: 75px; overflow: hidden; text-overflow: ellipsis\">{{ place.description }}</p> -->\r\n\t\t\t            </div>\r\n\t\t\t        </div>\r\n\t\t\t    </div>\r\n\t\t\t</div>\r\n        \t<div class=\"col-sm-7\">\r\n        \t\t<h3 style=\"margin-bottom: 10px;\">History</h3>\r\n\t\t    \t\t<div class=\"col inline\" *ngFor=\"let route of routes; index as i;\" style=\"border-left: solid 2px; color: #bbb; margin: 0px 0px 10px 10px; padding-top: 15px;\">\r\n\t\t        \t\t\t<button routerLink=\"/routedetail/{{route[i].routeID}}/{{route[i].date}}\" class=\"btn btn-primary pull-right\" type=\"button\" style=\"margin: 5px; font-size: 18px;\">View</button>\r\n\t\t    \t\t\t<div *ngIf=\"routes[i][0].rated=='Y'\">\r\n\t\t        \t\t\t<button class=\"btn btn-basic pull-right\" type=\"button\" style=\"margin: 5px; font-size: 18px;\">Rated</button>\r\n\t\t        \t\t</div>\r\n\t\t    \t\t\t<div *ngIf=\"routes[i][0].rated=='N'\">\r\n\t\t        \t\t\t<button routerLink=\"/feedback/{{route[i].routeID}}\" class=\"btn btn-warning pull-right\" type=\"button\" style=\"margin: 5px; font-size: 18px;\">Unrated</button>\r\n\t\t        \t\t</div>\r\n\t\t    \t\t\t\t<div class=\"col inline\" *ngFor=\"let att of routes[i]; index as j;\">\r\n\t\t    \t\t\t\t\t<p style=\"color: #555; margin-left: 20px;\">{{att.name}}</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t<hr>\r\n\t\t    \t\t</div>\r\n        \t</div>\r\n    \t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__server_service__ = __webpack_require__("../../../../../src/app/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = (function () {
    function ProfileComponent(serverService, sanitizer, data) {
        this.serverService = serverService;
        this.sanitizer = sanitizer;
        this.data = data;
        this.routes = [];
        this.user = '';
        this.message = '';
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentMessage.subscribe(function (message) { return _this.user = message; });
        this.getPlaces();
    };
    ProfileComponent.prototype.getPlaces = function () {
        var _this = this;
        this.serverService.listFav(this.user)
            .subscribe(function (res) {
            var data = res.json();
            _this.places = data;
            console.log(_this.places);
            for (var i = 0; i < _this.places.length; i++) {
                _this.callImage(i);
            }
        }, function (error) {
            console.log('error');
        });
        this.serverService.listWtr(this.user)
            .subscribe(function (res) {
            var data = res.json();
            //this.routes = data;
            console.log(data);
            var temp = data[0].routeID;
            var num = 0;
            _this.routes.push([]);
            for (var i = 0; i < data.length; i++) {
                if (temp == data[i].routeID) {
                    _this.routes[num].push(data[i]);
                }
                else {
                    num++;
                    temp = data[i].routeID;
                    _this.routes.push([]);
                    _this.routes[num].push(data[i]);
                }
            }
            console.log(_this.routes);
            for (var i = 0; i < _this.routes.length; i++) {
                _this.isRated(i);
                _this.routes[i][0].date = _this.routes[i][0].date.substring(0, 10);
            }
        }, function (error) {
            console.log('error');
        });
    };
    ProfileComponent.prototype.signOut = function () {
        var auth2 = gapi.auth2.getAuthInstance();
        this.message = 'Login';
        this.data.changeMessage(this.message);
        auth2.signOut().then(function () {
            console.log('User signed out.');
        });
    };
    ProfileComponent.prototype.isRated = function (id) {
        var _this = this;
        this.serverService.isRated(this.user, this.routes[id][0].routeID)
            .subscribe(function (res) {
            var data = res.json();
            //this.routes = data;
            console.log(data);
            if (data[0].feedback == '')
                _this.routes[id][0]['rated'] = "N";
            else
                _this.routes[id][0]['rated'] = "Y";
            console.log(_this.routes);
        });
    };
    ProfileComponent.prototype.callRouteImage = function (i) {
        for (var j = 0; j < this.routes[i].length; j++) {
            this.callImage(j);
        }
    };
    ProfileComponent.prototype.callImage = function (count) {
        var _this = this;
        this.serverService.getImage(this.places[count].attID)
            .toPromise()
            .then(function (res) {
            var blob = new Blob([res._body], {
                type: res.headers.get("Content-Type")
            });
            var urlCreator = window.URL;
            _this.imageData = _this.sanitizer.bypassSecurityTrustUrl(urlCreator.createObjectURL(blob));
            _this.places[count]['img'] = _this.imageData;
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__server_service__["a" /* ServerService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/route-detail/route-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\r\n    text-align: center;\r\n}\r\nagm-map{\r\n  height: 500px;\r\n  width: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/route-detail/route-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n\t<img src=\"/assets/bg3.jpg\" style=\"width:100%; margin-top: -100px; position: absolute;\" >\r\n<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\r\n<div class=\"container\" style=\"margin-top: 60px\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\r\n\r\n\t\t\t<div class=\"col-sm-12\" style=\"height: 30px; width: 100%\"></div>\r\n\t\t\t<div style=\"padding-left:20px\">\r\n\t\t\t\t<h1> Route </h1>\r\n\t\t\t\t</div>\r\n\t\t\t\t<hr>\r\n\r\n\t\t<div class=\"col inline\" *ngFor=\"let place of route; index as i;\">\r\n  \t\t\t<!-- <div class=\"row\">\r\n  \t\t\t\t<p style=\"font-size: 30px; color: #444444; margin-left: 92px;\">{{place.time}}</p>\r\n  \t\t\t</div> -->\r\n\t\t\t<div class=\"col-sm-12\" style=\"margin-bottom: 5px\">\r\n\t          <a routerLink=\"/detail/{{ place.attID }}\">\r\n\t            <div class=\"col-sm-4\">\r\n\t                <img [src]=\"place.img\" style=\"width: 100%;\">\r\n\t                <i class=\"material-icons\" style=\"margin: 15px 0px 0px 94px;\">more_vert</i>\r\n\t            </div>\r\n\t          </a>\r\n\t            <div class=\"col-sm-8\" style=\"margin-top: -10px\">\r\n\t  \t\t\t\t<div class=\"row\">\r\n\t  \t\t\t\t\t<div class=\"col-sm-10\">\r\n\t\t\t              <a routerLink=\"/detail/{{ place.attID }}\">\r\n\t\t\t                <h3 style=\"/*position: absolute; */text-align: left;\">{{place.Time}}. {{ place.name }}</h3>\r\n\t\t\t                <!-- <img [src]=\"place.img\" style=\"width: 100%;\"> -->\r\n\t\t\t              </a>\r\n\t\t\t            </div>\r\n\t\t\t            <div class=\"col-sm-2\">\r\n\t\t\t              <button class=\"btn btn-danger\" type=\"button\" style=\"margin: 16px 5px 0px 0px\" (click)=\"modifyPlace(i)\"> Change </button>\r\n\t\t\t          \t</div>\r\n\t\t\t        </div>\r\n\r\n\t                <p style=\"line-height: 25px; height: 75px; overflow: hidden; text-overflow: ellipsis\">{{ place.description }}</p>\r\n\t            </div>\r\n        \t</div>\r\n\t\t\t<div *ngIf=\"isModify[i]\" class=\"col-sm-12\" style=\"background-color: #ddd; border-radius: 10px; padding-bottom: 14px; margin-bottom: 20px;\">\r\n\t\t\t\t<div style=\"margin-top: 10px;\">\r\n\t\t\t\t\t<span *ngIf=\"menu=='type'\" (click)=\"clicked('type',i)\" style=\"margin: 10px 0px 0px 5px; cursor: pointer; border-bottom-style: solid; border-bottom-width: 1px;\"><b>By type</b>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<span *ngIf=\"menu!='type'\" (click)=\"clicked('type',i)\"  style=\"margin: 10px 0px 0px 5px; cursor: pointer;\"> By type\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<span *ngIf=\"menu=='area'\" (click)=\"clicked('area',i)\" style=\"margin: 10px 0px 0px 20px; cursor: pointer; border-bottom-style: solid; border-bottom-width: 1px;\"><b> By area </b>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<span *ngIf=\"menu!='area'\" (click)=\"clicked('area',i)\"  style=\"margin: 10px 0px 0px 20px; cursor: pointer;\"> By area\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<span *ngIf=\"menu=='fav'\" (click)=\"clicked('fav',i)\" style=\"margin: 10px 0px 0px 20px; cursor: pointer; border-bottom-style: solid; border-bottom-width: 1px;\"><b> From favorite list </b>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<span *ngIf=\"menu!='fav'\" (click)=\"clicked('fav',i)\"  style=\"margin: 10px 0px 0px 20px; cursor: pointer;\"> From favorite list\r\n\t\t\t\t\t</span>\r\n        </div>\r\n\t\t\t\t\t<div class=\"col inline\" *ngFor=\"let relatedPlace of temp; index as j\">\r\n\t\t\t\t\t\t<button class=\"btn btn-basic\" type=\"button\" style=\"margin: 16px 5px 0px 0px\" (click)=\"choosePlace(i, j)\"> {{relatedPlace.name}} </button>\r\n\t\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n    <div class=\"col-sm-12\" style=\"height: 40px; width: 100%\"></div>\r\n    <div id=\"map\" class=\"col-sm-12\">\r\n      <agm-map [latitude]=\"olat\" [longitude]=\"olng\" [zoom]=\"zoom\" *ngIf=\"locationChosen\">\r\n        <agm-marker\r\n        [latitude]=\"lat[i]\"\r\n        [longitude]=\"lng[i]\"\r\n        [label]=\"labelOptions[i]\"\r\n        *ngFor=\"let place of route; index as i;\">\r\n        <agm-snazzy-info-window [maxWidth]=\"200\" [closeWhenOthersOpen]=\"true\">\r\n          <ng-template>\r\n            {{i+1}} {{place.name}}\r\n          </ng-template>\r\n        </agm-snazzy-info-window>\r\n      </agm-marker>\r\n      </agm-map>\r\n    </div>\r\n    <div class=\"col-sm-12\" style=\"height: 65px; width: 100%\"></div>\r\n    <div class=\"wrapper\">\r\n\t\t<button class=\"btn btn-success\" type=\"button\" style=\"margin: 0px 0px 100px 30px; font-size: 28px;\" (click)=\"exportPDF()\"> Export as PDF</button>\r\n    </div>\r\n    <hr>\r\n\t</div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/route-detail/route-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__server_service__ = __webpack_require__("../../../../../src/app/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jspdf__ = __webpack_require__("../../../../jspdf/dist/jspdf.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jspdf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jspdf__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RouteDetailComponent = (function () {
    function RouteDetailComponent(routed, serverService, sanitizer, data) {
        this.routed = routed;
        this.serverService = serverService;
        this.sanitizer = sanitizer;
        this.data = data;
        this.lat = [];
        this.lng = [];
        this.show = false;
        this.isModify = [];
        this.relatedPlaces = [];
        this.menu = 'type';
        this.user = '';
        this.locationChosen = false;
        this.zoom = 15;
        this.labelOptions = [];
    }
    RouteDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentMessage.subscribe(function (message) { return _this.user = message; });
        this.menu = 'type';
        this.getRoute();
    };
    RouteDetailComponent.prototype.getRoute = function () {
        var _this = this;
        var id = +this.routed.snapshot.paramMap.get('id');
        this.serverService.getRoute(id)
            .subscribe(function (res) {
            console.log(res);
            var data = res.json();
            _this.route = data;
            console.log(_this.route[0]);
            _this.locationChosen = true;
            _this.olat = parseFloat(_this.route[2].lat);
            _this.olng = parseFloat(_this.route[2].lng);
            for (var i = 0; i < _this.route.length; i++) {
                _this.labelOptions[i] = String(i + 1);
                _this.lat[i] = parseFloat(_this.route[i].lat);
                _this.lng[i] = parseFloat(_this.route[i].lng);
                _this.isModify.push(false);
                _this.relatedPlaces.push({});
                _this.callImage(i);
            }
        });
    };
    RouteDetailComponent.prototype.callImage = function (count) {
        var _this = this;
        this.serverService.getImage(this.route[count].attID)
            .toPromise()
            .then(function (res) {
            var blob = new Blob([res._body], {
                type: res.headers.get("Content-Type")
            });
            var urlCreator = window.URL;
            _this.imageData = _this.sanitizer.bypassSecurityTrustUrl(urlCreator.createObjectURL(blob));
            _this.route[count]['img'] = _this.imageData;
        });
    };
    RouteDetailComponent.prototype.modifyPlace = function (i) {
        var _this = this;
        console.log(i);
        if (this.isModify[i] == false) {
            for (var j = 0; j < this.isModify.length; j++) {
                this.isModify[j] = false;
            }
            this.isModify[i] = true;
        }
        else
            this.isModify[i] = false;
        console.log(this.isModify[i]);
        this.serverService.relatedPlaces(this.route[i].attID)
            .subscribe(function (res) {
            console.log(res.json());
            _this.relatedPlaces[i] = res.json();
            _this.temp = _this.relatedPlaces[i];
        });
    };
    RouteDetailComponent.prototype.choosePlace = function (i, j) {
        var _this = this;
        this.serverService.getPlace(this.temp[j].attID)
            .subscribe(function (res) {
            console.log(res.json());
            _this.route[i] = res.json()[0];
        });
        this.serverService.getImage(this.temp[j].attID)
            .toPromise()
            .then(function (res) {
            var blob = new Blob([res._body], {
                type: res.headers.get("Content-Type")
            });
            var urlCreator = window.URL;
            _this.imageData = _this.sanitizer.bypassSecurityTrustUrl(urlCreator.createObjectURL(blob));
            _this.route[i]['img'] = _this.imageData;
            _this.route[i]['Time'] = i + 1;
            _this.isModify[i] = false;
            console.log(_this.route);
            _this.locationChosen = false;
            _this.olat = _this.route[i].lat;
            _this.olng = _this.route[i].lng;
            for (var x = 0; x < _this.route.length; x++) {
                _this.locationChosen = true;
                _this.lat[x] = parseFloat(_this.route[x].lat);
                _this.lng[x] = parseFloat(_this.route[x].lng);
                _this.zoom = 13;
            }
        });
    };
    RouteDetailComponent.prototype.clicked = function (text, i) {
        var _this = this;
        console.log(text);
        console.log(this.route);
        this.menu = text;
        if (text == 'type') {
            this.serverService.relatedPlaces(this.route[i].attID)
                .subscribe(function (res) {
                console.log(res.json());
                _this.relatedPlaces[i] = res.json();
                _this.temp = _this.relatedPlaces[i];
            });
        }
        if (text == 'area') {
            this.serverService.relatedArea(this.route[i].attID)
                .subscribe(function (res) {
                console.log(res.json());
                _this.relatedPlaces[i] = res.json();
                _this.temp = _this.relatedPlaces[i];
            });
        }
        if (text == 'fav') {
            this.serverService.listFav(this.user)
                .subscribe(function (res) {
                console.log(res.json());
                _this.relatedPlaces[i] = res.json();
                _this.temp = _this.relatedPlaces[i];
            });
        }
    };
    RouteDetailComponent.prototype.exportPDF = function () {
        console.log('here');
        console.log(this.route);
        this.serverService.createRoute(this.route, this.routed.snapshot.paramMap.get('date'), this.user)
            .subscribe(function (res) {
            alert('Success');
        });
        var doc = new __WEBPACK_IMPORTED_MODULE_5_jspdf__();
        doc.setFont("helvetica");
        doc.setFontSize(24);
        doc.text(20, 20, 'Overview of your route on ' + this.routed.snapshot.paramMap.get('date'));
        doc.setFontSize(14);
        for (var i = 0; i < this.route.length; i++) {
            doc.text(30, 35 + 10 * (i), this.route[i].Time + '. ' + this.route[i].name);
        }
        for (var z = 0; z < this.route.length; z++) {
            doc.addPage();
            doc.setFontSize(24);
            doc.text(20, 20, this.route[z].Time + '. ' + this.route[z].name);
            doc.setFontType("bold");
            doc.setFontSize(14);
            doc.text(20, 30, 'Type');
            doc.text(80, 30, 'Area');
            doc.text(140, 30, 'Cost');
            doc.text(20, 50, 'Operating Day');
            doc.text(80, 50, 'Operating Time');
            doc.text(140, 50, 'Suggested Time');
            doc.text(20, 70, 'Transportation');
            doc.setFontType("normal");
            doc.setFontSize(12);
            doc.text(20, 37, this.route[z].type);
            doc.text(80, 37, this.route[z].zone);
            var splitTitle = doc.splitTextToSize(this.route[z].cost, 50);
            doc.text(140, 37, splitTitle);
            doc.text(20, 57, this.route[z].operDate);
            doc.text(80, 57, this.route[z].operTime);
            doc.text(140, 57, this.route[z].suggTime);
            var splitTitle = doc.splitTextToSize(this.route[z].transportation, 180);
            doc.text(20, 77, splitTitle);
            doc.setFontType("bold");
            doc.setFontSize(14);
            doc.text(20, 120, 'Description');
            doc.setFontType("normal");
            doc.setFontSize(12);
            var splitTitle = doc.splitTextToSize(this.route[z].description, 180);
            doc.text(20, 127, splitTitle);
        }
        // Save the PDF
        doc.save('Your Route.pdf');
    };
    RouteDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-route-detail',
            template: __webpack_require__("../../../../../src/app/route-detail/route-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/route-detail/route-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__server_service__["a" /* ServerService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_4__data_service__["a" /* DataService */]])
    ], RouteDetailComponent);
    return RouteDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/route-info/route-info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/route-info/route-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <img src=\"/assets/bg.jpg\" style=\"width:100%; margin-top: -100px; position: absolute;\" >\r\n<div class=\"container\" style=\"margin-top: 60px\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\r\n      <div class=\"col-sm-12\" style=\"height: 30px; width: 100%\"></div>\r\n      <div style=\"padding-left:20px\">\r\n        <h1> Route </h1>\r\n        </div>\r\n        <hr>\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"form-group\">\r\n              <label for=\"type\"><h3><b>type</b> of the trip</h3></label>\r\n              <!-- <select class=\"form-control\">\r\n                  <option value=\"\"></option>\r\n                  <option value=\"temple\">Temple</option>\r\n                  <option value=\"palace\">Palace</option>\r\n                  <option value=\"shopping\">Shopping Mall</option>\r\n                  <option value=\"park\">Park</option>\r\n                  <option value=\"street\">Walking street</option>\r\n                  <option value=\"other\">Other</option>\r\n              </select> -->\r\n              <select [(ngModel)]=\"selectedRoute\" style=\"height: 34px\"> // value is a string or number\r\n                  <option *ngFor=\"let obj of route; index as i\" [value]=\"route[i].routeID\">{{route[i].type1}}</option>\r\n              </select>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-8\">\r\n          \t<div class=\"col-sm-11\">\r\n            \t<div class=\"form-group\">\r\n              \t\t<label for=\"searchKey\"><h3><b>date</b> of the trip</h3></label>\r\n\r\n              \t\t<input type=\"date\"\r\n               \t\tclass=\"form-control\"\r\n               \t\t[(ngModel)]=\"searchKey\">\r\n            \t</div>\r\n          \t</div>\r\n\t        <div class=\"col-sm-1\" style=\"margin-top: 27px\">\r\n\t        \t<button\r\n\t        \tclass=\"btn btn-primary\"\r\n\t        \ttype=\"submit\"\r\n            (click)=\"onSubmit()\"\r\n            style=\"margin-top: 34px\">Go</button>\r\n\t        </div>\r\n        </div>\r\n\t</div>\r\n  </div>\r\n\t<hr>\r\n</div>\r\n  <app-type-result [type]=\"selectedType\"></app-type-result>\r\n\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/route-info/route-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__server_service__ = __webpack_require__("../../../../../src/app/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RouteInfoComponent = (function () {
    function RouteInfoComponent(serverService, router) {
        this.serverService = serverService;
        this.router = router;
        this.routeList = '';
        this.route = [];
        this.selectedRoute = '';
        this.searchKey = '';
    }
    RouteInfoComponent.prototype.ngOnInit = function () {
        this.getRouteLists();
    };
    RouteInfoComponent.prototype.getRouteLists = function () {
        var _this = this;
        this.serverService.getRouteLists()
            .subscribe(function (res) {
            var data = res.json();
            _this.routeList = data;
            console.log(_this.routeList);
            for (var i = 0; i < _this.routeList.length; i++) {
                _this.route.push(_this.routeList[i]);
            }
            console.log(_this.routeList);
        });
    };
    RouteInfoComponent.prototype.onSubmit = function () {
        console.log(this.searchKey);
        this.router.navigate(['/routedetail/' + this.selectedRoute + '/' + this.searchKey]);
    };
    RouteInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-route-info',
            template: __webpack_require__("../../../../../src/app/route-info/route-info.component.html"),
            styles: [__webpack_require__("../../../../../src/app/route-info/route-info.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__server_service__["a" /* ServerService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], RouteInfoComponent);
    return RouteInfoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/search-place/search-place.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "background { \r\n    background: url(https://github.com/teepobharu/btaAzure/assets/bg.jpg) no-repeat center center fixed;\r\n    background-size: cover;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search-place/search-place.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n<img src=\"/assets/bg.jpg\" style=\"width:100%; margin-top: -100px; position: absolute;\">\r\n<div class=\"container\" style=\"margin-top: 60px\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\r\n      <div class=\"col-sm-12\" style=\"height: 30px; width: 100%\"></div>\r\n      <div style=\"padding-left:20px\">\r\n        <h1> Destination </h1>\r\n        </div>\r\n       <button routerLink=\"/addplace\"\r\n               class=\"btn btn-link pull-right\"\r\n               type=\"button\"\r\n               style=\"margin: -35px 15px 0px 0px\">Add Place</button>\r\n               <hr>\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"form-group\">\r\n              <label for=\"type\"><h3>search by <b>type</b></h3></label>\r\n              <select class=\"form-control\" (change)=\"selectChangeHandler($event)\">\r\n                  <option value=\"temple\"></option>\r\n                  <option value=\"temple\">Temple</option>\r\n                  <option value=\"palace\">Palace</option>\r\n                  <option value=\"shopping\">Shopping Mall</option>\r\n                  <option value=\"park\">Park</option>\r\n                  <option value=\"street\">Walking street</option>\r\n                  <option value=\"other\">Other</option>\r\n              </select>\r\n            </div>\r\n        </div>\r\n        <form (ngSubmit)=\"onSubmit()\" #f=\"ngForm\">\r\n        <div class=\"col-sm-8\">\r\n          \t<div class=\"col-sm-11\">\r\n            \t<div class=\"form-group\">\r\n              \t\t<label for=\"searchKey\"><h3>search by <b>name</b></h3></label>\r\n              \t\t<input type=\"text\"\r\n               \t\tid=\"searchKey\"\r\n               \t\tclass=\"form-control\"\r\n                  (input)=\"onSearchChange($event.target.value)\"\r\n               \t\tngModel\r\n               \t\tname=\"searchKey\">\r\n            \t</div>\r\n          \t</div>\r\n  \t        <div class=\"col-sm-1\" style=\"margin-top: 27px\">\r\n  \t        \t<button\r\n  \t        \tclass=\"btn btn-primary\"\r\n  \t        \ttype=\"submit\"\r\n  \t        \tstyle=\"margin-top: 34px\">Go</button>\r\n  \t        </div>\r\n          <!-- <form class=\"example-form\">\r\n            <mat-form-field class=\"example-full-width\">\r\n              <input type=\"text\" placeholder=\"Pick one\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\r\n              <mat-autocomplete #auto=\"matAutocomplete\">\r\n                <mat-option *ngFor=\"let option of options\" [value]=\"option\">\r\n                  {{ option }}\r\n                </mat-option>\r\n              </mat-autocomplete>\r\n            </mat-form-field>\r\n          </form> -->\r\n        </div>\r\n    \t</form>\r\n\t</div>\r\n  </div>\r\n\t<hr>\r\n</div>\r\n<div *ngIf=\"selectedType\">\r\n    <div class=\"col-xs-12 col-sm-8 col-md-8 col-sm-offset-1 col-md-offset-2\">\r\n\t<!-- <h4 style=\"margin-left: 100px\">The list of places with the type \"{{selectedType | uppercase}}\"</h4> -->\r\n\r\n    <div class=\"col inline\" *ngFor=\"let place of places\">\r\n        <div class=\"col-sm-12\" style=\"margin-bottom: 5px\">\r\n        <hr>\r\n          <a routerLink=\"/detail/{{ place.attID }}\">\r\n            <div class=\"col-sm-3\">\r\n                <img [src]=\"place.img\" style=\"width: 100%;\">\r\n            </div>\r\n          </a>\r\n            <div class=\"col-sm-9\" style=\"margin-top: -10px\">\r\n              <a routerLink=\"/detail/{{ place.attID }}\">\r\n                <h3 style=\"/*position: absolute; */text-align: left;\">{{ place.name }}</h3>\r\n                <!-- <img [src]=\"place.img\" style=\"width: 100%;\"> -->\r\n              </a>\r\n\r\n                <p style=\"line-height: 25px; height: 75px; overflow: hidden; text-overflow: ellipsis\">{{ place.description }}</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"searchKey\">\r\n    <div class=\"col-xs-12 col-sm-8 col-md-8 col-sm-offset-1 col-md-offset-2\">\r\n  <!-- <h4 style=\"margin-left: 100px\">The list of places with the type \"{{selectedType | uppercase}}\"</h4> -->\r\n\r\n    <div class=\"col inline\" *ngFor=\"let place of places\">\r\n        <div class=\"col-sm-12\" style=\"margin-bottom: 5px\">\r\n        <hr>\r\n          <a routerLink=\"/detail/{{ place.attID }}\">\r\n            <div class=\"col-sm-3\">\r\n                <img [src]=\"place.img\" class=\"rounded\" style=\"width: 100%;\">\r\n            </div>\r\n          </a>\r\n            <div class=\"col-sm-9\" style=\"margin-top: -10px\">\r\n              <a routerLink=\"/detail/{{ place.attID }}\">\r\n                <h3 style=\"/*position: absolute; */text-align: left;\">{{ place.name }}</h3>\r\n                <!-- <img [src]=\"place.img\" style=\"width: 100%;\"> -->\r\n              </a>\r\n\r\n                <p style=\"line-height: 25px; height: 75px; overflow: hidden; text-overflow: ellipsis\">{{ place.description }}</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/search-place/search-place.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPlaceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__server_service__ = __webpack_require__("../../../../../src/app/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SearchPlaceComponent = (function () {
    // myControl: FormControl = new FormControl();
    // options = [
    //   'One',
    //   'Two',
    //   'Three'
    //  ];
    function SearchPlaceComponent(serverService, router, sanitizer) {
        this.serverService = serverService;
        this.router = router;
        this.sanitizer = sanitizer;
        this.selectedType = '';
        this.searchKey = '';
        this.submitted = false;
    }
    SearchPlaceComponent.prototype.ngOnInit = function () {
    };
    SearchPlaceComponent.prototype.onSearchChange = function (searchKey) {
        var _this = this;
        this.selectedType = '';
        this.searchKey = searchKey;
        console.log(this.searchKey);
        this.serverService.suggestPlaces(this.searchKey)
            .subscribe(function (res) {
            console.log(res.json());
            _this.places = res.json();
            for (var i = 0; i < _this.places.length; i++) {
                _this.callImage(i);
            }
        });
    };
    SearchPlaceComponent.prototype.selectChangeHandler = function (event) {
        var _this = this;
        console.log(event.target.value);
        this.searchKey = '';
        this.selectedType = event.target.value;
        this.serverService.listPlaces(this.selectedType)
            .subscribe(function (res) {
            var data = res.json();
            _this.places = data;
            console.log(_this.places);
            for (var i = 0; i < _this.places.length; i++) {
                _this.callImage(i);
            }
        }, function (error) {
            console.log('error');
        });
        console.log(this.places);
    };
    SearchPlaceComponent.prototype.callImage = function (count) {
        var _this = this;
        this.serverService.getImage(this.places[count].attID)
            .toPromise()
            .then(function (res) {
            var blob = new Blob([res._body], {
                type: res.headers.get("Content-Type")
            });
            var urlCreator = window.URL;
            _this.imageData = _this.sanitizer.bypassSecurityTrustUrl(urlCreator.createObjectURL(blob));
            _this.places[count]['img'] = _this.imageData;
        });
    };
    SearchPlaceComponent.prototype.onSubmit = function () {
        var _this = this;
        this.searchKey = this.searchForm.value.searchKey;
        console.log(this.searchKey);
        this.serverService.findPlace(this.searchKey)
            .subscribe(function (res) {
            var data = res.json();
            console.log(data.length);
            if (data.length > 0) {
                var id = data[0].attID;
                _this.router.navigate(["/detail/" + id]);
            }
            else
                alert('The place is not found');
        }, function (err) {
            console.log('err');
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */])
    ], SearchPlaceComponent.prototype, "searchForm", void 0);
    SearchPlaceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-search-place',
            template: __webpack_require__("../../../../../src/app/search-place/search-place.component.html"),
            styles: [__webpack_require__("../../../../../src/app/search-place/search-place.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__server_service__["a" /* ServerService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DomSanitizer */]])
    ], SearchPlaceComponent);
    return SearchPlaceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/server.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServerService = (function () {
    function ServerService(http) {
        this.http = http;
    }
    ServerService.prototype.createPlace = function (place) {
        return this.http.post('http://localhost:8000/api/createPlace', place);
    };
    ServerService.prototype.createEvent = function (event) {
        return this.http.post('http://localhost:8000/api/createEvent', event);
    };
    ServerService.prototype.getPlaces = function () {
        return this.http.get('http://localhost:8000/api/getPlaces');
    };
    ServerService.prototype.getEvents = function () {
        return this.http.get('http://localhost:8000/api/getEvents');
    };
    ServerService.prototype.getPlace = function (id) {
        console.log(id);
        return this.http.post('http://localhost:8000/api/getPlace', { id: id });
    };
    ServerService.prototype.getEvent = function (id) {
        console.log(id);
        return this.http.post('http://localhost:8000/api/getEvent', { id: id });
    };
    ServerService.prototype.getUnvPlaces = function () {
        return this.http.get('http://localhost:8000/api/getUnvPlaces');
    };
    ServerService.prototype.getUnvEvents = function () {
        return this.http.get('http://localhost:8000/api/getUnvEvents');
    };
    ServerService.prototype.getComments = function (id) {
        console.log(id);
        return this.http.get('http://localhost:8000/api/getComments/' + id);
    };
    ServerService.prototype.getRoute = function (id) {
        console.log(id);
        return this.http.get('http://localhost:8000/api/getRoute/' + id);
    };
    ServerService.prototype.getUser = function (id) {
        console.log(id);
        return this.http.get('http://localhost:8000/api/getUser/' + id);
    };
    ServerService.prototype.suggestPlaces = function (key) {
        console.log(key);
        return this.http.get('http://localhost:8000/api/suggestPlaces/' + key);
    };
    ServerService.prototype.listPlaces = function (type) {
        console.log(type);
        return this.http.post('http://localhost:8000/api/listPlaces', { type: type });
    };
    ServerService.prototype.listEvents = function () {
        return this.http.get('http://localhost:8000/api/listEvents');
    };
    ServerService.prototype.findPlace = function (searchKey) {
        console.log(searchKey);
        return this.http.post('http://localhost:8000/api/findPlace', { searchKey: searchKey });
    };
    ServerService.prototype.uploadImage = function (id, formData) {
        console.log(formData);
        return this.http.post('http://localhost:8000/upload/' + id, formData);
    };
    ServerService.prototype.getImage = function (id) {
        return this.http.get('http://localhost:8000/pic/' + id, { responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* ResponseContentType */].Blob });
    };
    ServerService.prototype.getEventImage = function (id) {
        return this.http.get('http://localhost:8000/eventpic/' + id, { responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* ResponseContentType */].Blob });
    };
    ServerService.prototype.checkUnvalidated = function () {
        return this.http.get('http://localhost:8000/api/checkUnv');
    };
    ServerService.prototype.relatedPlaces = function (id) {
        console.log(id);
        return this.http.get('http://localhost:8000/api/relatedPlaces/' + id);
    };
    ServerService.prototype.relatedArea = function (id) {
        console.log(id);
        return this.http.get('http://localhost:8000/api/relatedArea/' + id);
    };
    ServerService.prototype.token = function (email, name) {
        console.log(name);
        return this.http.post('http://localhost:8000/api/token/', { email: email, name: name });
    };
    ServerService.prototype.checkFav = function (user, id) {
        return this.http.post('http://localhost:8000/api/checkFav', { user: user, id: id });
    };
    ServerService.prototype.removeFav = function (user, id) {
        return this.http.post('http://localhost:8000/api/addFav', { user: user, id: id });
    };
    ServerService.prototype.addFav = function (user, id) {
        return this.http.post('http://localhost:8000/api/removeFav', { user: user, id: id });
    };
    ServerService.prototype.listFav = function (id) {
        return this.http.get('http://localhost:8000/api/listFav/' + id);
    };
    ServerService.prototype.listWtr = function (id) {
        return this.http.get('http://localhost:8000/api/listWtr/' + id);
    };
    ServerService.prototype.commentRoute = function (uid, rid, rate, cmt) {
        return this.http.post('http://localhost:8000/api/commentRoute', { uid: uid, rid: rid, rate: rate, cmt: cmt });
    };
    ServerService.prototype.isRated = function (uid, rid) {
        console.log(uid + ' ' + rid);
        return this.http.post('http://localhost:8000/api/isRated', { uid: uid, rid: rid });
    };
    ServerService.prototype.getRouteLists = function () {
        return this.http.get('http://localhost:8000/api/getRouteLists');
    };
    ServerService.prototype.setName = function (name, att) {
        return this.http.post('http://localhost:8000/api/setName', { name: name, att: att });
    };
    ServerService.prototype.valPlace = function (id) {
        return this.http.post('http://localhost:8000/api/valPlace', { id: id });
    };
    ServerService.prototype.delPlace = function (id) {
        return this.http.post('http://localhost:8000/api/delPlace', { id: id });
    };
    ServerService.prototype.valEvent = function (id) {
        return this.http.post('http://localhost:8000/api/valEvent', { id: id });
    };
    ServerService.prototype.delEvent = function (id) {
        return this.http.post('http://localhost:8000/api/delEvent', { id: id });
    };
    ServerService.prototype.createRoute = function (route, date, user) {
        return this.http.post('http://localhost:8000/api/createRoute', { route: route, date: date, user: user });
    };
    ServerService.prototype.editPlace = function (place, id) {
        return this.http.post('http://localhost:8000/api/editPlace', { place: place, id: id });
    };
    ServerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ServerService);
    return ServerService;
}());



/***/ }),

/***/ "../../../../../src/app/show-event/show-event.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/show-event/show-event.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n\t<img src=\"/assets/bg.jpg\" style=\"width:100%; margin-top: -100px; position: absolute;\" >\r\n  <div class=\"row\" style=\"margin-top: 60px\">\r\n    <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\r\n\t\t\t <div class=\"col-sm-12\" style=\"height: 30px; width: 100%\"></div>\r\n       <div style=\"padding-left:70px\">\r\n         <h1> Events </h1>\r\n         </div>\r\n        <button routerLink=\"/addevent\"\r\n                class=\"btn btn-link pull-right\"\r\n                type=\"button\"\r\n                style=\"margin: -35px 15px 0px 0px\">Add Event</button>\r\n                <hr>\r\n    <div class=\"col inline\" *ngFor=\"let place of places\">\r\n        <div class=\"col-sm-12\" style=\"margin-bottom: 5px\">\r\n          <a routerLink=\"/detail/{{ place.attID }}\">\r\n            <div class=\"col-sm-3\">\r\n                <img [src]=\"place.img\" style=\"width: 100%;\">\r\n            </div>\r\n          </a>\r\n            <div class=\"col-sm-9\">\r\n              <a routerLink=\"/eventdetail/{{ place.attID }}\">\r\n                <h3 style=\"/*position: absolute; */text-align: left;\">{{ place.name }}</h3>\r\n                <!-- <img [src]=\"place.img\" style=\"width: 100%;\"> -->\r\n              </a>\r\n\r\n                <p style=\"line-height: 25px; height: 75px; overflow: hidden; text-overflow: ellipsis\">{{ place.description }}</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <hr>\r\n    </div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/show-event/show-event.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowEventComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__server_service__ = __webpack_require__("../../../../../src/app/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShowEventComponent = (function () {
    function ShowEventComponent(serverService, sanitizer) {
        this.serverService = serverService;
        this.sanitizer = sanitizer;
    }
    ShowEventComponent.prototype.ngOnInit = function () {
        this.getPlaces();
    };
    ShowEventComponent.prototype.getPlaces = function () {
        var _this = this;
        this.serverService.listEvents()
            .subscribe(function (res) {
            var data = res.json();
            _this.places = data;
            console.log(_this.places);
            for (var i = 0; i < _this.places.length; i++) {
                _this.callImage(i);
            }
        }, function (error) {
            console.log('error');
        });
        console.log(this.places);
    };
    ShowEventComponent.prototype.callImage = function (count) {
        var _this = this;
        this.serverService.getEventImage(this.places[count].attID)
            .toPromise()
            .then(function (res) {
            var blob = new Blob([res._body], {
                type: res.headers.get("Content-Type")
            });
            var urlCreator = window.URL;
            _this.imageData = _this.sanitizer.bypassSecurityTrustUrl(urlCreator.createObjectURL(blob));
            _this.places[count]['img'] = _this.imageData;
        });
    };
    ShowEventComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-show-event',
            template: __webpack_require__("../../../../../src/app/show-event/show-event.component.html"),
            styles: [__webpack_require__("../../../../../src/app/show-event/show-event.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__server_service__["a" /* ServerService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */]])
    ], ShowEventComponent);
    return ShowEventComponent;
}());



/***/ }),

/***/ "../../../../../src/app/type-result/type-result.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/type-result/type-result.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"type\" (change)=\"changeType($event)\">\r\n\t<!-- <h4 style=\"margin-left: 100px\">The list of places with the type \"{{type | uppercase}}\"</h4> -->\r\n    <span class=\"col inline\" style=\"margin:10px 10px;\" *ngFor=\"let place of places\">\r\n        <a routerLink=\"/detail/{{ place.ID }}\" class=\"btn btn-info btn-lg\">\r\n            {{ place.Name }}\r\n          </a>\r\n    </span>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/type-result/type-result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypeResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__server_service__ = __webpack_require__("../../../../../src/app/server.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TypeResultComponent = (function () {
    function TypeResultComponent(serverService) {
        this.serverService = serverService;
    }
    TypeResultComponent.prototype.ngOnInit = function () {
    };
    TypeResultComponent.prototype.changeType = function (event) {
        var _this = this;
        console.log(this.type);
        this.serverService.listPlaces(this.type)
            .subscribe(function (res) {
            var data = res.json();
            _this.places = data;
        }, function (error) { return console.log('error'); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TypeResultComponent.prototype, "type", void 0);
    TypeResultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-type-result',
            template: __webpack_require__("../../../../../src/app/type-result/type-result.component.html"),
            styles: [__webpack_require__("../../../../../src/app/type-result/type-result.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__server_service__["a" /* ServerService */]])
    ], TypeResultComponent);
    return TypeResultComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map