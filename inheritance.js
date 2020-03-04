"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var class_1 = require("./class");
//This becomes Child Class
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    Admin.prototype.StoredUserRecord = function () {
        if (this.name) {
            console.log("Name : " + this.name);
        }
        if (this.isAdmin) {
            console.log("admin : " + this.isAdmin);
        }
    };
    Admin.prototype.UserContactData = function () {
        console.log("number: " + this.contactnumber);
        _super.prototype.UserContactData.call(this); //Overrides the child class method and accesses Parent Class
    };
    return Admin;
}(class_1.User));
;
var admin = new Admin("Deepa");
//admin. //Base Class Members are accessible
admin.username = "Deepa";
admin.Address = "Hyderabad";
admin.FetchUser; //For Private functions, Get them in a public variable and access
//User.mobileNo = "7896543678";
admin.contactnumber = "7896543678";
admin.UserContactData();
class_1.User.price2 = 15000000000000;
class_1.User.UserSalary();
admin.contactnumber = "4563456723";
admin.UserContactData();
//admin.
admin.Checked = true;
admin.StoredUserRecord();
