alert('Hello World')



var numChildren = 30;
var partnerName = "Justin";
var geolocation = "Fiji";
var jobTitle = "scuba instructor";

console.log("You will be a " + jobTitle + " in " + geolocation + ", and married to " + partnerName + " with " + numChildren + " kids.")





var Today = 2015;
var Bday = 1985;
var NN = Today - Bday;
var NA = (Today - Bday) - 1;
console.log("They are either " + NN + " or " + NA)

var currentAge = 30;
var maxAge = 120;
var dailyIntake = 2;
var NN = ((maxAge - currentAge) * 365) * dailyIntake;
console.log("You will need " + NN + " to last you until the ripe old age of " + maxAge + ".")

var radius = 10
var diameter = 2 * radius
var circumference = Math.PI * diameter
var area = Math.PI * (radius * radius)
console.log("The circumference is "+ circumference)
console.log("The area is "+ area)

var C = 50;
var F = 50;
var NF = ((C * 9)/5) + 32;
var NC = ((F - 32)*5)/9;
console.log(C + "°C is " + NF + "°F")
console.log(F + "°F is " + NC + "°C")

function greeting() {
        console.log("Hi everybody!")
}

greeting();