// 1. Declare variables
let country = 'Canada';
const continent = 'North America';
let population = 40.1; // Population in  millions

// 2. Log values to the console
console.log(country);
console.log(continent);
console.log(population + ' millions');

// 3. Declare isIsland 
const isIsland= false;

// 4. Declare language
let language;

//5. Log types to  the console
console.log(typeof isIsland );
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// 6. Set language value
language='english';
console.log(language);

// 7. Change variables to const where appropriate
//country remains let because the name might change in some historical moments
//population remains let because it changes
//continent becomes const. Values will never change.

// 8. Try changing a const variable (will result in an error)
//continent='Asia'; //This will cause Uncaught TypeError...

// 9. Population after splitting in half
let halfPopulation = population / 2;
console.log(halfPopulation + ' millions');

// 10. Increase population by 1 million
population++;
console.log('Increased population with 1 million: ', population);

// 11. Compare population with Finland (6 million)
let finPopulation = 6;
console.log('Canada has more people than Finland: ', population > finPopulation);

// 12. Compare population with average country (33 milion)
let avgPopulation = 33;
let difference = ((population * 10) - (avgPopulation*10))/10;
console.log('Canada has more than the average country: ', population > avgPopulation);
console.log('Canada has more than the average country with: ', difference, ' million');

// 13. Create a description string
const description = country + 'is in ' + continent + ', and its ' + population + ' million people speak ' + language + ' language.';
console.log(description);

// 14. Create an Object
const countryData = {
  country: country,
  continent: continent,
  population: population,
  isIsland: isIsland,
  language: language,
  family: {
    mother: {
      name: 'Ann',
      age: 70,
    },
    sibling: {
      name: 'Sarah',
      age: 40,
    },
  },
};
console.log(countryData);




// 16. Use Comments in your HomeWork

// 17. Git instructions text content






