// const tinderUser = new Object() //this is singleton object
const tinderUser={} //this is non-singleton object

tinderUser.id ="734829"
tinderUser.name="Ruchita"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser={
    email:"ruchita@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Ruchita",
            lastname:"Amancha"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 ={1:"a",2:"b"}
const obj2 ={3:"a",4:"b"}

//merging
// const obj3={obj1,obj2}

// const obj3=Object.assign({},obj1,obj2)

const obj3={...obj1,...obj2} //latest syntax  //using spread operator
// console.log(obj3);

const users=[
    {
        id:1,
        email:"R@gmail.com"
    },
    {
        id:2,
        email:"R@gmail.com"
    },
    {
        id:3,
        email:"R@gmail.com"
    }
]

users[1].email
// console.log(users[1].email);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn")); //you ask if you have value for isLoggedl

//for important properties
//go to console on web browser and do the foll
// const obhj1={1:'a',2:'b'}
//obj1
//after enter expand and you will see prototype in that there are all properties

const course ={
    coursename:"js",
    price:"999",
    courseInstructor:"Ruchita"
}

// course.courseInstructor //even this is correct way to extract value 

//there is also this way 
const {courseInstructor}=course

// this is called destructuring Object
const {courseInstructor : instructor}=course

//same output for both
console.log(courseInstructor);
console.log(instructor);

