// let product = {
//   제품명 : '7D 건조 망고',
//   유형 : '당절임',
//   성분: '망고, 설탕, 메타중아황산나트륨, 치자황색소',
//   원산지 : '필리핀'
// }
//
// console.log(product);


// let object = {
//   name : '바나나',
//   price : 1200
// };
//
// console.log(object.name);
// console.log(object.price);


// let object = {
//   'with space': 273,
//     'with ~![]@#$%^&*' : 52
// }
//
// console.log(object['with space']);
// console.log(object['with ~![]@#$%^&*']);


// let object = {
//   name : '바나나',
//   price : 1200
// };
//
// for(let key in object){
//   console.log(`${key}: ${object[key]}`);
// };

// var object = {
//   number : 273,
//   string : 'RintIanTta',
//   boolean : true,
//   array : [52, 23, 103, 32],
//   method : function(){
//
//   }
// };
//
// for(let key in object){
//   console.log(`${key}: ${object[key]}`);
// }
//
// console.log(object);

// let object = {
//   name : '바나나',
//   price : 1200,
//   print : function() {
//     console.log(`${this.name}의 가격은 ${this.price}원 입니다`)
//   }
// };
//
//
//
// object.print();
// console.log(object.name);
// console.log(object.print());

// let products = [{
//   name : '바나나',
//   price : 1200,
//   print : function(){
//     console.log(`${this.name}의 가격은 ${this.price}원입니다.`);
//   }
// },{
//     name : '사과',
//     price : 2000,
//     print : function(){
//       console.log(`${this.name}의 가격은 ${this.price}원입니다.`);
//
//   }
// },{
//     name : '배',
//     price : 3000,
//     print : function(){
//       console.log(`${this.name}의 가격은 ${this.price}원입니다.`);
//
//   }
// },{
//     name : '고구마',
//     price : 700,
//     print : function(){
//       console.log(`${this.name}의 가격은 ${this.price}원입니다.`);
//
//   }
// },{
//     name : '감자',
//     price : 600,
//     print : function(){
//       console.log(`${this.name}의 가격은 ${this.price}원입니다.`);
//
//   }
// },{
//     name : '수박',
//     price : 5000,
//     print : function(){
//       console.log(`${this.name}의 가격은 ${this.price}원입니다.`);
//
//   }
// }
// ];
//
// for(let product of products){
//   product.print();
// }




let products = [

  {name : '바나나', price : 1200},
  {name : '사과', price : 1200},
  {name : '배', price : 3200},
  {name : '고구마', price : 200},
  {name : '감자', price : 600},
  {name : '수박', price : 5000},
];


function printProduct(product){
  console.log(`${product.name}의 가격은 ${product.price}원입니다.`);
}

for(let product of products){
  printProduct(product);
}


// function Product(name, price){
//   this.name = name;
//   this.price = price;
// }
//
// let product = new Product("바나나", 1200);
//
// console.log(product);



// function Product(name, price){
//   this.name = name;
//   this.price = price;
// }
//
// Product.prototype.print = function(){
//   console.log(`${this.name}의 가격은 ${this.price}원 입니다.`);
// };
//
// let product = new Product("바나나", 1200);
//
// product.print();



// function Product(name, price){
//   this.name = name;
//   this.price = price;
// }
//
// Product.prototype.print = function(){
//   console.log(`${this.name}의 가격은 ${this.price}원 입니다.`);
// };
//
// let products = [
//   new Product('바나나', 1200),
//   new Product('사과', 3000),
//   new Product('고구마', 700),
//   new Product('수박', 2000),
//   new Product('배', 200),
//   new Product('감자', 700),
// ];
//
// for (let product of products){
//   product.print();
// }

// console.log(null);
// console.log(typeof(null));


// let zeroNumber = 0;
// let falseBoolean = '';
// let emptyasString = '';
// let undefinedValue;
// let nullValue = null;
//
// if( zeroNumber == null )
//   console.log('0은 존재하지 않는 값입니다');
//
// if (falseBoolean == null) {
//   console.log('false은 존재하지 않는 값입니다');
// }
//
//
// if( emptyasString == null )
//   console.log('빈 문자열은 존재하지 않는 값입니다');
//
// if (undefinedValue == null) {
//   console.log('undefined은 존재하지 않는 값입니다');
// }
//
// if( nullValue == null )
//   console.log('null은 존재하지 않는 값입니다');
