const name = 'Nikolaj';
const yearOfBirth= 1992;
const currentYear = 2021

function ageChecker(name, yearOfBirth, currentYear){
    const age = currentYear - yearOfBirth;
    return `${name} is ${age} years old.`

}

console.log(ageChecker('Nikolaj', 1992, 2021));


