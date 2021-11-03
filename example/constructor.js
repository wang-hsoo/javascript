// function Constructor(){}
//
//   Constructor.property = 273;
//   Constructor.method = function(){  };
//
//
//
// console.log(Constructor.property);
// console.log(Constructor.method);


// let numberA = Number.MAX_VALUE;
// let numberB = Number.MAX_VALUE + 1;
// let numberC = Number.MIN_VALUE;
// let numberD = Number.NaN;
// let numberE = Number.POSITIVE_INFINITY;
// let numberF = Number.NEGATIVE_INFINITY + 1;
//
// let addNumber = Number(`0.00000000000001e+308`);
// let number = Number.MAX_VALUE + addNumber;
//
// console.log(numberA);
// console.log(numberB);
// console.log(numberC);
// console.log(numberD);
// console.log(numberE);
// console.log(numberF);
// console.log('\n');
// console.log(addNumber);
// console.log(number);


// let string = 'ancfdDDsf';
//
// string = string.toUpperCase();
// console.log(string);
//
// string = string.toLowerCase();
// console.log(string);

// let string = '안녕하세요 좋은 아침입니다';
//
// if(string.indexOf('아침') >= 0){
//   console.log('좋은아침이에요....');
// }

// let string = 'Hello World';
// string = string.toLowerCase();
// string = string.replace(' ', '|');
// let array = string.split('|');
//
// console.log(string);
// console.log(array);
//
//
// let stringB = 'Hello World';
// let arrayB = stringB.toLowerCase().replace(' ','|').split('|');
//
// console.log(stringB);
// console.log(arrayB);


// let string = '감자, 고구마, 바나나, 사과';
//
// let array = string.split(',');
// console.log(array);

// let dateA = new Date();
// console.log(dateA);
//
// let dateB = new Date(692281800000);
// console.log(dateB);
//
// let dateC = new Date("December 9, 1991 21:30:00");
// console.log(dateC);
//
// let dateD = new Date(1991, 12 - 1, 9, 21, 30, 0, 0);
// console.log(dateD);

// let date = new Date();
//
// console.log(date);
//
// date.setFullYear(date.getFullYear()+1);
// date.setMonth(date.getMonth() + 11);
// date.setDate(date.getDate() + 3);
//
// console.log(date);

// let now = new Date();
// let before = new  Date('November 3, 1999');
//
// let interval = now.getTime() - before.getTime();
// interval = Math.floor(interval / (1000 * 60 * 60 * 24));
//
// console.log(`태어나고 ${interval}일 지났습니다`);


// let array = [
//   {
//     name: '고구마',
//     price: 1000
//   },
//   {
//     name: '감자',
//     price: 500
//   },
//   {
//     name: '바나나',
//     price: 1500
//   }
// ];
//
// let popped = array.pop();
// console.log('- 배열에서 꺼낸 요소');
// console.log(popped);
// console.log('-pop()메소드를 호출한 이후의 배열');
// console.log(array);
//
//
// array.push(popped);
// array.push({
//   name: '사과',
//   price: 2000
// });
//
// console.log('-push()메소드를 호출한 이후의 배열');
// console.log(array);



let arrayA = ['고구마', '감자', '바나나'];

let arrayB = [
  {
    name: '고구마',
    price: 1000
  },
  {
    name: '감자',
    price: 500
  },
  {
    name: '바나나',
    price: 1500
  }
];

arrayA.sort();
console.log('-문자열로 정리');
console.log(arrayA);
console.log();
console.log('-문자열로 정렬(역순)');
console.log(arrayA.reverse());
console.log();

arrayB.sort((itemA, itemB) => {
  return itemA.price - itemB.price;
});
console.log('-객체 내부의 숫자로 정렬');
console.log(arrayB);
console.log();

arrayB.sort((itemA, itemB) => {
  if(itemA.name < itemB.name){
    return -1;
  }else if(itemA.name > itemB.name){
    return 1;
  }else{
    0;
  }
});

console.log('객체 내부의 문자열로 정렬');
console.log(arrayB);
