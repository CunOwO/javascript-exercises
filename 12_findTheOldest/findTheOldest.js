const findTheOldest = function(people) {
    const oldest = people.map((person) => {
        if (!("yearOfDeath" in person)) {
            person["yearOfDeath"] = new Date().getFullYear();
        }
        return person;
    })
    .sort((a, b) => {
        const lastGuy = a.yearOfDeath - a.yearOfBirth;
        const nextGuy = b.yearOfDeath - b.yearOfBirth;
        return nextGuy - lastGuy;
      });
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
