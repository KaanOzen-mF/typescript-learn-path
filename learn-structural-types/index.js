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
var propertiesDisplay = document.querySelector(".properties");
var footer = document.querySelector(".footer");
//enum types
var LoyaltyUser;
(function (LoyaltyUser) {
    LoyaltyUser["GOLD_USER"] = "GOLD_USER";
    LoyaltyUser["SILVER_USER"] = "SILVER_USER";
    LoyaltyUser["BRONZE_USER"] = "BRONZE_USER";
})(LoyaltyUser || (LoyaltyUser = {}));
//Utils Functions
function showReviewTotal(value, reviewer, isLoyalty) {
    var iconDisplay = LoyaltyUser.GOLD_USER ? "⭐" : "";
    reviewTotalDisplay.innerHTML =
        value.toString() +
            "Review" +
            makeMultiple(value) +
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
function add(firstValue, secondValue) {
    return firstValue + secondValue;
}
function makeMultiple(value) {
    if (value > 1 || value == 0) {
        return "s";
    }
    else
        return "";
}
//Reviews
var reviews = [
    {
        name: "Sheia",
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: "01-04-2021",
        description: null,
    },
    {
        name: "Andrzej",
        stars: 3,
        loyaltyUser: LoyaltyUser.BRONZE_USER,
        date: "28-03-2021",
        description: null,
    },
    {
        name: "Omar",
        stars: 4,
        loyaltyUser: LoyaltyUser.SILVER_USER,
        date: "27-03-2021",
        description: "Omar's description",
    },
];
/*
// Reviews with any
const reviews : any[]= [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: LoyaltyUser.BRONZE_USER,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: LoyaltyUser.SILVER_USER,
        date: '27-03-2021',
        description: 'Great hosts, location was a bit further than said',
    },
]
*/
//Object Types
/******************************************************/
//User
var you = {
    userName: { firstName: "Bobby", lastName: "Brown" },
    isReturning: true,
    age: 26,
    stayedAt: ["florida-home", "oman-flat", "tokyo-bungalow", 23],
};
//Array of Properties
var properties = [
    {
        image: "./shack.jpg",
        title: "Colombian Shack",
        price: 45,
        location: {
            firstLine: "shack 37",
            city: "Bogota",
            code: 45632,
            country: "Colombia",
        },
        contact: [+1123495082908, "marywinkle@gmail.com"], //tuples
        isAvailable: true,
    },
    {
        image: "./cottage.jpg",
        title: "Polish Cottage",
        price: 30,
        location: {
            firstLine: "no 23",
            city: "Gdansk",
            code: 343903,
            country: "Poland",
        },
        contact: [+1123495082908, "garydavis@hotmail.com"], //tuples
        isAvailable: false,
    },
    {
        image: "./flat.jpg",
        title: "London Flat",
        price: 25,
        location: {
            firstLine: "flat 15",
            city: "London",
            code: 35433,
            country: "United Kingdom",
        },
        contact: [+1123495082908, "andyluger@aol.com"], //tuples
        isAvailable: true,
    },
];
//Add the properties
var htmlContent = properties
    .map(function (i) { return "\n    <div class=\"card\">\n        <img src=\"".concat(i.image, "\" alt=\"").concat(i.title, "\" width=\"100%\"/>\n        <p>").concat(i.title, "</p>\n        <p>").concat(i.price, "</p>\n        <p>").concat(i.location.firstLine[0].toUpperCase() +
    i.location.firstLine.substring(1) +
    " - " +
    i.location.city +
    "/" +
    i.location.country, "</p>\n        <p>").concat(i.location.code, "</p>\n        <p>").concat(i.contact, "</p>\n        <p>").concat(i.isAvailable ? "Available for rent" : "Not available for rent", "</p>\n    </div>\n"); })
    .join("");
propertiesDisplay.innerHTML = htmlContent;
//Functions
showReviewTotal(reviews.length, reviews[2].name, reviews[2].loyaltyUser);
populateUser(you.isReturning, you.userName.firstName + " " + you.userName.lastName + " " + you.age);
var currentLocation = ["Konya", 17.18, 2]; //tuples type
footer.innerHTML =
    currentLocation[0] +
        " " +
        "Time:" +
        currentLocation[1] +
        " " +
        currentLocation[2] +
        "&#8451;";
