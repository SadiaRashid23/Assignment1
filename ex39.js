"use strict";
/*City Names: Write a function called city_country() that takes in the name of a city and its country.
The function should return a string formatted like this:
"Lahore, Pakistan"
Call your function with at least three city-country pairs, and print the value that’s returned.*/
function city_country(city, country) {
    let pair = city + ", " + country;
    return pair;
}
let pair1 = city_country("Cairo", "Egypt");
let pair2 = city_country("Istanbul", "Turkey");
let pair3 = city_country("Barcelona", "Spain");
console.log(`"${pair1}"\n"${pair2}"\n"${pair3}"`);
