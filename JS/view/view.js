const container = document.getElementById('movies')

renderInfo = (element) => {
        // console.log(element.imdbID);
        return container.innerHTML += 
        `<div class="accordion col-10" id="accordionExample">
             <div class="card">
                 <div class="card-header" id="x${element.imdbID}" >
                 <h5 class="mb-0">
                     <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#${element.imdbID}"  aria-controls="${element.imdbID}">
                         <img src="${element.Poster}" class="rounded-circle firstTitle">
                         ${element.Title}     
                     </button>
                 </h5>
                 </div>
             </div>
         </div>
        <div id=${element.imdbID} class="collapse" aria-labelledby="x${element.imdbID}" data-parent="#accordionExample">
                 <div class="card-body">
                     <img src="${element.Poster}">
                     <p>Title: ${element.Title}</p> 
                     <p>Year: ${element.Year}</p> 
                 </div>
             </div>
         `
    }

