const model = require('../JS/model/model');
global.fetch = require('node-fetch');

describe('function getDataMovie()', () => {
    test('obtiene la respuesta de una promesa fetch', () => {
      return expect(model.getDataMovie('https://www.omdbapi.com/?apikey=348097f5&s=code&type=movie')).resolves.toBeTruthy();
    });
  });