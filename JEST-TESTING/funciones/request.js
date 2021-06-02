const http = require('http');

export default function request(url) {
  return new Promise(resolve => {
    // Esto es un ejemplo de  http request, para descargar
    // datos de usuario de una API.
    // Este modulo esta siendo mockeado en __mocks__/request.js
    http.get({path: url}, response => {
      let data = '';
      response.on('data', _data => data += _data);
      response.on('end', () => resolve(data));
    });
  });
}