const getDataMovie = () => new Promise((resolve, reject) => {
  fetch('https://www.omdbapi.com/?apikey=348097f5&s=code&type=movie')
    .then(response => response.json())
    .then(data => resolve(data))
    .catch(err => reject(err));
});

module.exports = getDataMovie;
