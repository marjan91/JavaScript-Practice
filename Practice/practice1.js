function myFunction(name) {
    return 'Hello, ' + name;
}

var hello = myFunction;
// var myName = myFunction('Marjan Khan');

// console.log(myName);

var anotherHello = hello;

console.log(anotherHello('Marjan Khan'));
// A function can be stored on a variable.
 
var arr = [1, 2, 3];
arr.push(anotherHello)
 console.log(arr);
// a function can be stored in an arrey.

var persion = {
    name: 'Marjan Khan',
    age: 18,
}
persion
 // A function can be stored in an object.

var sum = 10 + (function() {return 50}) ();

sum
// We can creat function as needed.

function wow(name, fun) {
    return fun(name);
}

var result = wow('Marjan Khan', myFunction);

result
// A function can be pass as a argument.

