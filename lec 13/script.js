/*alert("external js")

function calc(n1, n2) {
    console.log("calc function declaration")
    return n1+n2;
}

console.log(calc(3, 2));


var calculator = function () {
    console.log("calculator function expression")
}

calculator();


var citiesList = ["lhr", "isl", "krachi"];
var multiValue = [12, "lhr", false, function () {
    
}];

var user = {
    name: "Ali",
    age: 20,
    isAlive: true,
    favMovies: ["avengers", "GOT"],
    teach: function () {
        console.log("Teaching WAD");
    }
}

var users = [{
    name: "Ali",
    age: 20,
    isAlive: true,
    favMovies: ["avengers", "GOT"],
    teach: function () {
        console.log("Teaching WAD");
    }
},

{
    name: "Ali",
    age: 20,
    isAlive: true,
    favMovies: ["avengers", "GOT"],
    teach: function () {
        console.log("Teaching WAD");
    }
}]*/


var database = {
    username: "ali",
    password: "123"
}

var newsFeed = [{
    friend: "usman",
    status: "I'm feeling happy today!"
},
    {
        friend: "umer",
        status: "I'm lonely today!"
    }]

var username = prompt("Enter username");
var password = prompt("enter password");

if(username == database.username && password == database.password){
    console.log(newsFeed);
}
else {
    console.log("username or password is incorrect!");
}