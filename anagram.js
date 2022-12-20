/**
 * An anagram of a string is another string that contains the
 * same characters, only the order of characters can be
 * different. For example, “abcd” and “dabc” are an anagram of
 * each other.
 */

const processString = (stringData) => {
  return stringData.toLowerCase().split('').sort().join('')
}

const checkIfAnagram = (string1, string2) => {
  if (string1.length !== string2.length) {
    console.error(`${string1} & ${string2} are not anagram`)
  } else {
    if (processString(string1) === processString(string2)) {
      console.log(`${string1} & ${string2} are anagram`)
    } else {
      console.error(`${string1} & ${string2} are not anagram`)
    }
  }
}

checkIfAnagram('heart', 'earth'); // anagram
checkIfAnagram('Triangle', 'integral'); // anagram
checkIfAnagram('Triangle', 'integr'); // not an anagram