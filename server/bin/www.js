/**
 * Module dependencies.
 */
var cluster = require('cluster');
var app = require('./app');
var debug = require('debug')('hikweb:server');
var http = require('http');
/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);
/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}
var server;
if (cluster.isMaster) {
  // Start workers and listen for messages containing notifyRequest
  var numCPUs = require('os').cpus().length;
  //console.log(numCPUs+" cpu is working now!")
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  //如果有进程退出，重新创建子进程
  cluster.on('exit', function() {
    console.log('A worker process died, restarting...');
    cluster.fork();
  });
}else{
  console.log("www:process.pid:"+process.pid)
  /**
   * Create HTTP server.
   */
  server = http.createServer(app);
  /**
   * Listen on provided port, on all network interfaces.
   */
  server.listen(port);
  server.on('error', onError);
  server.on('listening', onListening);
  /**
   * Event listener for HTTP server "error" event.
   */
  function onError(error) {
    if(error.syscall!=='listen') {
      throw error;
    }

    var bind = typeof port==='string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch(error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  }
  /**
   * Event listener for HTTP server "listening" event.
   */

  function onListening() {
    var addr = server.address();
    var bind = typeof addr==='string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
    if(process.send)
      process.send({port:addr.port});
  }
}
//获取捕获异常，防退出
process.on('uncaughtException', function (err) {
  //打印出错误
  console.log(err);
  //打印出错误的调用栈方便调试
  console.log(err.stack);
  console.log("我就是负责防退出的！哪个错误小子敢退出，灭了！");
});