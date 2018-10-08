const container = document.getElementById('movies')

fetch(`https://www.omdbapi.com/?apikey=348097f5&s=code&type=movie&plot=full`)
    .then(response => response.json())
    .then(data => {
        console.log(data.Search);
       showInfo(data);
})


showInfo = (data) => {
    const info = data.Search
       info.forEach(element => {
           // console.log(element.Title);
           return container.innerHTML += 
           `<div class="accordion col-10" id="accordionExample">
                <div class="card">
                    <div class="card-header" id="headingTwo">
                    <h5 class="mb-0">
                        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <img src="${element.Poster}" class="rounded-circle firstTitle">${element.Title}                        </button>
                    </h5>
                    </div>
                
                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div class="card-body">
                        <img src="${element.Poster}">
                        <p>Title: ${element.Title}</p> 
                        <p>Year: ${element.Year}</p> 
                    </div>
                </div>
            </div>`
       });
    return info
}
