// //Take an array of numbers and return the sum.
// Take an array of numbers and return the average.
// Take an array of strings and return the longest string.
// Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
// For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
// Take a number, n, and print every number between 1 and n without using loops. Use recursion.


//Part1
const numArray = [1, 2, 3, 4, 5]
const arrayOfStrings = ["abc", "ab", 'a']


function sumArray(numArray){
    let sum = 0
    numArray.forEach((num) => {
        sum += num
    })
    return sum 
}


function average(numArray){
    if(numArray === 0) return 0;
    let sum = sumArray(numArray)
    return sum / numArray.length
}

function longestString(arrayOfStrings){
    let newLongestString = ''
    for(let i = 0; i < arrayOfStrings.length; i++){
        if(arrayOfStrings[i].length > newLongestString.length){
            newLongestString = arrayOfStrings[i]
        }
    }
    return newLongestString
}
//For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
function stringsLongerThan(strings, num){
    return strings.filter(string => string.length > num)
}

function recursiveNumber(n){
    if(n < 1){
        return;
    }
    console.log(n)
    recursiveNumber(--n);
}
recursiveNumber(5)

// console.log(sumArray(numArray))
// console.log(average(numArray))
// console.log(longestString(arrayOfStrings))
console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3))

//PART 2

const csvString = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" }, { id: "48", name: "Barry", occupation: "Runner", age: "25" }, { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, { id: "7", name: "Bilbo", occupation: "None", age: "111" }]

//sort

console.log(csvString.sort((a, b) => Number(a.age) - Number(b.age)));

// Filter the array to remove entries with an age greater than 50
const filteredByAge = csvString.filter(person => parseInt(person.age) <= 50);
console.log("Remove age over 50:", filteredByAge);


  // Map the array to change the “occupation” key to “job” and increment every age by 1

const Data = csvString.map(person => ({ ...person, job: person.occupation, age: Number(person.age) +1,}));
console.log("Change occupation to 'job' and increment age by 1", Data);

// Use the reduce method to calculate the sum of the ages.
// Then use the result to calculate the average age.


