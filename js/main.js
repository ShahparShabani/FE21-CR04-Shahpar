// Check if load flag dos not set, set it to true
if (JSON.parse(localStorage.getItem(`firstLoadFlag`)) === null) {
  localStorage.setItem(`firstLoadFlag`, true);
}


// Read movies from json file
let moviesParse = JSON.parse(movies);

var movieDataArray = new Array;

createCards();

function createCards() {

  const fisrtLoadFlag = JSON.parse(localStorage.getItem(`firstLoadFlag`))

  // Check to read from json or localstorage 
  if (fisrtLoadFlag) {
    movieDataArray = moviesParse;
  } else {
    for (let i = 0; i < moviesParse.length; i++) {

      // Set movies to localstorage after sort
      movieDataArray[i] = JSON.parse(localStorage.getItem(`${i}`));
    }
  }

  for (let i = 0; i < movieDataArray.length; i++) {

    if (fisrtLoadFlag) {
      // Set movies to localstorage before sort and on first page load
      localStorage.setItem(`${i}`, JSON.stringify(movieDataArray[i]));
    }

    let likeParsed = movieDataArray[i].like;

    document.getElementById(
      "movie-result"
    ).innerHTML += `
  <div class="my-css">
  <div class="card h-100 border border-2 rounded-2 mb-3 " style="max-width: 540px">
    <div class="row g-0">
      <div class="col-md-5">
        <img
        src="../img/${movieDataArray[i].img
      }"
          class="small-img rounded p-2 img-fluid rounded-start"
          alt="Movie photo"
        />
      </div>
      <div class="col-md-7">
        <div class="card-body h-100 ${likeParsed ? "read" : "not-read"}">
          <h5 class="card-title"><a class="" data-bs-toggle="modal" data-bs-target="#movieModal${i}">
          ${movieDataArray[i].name}
        </a></h5>
          <p class="card-text">
          ${movieDataArray[i].storyline}
          </p>
          <p id="like-wrapper" class="card-text text-end">
            <small class="text-muted"
              ><a class="like-btn" id="a-like${i}"" data-bs-toggle="modal" data-bs-target="#movieModal2${i}">
             <i class="fas fa-thumbs-up"></i> </a><span id="like${i}" class=dot>${movieDataArray[i].like}</span></small
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
          <h5 class="modal-title" id="exampleModalLabel">${movieDataArray[i].name}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <img class=big-img src="../img/${movieDataArray[i].img
      }" class="card-img-top" alt="big car photo">
        <p>Description: ${movieDataArray[i].storyline}</p>
        <p>Pages: ${movieDataArray[i]["release-date"]}</p>
        <p>Read: ${movieDataArray[i].like
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

  // Change load Flag
  localStorage.setItem(`firstLoadFlag`, false);
}


// Get like-btn & add event listener to each one (begin)
const likeButtons = document.getElementsByClassName("like-btn");

for (let i = 0; i < likeButtons.length; i++) {

  likeButtons[i].addEventListener('click', function () {

    // Get related movie from Localstorage
    let movies = new Array();
    movies[i] = JSON.parse(localStorage.getItem(`${i}`));


    // Increase like & update Localstorage
    movies[i].like++;
    localStorage.setItem(`${i}`, JSON.stringify(movies[i]));

    // Dispaly new likes to the card
    document.getElementById(`like${i}`).innerHTML = movies[i].like

  })


}
//Get like-btn (end)


// Sort function on descending order 
function dynamicSort(property) {
  var sortOrder = 1;
  if (property[0] === "-") {
    sortOrder = -1;
    property = property.substr(1);
  }
  return function (a, b) {

    var result = (a[property] > b[property]) ? -1 : (a[property] < b[property]) ? 1 : 0;
    return result * sortOrder;
  }
}


// Add eventlistener to sort btn
document.getElementById('sort-btn').addEventListener('click', sort);

function sort() {

  // Read data from local storage
  let moviesArr = ReadMovieFromLocalStorage();

  //Sort based on likes
  moviesArr.sort(dynamicSort("like"));
  console.log('in', moviesArr.sort(dynamicSort("like")))

  overwriteLocalstorage(moviesArr);

  location.reload();

}

function overwriteLocalstorage(moviesArr) {

  for (let i = 0; i < movieDataArray.length; i++) {
    localStorage.setItem(`${i}`, JSON.stringify(moviesArr[i]));
  }
}

function ReadMovieFromLocalStorage() {
  let moviesArray = new Array();

  for (let i = 0; i < moviesParse.length; i++) {
    moviesArray[i] = JSON.parse(localStorage.getItem(`${i}`));
  }
  return moviesArray
}