// function outer() {

//     function inner() {
//         console.log('I am Marjan Khan');
        
//     }
//     console.log('I am also Marjan Khan');

//     inner();
    
// }

// outer();

function add(a, b) {

    function sum() {
        return a+b;
    }

    function sub() {
        return a-b;
    }

    function multipile() {
        return a*b;
    }

    function div() {
        return a/b
    }

    return sum() + sub() + multipile() + div();

}

var result = add(20, 30);

console.log(result);
