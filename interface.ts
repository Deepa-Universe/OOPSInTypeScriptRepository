export interface Iregister{
    FirstName : string;
    LastName : string; 
    UserLogin?: ILogin; //Interface type given to a variable
    //We can make the properties optional
    Address(area: string): void;
};

export interface ILogin{
    EmailId : string;
    Password : string;
};

export interface IAll extends Iregister {
    salary : number;
}

let user  : Iregister = {
    FirstName : "Deepa Rami",
    LastName : "Reddy",

    UserLogin : {
        EmailId : "drr@gmail.com",
        Password : "d@123"
    },
    Address(area)
    {
        if(area)
        {
            console.log(area);
        }
    }
    
};

console.log(user.FirstName);
user.Address("Mumbai");