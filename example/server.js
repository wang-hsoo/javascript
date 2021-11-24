// const express = require('express');
//
// const app = express();
//
// app.use((request, response) => {
//   response.send('<h1> Hello express</h1>');
// });
//
// app.listen(52273, () => {
//   console.log('Server running at http://127.0.0.1:52273');
// });


// const express = require('express');
//
// const app  = express();
//
// app.get('/page/:id', (request, response) => {
//   const id = request.params.id;
//
//   response.send(`<h1> ${id} Page</h1>`);
// });
//
// app.listen(52273, () => {
//   console.log('Server running at http://127.0.0.1:52273');
// });


// const express = require('express');
//
// const app  = express();
//
// app.get('*', (request,response) => {
//   response.status(404);
//   response.set('methodA', 'ABCDE');
//   response.set({
//       'methodB1': 'FGHIJ',
//       'methodB2': 'KLMNO'
//   });
//   response.send('내 마음대로 본문을 입력합니다.');
// });
//
// app.listen(52273, () => {
//   console.log('Server running at http://127.0.0.1:52273');
// });

// const express = require('express');
// const fs = require('fs');
//
// const app = express();
//
// app.get('/image', (request, response) => {
//   fs.readFile('logo.png',(error, data) => {
//     response.type('image.png');
//     response.send(data);
//   });
// });
//
// app.get('/audio', (request, response) => {
//   fs.readFile('audio.mp4', (error, data) => {
//     response.type('audio/mpeg');
//     response.send(data);
//   });
// });
//
// app.listen(52273, () => {
//   console.log('Server running at http://127.0.0.1:52273');
// });


// const express = require('express');
// const app = express();
//
// app.get('*', (request, response) => {
//   response.status(404);
//   response.send('해당 경로에는 아무것도 없습니다.');
// });
//
// app.listen(52273, () => {
//   console.log('Server running at http://127.0.0.1:52273');
// });

const express = require('express');
const app = express();

app.get('*', (request, response) => {
  response.redirect('http://hanbit.co.kr');
});

app.listen(52273, () => {
  console.log('Server running at http://127.0.0.1:52273');
});
