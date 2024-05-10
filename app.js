// 1-masala
let strNumber = "34567";
console.group("1-masala");
let reverceNumber = strNumber.split("").reverse();
console.log(reverceNumber);
console.groupEnd();

// 2-masala;
console.group("2-masala");
console.log(`
== / === bu kabi operatorlar shart operatorlari yokiy tenglik operatorlari
hisoblanib tenglkning ikki tomonidagi qiymatlarni bir biriga tenglaydi
agar tengliknining ikki tomonidagi qiymatlar bir biriga teng bo'lsa TRUE qiymati agr teng
bo'lmasa FALSE qiymati qaytadi bu ikkisinig farqi 2 talik tenglik (==) faqatgina 
qiymatlarni tekshiradi. 3 talik (===) bu esa type larni ham tekshiradi
(5 == "5") -> true  /   (5 === "5") -> false
`);
console.groupEnd();

// 3-masala
console.group("3-masala");
let counter = (num, i) => {
  if (i > num) {
    return;
  }

  console.log(i);
  counter(num, i + 1);
};
let userOfNumber = 12;
let result = counter(userOfNumber, 1);
console.groupEnd();

// 4 - masala;
console.group("4-masala");
let evenAndOddNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let findEvenAndOddNumbers = (numbers) => {
  let sumEvenOdd = [];

  let evenFiltred = numbers
    .filter((num) => num % 2 === 0)
    .reduce((acc, val) => (acc += val));
  sumEvenOdd.push(evenFiltred);
  let oddFiltred = numbers
    .filter((num) => num % 2 !== 0)
    .reduce((acc, val) => (acc += val));
  sumEvenOdd.push(oddFiltred);

  return console.log(sumEvenOdd);
};
findEvenAndOddNumbers(evenAndOddNumbers);

// 5-masala
console.groupEnd();
console.group("5-masala");
let optionalWord = "salom! men frontend developerman!";
let purifiedWord = "";
let deleteSymbol = (word) => {
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== "!") {
      purifiedWord += word[i];
    }
  }
};
deleteSymbol(optionalWord);
console.log(purifiedWord);
console.groupEnd();

// 6-masala
console.group("6-masala");
let firstNumberArr = [2, 3];
let secondNumberArr = [4, 5];

let sumOfTwoArrays = (firstArr, secondArr) => {
  let firstSum = firstArr.reduce((acc, val) => (acc += val));
  let secondSum = secondArr.reduce((acc, val) => (acc += val));
  return [firstSum, secondSum];
};
let resultFirstAndSecondArr = sumOfTwoArrays(firstNumberArr, secondNumberArr);
console.log(resultFirstAndSecondArr);
console.groupEnd();

// 7-masala;
console.group("7-masala");
const delteteLeter = function (word) {
  let newWord = "";
  for (let i = 1; i < word.length - 1; i++) {
    newWord += word[i];
  }
  return newWord;
};
let myName = "Mavlonbek";
let clippedetter = delteteLeter(myName);
console.log(clippedetter);
console.groupEnd();

// 8-masala
console.group("8-masala");
let numbersArr = [1, 2, 3];
let reverceArr = (arr) => {
  let newArr = [];
  arr.forEach((item) => newArr.unshift(item));
  return newArr;
};
console.log(reverceArr(numbersArr));
console.groupEnd();

// 9-masala
console.group("9-masala");
let lastNum = "10500";
let deleteLastZero = lastNum;
while (deleteLastZero.endsWith("0")) {
  deleteLastZero = deleteLastZero.slice(0, -1);
}
console.log(deleteLastZero);
console.groupEnd();

// 10-masala
console.group("10-masala");
let mixedNumbers = [2, 8, 45, 61, 9, 7];
let findMinNumber = Math.min(...mixedNumbers) ** 4;
console.log(findMinNumber);
console.groupEnd();
