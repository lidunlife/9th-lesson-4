let letterSearch = [
  "хлеб",
  "мед",
  "банан",
  "яблоко",
  "Азиза",
  "цветок",
  "машина",
];
let yourword = prompt(`write your letter`)
let worldWithYourWord = [];
let wordWithoutYourWord = [];

for (let word of letterSearch) {
  if (word.toLowerCase().includes(yourword)) {
    worldWithYourWord.push(word);
  } else {
    wordWithoutYourWord.push(word);
  }
}

console.log("Words with 'your world':", worldWithYourWord);
console.log("Words without 'your world':", wordWithoutYourWord);