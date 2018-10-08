
function getDataMovie() {
    return new Promise ((resolve, reject) => {
        fetch(`https://www.omdbapi.com/?apikey=348097f5&s=code&type=movie&plot=full`)
        .then(response => response.json())    
        .then(data => resolve(data))
        .catch(err => reject (err))
      })
    }
    