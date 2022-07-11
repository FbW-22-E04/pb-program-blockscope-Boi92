//#### 1.
let determiner = 30;
let x = "" ;

if (determiner < 0) {
    x = "Less than 0";
}
else {
    x = "Greater or equal to 0";
}

console.log(x);
//#### 2.
let updater = "";
if(determiner >= 0){
    updater = "Greater or equal to 0";
    let message = "Positive Integer";
    console.log(message);
}
else {
    updater = "Less than 0";
}
// console.log(message);  ReferenceError: message is not defined

console.log(updater);

//#### 3.
/* Most of the time, I find it useful to just use if / else statements over ternary operators but it is nice to know both as they can both come in handy in different situations. If you use simple and short if / else statements regularly, ternary operators can be a great way for you to refactor your code! 

this is a copy paste, but thats how I feel about it too! 
*/

