"use strict";
//This is now Parent Class
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(mail) {
        this.mail = mail;
        console.log("Hello Deepa");
        this.email = mail;
    }
    Object.defineProperty(User.prototype, "Checked", {
        /*constructor(private email: string)
        {
            console.log("Hello Deepa");
            //this.email = mail;
        }*/
        get: function () {
            return this.isChecked;
        },
        set: function (arg) {
            this.isChecked = arg;
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    User.prototype.getUserDetails = function () {
        if (this.username === "Deepa") {
            console.log("username : " + this.username);
        }
        if (this.email) {
            console.log("user email: " + this.email);
        }
        if (this.address) {
            console.log("user address: " + this.address);
        }
    };
    User.prototype.UserContactData = function () {
        if (User.mobileNo) {
            console.log("User Mobile: " + User.mobileNo);
        }
    };
    User.UserSalary = function () {
        //if(this.price) //You cannot access accessible member in non accessible member
        if (User.price2) {
            console.log("User Salary: " + User.price2);
        }
    };
    Object.defineProperty(User.prototype, "Address", {
        get: function () {
            return this.address;
        },
        set: function (locaton) {
            this.address = locaton;
        },
        enumerable: true,
        configurable: true
    });
    User.prototype.FetchUserDetails = function () {
        this.getUserDetails();
    };
    Object.defineProperty(User.prototype, "FetchUser", {
        get: function () {
            return this.FetchUserDetails();
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());
exports.User = User;
;
var user = new User("DReddy@gmail.com"); //Created reference Object, Private property value is directly assigned in the constructor
user.username = "Deepa";
//user.email = ""
//user.mail = "DReddy@gmail.com"; Does not work
user.Address = "Hyderabad";
user.FetchUser; //For Private functions, Get them in a public variable and access
//user.getUserDetails();
User.mobileNo = "7896543678";
user.UserContactData();
User.price2 = 15000000000000;
User.UserSalary();
