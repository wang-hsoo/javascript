// const request = require('request');
//
// //const url = 'https://www.hanbit.co.kr/store/books/new_book_list.html';
// const url = 'https://www.enuri.com';
// request(url , (error, response, body) => {
//   console.log(body);
// });



// const request = require('request');
// const cheerio = require('cheerio');
//
// const url = 'https://www.hanbit.co.kr/store/books/new_book_list.html';
// request(url , (error, response, body) => {
//   const $ = cheerio.load(body);
//
//   $('.view_box').each((index, element) => {
//     const title = $(element).find('.book_tit').text().trim();
//     let writer = $(element).find('.book_writer').text().trim();
//     writer = writer.split(',').map((item) => item.trim());
//
//     console.log(title);
//     console.log(writer);
//     console.log();
//   });
//
// });

// const fs = require('fs');
//
// fs.readFile('fileA.txt', (error, fileA) => {
//   fs.readFile('fileB.txt', (error, fileB) => {
//     fs.readFile('fileC.txt', (error, fileC) => {
//       console.log(fileA);
//       console.log(fileB);
//       console.log(fileC);
//     });
//   });
// });

const fs = require('fs');
const async = require('async');

async.parallel({
  fileA: (callback) => {
    fs.readFile('fileA.txt', callback);
  },
  fileB: (callback) => {
    fs.readFile('fileB.txt', callback);
  },
  fileC: (callback) => {
    fs.readFile('fileC.txt', callback);
  }
},(error, results) => {
  console.log(results.fileA);
  console.log(results.fileB);
  console.log(results.fileC);
});
