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
var returningUserDisplay = document.querySelector("#returning-user");
var userNameDisplay = document.querySelector("#user");
var reviewTotalDisplay = document.querySelector("#reviews");
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
function showReviewTotal(value, reviewer, loyalty) {
    var loyaltyCheck = loyalty ? " ⭐️" : "";
    reviewTotalDisplay.innerHTML =
        "review total " +
            value.toString() +
            "| last reviewed by " +
            reviewer +
            loyaltyCheck;
}
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
var you = {
    userName: { firstName: "Bobby", lastName: "Brown" },
    isReturning: true,
};
function populateUser(isReturning, userName) {
    if (isReturning) {
        returningUserDisplay.innerHTML = "back";
    }
    userNameDisplay.innerHTML = userName;
}
populateUser(you.isReturning, you.userName.firstName + " " + you.userName.lastName);
