/*
let i = 0;
let array = [1, 31, 273, 57, 8, 11, 32];
let output;

while (true) {
  if (array[i] % 2 == 0) {
    output = array[i];
    break;
  }

  i = i + 1;
}

console.log(`처음 발견한 짝수는 ${output}입니다.`);
*/

/*
for(let i = 1; i < 10; i++){
  if (i % 2 == 0) {
    continue;
  }

  console.log(i);
}
*/

for (var i = 0; i < 10; i++){
  if( i % 2 != 0) {
    console.log(i);
  }
}
