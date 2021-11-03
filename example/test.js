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
//   console.log(key);
// }


// let array= [3, 4, 5, 6, 7, 8, 9];
//
// for(let i = array.length - 1; i >= 0; i--){
//
// }


// let input = "";
//
// for(let i = 0; i < 10; i++){
//
//   for(let j = 0; j < i; j++){
//     input += " ";
//   }
//   for(let j = 0; j < 10 - i; j++){
//     input += "*";
//   }
//   for(let j = i; j < 9 ; j++){
//     input += "*";
//   }
//
//
//
//   input += "\n";
//
// }
//
// console.log(input);


function Product(name, price){
  this.name = name;
  this.price = price;
}



Product.prototype.print = function(){

  console.log(this.name, this.price);

};





product.print();
