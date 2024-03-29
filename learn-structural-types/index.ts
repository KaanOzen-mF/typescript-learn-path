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
const propertiesDisplay = document.querySelector(".properties");
const footer = document.querySelector(".footer");

//enum types
enum LoyaltyUser {
  GOLD_USER = "GOLD_USER",
  SILVER_USER = "SILVER_USER",
  BRONZE_USER = "BRONZE_USER",
}

//Utils Functions
function showReviewTotal(
  value: number,
  reviewer: string,
  isLoyalty: LoyaltyUser
) {
  const iconDisplay = LoyaltyUser.GOLD_USER ? "⭐" : "";
  reviewTotalDisplay!.innerHTML =
    value.toString() +
    "Review" +
    makeMultiple(value) +
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

function add(
  firstValue: number,
  secondValue: number
): number /*return type number*/ {
  return firstValue + secondValue;
}

function makeMultiple(value: number): string {
  if (value > 1 || value == 0) {
    return "s";
  } else return "";
}

//Reviews
const reviews: {
  name: string;
  stars: number;
  loyaltyUser: LoyaltyUser;
  date: string;
  description: any; //any
}[] = [
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
//type Alias
type Price = 45 | 30 | 25;
type Country = "Colombia" | "Poland" | "United Kingdom";
//Array of Properties
const properties: {
  image: string;
  title: string;
  price: Price;
  location: {
    firstLine: string;
    city: string;
    code: number;
    country: Country;
  };
  contact: [number, string]; //tuple
  isAvailable: boolean;
}[] = [
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
let htmlContent = properties
  .map(
    (i) => `
    <div class="card">
        <img src="${i.image}" alt="${i.title}" width="100%"/>
        <p>${i.title}</p>
        <p>${i.price}</p>
        <p>${
          i.location.firstLine[0].toUpperCase() +
          i.location.firstLine.substring(1) +
          " - " +
          i.location.city +
          "/" +
          i.location.country
        }</p>
        <p>${i.location.code}</p>
        <p>${i.contact}</p>
        <p>${
          i.isAvailable ? "Available for rent" : "Not available for rent"
        }</p>
    </div>
`
  )
  .join("");

propertiesDisplay!.innerHTML = htmlContent;

//Functions
showReviewTotal(reviews.length, reviews[2].name, reviews[2].loyaltyUser);

populateUser(
  you.isReturning,
  you.userName.firstName + " " + you.userName.lastName + " " + you.age
);

let currentLocation: [string, number, number] = ["Konya", 17.18, 2]; //tuples type

footer!.innerHTML =
  currentLocation[0] +
  " " +
  "Time:" +
  currentLocation[1] +
  " " +
  currentLocation[2] +
  `&#8451;`;
