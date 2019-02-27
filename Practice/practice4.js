var arr = [4, 3, 5, 1, 0, 8, 9];

arr.forEach(function (a) {
    console.log(a);
});

function caller() {
    return function(name) {
        return 'Caller calling you ' + name;
    }
}

// var x = caller();
// var y = x('Marjan Khan');

// y;

// var z = x('Sadia Akter');

// z;

var a = caller()('Marjan Khan');
a;

var b = caller()('Sadia Akter');
b;