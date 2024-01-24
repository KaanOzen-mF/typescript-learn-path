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

const reviewTotalDisplay = document.querySelector("#reviews");
const returningUserDisplay = document.querySelector("#returning-user");
const userNameDisplay = document.querySelector("#user");

function showReviewTotal(value: number, reviewer: string, isLoyalty: boolean) {
  const iconDisplay = isLoyalty ? "⭐" : "";
  reviewTotalDisplay!.innerHTML =
    "review total " +
    value.toString() +
    "| last reviewed by " +
    reviewer +
    " " +
    iconDisplay;
}

function populateUser(isReturning: boolean, userName: string) {
  if (isReturning == true) {
    returningUserDisplay!.innerHTML = "back";
  }
  userNameDisplay!.innerHTML = userName;
}

const reviews: {
  name: string;
  stars: number;
  loyaltyUser: boolean;
  date: string;
}[] = [
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
const you: {
  userName: { firstName: string; lastName: string };
  isReturning: boolean;
  age: number;
  stayedAt: (string | number)[]; //array types *--* | -> union types for unite string and number in stayedAt array
} = {
  userName: { firstName: "Bobby", lastName: "Brown" },
  isReturning: true,
  age: 26,
  stayedAt: ["florida-home", "oman-flat", "tokyo-bungalow", 23],
};
/******************************************************/
//Properties
const properties: {
  image: string;
  title: string;
  price: number;
  location: {
    firstLine: string;
    city: string;
    code: number;
    country: string;
  };
  contact: string;
  isAvailable: boolean;
}[] = [
  {
    image: "",
    title: "Colombian Shack",
    price: 45,
    location: {
      firstLine: "shack 37",
      city: "Bogota",
      code: 45632,
      country: "Colombia",
    },
    contact: "marywinkle@gmail.com",
    isAvailable: true,
  },
  {
    image: "",
    title: "Polish Cottage",
    price: 34,
    location: {
      firstLine: "no 23",
      city: "Gdansk",
      code: 343903,
      country: "Poland",
    },
    contact: "garydavis@hotmail.com",
    isAvailable: false,
  },
  {
    image: "",
    title: "London Flat",
    price: 23,
    location: {
      firstLine: "flat 15",
      city: "London",
      code: 35433,
      country: "United Kingdom",
    },
    contact: "andyluger@aol.com",
    isAvailable: true,
  },
];

//Functions
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);

populateUser(
  you.isReturning,
  you.userName.firstName + " " + you.userName.lastName + " " + you.age
);
