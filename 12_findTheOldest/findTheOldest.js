const findTheOldest = function(persons) {
    const d = new Date();
    return (persons.sort((person0, person1) => 
                    ((!person0.yearOfDeath?d.getFullYear():person0.yearOfDeath) - person0.yearOfBirth)
                    >
                    ((!person1.yearOfDeath?d.getFullYear():person1.yearOfDeath) - person1.yearOfBirth)?-1:1)[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
