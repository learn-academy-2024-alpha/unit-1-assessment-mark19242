// UNIT 1 ASSESSMENT: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain WHY your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
// const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// // console.log(colors.push("indigo"))

// // a) Your answer:
// // b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2023"
// console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: This .length method counts all of the indexes in the string, but using .length takes away the "zero index".

// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer:o
// b) Verify and explain: The [4] singles out the fourth index. You also have to remember the computer is "zero indexed" unless you are using .length.

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer:Ruby
// b) Verify and explain: The string "Ruby" is in index one. Because the array is "zero indexed" Ruby is in index 1. So, the variable  languages represents the entire array. The variable index has a value of 1. Logged together in that syntax targets that specific index.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: It won't work because it is targeting a whole array. That method has to target a string. It will give you an error.
// b) Verify and explain: .toUpperCase() is a method for  a "string" not an array.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
// console.log(typeof dataTypes.length)
// a) Your answer: error
// b) Verify and explain: I honestly thought it was going to give an error logging that method on the array, but I was wrong.
