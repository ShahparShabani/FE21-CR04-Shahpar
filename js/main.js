console.log(movies);

let moviesParsed = JSON.parse(movies);
console.log(moviesParsed.length);

for (let i = 0; i < moviesParsed.length; i++) {
    let likeParsed = JSON.parse(moviesParsed[i].like);

    document.getElementById(
        "movie-result"
    ).innerHTML += `
  <div class="my-css">
  <div class="card border mb-3" style="max-width: 540px">
    <div class="row g-0">
      <div class="col-md-4">
        <img
        src="../img/${moviesParsed[i].img
        }"
          class="small-img img-fluid rounded-start"
          alt="Movie photo"
        />
      </div>
      <div class="col-md-8">
        <div class="card-body ${likeParsed ? "read" : "not-read"}">
          <h5 class="card-title"><a class="" data-bs-toggle="modal" data-bs-target="#movieModal${i}">
          ${moviesParsed[i].name}
        </a></h5>
          <p class="card-text">
          ${moviesParsed[i].storyline}
          </p>
          <p class="card-text">
            <small class="text-muted"
              ><a class="" data-bs-toggle="modal" data-bs-target="#movieModal2${i}">
              ${moviesParsed[i].like}</a></small
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
  
  <!-- Modal -->
  <div class="modal fade" id="movieModal${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered ">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">${moviesParsed[i].name}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <img class=big-img src="../img/${moviesParsed[i].img
        }" class="card-img-top" alt="big car photo">
        <p>Description: ${moviesParsed[i].storyline}</p>
        <p>Pages: ${moviesParsed[i]["release-date"]}</p>
        <p>Read: ${moviesParsed[i].like
        } </p> 
          <br/>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          
        </div>
      </div>
    </div>
  </div>
  `;
}


