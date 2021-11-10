// function callThreeTimes(callback){
//
//   if (callback) {
//
//   for(let i = 0; i < 10; i++){
//       callback();
//     }
//   } else {
//       console.log(`매개변수 callback이 지정되지 않았습니다`);
//     }
//   }
//
// callThreeTimes(function () { console.log('안녕하세요');});
//
// callThreeTimes();

//const array = new Array( -2000);

// try {
//   const array = new Array( -2000);
// } catch (exception) {
//   console.log(`${exception.name} 예외발생`);
// } finally {
//   console.log('finally 구문이 실행');
// }


// function test(){
//   try {
//     const array = new Array(-2000);
//   } catch (exception) {
//     console.log(`${exception.name} 예외발생`);
//     console.log('함수종료');
//   }
// }
//
// test();
//
// function test1(){
//   try {
//     const array = new Array(-2000);
//   } catch (exception) {
//     console.log(`${exception.name} 예외발생`);
//     return;
//     console.log('함수종료');
//   }
// }
//
// test1();
//
//
//
//
//
// function test2(){
//   try {
//     const array = new Array(-2000);
//   } catch (exception) {
//     console.log(`${exception.name} 예외발생`);
//     return;
//   } finally{
//     console.log('함수종료');
//   }
// }
//
// test2();

// try{
//   error.error.error();
// }catch(e){
//   console.log(e.name);
//   console.log(e.message);
// }



// const error = new Error('메세지');
// error.name = '내 마음대로 오류';
// error.message = '오류의 메세지';
//
// throw error;






try {
    throw '예외가 발생했습니다'
  } catch (exception) {

    console.log('예외가 발생했습니다');
    console.log(exception);
    console.log();
  }





  try {
      const error = new Error('메세지');
      error.name = '내 마음대로 오류';
      error.message = '오류의 메세지';

      throw error;
    } catch (e) {

      console.log(`${e.name} 예외발생`);
      console.log(e.message);
    }
