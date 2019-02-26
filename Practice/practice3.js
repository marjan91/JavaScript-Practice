function name(firstName, lastName, gendar) {
    var output;
    
    if (gendar === 'male') {
        output = 'Mr. ' + firstName + ' ' + lastName;
    
    } else if (gendar === 'female') {
        output = 'Ms. ' + firstName + ' ' + lastName;
    }
    return output
}

var fullName = name('Marjan', 'Khan', 'male');
var anotherName = name('Sadia', 'Akter', 'female')

console.log(fullName);

console.log(anotherName);