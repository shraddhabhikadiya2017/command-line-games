const words = process.argv.slice(2);

if(words.length < 1){
  console.error('Please provide minimum one phrase');
};
const convertedInputs = [];
let i=0;
for(i=0; i<words.length; i++){
  const inputWord = words[i];
  const convertedWord = toPigLatin(inputWord);
  convertedInputs.push(convertedWord);
}

console.log(`Output: ${convertedInputs.join(' ')}`);


function toPigLatin(word){
  const vowels = ['a','e','i','o','u'];
  const lowerword = word.toLowerCase();

  // word starts with a consonant and a vowel
  if (!vowels.includes(lowerword[0]) && vowels.includes(lowerword[1])){
    const result = word.slice(1) + word[0] + 'ay';
    return result;
  }

  // word starts with two consonants move the two consonants to the end of the word
  else if(!vowels.includes(lowerword[0]) && !vowels.includes(lowerword[1])){
    const result = word.slice(2) + word[0] + word[1] + 'ay';
    return result;
  }

  // word starts with a vowel add the word “way” at the end of the word
  else if(vowels.includes(lowerword[0])){
    const result = word + 'way';
    return result;
  };
}
