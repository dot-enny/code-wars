function titleCase(title, minorWords) {
    if (title === '') return '';
  
    // If minorWords is not provided, treat it as an empty string
    minorWords = minorWords || '';
  
    // Convert both title and minorWords to lowercase to ensure case insensitivity
    title = title.toLowerCase().split(' ');
    minorWords = minorWords.toLowerCase().split(' ');
  
    // Capitalize the first word, and capitalize other words not in the list of minor words
    const result = title.map((word, index) => {
      if (index === 0 || !minorWords.includes(word)) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      } else {
        return word;
      }
    });
  
    return result.join(' ');
};

console.log(titleCase('a clash of KINGS', 'a an the of'))
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'))
console.log(titleCase('the quick brown fox'))