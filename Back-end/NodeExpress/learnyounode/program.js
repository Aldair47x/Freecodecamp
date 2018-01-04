var menu = 8;
var fs = require('fs');
var path = require('path');
var http = require('http');
var bl = require('bl');
switch (menu) {
  case 1:
  //Hello world
  console.log("Hello world!");

    break;

  case 2:
  //Baby steps
  let result = 0

  for (let i = 2; i < process.argv.length; i++) {
    result += Number(process.argv[i])
  }

  console.log(result);

    break;

  case 3:
  //My first I/O

  const contents = fs.readFileSync(process.argv[2]);
  const lines = contents.toString().split('\n').length - 1;
  console.log(lines);

      break;

  case 4:
  //My first Async I/O

  const file = process.argv[2];

  fs.readFile(file, function (err, contents) {
  if (err) {
    return console.log(err);
  }
  // fs.readFile(file, 'utf8', callback) también se puede utilizar
  const lines = contents.toString().split('\n').length - 1;
  console.log(lines);
});

      break;

  case 5:
  //Filtered ls
  const folder = process.argv[2];
  const ext = '.' + process.argv[3];

  fs.readdir(folder, function (err, files) {
    if (err) return console.error(err)
    files.forEach(function (file) {
      if (path.extname(file) === ext) {
        console.log(file);
      }
    });
  });

      break;

  case 6:
  //Make it modular

  console.log("Chosse another! :)");

      break;

  case 7:
  //HTTP client
  http.get(process.argv[2], function (response) {
    response.setEncoding('utf8');
    response.on('data', console.log);
    response.on('error', console.error);
  }).on('error', console.error);

      break;

  case 8:
  //HTTP collect
  http.get(process.argv[2], function (response) {
    response.pipe(bl(function (err, data) {
      if (err) {
        return console.error(err);
      }
      data = data.toString();
      console.log(data.length);
      console.log(data);
    }))
  })

      break;

  case 9:
  //Jugling Async
  console.log("Chosse another! :)");
      break;

  case 10:
  //Time server
  console.log("Chosse another! :)");
      break;

  case 11:
  //HTTP File server
  console.log("Chosse another! :)");

      break;

  case 12:
  //HTTP uppercaserer
  console.log("Chosse another! :)");
      break;

  case 13:
  //HTTP JSON API Server
  console.log("Chosse another! :)");
      break;

  default:
      console.log("Chosse a correct number");

}
