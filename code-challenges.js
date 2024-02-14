// UNIT 1 ASSESSMENT: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Reminder: Ensure you are in the correct directory
// Run the file with the following command: $ node code-challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and evaluates which of the strings has more characters. Use the test variables provided.

const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"
// const longerString = (str1, str2) => {
//     if ( str1.length > str2.length) {
//     return str1;
//     } else if (str2.length > str1.length) {
//     return str2;
//     } else {
//         return "Something went wrong"
//     }
// };
//     console.log(longerString(fruit1,fruit2))


// const fruit3 = "cherry"
// const fruit4 = "kiwi"
// Expected outcome: "cherry"

// Explain your code:

// --------------------1) Create a function that takes in an array of numbers and returns the sum of all the numbers. Use the test variables provided below.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]

sumOfAllNumbers = (numbers) => {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i]
    }
    return total
}

console.log(sumOfAllNumbers(padres1984WorldSeriesRuns)); //15
console.log(sumOfAllNumbers(padres1998WorldSeriesRuns)); //17

// Expected output: 15

// Expected output: 17

// Explain your code: //So, I made the variable "total" and put it at zero to hold the value or store the value of the array. I labled numbers as the parameter to describe the actual data that is being processed. The functions interates through each element and with each loop the "+=" is adding the index's together. Then it returns the total, which is also the name of the variable.

// --------------------2) Create a function that takes in a string and  returns the string with all the characters in reversed order. Use the test variable provided below.

const lesMiserables = "Jean Valjean"
const lionKing = "Simba"

const reverseOrder = (str) => {
    return str.split("").reverse().join("")
};

console.log(reverseOrder(lesMiserables));//naejlaV naeJ
console.log(reverseOrder(lionKing));//abmiS

// Expected output: "naejlaV naeJ"


// Expected output: "abmiS"

// Explain your code: I used multiple methods in this function. I took it apart "str.split", reversed it ".reverse.()" and put it back together ".join("")". I put the parameter as a string because that was the data I was working with. This function reminds me of that Missy Elliot song  😀 And this function reversed the string.

// --------------------3) Create a function that takes in an array and returns an array with only the items from the third, fourth, and fifth indexes. Use the test variable provided below.

const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]
const cohortList = ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot"]

const getThreeFourFive = (array) => {
    const justThree = [];
    for (let i = 3; i < 6; i++) {
        justThree.push(array[i]);
    }
    return justThree

}

console.log(getThreeFourFive(stockExchange)) //[42, 5, -5]
console.log(getThreeFourFive(cohortList))  //[42, 5, -5]

// Expected output: [42, 5, -5]


// Expected output: ["Delta", "Echo", "Foxtrot"]

// Explain your code: I chose the paramet array because that it the type of data that is being used. I chose to use an foor loop in this arrow function, but I had the for loop to start counting at the third index and end at the sixth. You have to end one index after in order to achive the index you want. That allowed the function to grab the third, fourth and fifth index.
