//singleton

// Object.create

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Ruchita",
    "full name": "Ruchita Amancha",
    [mySym]: "mykey1",
    age: "22",
    location: "Mumbai",
    email: "ruchita@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "ruchita@chatgpt.com"
console.log(JsUser["email"]);

// Object.freeze(JsUser)

JsUser.email = "ruchita@microsoft.com"
console.log(JsUser);

JsUser.greeting = function () {
    console.log("Helloo Js User");
}

JsUser.greetingTwo = function () {
    console.log(`Helloo Js User, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
