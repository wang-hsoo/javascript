// console.log(__filename);
// console.log(__dirname);


// console.log('-process.arch: ' ,process.arch);
// console.log('-process.platform: ' ,process.platform);
// console.log('-process.connected: ' ,process.connected);
// console.log('-process.execArgv: ' ,process.execArgv);
// console.log('-process.exitCode: ' ,process.exitCode);
// console.log('-process.mainModule: ' ,process.mainModule);
// console.log('-process.release: ' ,process.release);
// console.log('-process.memoryUsage(): ' ,process.memoryUsage());
// console.log('-process.uptime(): ' ,process.uptime());
//
// process.exit();
//
// console.log(`테스트`);
// console.log(`테스트`);
// console.log(`테스트`);

// process.on('exit', () => {
//   console.log('프로세스가 종료되었습니다.');
// });
//
// process.on('uncaughtException', () => {
//   console.log('예외가 발생.');
// });
//
// error.error.error();



// process.on('exit', (code) => {
//   console.log('프로세스가 종료되었습니다.');
//   console.log(`exit 이벤트 매개 변수: ${code}`);
// });
// process.on('uncaughtException', (error) => {
//   console.log('예외가 발생.');
//   console.log(`uncaughtException 이벤트 매개 변수: ${error}`);
//   console.log();
// });
//
// error.error.error();

// const os = require('os');
//
// console.log(os.hostname());
// console.log(os.type());
// console.log(os.platform());
// console.log(os.arch());
// console.log(os.release());
// console.log(os.uptime());
// console.log(os.loadavg());
// console.log(os.totalmem());
// console.log(os.freemem());
// console.log(os.cpus());
// console.log(os.networkInterfaces());


const url = require('url');

const parsedObject = url.parse('http://hanbit.co.kr/store/books/look.php?p_code=84250257160');

console.log(parsedObject);

const parsedObject1 = url.parse('https://www.shingu.ac.kr/');

console.log(parsedObject1);
