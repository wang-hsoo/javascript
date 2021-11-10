// const _ = require('underscore');
//
// const array =[{
//   name : '고구마',
//   price : 1000
//
// },
// {
// name : '감자',
// price: 500
// },
// {
// name: '바나나',
// price: 1500
// }
//
// ];
//
// const outputA = _.sortBy(array,(item) => item.price);
// console.log(outputA);
//
// const outputB = _(array).sortBy((item) => item.name);
// console.log(outputB);


const javascriptObject = [{

  name: '윤인성',
  region: '서울'
},{

  name: '윤명일',
  region: '도쿄'
}];

const outputA =JSON.stringify(javascriptObject);
const outputB =JSON.stringify(javascriptObject, null, 2);
console.log(typeof(outputA));
console.log(outputA);
console.log(outputB);
console.log(`--------------------------`);

const outputC = JSON.parse(outputB);
console.log(typeof(outputC));
console.log(outputC);
