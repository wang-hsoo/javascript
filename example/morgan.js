// const express = require('express');
// const morgan = require('morgan');
//
// const app = express();
// app.use(express.static('public'));
// app.use(morgan('combined'));
//
// app.get('*',(request, response) => {
//   response.send('명령 프롬프트를 확인해주세요');
// });
//
// app.listen(52273, () => {
//   console.log('Servser running at http://127.0.0.1:52273');
// });


// const express = require('express');
// const morgan = require('morgan');
// const bodyParser = require('body-parser');
//
// const app = express();
// app.use(express.static('public'));
// app.use(morgan('combined'));
// app.use(bodyParser.urlencoded({extended: false}));
//
//
// app.get('/', (request, response) => {
//   let output = '';
//   output += '<form method = "post">';
//   output += '   <input type = "text" name = "a">';
//   output += '   <input type = "text" name = "b">';
//   output += '   <input type = "submit">';
//   output += '</form>';
//
//   response.send(output);
// });
//
// app.post('/', (request, response) => {
//   response.send(request.body);
// });
//
// app.listen(52273, () => {
//   console.log('Servser running at http://127.0.0.1:52273');
// });

const express = require('express');
const bodyParser = require('body-Parser');

const app = express();
app.listen(52273, () => {
  console.log('Servser running at http://127.0.0.1:52273');
});

app.use(bodyParser.urlencoded({
  extended: false
}));

let userCounter = 0;
const users = [];

app.get('/user', (request, response) => {
  response.send(users);
});

app.post('/user', (request, response) => {
  const body = request.body;

  if (!body.name) {
    return response.status(400).send('name을 보내주세요');
  }else if (!body.region){
    return response.status(400).send('region을 보내주세요');
  }


  const name = body.name;
  const region = body.region;

  const data = {
    id: uesrCounter++,
    name: name,
    region: region
  } ;

  users.push(data);

  response.send(data);
});

app.get('/user/:id', (request, response) => {
  const id = request.params.id;

  const filtered = users.filter((user) => user.id == id);

  if (filtered.lengh == 1) {
    response.send(filtered[0]);
  }else{
    response.status(404).send('데이터가 존재하지 않습니다');
  }
});


app.put('/user/:id', (request, response) => {
  const id = request.params.id;
  let isExist = false;

  users.forEach((user) => {
    if(user.id == id){
      isExist = true;

      if (request.body.name) {
        users[id].name = request.body.name;
      }
      if (request.body.region) {
        users[id].region = request.body.region;
      }

      response.send(user);
    }
  });

  if (!isExist) {
    response.status(404).send('데이터가 존재하지 않습니다');
  }
});

app.delete('/user/:id', (requset, response) => {
  const id = request.params.id;
  let deletedUser = null;

  for(let i = users.length - 1; i >= 0; i--){
    if (users[i].id == id) {
      deletedUser = users[i];
      users.splice(i, 1);

      break;
    }
  }

  if (deletedUser) {
    response.send(deletedUser);
  }else {
    response.status(404).send('데이터가 존재하지 않습니다');
  }
});
