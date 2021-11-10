String.prototype.contain = function (input){
  return this.indexOf(input) >= -1;
}

console.log('안녕하세요'.contain('안녕'));
console.log('안녕하세요'.contain('데굴데굴'));
