const UNSPLASH_API_ENDPOINT =
  "https://api.unsplash.com/search/photos?per_page=12&query=";
const API_KEY = "eO4MFlKYOJCT4mihRzFDJ6jCGnx7496YEn0BZBB1lU8";

//DOM ELEMENTS
//Main Elements
const inputField = document.getElementById("inputField");
const searchBtn = document.getElementById("load-images-btn");
const randomImagesBtn = document.getElementById("random-images-btn");
const cardContainer = document.querySelector(".cards-container");
const viewPhoto = document.getElementsByClassName("view-card-btn");
const hideCardBtn = document.getElementsByClassName("hide-card-btn");
const imageID = document.getElementById("image-id");
//Carousel Elements
const carouselContainer = document.getElementById("carousel-container");
const carouselImage1 = document.getElementById("carousel-image-1");
const carouselImage2 = document.getElementById("carousel-image-2");
const carouselImage3 = document.getElementById("carousel-image-3");

//FETCH IMAGES
const loadImages = () => {
  //SEARCH QUERY
  const SEARCH = `${UNSPLASH_API_ENDPOINT}${inputField.value
    .toLowerCase()
    .replace(/ /g, "-")}`;
  fetch(SEARCH, { headers: { Authorization: `Client-ID ${API_KEY}` } })
    .then((res) => res.json())
    .then((data) => {
      cardContainer.innerHTML = "";
      inputField.value = "";
      data.results.forEach((item) => {
        cardContainer.innerHTML += `<div class="col-md-4 card-content">
                                    <div class="card mb-4 shadow-sm">
                                      <img class="bd-placeholder-img card-img-top card-image w-100" src="${
                                        item.urls.full
                                      }" alt="${item.alt_description}">
                                      <div class="card-body">
                                        <p class="card-text">
                                          Image retrieved from <a href=${"https://unsplash.com/"}>Unsplash.com</a>
                                        </p>
                                        <div class="d-flex justify-content-between align-items-center">
                                          <div class="btn-group">
                                            <button type="button" class="btn btn-sm btn-outline-secondary">
                                              View
                                            </button>
                                            <button type="button" onclick="hideCardCallback()" class="btn btn-sm btn-outline-secondary hide-card-btn">
                                              hide
                                            </button>
                                          </div>
                                          <small class="text-muted" id="image-id">${
                                            item.id
                                          }</small>
                                        </div>
                                      </div>
                                    </div>
                                  </div>`;
      });
    })
    .catch((err) => {
      console.log(err);
      if (err === "400") {
        alert(
          "The request was unacceptable, probably because of a missing parameter"
        );
      } else if (err === "401") {
        alert("The request was rejected, access denied (INVALID ACCESS TOKEN)");
      } else if (err === "403") {
        alert(
          "The request was rejected, access denied (Missing permissions to perform request)"
        );
      } else if (err === "404") {
        alert("The resource was not found");
      } else {
        alert("Something went wrong on the end of the API Host");
      }
    });
};

//FETCH RANDOM IMAGES
const loadRandomImages = () => {
  const UNSPLASH_API_RANDOM_ENDPOINT =
    "https://api.unsplash.com/photos/random?count=12";
  const API_KEY = "eO4MFlKYOJCT4mihRzFDJ6jCGnx7496YEn0BZBB1lU8";

  fetch(UNSPLASH_API_RANDOM_ENDPOINT, {
    headers: { Authorization: `Client-ID ${API_KEY}` },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      cardContainer.innerHTML = "";
      inputField.value = "";
      data.forEach((item) => {
        cardContainer.innerHTML += `<div class="col-md-5 col-lg-4 card-content">
                                    <div class="card mb-4 shadow-sm">
                                      <img class="bd-placeholder-img card-img-top card-image w-100" src="${
                                        item.urls.full
                                      }" alt="${item.alt_description}">
                                      <div class="card-body">
                                        <p class="card-text">
                                          Image retrieved from <a href=${"https://unsplash.com/"}>Unsplash.com</a>
                                        </p>
                                        <div class="d-flex justify-content-between align-items-center">
                                          <div class="btn-group">
                                            <button type="button" onclick="openModal()" class="btn btn-sm btn-outline-secondary view-card-btn">
                                              View
                                            </button>
                                            <button type="button" onclick="hideCardCallback()" class="btn btn-sm btn-outline-secondary hide-card-btn">
                                              hide
                                            </button>
                                          </div>
                                          <small class="text-muted" id="image-id">${
                                            item.id
                                          }</small>
                                        </div>
                                      </div>
                                    </div>
                                  </div>`;
      });

      carouselImage1.setAttribute(
        "src",
        data[Math.floor(Math.random() * data.length)].urls.regular
      );
      carouselImage2.setAttribute(
        "src",
        data[Math.floor(Math.random() * data.length)].urls.regular
      );
      carouselImage3.setAttribute(
        "src",
        data[Math.floor(Math.random() * data.length)].urls.regular
      );
    })
    .catch((err) => {
      console.log(err);
      if (err === "400") {
        alert(
          "The request was unacceptable, probably because of a missing parameter"
        );
      } else if (err === "401") {
        alert("The request was rejected, access denied (INVALID ACCESS TOKEN)");
      } else if (err === "403") {
        alert(
          "The request was rejected, access denied (Missing permissions to perform request)"
        );
      } else if (err === "404") {
        alert("The resource was not found");
      } else {
        alert("Something went wrong on the end of the API Host");
      }
    });
};

//INPUT_FIELD CALLBACK
const hearEnter = (e) => {
  if (e.key === "Enter") {
    loadImages();
  }
};

//VIEW PHOTO CALLBACK
/* const openModal = () => {
  const cardContent = document.getElementsByClassName("card-content");
  for (let card of cardContent) {
    card.addEventListener("click", () => {
      card.classList.add("d-none");
    });
  }

  console.log('clicked')
}; */

//HIDE CARD CALLBACK
const hideCardCallback = () => {
  const cardContent = document.getElementsByClassName("card-content");
  for (let card of cardContent) {
    card.addEventListener("click", () => {
      card.classList.add("d-none");
    });
  }
};

//EVENT LISTENERS
inputField.addEventListener("keypress", hearEnter);
/* viewPhoto[0].addEventListener("click", openModal); */
searchBtn.addEventListener("click", loadImages);
randomImagesBtn.addEventListener("click", loadRandomImages);

window.addEventListener("DOMContentLoaded", loadRandomImages);
