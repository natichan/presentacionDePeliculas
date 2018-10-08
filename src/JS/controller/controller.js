const renderMovies = () => {
  document.getElementById('movies').style.display = 'block';
};

getDataMovie().then((data) => {
  // console.log(data)
  const info = data.Search;
  info.forEach((element) => { renderInfo(element); });
});

renderMovies();
