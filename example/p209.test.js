// const date = [{
//   name: '일벌레',
//   mineral: 50,
//   gas: 0,
//   supply: 1
// },{
//   name: '여왕',
//   mineral: 150,
//   gas: 0,
//   supply: 2
// },{
//   name: '바퀴',
//   mineral: 75,
//   gas: 25,
//   supply: 2
// },{
//   name: '히드라리스크',
//   mineral: 100,
//   gas: 50,
//   supply: 2
// },{
//   name: '타락귀',
//   mineral: 150,
//   gas: 100,
//   supply: 2
// }];
//
// const output = JSON.stringify(date);
// const outputB = JSON.stringify(date, null, 5);
//
// //console.log(output);
// console.log(outputB);

// function test(){
//   try{
//     console.log('출력 A');
//     const array = new Array(-2000);
//     console.log('출력 B');
//   } catch(e){
//     console.log('출력C');
//     return;
//     console.log('출력 D');
//   }finally{
//     console.log('출력 E');
//   }
//
//
// }
//
//
//
// test();



function test(){
  try{
   let number = NEW Number(10);
  } catch(e){
    console.log("오류");
  }finally{
    console.log("실행");
  }


}



test();
