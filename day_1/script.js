// 1~ Create a function to calculate the sum of the two given integers. If the two values are the same, return triple their sum.

const calculateSum = (numberOne, numberTwo) => {
  if (numberOne === numberTwo) {
    return numberOne * 3;
  } else {
    return numberOne + numberTwo;
  }
};

console.log(calculateSum(5, 2));

// 2~ Create a function to check two given integers. Return true if one of them is 50 or if their sum is 50.
console.log('------------------')
const checkIntegers = (numberOne, numberTwo) => {
  if (numberOne === 50 || numberTwo === 50 || numberOne + numberTwo === 50) {
    return true;
  } else {
    return false;
  }
};

console.log(checkIntegers(49, 1));

/* 3~ Create a function to remove a character at a specified position from a given string: 
pass the position and the string as parameters, return the new string. */
console.log('------------------')
const removeChar = (str, position) => {
  let newWord = str.slice(0, position) + str.slice(position + 1);
  return newWord;
};

console.log(removeChar("hello world", 5));

// 4~ Create a function to find and return the largest of three given integers.
console.log('------------------')
const higherNumbers = (numberOne, numberTwo, numberThree) => {
  if (numberOne > numberTwo && numberOne > numberThree) {
    return numberOne;
  } else if (numberTwo > numberOne && numberTwo > numberThree) {
    return numberTwo;
  } else {
    return numberThree;
  }
};

console.log(higherNumbers(10, 2, 0));

/* 5~ Create a function to check if two numbers are in the range 40-60 or 70-100. 
Return true if they do, return false if one (or both) don’t. */
console.log('------------------')
const checkRange = (numberOne, numberTwo) => {
    if ((numberOne >=40 && numberOne <=60) || numberOne >= 70 && numberOne <= 100) {
      if ((numberTwo >=40 && numberTwo <=60) || numberTwo >= 70 && numberTwo <= 100) {
        return true
      }
    }
    return false
}

console.log(checkRange(70, 100))


/* 6~ Create a function to create a new string composed of a specified number of copies of a given string.
Pass the string and the number of copies as parameters. */
console.log('------------------')
const createString = (str, copies) => {
  let newString = '';

  for (let i = 0; i < copies; i++) {
    newString += str + ' / '
  }
  return newString
}

console.log(createString('Hello World', 5))

/* 7~ Create a function to display the city name if the string begins with “Los” or “New”. 
Pass the city name as a parameter. Return false if they start with a different string. */
console.log('------------------')
const displayCity = (city) => {
  let cityName;

  if (city === 'Los') {
    cityName = 'Los Angeles'
  } else if (city === 'New') {
    cityName = 'New York'
  } else {
    return false
  }
  
  return cityName
}

console.log(displayCity('Los'))

// 8~ Create a function to calculate and return the sum of all elements from an array with 3 elements. Pass the array as a parameter.
console.log('------------------')
let numbers = [10, 12, 1]
const sumArrayTotalIndexes = (arr) => {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }

  return sum
}

console.log(sumArrayTotalIndexes(numbers))

// 9~ Create a function to test if an array of length 2 contains 1 OR 3. Return true is it does, false if it doesn’t.
console.log('------------------')
let arrayForTestArrayFunction = ['No', 1]
const testArray = (arr) => {
  if (arr.includes(1) || arr.includes(3)) {
    return true
  }
  return false

}

console.log(testArray(arrayForTestArrayFunction))

// 10~ Create a function to test if an array of length 2 DOES NOT contain 1 or 3. Return true if it doesn’t, false if it does.
console.log('------------------')
let arrayForTestArrayFunction_two = [2, 4]
const testArray_two = (arr) => {
    if (!arr.includes(1) && !arr.includes(3)) {
      return true
    }
  return false
}

console.log(testArray_two(arrayForTestArrayFunction_two))

// 11~ Create a function to find the longest string from a given array of strings. Pass the array as parameter and return the longest string.
console.log('------------------')
let stringsArr = ['Hello World', 'Longest string ever', 'JSON']
const checkLongestString = (arr) => {
  let longestString = ''
  for (let i = 0; i < arr.length; i++) {
    if (longestString.length < arr[i].length) {
      longestString = arr[i]
    }
  }

  return longestString
}

console.log(checkLongestString(stringsArr))

// 12~ Create a function to find the types of a given angle.
console.log('------------------')
const checkAngleName = (angle) => {
  if (angle < 90) {
    return 'Acute angle'
  } else if (angle === 90) {
    return 'Right angle'
  } else if (angle <= 180) {
    return 'Obtuse angle'
  } else if (angle === 180) {
    return 'Straight angle'
  } else if (angle <= 360) {
    return 'Reflex angle'
  } else if (angle <= 360) {
    return 'Reflex angle'
  }

  return `${angle}° is out of angle`
}

console.log(checkAngleName(360))

// 13~ Create a function to find and return the index of the greatest element of a given array of integers that you passed as a parameter.
console.log('------------------')
let arrayOfIntegers = [11, 60, 600, 5, 601, 1003, 1002]
const checkGreatestItemsIdex = (arr) => {
  let greatestItem = 0

  for (let i = 0; i < arr.length; i++) {
    if (greatestItem < arr[i]) {
      greatestItem = arr[i]
    }
  }

  return greatestItem
}

console.log(checkGreatestItemsIdex(arrayOfIntegers))

// 14~ Create a function to find and return the largest even number from an array of integers that is passed a parameter.
//USE PREVIOUS ARRAY "arrayOfIntegers"
console.log('------------------')
const findEvenLargestNumber = (arr) => {
  let largestEvenNumber = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      if (largestEvenNumber < arr[i]) {
        largestEvenNumber = arr[i]
      }
    }
  }

  return largestEvenNumber
}

console.log(findEvenLargestNumber(arrayOfIntegers))

/* 15~ Create a function to create and return a new string where the first 3 characters are in lower case and the others are in upper case. 
If the string’s length is less than 3, convert the whole string into uppercase. Pass the original string as a parameter. */
console.log('------------------')
const transformString = (str) => {
  let newString = ''
  if (str.length <= 3) {
    newString = str.toUpperCase()
  } else {
    let firstThreeLetters = str.slice(0, 3).toLowerCase()
    newString = firstThreeLetters + str.slice(3, str.length).toUpperCase()
  }


  return newString
  
}

console.log(transformString('Aaabumchacalaca'))

/* 17~ Create a function to calculate the sum of two integers (passed as parameters). 
If the sum is in the 50-80 range, return 65, otherwise, return 80. */
console.log('------------------')
const checkSumRange = (numberOne, numberTwo) => {
  if ((numberOne + numberTwo) >= 50 && (numberOne + numberTwo) <= 80) {
    return 65
  } else {
    return 80
  }
}

console.log(checkSumRange(41, 39))

/* 18~ Create a function to convert a number (passed as a parameter) into a string, basing yourself on this example:
The number has 3 as a factor ⇒ return Diego
The number has 5 as a factor ⇒ return Riccardo
The number has 7 as a factor ⇒ return Stefano
If the number does not have 3,5, or 7, return the original number. */
console.log('------------------')
const convertNumbertoString = (number) => {
  let name = ''
  let factorNumbers = []
  for (let i = 1; i <= number; i++) {
    if(number % i === 0) {
      factorNumbers.push(i)
      console.log(i)
    }
  }

  if (factorNumbers.includes(3)) {
    name = 'Diego'
  } if (factorNumbers.includes(5)) {
    name = 'Riccardo'
  } if (factorNumbers.includes(7)) {
    name = 'Stefano'
  } if (factorNumbers.includes(3 && 5)) {
    name = 'DiegoRiccardo'
  } if (factorNumbers.includes(3 && 7)) {
    name = 'DiegoStefano'
  } if (factorNumbers.includes(5 && 7)) {
    name = 'RiccardoStefano'
  } if (factorNumbers.includes(3 && 5 && 7)) {
    name = 'DiegoRiccardoStefano'
  }
  return name
}

console.log(convertNumbertoString(105))

/* 19~ Create a function that that takes a phrase as a parameter and returns its acronym. 
Ex. British Broadcasting Corporation returns BBC */
console.log('------------------')
const acronymizer = (phrase) => {
  let eachWord = phrase.split(' ')
  let acronym = []
  for (let i = 0; i < eachWord.length; i++) { 
    acronym.push(eachWord[i].slice(0, 1))
  }

  return acronym.join('')
}

console.log(acronymizer('International Business Machine'))

