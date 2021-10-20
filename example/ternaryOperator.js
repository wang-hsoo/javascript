
//let number = 3;

//console.log(number % 2 == 0? true : false);
//console.log(number % 2 == 0? "짝수" : "홀수");
/*
let numberA = 52;
let numberB = 0;
let numberC = -23;


console.log(`${numberA}은/는 ${numberA > 0 ? "0보다 큰" : "0또는 0보다 작은"}숫자입니다`);

console.log(`${numberB}은/는 ${numberB > 0 ? "0보다 큰" : "0또는 0보다 작은"}숫자입니다`);

console.log(`${numberC}은/는 ${numberC > 0 ? "0보다 큰" : "0또는 0보다 작은"}숫자입니다`);

/*
let test;

test = test ? test : "초기화합니다_1";
console.log(test);

test = test ? test : "초기화합니다_2";
console.log(test);
*/
/*
let test;
if (!test) {
  test = "초기화합니다_1"
}
console.log(test);

if (!test) {

  test = 초기화합니다_2
}
console.log(test);
*/


let test;
test = test || "초기화합니다_1";
console.log(test);

test = test || "초기화합니다_2";
console.log(test);
