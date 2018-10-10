const getDataMovie = require('../src/JS/model/model');
global.fetch = require('node-fetch');

describe('function getDataMovie()', () => {
  test('el fetch recibe una url y resuelve la data', async () => {
    expect.assertions(1);
    const data = await getDataMovie();
    expect(data).toBeTruthy();
  });
  test('el fetch falla con un error', async () => {
    try {
      await getDataMovie();
    } catch (e) {
      expect(e).toMatch('err');
    }
  });
});
