import { User } from "./class";
//import {Iregister, ILogin, IAll} from "./interface";
//OR
import * as Refer from "./interface";


//This becomes Child Class
class Admin extends User {//implements Refer.Iregister{

    public contactnumber : string;

    //public LastName : string = "Reddy";
    //public FirstName : string = "Alarka";

    //Address("Secunderabad");

    constructor(public name : string)
    {
        super(); //It will call Base Class Constructor first
    }
    public StoredUserRecord()
    {
        if(this.name)
        {
            console.log(`Name : ${this.name}`);
        }
        if(this.isAdmin)
        {
            console.log(`admin : ${this.isAdmin}`);
        }
    }

    public UserContactData()
    {
        console.log(`number: ${this.contactnumber}`);
        super.UserContactData(); //Overrides the child class method and accesses Parent Class
    }

    BookDetails()
    {
        //
    }
};

let admin = new Admin("Deepa");
//admin. //Base Class Members are accessible
admin.username = "Deepa";
admin.Address = "Hyderabad";
admin.FetchUser; //For Private functions, Get them in a public variable and access
//User.mobileNo = "7896543678";
admin.contactnumber = "7896543678";
admin.UserContactData();
User.price2 = 15000000000000;
User.UserSalary();
admin.contactnumber = "4563456723";
admin.UserContactData();
//admin.
admin.Checked = true;

admin.StoredUserRecord();