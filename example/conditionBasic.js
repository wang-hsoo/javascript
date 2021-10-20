/*
let input = 32;

if(input % 2 == 0){
  console.log("짝수입니다!");
}

if(input % 2 == 1){
  console.log("홀수입니다!");
}
*/
/*
let date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDay()); //getDay 요일을 표시
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
*/

/*
let date = new Date();

if(date.getHours() < 12){
  console.log("오전입니다");
}

if( 12 <= date.getHours()){
  console.log("오후입니다.");
}
*/
/*
let input = 32;

if(input  % 2 == 0){
  console.log("짝수입니다");
}else {
  console.log("홀수입니다.");
}
*/
/*
let date = new Date();

if(date.getHours() < 12){
  console.log("오전입니다");
}else {
  console.log("오후입니다.");
}
*/


/*
let date = new Date();
let hours = date.getHours();

if (hours < 11) {
  console.log("아침먹을 시간입니다");
}else {
  if (hours < 15) {
    console.log("점심 먹을 시간입니다,");
  }else {
    console.log("저녁먹을 시간입니다");
  }
}
*/
/*
let date = new Date();
let hours = date.getHours();

if (hours < 11) {
  console.log("아침먹을 시간 입니다ㅏ");
}else if (hours < 15) {
  console.log("점심먹을 시간입니다.");
}else {
  console.log("저녁먹을 시간입니다.");
}
*/

/*
let input = 32;

switch (input % 2) {
  case 0:
      console.log("짝수입니다");
      break;
  case 1:
      console.log("홀수입니다");
      break;
  default:

}
*/



let date = new Date();

switch(date.getMonth()+1){
  case 12:
  case 1:
  case 2:
    console.log("겨울입니다");
    break;

  case 3:
  case 4:
  case 5:
    console.log("봄입니다");
    break;


  case 6:
  case 7:
  case 8:
    console.log("여름입니다");
    break;

  case 9:
  case 10:
  case 11:
      console.log("가을입니다");
      break;


  default:
    console.log("우레레ㅔㄹ");
    break;
}
