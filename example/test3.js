String.prototype.contain = (input) => {
  return this.toString().indexOf(input) >= -1;
};

console.log("안녕하세요".contain('안녕하세요'));
console.log("안녕하세요".contain('데굴데굴'));


// let string = "hello world..!";
//
//
// console.log(string.toUpperCase());
//
// console.log(string);
