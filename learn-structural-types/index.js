//TypeSript Types
//boolean --> true, false
//number ---> 10, 1.5
//string ---> "hi", 'hello', `aloha`
//assign variable with types
/*
let age: number = 100;
let firstName: string = "Kaan";
let busy: boolean = true;
*/
var reviewTotalDisplay = document.querySelector("#reviews");
var returningUserDisplay = document.querySelector("#returning-user");
var userNameDisplay = document.querySelector("#user");
function showReviewTotal(value, reviewer, isLoyalty) {
    var iconDisplay = isLoyalty ? "⭐" : "";
    reviewTotalDisplay.innerHTML =
        "review total " +
            value.toString() +
            "| last reviewed by " +
            reviewer +
            " " +
            iconDisplay;
}
function populateUser(isReturning, userName) {
    if (isReturning == true) {
        returningUserDisplay.innerHTML = "back";
    }
    userNameDisplay.innerHTML = userName;
}
var reviews = [
    {
        name: "Sheia",
        stars: 5,
        loyaltyUser: true,
        date: "01-04-2021",
    },
    {
        name: "Andrzej",
        stars: 3,
        loyaltyUser: false,
        date: "28-03-2021",
    },
    {
        name: "Omar",
        stars: 4,
        loyaltyUser: true,
        date: "27-03-2021",
    },
];
console.log(reviews);
//Object Types
/******************************************************/
var you = {
    userName: { firstName: "Bobby", lastName: "Brown" },
    isReturning: true,
    age: 26,
    stayedAt: ["florida-home", "oman-flat", "tokyo-bungalow", 23],
};
/******************************************************/
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
populateUser(you.isReturning, you.userName.firstName + " " + you.userName.lastName + " " + you.age);
var houseInfo = [
    {
        image: "logo.png",
        title: "House",
        surfPricePerNight: 3,
        lineOfAddress: "California",
        city: "Florida",
        postcode: 1234,
        country: "USA",
        contactDetail: "USA",
        availableToRent: true,
    },
];
console.log(houseInfo);
