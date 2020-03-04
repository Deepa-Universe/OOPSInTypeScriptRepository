;
;
var user = {
    FirstName: "Deepa Rami",
    LastName: "Reddy",
    UserLogin: {
        EmailId: "drr@gmail.com",
        Password: "d@123"
    },
    Address: function (area) {
        if (area) {
            console.log(area);
        }
    }
};
console.log(user.FirstName);
user.Address("Mumbai");
