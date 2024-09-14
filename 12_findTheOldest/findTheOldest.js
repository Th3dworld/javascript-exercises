const findTheOldest = function(people) {    
    people = people.filter(element => element.yearOfDeath && (2024 - element.yearOfBirth) < 25);

    console.log(people)

    let oldest = people[0].yearOfDeath - people[0].yearOfBirth;
    let oldestPerson = people[0];

    people.forEach(element => {
        if((element.yearOfDeath - element.yearOfBirth) > oldest){
            oldest = element.yearOfBirth;
            oldestPerson = element;
        }
    });

    return oldestPerson;

};

// Do not edit below this line
module.exports = findTheOldest;
