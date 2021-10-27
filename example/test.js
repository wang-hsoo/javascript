// let array = [52, 273, 32, 24];
//
// for(let i = array.length - 1; i >= 0; i--){
//   console.log(`${i}번째 요소: ${array[i]}`);
// }

//
//
// let outPut = "";
//
// for(let i = 0; i < 10; i++){
//   for(let j = 0; j < 10 - i; j++){
//     outPut += " ";
//   }
//   for(let b = 0; b <= i; b++ ){
//     outPut += "*";
//   }
//   outPut += "\n";
// }
//
// console.log(outPut);


// let object = {
//   name : '바나나',
//   price : 1200
// };
//
// for(let i in object){
//   console.log(`${i}: ${object[i]}`);
// }
//
// for(let item of object){
//   console.log(item);
// }

// console.log(object);
// console.log(object['name']);
// console.log(object.name);
//
//
// function Product(name, price){
//   this.name = name;
//   this.price = price;
// }
//
// let product = new Product("바나나", 1200);
//
// console.log(`${product.name}의 가격은 ${product.price}원`);
// console.log(typeof(product));
//
//
//
// Product.prototype.print = function(){
//   console.log(`${this.name}의 가격은 ${this.price}원`);
//
// }
//
//
// product.print();



// let a = 3;
//
// console.log(a++);
// console.log(++a);
// console.log(a--);
// console.log(--a);


// let a = "a12";
//
// console.log(Number(a));
// console.log(isNaN(a));



// let array = [1, 2, 3, 4, 5];
//
//
// console.log(array.length);





// const a  = 3;
//
// {
//
//   const a = 4;
//   console.log("첫번째" + a);
//
//   {
//     const a = 6;
//     console.log("두번째" + a);
//   }
//
//   console.log(a);
// }
//
// console.log("세번쩨" + a);


//
// let products = [
//
//   {name: '바나나', price : 1200},
//   {name: '바', price : 1200},
//   {name: '바나', price : 1200},
//   {name: '아', price : 1200},
//   {name: '바나나', price : 1200}
//
// ]
//
//
// function printProduct(product){
//   console.log(`${product.name} : ${product.price}`);
// }
//
//
//
// for(let product of products){
//   printP
// }



// let test = {
//   name : '수박',
//   price : 1200,
//   shop: 'none'
// };
//
//
//
// // for(let i in test){
// //   console.log(`${i} : ${test[i]}`);
// //
// // };
//
// function print(i){
//   console.log(i);
// }
//
//
// for( let i of test){
//   print(i);
// }

//
// let input ="";
//
//
// for (let i = 9; i >= 0; i--){
//   for(let j = 9 - i; j > 0; j--){
//     input += " ";
//   }
//
//   for(let j = 0; j <= i; j++){
//     input += "*";
//   }
//
//   for(let j = 0; j < i; j++  ){
//     input += "*";
//   }
//
//   input += "\n";
// }
//
// console.log(input);


// {
//
//   let b = 3;
//   var a = 4;
//
//   console.log(b);
// }
//
// let b = 4;
//
// console.log(b);


// function Product(name, price){
//   this.name = name;
//   this.price = price;
// }
//
// Product.prototype.a = function(){
//   console.log(`${this.name}의 가격은 ${this.price}원입니다`);
// }
//
// let product = new Product("바나나", 12000);
//
// product.a();
//
// product = new Product("바나나", 1500);
// product.a();
//
// let products[] = new Product[
//
//   {"사과", 1200},
//   {"복숭아", 1500}
// ];
//
// products.a();




// let array = [273, 55, 103, 57, 271];
//
// let min = Number.MAX_VALUE;
// let max = Number.MIN_VALUE;
//
//
// for(let number of array){
//   if( min > number ){
//     min = number;
//   }
//
//   if(max < number){
//     max = number;
//   }
//
// }
//
// console.log(`${min}`);
// console.log(`${max}`);



// let input = "";
//
// for(let i = 0; i < 8; i++){
//   for(let j = i; j < 8; j++){
//     input +=  " ";
//
//   }
//   for(let j = 0; j <= i * 2; j++){
//     input += "*";
//   }
//
//
//   input += "\n";
// }
//
//
// console.log(input);


// function power(x, y){
//   console.log(x * x);
//
//   num = 1;
//   for(let i = 0; i < y; i++){
//     num *= x;
//   }
//   console.log(num);
//
//
// }
//
//
// function multiple(){
//    num = 1;
//
//    for (let i = 0; i < arguments.length; i++) {
//      num *= arguments[i];
//    }
//
//    console.log(num);
//
// }
//
// multiple(1,2,3,4,5);
//
//
//
// power(2,3);

// let user = {
//   이름 : "Nature of Code",
//   나이 : 300000,
//   저자 : "다니엘 쉬프만",
//   ISBN : 97889684819,
//   페이지수 : "620페이지"
//
// };
//
// for(let i in user){
//
//
//   console.log(`${i} : ${user[i]}`);
// }






// let array = [52, 71, 32, 103, 273, 93];
//
// for(let i = array.length - 1; i >= 0; i--){
//   console.log(array[i]);
// }






//
// function Product(w, name, price){
//   this.name = "돼지삼겹살";
//   this.w = w;
//   this.price = w / 100 * 1690;
// }
//
//
// Product.prototype.print = function(){
//   console.log( `${this.name}  ${this.w}   ${this.price}`);
// }
//
//
// let product = new Product(200);
//
// product.print();

let object = {

  "+" : 2,
  "-" : 3,
  "*" : 4,
  "/" : 5
};

console.log(object['+']);
