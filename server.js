/*********************************/
/* Set up the static file server */
let static = require('node-static');
/*Set up the http server library */
let http = require('http');

/*Assume that we are running on Heroku*/
let port = process.env.PORT;
let directory = __dirname + '/public';

/**/
if ((typeof port == 'undefined')|| (port === null)){
  port = 8080;
  directory = './public';
}

/**/
let file = new static.Server(directory);

let app = http.createServer(
  function(request,response) {
    request.addListener('end',
  function() {
    filer.serve(request,response);
  }
).resume();
  }
).listen(port);

console.log('The server is running');
