import { BookStore } from "./abstract";


//This is now Parent Class
export class User extends BookStore{

    public username : string;
    private email : string; //It is available only inside of the class    private address : string;
    static mobileNo : string; //Non Presentable member
    public address : string;
    public price : number;
    static price2 : number;

    protected isAdmin : boolean;

    protected isChecked : boolean; //Implementing Protected member using get and Set

    constructor(public mail?: string)
    {
        super();
        console.log("Hello Deepa");
        this.email = mail;
    }

    /*constructor(private email: string)
    {
        console.log("Hello Deepa");
        //this.email = mail;
    }*/
    
    get Checked()
    {
        return this.isChecked;
    };
    set Checked(arg) //What is the usage of arg?
    {
        this.isChecked = arg;
    };

    public getUserDetails()
    {
        if(this.username === "Deepa")
        {
            console.log(`username : ${this.username}`);
        }
        if(this.email)
        {
            console.log(`user email: ${this.email}`);
        }
        if(this.address)
        {
            console.log(`user address: ${this.address}`);
        }
    }

    public UserContactData()
    {
        if(User.mobileNo)
        {
            console.log(`User Mobile: ${User.mobileNo}`);
        }
    }

    static UserSalary()
    {
        //if(this.price) //You cannot access accessible member in non accessible member
        if(User.price2)
        {
            console.log(`User Salary: ${User.price2}`);
        }
    }


    get Address()
    {
        return this.address;
    }
    set Address(locaton : string)
    {
        this.address = locaton;
    }

    private FetchUserDetails() 
    {
        this.getUserDetails();
    }

    get FetchUser()
    {
        return this.FetchUserDetails();
    }

    BookDetails(){
        //From Parent

        if(this.Author)
        {
            console.log(`Author Name: ${this.Author}`);
        }
        if(this.BookName)
        {
            console.log(`Book Name: ${this.BookName}`);
        }
    } 
};

let user : User = new User("DReddy@gmail.com"); //Created reference Object, Private property value is directly assigned in the constructor
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