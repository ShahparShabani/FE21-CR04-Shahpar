// Read movies from json file
let moviesParse = JSON.parse(movies);

// Set/Get movies to/from localstorage
for (let i = 0; i < moviesParse.length; i++) {
  localStorage.setItem(`${i}`, JSON.stringify(moviesParse[i]));

  let movieParsedLocal = JSON.parse( localStorage.getItem(`${i}`));
  console.log(typeof movieParsedLocal)
  
  let likeParsed = movieParsedLocal.like;

  document.getElementById(
    "movie-result"
  ).innerHTML += `
  <div class="my-css">
  <div class="card h-100 border mb-3 " style="max-width: 540px">
    <div class="row g-0">
      <div class="col-md-5">
        <img
        src="../img/${movieParsedLocal.img
    }"
          class="small-img img-fluid rounded-start"
          alt="Movie photo"
        />
      </div>
      <div class="col-md-7">
        <div class="card-body h-100 ${likeParsed ? "read" : "not-read"}">
          <h5 class="card-title"><a class="" data-bs-toggle="modal" data-bs-target="#movieModal${i}">
          ${movieParsedLocal.name}
        </a></h5>
          <p class="card-text">
          ${movieParsedLocal.storyline}
          </p>
          <p id=like-wrapper class="card-text">
            <small class="text-muted"
              ><a class="like-btn" id="a-like${i}"" data-bs-toggle="modal" data-bs-target="#movieModal2${i}">
             <i class="fas fa-thumbs-up"></i> </a><span id="like${i}" class=dot>${movieParsedLocal.like}</span></small
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
          <h5 class="modal-title" id="exampleModalLabel">${movieParsedLocal.name}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <img class=big-img src="../img/${movieParsedLocal.img
    }" class="card-img-top" alt="big car photo">
        <p>Description: ${movieParsedLocal.storyline}</p>
        <p>Pages: ${movieParsedLocal["release-date"]}</p>
        <p>Read: ${movieParsedLocal.like
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


// Get like-btn & add event listener to each one
const likeButtons = document.getElementsByClassName("like-btn");
console.log(likeButtons.length);

for (let i = 0; i < likeButtons.length; i++) {

  likeButtons[i].addEventListener('click', function () {
   
    // Get related movie from Localstorage
    let movieParsedLocal = JSON.parse( localStorage.getItem(`${i}`));
  
  
    // Increase like & update Localstorage
    movieParsedLocal.like ++;
    localStorage.setItem(`${i}`, JSON.stringify(movieParsedLocal));

    // Dispaly new likes to the card
    document.getElementById(`like${i}`).innerHTML = movieParsedLocal.like
 
  })
 

}


// Sort function
function dynamicSort(property) {
  var sortOrder = 1;
  if(property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
  }
  return function (a,b) {
    
      var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      return result * sortOrder;
  }
}

//Sort based on likes
moviesParse.sort(dynamicSort("like"));

console.log(moviesParse.sort(dynamicSort("like")));

