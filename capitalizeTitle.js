/**
 * given a string title consisting of one or more words separated by a single space, where
 * each word consists of English letters. Capitalize the string by changing the
 * capitalization of each word such that:
 */
const capitalizeTitle = (title) => {
  let result = [];
  title.split(' ').map(word => {
    result.push(`${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`)
  })
  result = result.join(' ')
  console.log('result: ', result);
}

capitalizeTitle("capiTalIze a titLe")