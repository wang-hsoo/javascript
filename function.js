/*
let a = function(){
  console.log("함수의 첫 번째 줄");
  console.log("함수의 두 번째 줄");
};

a();
console.log(a);
*/
/*
function a(){
  console.log("함수의 첫 번째 줄");
  console.log("함수의 두 번째 줄");
}

a();
console.log(a);
*/
/*
let a = () => {
  console.log("함수의 첫 번째 줄");
  console.log("함수의 두 번째 줄");
}

a();
console.log(a);
*/
/*
function power(x){
  return x * x;
}

console.log(power(10));
console.log(power(20));
*/

/*
function multiply(x,y){
  return x * y;
}

function add(x,y){
  return x + y;
}

function sub(x, y){
  return x - y;
}

function div(x, y) {
  return x / y;
}

console.log(multiply(52, 273));
console.log(add(52, 273));
console.log(sub(52, 273));
console.log(div(52, 273));
*/
/*
function print(message){
  console.log(`"${message}"(이)라고 말했습니다`);
}


print("안녕하세요");
print("뿌잉뿌잉")
*/
/*
function sum(min, max){
  let output = 0;
  for(let i = min; i <= max; i++){
    output += i;
  }

  return output;
}

console.log(sum(1, 100));
*/

/*
function multiply(min, max){
  let output = 1;
  for(let i = min; i <= max; i++){
    output *= i;
  }

  return output;
}

console.log(multiply(1, 10));
*/
/*
function print(name, count){
  console.log(`${name}이/가 ${count}개 있습니다`);
}


print("사과",10);
print("사과");
*/

/*
function print(name, count){
  if (!count) {
    count = 1;
  }
  console.log(`${name}이/가 ${count}개 있습니다`);
}

print("사과");
*/
/*
function print(name, count){
  count = count || 1;
  console.log(`${name}이/가 ${count}개 있습니다`);
}

print("사과");
*/
/*
function print(name, count = 1){

  console.log(`${name}이/가 ${count}개 있습니다`);
}

print("사과");
print("사과", 10);
*/
/*
function callTenTimes(callback){
  for(let i = 0; i < 10; i++){
    callback();
  }
}

callTenTimes(function(){
  console.log('함수호출');
})
*/
/*
let inputA = "52";
let inputB = "52.273";
let inputC = "1401동";

console.log(parseInt(inputA));

console.log(parseInt(inputB));
console.log(parseFloat(inputB));

console.log(parseInt(inputC));
*/
/*
console.log(parseInt("0", 2));
console.log(parseInt("10", 2));
console.log(parseInt("100", 2));
console.log(parseInt("1000", 2));

console.log();

console.log(parseInt("0", 8));
console.log(parseInt("10", 8));
console.log(parseInt("100", 8));
console.log(parseInt("1000", 8));
*/
/*
setTimeout(function(){
  console.log("1초가 지났습니다");
}, 1000);

setInterval(function(){
  console.log("1초 마다 호출됩니다");
}, 1000);
*/

/*
let id = setInterval(function(){
  console.log("출력합니다");
}, 1000);

setTimeout(function(){
  clearTimeout(id);
}, 3000);
*/
/*
let a;

a = 10;
a = 20;

console.log(a);


let b;
b = function () {console.log("첫벉째 함수");};
b = function () {console.log("두벉째 함수");};

b();
*/
/*
let b;
b = function () {console.log("1");};
b = function () {console.log("2");};

b();
*/
/*
b = function () {console.log("1");};
function b() {console.log("2");};

b();
*/
/*
function b() {console.log("2");};
b = function () {console.log("1");};

b();
*/

function b() {console.log("1");};
function b() {console.log("2");};

b();

(function(){
  console.log(this);
})();

(() => {
  console.log(this);
})();
