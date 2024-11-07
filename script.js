// 1. შექმენით რიცხვების მასივი და თითოეული რიცხვისთვის foreach ციკლით დაბეჭდეთ მათი კვადრატი.
let arr = [10, 20, 30];
arr.forEach((num, index) => {
  arr[index] = num * num;
});
console.log(arr);

// 2. შექმენით ხილის სახელების მასივი და foreach ციკლით დაბეჭდეთ თითოეული ხილის სახელი.
let fruit = ["banana", "apple", "grape"];
fruit.forEach((num) => {
  console.log(num);
});

// 3. მასივში არსებული რიცხვების ჯამი გამოიანგარიშეთ foreach ციკლით.
let sum = [2, 4, 6, 8];
let summed = 0;
sum.forEach((num) => {
  summed = num += summed;
});
console.log(summed);

// 4. შექმენით მასივი სტუდენტების სახელებით და foreach ციკლით დაბეჭდეთ, რომელი სტუდენტი რომელ ადგილზეა.

let students = ["ნიკი", "ვახო", "ირაკლი", "გეგა"];

students.forEach((saxeli, index) => {
  console.log(`${saxeli} არის ` + index + " ადგილზე");
});

// 5. შექმენით მასივი და მასში ჩაწერეთ მთელი რიცხვები. foreach ციკლით მხოლოდ ლუწი რიცხვები დაბეჭდეთ.
let odds = [2, 3, 4, 5, 6, 7, 8, 9];

odds.forEach((ricxvi) => {
  if (ricxvi % 2 === 0) {
    console.log(ricxvi);
  }
});

// 6. შექმენით რიცხვების მასივი და map მეთოდის საშუალებით მიიღეთ მათი კვადრატების ახალი მასივი.

let square = [2, 3, 4, 5, 6, 7];

let squared = square.map((ricxvi) => {
  console.log(ricxvi * ricxvi);
});

// 7. მასივში ჩაწერეთ სახელები და map მეთოდის გამოყენებით ყოველი სახელი ყველა ასოს პატარა ასოზე გადააკეთეთ.

let upper = ["NIKI", "VAXO", "IRAKLI", "GEGA"];

let lowered = upper.map((saxeli) => {
  console.log(saxeli.toLowerCase());
});

// 8. შექმენით რიცხვების მასივი და map მეთოდით მიიღეთ მასივი, სადაც ყველა რიცხვი 10-ჯერ გაიზარდა.

let nums = [1, 2, 3, 4, 5, 6];

let bigger = nums.map((ricxvi) => {
  console.log(ricxvi * 10);
});

// 9. შექმენით ობიექტების მასივი, სადაც თითოეულ ობიექტში არის სტუდენტის სახელი და ქულა. map მეთოდით მიიღეთ ახალი მასივი მხოლოდ სტუდენტების სახელებით.

const stud_grad = [
  { name: "Charles", grade: 10 },
  { name: "James", grade: 5 },
  { name: "Mark", grade: 3 },
  { name: "Steve", grade: 2 },
  { name: "Mike", grade: 8 },
];

let OnlyNames = stud_grad.map((saxeli) => {
  return saxeli.name;
});

console.log(OnlyNames);

// 10. შექმენით რიცხვების მასივი და map მეთოდით მიიღეთ მასივი, რომელშიც ყველა ლუწი რიცხვი გაორმაგებულია, ხოლო კენტი არ შეცვლილა.

let nu = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let ragac = nu.map((ricxvi) => {
  if (ricxvi % 2 === 0) {
    return ricxvi * 2;
  } else {
    return ricxvi;
  }
});
console.log(ragac);

// 11. შექმენით რიცხვების მასივი და filter მეთოდით მიიღეთ მხოლოდ ლუწი რიცხვების მასივი.

let k = [1, 2, 3, 4, 5, 6, 7, 8];

let FilteredK = k.filter((ricxvi) => {
  return ricxvi % 2 === 0;
});
console.log(FilteredK);

// 12. შექმენით სახელების მასივი და filter მეთოდით მხოლოდ ის სახელები ამოიღეთ, რომლებიც 5-ზე მეტ სიმბოლოს შეიცავს.

let naames = ["niki", "vaxo", "irakli", "andria"];

let FilteredNaames = naames.filter((saxeli) => {
  return saxeli.length > 5;
});
console.log(FilteredNaames);

// 13. შექმენით რიცხვების მასივი და filter მეთოდით მხოლოდ დადებითი რიცხვები მიიღეთ.

let l = [-3, -2, -1, 0, 1, 2, 3];

let FilteredL = l.filter((ricxvi) => {
  return ricxvi > 0;
});
console.log(FilteredL);

// 14. შექმენით ობიექტების მასივი, სადაც თითოეულ ობიექტში არის პროდუქტების სახელები და ფასები. filter მეთოდით მიიღეთ მხოლოდ ის პროდუქტები, რომელთა ფასი 100-ზე მეტია.
const products = [
  { name: "Coffee", price: 10 },
  { name: "Tea", price: 500 },
  { name: "Sugar", price: 3 },
  { name: "Milk", price: 200 },
  { name: "Bread", price: 8 },
];

let FilterProducts = products.filter((fasi) => {
  return fasi.price > 100;
});
console.log(FilterProducts);

// 15. შექმენით რიცხვების მასივი და filter მეთოდით მიიღეთ ყველა რიცხვი, რომელიც 50-ს აღემატება.

let N = [10, 20, 30, 40, 50, 60, 70, 80];

let FilteredN = N.filter((ricxvi) => {
  return ricxvi > 50;
});
console.log(FilteredN);

// 16. დაწერეთ კოდი, რომელიც while ციკლით 1-დან 10-მდე რიცხვებს დაბეჭდავს.
let index = 1;
do {
  console.log(index);
  index++;
} while (index <= 10);

// 17. დაწერეთ პროგრამა, რომელიც while ციკლით მასივში არსებული რიცხვების ჯამს გამოიანგარიშებს.
let mas = [1, 2, 3, 4];
let su = 0;
let i = 0;

while (i < mas.length) {
  su += mas[i];
  i++;
}
console.log(su);

// 18. შექმენით ცვლადი რიცხვით 1 და while ციკლით იმატეთ 2-ით, სანამ რიცხვი არ მიაღწევს 20-ს.

let indexx = 1;
do {
  console.log(indexx);
  indexx = indexx + 2;
} while (indexx <= 20);
// 19. დაწერეთ პროგრამა, რომელიც while ციკლით რიცხვებს დაბეჭდავს 20-დან 10-მდე დაღმავალი თანმიმდევრობით.
let inde = 20;
do {
  console.log(inde);
  inde--;
} while (inde >= 10);

// 20. დაწერეთ პროგრამა, რომელიც while ციკლით მასივში ყველა ობიექტს გამოიკვლევს და თითოეული მათგანის სახელს დაბეჭდავს.
const saxel = [
  { name: "ragac", price: 10 },
  { name: "raga", price: 500 },
  { name: "ragaca", price: 3 },
];
let ind = 0;
while (ind < saxel.length) {
  console.log(saxel[ind].name);
  ind++;
}
