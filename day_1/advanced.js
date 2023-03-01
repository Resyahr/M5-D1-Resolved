// 1~ Given a string (as a parameter), return the character that is most commonly used.

const returnMostUsedChar = (str) => {
  let frequencyCounter = {}
  let lowerCaseStr = str.toLowerCase()

  for (let character of lowerCaseStr) {
    frequencyCounter[character] = frequencyCounter[character] + 1 || 1
  }

  let maxCount = 0
  let maxCharacter = 0
  for (let key in frequencyCounter) {
    if (frequencyCounter[key] > maxCount) {
        maxCount = frequencyCounter[key]
        maxCharacter = key
    }
  }
  return `The most used letter in this text is: '${maxCharacter}'`
}

console.log(returnMostUsedChar("Most used letter"))

/* 2~ Check if two strings (passed as parameters) are anagrams of each other. 
Do not consider spaces or punctuation, make the whole word lower case. Return true if the words are anagram, return false if they aren’t. */

const isAnagram = (strOne, strTwo) => {
  let wordOne = strOne.toLowerCase().split('').sort().join('')
  let wordTwo = strTwo.toLowerCase().split('').sort().join('')

  if (wordOne === wordTwo) {
    return true
  }

  return false

}

console.log(isAnagram('hello', 'olleh'))

/* 3~ Given a word and a list of possible anagrams (both passed as parameters), return the correct list of anagrams: 
Ex. “listen” is the word, [“enlist”, “google”, “inlets”] are the possibilities: the output should be [“enlist”, “inlets”] */