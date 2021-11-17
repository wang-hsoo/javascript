// const fs = require('fs');
//
// const file = fs.readFileSync('textfile.txt');
// console.log(file);
// console.log(file.toString());



const fs = require('fs');

// fs.readFile('textfile.txt', (error, file) => {
//     console.log(file);
//     console.log(file.toString());
// });

// const a = fs.readFileSync('a.txt');
// const b = fs.readFileSync('b.txt');
// const c = fs.readFileSync('c.txt');
//
// console.log(a);
// console.log(b);
// console.log(c);

// const async = require('async');
//
// async.parallel([
//
//   (callback) => {fs.readFile('a.txt', callback); },
//   (callback) => {fs.readFile('b.txt', callback); },
//   (callback) => {fs.readFile('c.txt', callback); }
// ],(error, results) => {
//   console.log(results);
// });

// fs.writeFileSync('output.txt', '안녕하세요....!');
// console.log('파일 쓰기를 완료했습니다.');

// fs.writeFile('output.txt', '안녕하세요....!', (error) => {
//   console.log('파일 쓰기를 완료했습니다.');
// });

// try {
//   const file = fs.readFileSync('none.txt');
//   console.log(file);
//   console.log(file.toString());
// } catch (e) {
//   console.log('파일을 읽어 들이는데 문제 발생');
//   console.log(e);
// }

fs.readFile('none.txt', (error, file) => {
  if (error) {
    console.log('파일을 읽어 들이는데 문제 발생');
    console.log(error);
    return;
  }
    console.log(file);
    console.log(file.toString);

})
