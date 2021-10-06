/*
let i = 0;
let array = [52, 273, 32, 65, 103];

while (i < array.length) {

  console.log(i + "번째 출력" + array[i]);

  i++;

}
*/

/*
let output = 0;

for(let i = 0; i <= 100; i++){
  output += i;
}

console.log(output);
*/
/*
let output = 1;
for (let i = 1; i <= 20; i++){
  output *= i;
}

console.log(output);
*/
/*
let array = [1, 2, 3, 4, 5, 6];

for(let i =array.length -1; i >= 0; i--){
  console.log(array[i]);
}
*/
/*
let array = ["사과", "배", "포도", "딸기", "바나나"];

for (let i in array){
  console.log(`$[i]번째 요소: ${array[i]}`);
}

console.log("------------구분선----------------");

for(let item of array){
  console.log(item);
}
*/

/*
let start =new Date().getTime();
let count = 0;

while (start + (1000 * 3) > new Date().getTime()) {
  count++;
}

console.log(count + "만큼 반복했습니다");
*/


/*
let output = "";

for( let i = 0; i < 10; i++){
  for(let j = 0; j < i + 1; j++){
    output += '*';
  }

  output += '\n';
}

console.log(output);
*/
/*
let output = "";

for(let i = 0; i < 10; i++){
  for(let j = 0; j < 10 - i; j++){
    output +=' ';
  }
  for(let j = 0; j < i + 1; j++){
    output += '*';
  }
  output += '\n';
}

console.log(output);
*/


let output = "";

for(let i = 0; i < 8; i++){
  for(let j = 0; j < 7 - i; j++){
    output += ' ';
  }
  for(let j = 0; j < i + 1; j++){
    output += '*';
  }
  for(let j = 1; j <= i; j++){
    output += '*';
  }

  output += '\n';
}

console.log(output);
