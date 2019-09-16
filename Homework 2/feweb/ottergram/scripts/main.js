// All capital letter is a convention for constant which values should not change
// ES5 does not have constants, ES6 does but not fully supported yet
// Variable DETAIL_IMAGE_SELECTOR is a string of [data-image-role='target']
var DETAIL_IMAGE_SELECTOR = "[data-image-role='target']";
var DETAIL_TITLE_SELECTOR = "[data-image-role='title']";
var THUMBNAIL_LINK_SELECTOR = "[data-image-role='trigger']";

var DETAIL_PREVIOUS_SELECTOR = "[data-detail-previous='target-previous']";
var DETAIL_NEXT_SELECTOR = "[data-detail-next='target-next']";

function setDetails(imageUrl, titleText) {

  // "use strict" at beginning of all functions to tell browsers that
  // they conform to the most recent standard version of JavaScript
  "use strict";

  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute("src", imageUrl);

  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
  "use strict";
  return thumbnail.getAttribute("data-image-url");
}

function titleFromThumb(thumbnail) {
  "use strict";
  var title = thumbnail.getAttribute("data-image-title");
  // console.log(title);

  return title;

}

function setDetailsFromThumb(thumbnail) {
  "use strict";
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumb) {
  "use strict";
  thumb.addEventListener("click", function (event) {
    event.preventDefault();
    setDetailsFromThumb(thumb);
  });
}

function getThumbnailsArray() {
  "use strict";
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnailsArray = [].slice.call(thumbnails);
  return thumbnailsArray;
}

function initializeEvents() {
  "use strict";
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
}
// ==============================================================
// Previous - Next Button
// ==============================================================

var thumbArray = [];

thumbArray[0] = {
  name: "otter1",
  imageUrl: "img/otter1.jpg",
  title: "Stayin' Alive"
};

thumbArray[1] =   {
  name: "otter2",
  imageUrl: "img/otter2.jpg",
  title: "How Deep Is Your Love"
};

thumbArray[2] =   {
  name: "otter3",
  imageUrl: "img/otter3.jpg",
  title: "You Should Be Dancing"
};

thumbArray[3] =   {
  name: "otter4",
  imageUrl: "img/otter4.jpg",
  title: "TUESDAY Night Fever"
};

thumbArray[4] =   {
  name: "otter5",
  imageUrl: "img/otter5.jpg",
  title: "To Love Somebody"
};

function currentThumb () {
  var currentIndex;
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  var detailImageSrc = detailImage.getAttribute("src");

  if (detailImageSrc == "img/otter1.jpg") currentIndex = 0;
  else if (detailImageSrc == "img/otter2.jpg") currentIndex = 1;
  else if (detailImageSrc == "img/otter3.jpg") currentIndex = 2;
  else if (detailImageSrc == "img/otter4.jpg") currentIndex = 3;
  else currentIndex = 4;
  // else if (detailImageSrc == "img/otter5.jpg") currentIndex = 4;
  
  return currentIndex;
}

//
// function currentThumb () {
//   var currentDetailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
//   return currentDetailImage.scr
// }

function setDetailPrevious () {
  "use strict";
  var detailPrevious = document.querySelector(DETAIL_PREVIOUS_SELECTOR);
  detailPrevious.addEventListener("click", function () {
    // console.log("Previous button is clicked");
    // console.log(currentThumb());

    var currentIndex = currentThumb();
    var previousIndex = -1;
    if (currentIndex == 0) previousIndex = 4;
    else previousIndex = currentIndex - 1;
    // console.log(previousIndex);

    setDetails(thumbArray[previousIndex].imageUrl, thumbArray[previousIndex].title);
  });

}



function setDetailNext () {
  "use strict";
  var detailNext = document.querySelector(DETAIL_NEXT_SELECTOR);
  detailNext.addEventListener("click", function () {
    // console.log("Next button is clicked");
    // console.log(currentThumb());

    var currentIndex = currentThumb();
    var nextIndex = -1;
    if (currentIndex == 4) nextIndex = 0;
    else nextIndex = currentIndex + 1;
    // console.log(nextIndex);

    setDetails(thumbArray[nextIndex].imageUrl, thumbArray[nextIndex].title);

  });

}


setDetailNext();
setDetailPrevious();
initializeEvents();
