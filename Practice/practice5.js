// function hello(name) {
//     print(name);
//     print('Azmol Hossain Shuvo')
// }

// function print(args) {
//     console.log(args);
// }

// hello('Marjan Khan')

// function hello(name, print) {
//     print(name)
// }

// hello('Marjan Khan', function(name) {
//     console.log('Hello ' + name);
// });

// hello('Marjan Khan', function(name){
//     console.log('Hi,' + name + '.' + ' How are you today' + '?');
// });

// hello('Marjan Khan', function(name){
//     console.log('Length of ' + name + ' ' + 'is= ' + name.length);
// });

var me = {
    name: 'Marjan Khan',
    age: 18,
    email: 'kmarjan91@gmail.com'
}

function myFunction(person, callback) {
    console.log('Person: ' + person.name + '(' + person.age + ')');
    if (person.age >= 18) {
        callback(person.email);
    }else {
        console.log('You are not aligable ' + person.name);
        
    }
}

myFunction(me, function(email) {
    console.log('Email sent to ' + email);
});

function print(data, callback1, callback2) {
    console.log('Original Data: ' + data);
    callback1(data);
    callback2(data);
}

print('Hi, I am Marjan Khan', function(data){
    var data = data.toUpperCase();
    console.log('Uppercase: ' + data);
}, function(data){
    var data = data.toLowerCase();
    console.log('Lowercase: ' + data);
})
// Call back clear.