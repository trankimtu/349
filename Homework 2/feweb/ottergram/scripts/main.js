// All capital letter is a convention for constant which values should not change
// ES5 does not have constants, ES6 does but not fully supported yet
// Variable DETAIL_IMAGE_SELECTOR is a string of [data-image-role='target']
var DETAIL_IMAGE_SELECTOR = "[data-image-role='target']";
var DETAIL_TITLE_SELECTOR = "[data-image-role='title']";
var DETAIL_FRAME_SELECTOR = "[data-image-role='frame']";
var THUMBNAIL_LINK_SELECTOR = "[data-image-role='trigger']";
var HIDDEN_DETAIL_CLASS = "hidden-detail";
var TINY_EFFECT_CLASS = "is-tiny";
var ESC_KEY = 27;

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
  thumb.addEventListener("click", function(event) {
    event.preventDefault();
    setDetailsFromThumb(thumb);
    showDetails();
  });
}

function getThumbnailsArray() {
  "use strict";

  // select all THUMBNAIL_LINK_SELECTOR which is data-image-role='trigger'
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);

  // make an array with all elements in thumbnails
  var thumbnailsArray = [].slice.call(thumbnails);
  return thumbnailsArray;
}

function hideDetails() {
  "use strict";
  document.body.classList.add(HIDDEN_DETAIL_CLASS);
}

function showDetails() {
  "use strict";
  var frame = document.querySelector(DETAIL_FRAME_SELECTOR);
  document.body.classList.remove(HIDDEN_DETAIL_CLASS);
  frame.classList.add(TINY_EFFECT_CLASS);
  setTimeout(function() {
    frame.classList.remove(TINY_EFFECT_CLASS);
  }, 50);
}

function addKeyPressHandler() {
  "use strict";
  document.body.addEventListener("keyup", function(event) {
    event.preventDefault();
    // console.log(event.keyCode);
    if (event.keyCode === ESC_KEY) {
      hideDetails();
    }
  });
}

function initializeEvents() {
  "use strict";
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
  addKeyPressHandler();
}
// ==============================================================
// Previous - Next Button
// ==============================================================

// var thumbArray = [];
//
// thumbArray[0] = {
//   name: "otter1",
//   imageUrl: "img/otter1.jpg",
//   title: "Stayin' Alive"
// };
//
// thumbArray[1] =   {
//   name: "otter2",
//   imageUrl: "img/otter2.jpg",
//   title: "How Deep Is Your Love"
// };
//
// thumbArray[2] =   {
//   name: "otter3",
//   imageUrl: "img/otter3.jpg",
//   title: "You Should Be Dancing"
// };
//
// thumbArray[3] =   {
//   name: "otter4",
//   imageUrl: "img/otter4.jpg",
//   title: "TUESDAY Night Fever"
// };
//
// thumbArray[4] =   {
//   name: "otter5",
//   imageUrl: "img/otter5.jpg",
//   title: "To Love Somebody"
// };

function currentThumb() {
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


// ==============================================================
// Previous Button
// ==============================================================

function previousIndex() {
  "use strict";
  var currentIndex = currentThumb();
  var preIndex = -1;
  if (currentIndex == 0) preIndex = 4;
  else preIndex = currentIndex - 1;

  // console.log("preIndex = " + preIndex);
  return preIndex;
}

function previousImage() {
  "use strict";
  var preIndex = previousIndex();

  var preImage = getThumbnailsArray()[preIndex];
  var imageScr = imageFromThumb(preImage);
  // console.log("imageScr = " + imageScr);
  return imageScr;
}

function previousTitle() {
  "use strict";
  var preIndex = previousIndex();

  var preTitle = getThumbnailsArray()[preIndex];
  var title = titleFromThumb(preTitle);
  // console.log("title = " + title);
  return title;
}


function setDetailPrevious() {
  "use strict";

  var detailPrevious = document.querySelector(DETAIL_PREVIOUS_SELECTOR);
  detailPrevious.addEventListener("click", function() {

    var image = previousImage();
    var title = previousTitle();
    setDetails(image, title);
  });
}

// ==============================================================
// Next Button
// ==============================================================

function nextIndex() {
  "use strict";
  var currentIndex = currentThumb();
  var nextIndex = -1;
  if (currentIndex == 4) nextIndex = 0;
  else nextIndex = currentIndex + 1;

  // console.log("nextIndex = " + nextIndex);
  return nextIndex;
}

function nextImage() {
  "use strict";
  var nIndex = nextIndex();

  var nImage = getThumbnailsArray()[nIndex];
  var imageScr = imageFromThumb(nImage);
  // console.log("imageScr = " + imageScr);
  return imageScr;
}

function nextTitle() {
  "use strict";
  var nIndex = nextIndex();

  var nTitle = getThumbnailsArray()[nIndex];
  var title = titleFromThumb(nTitle);
  // console.log("title = " + title);
  return title;
}


function setDetailNext() {
  "use strict";

  var detailnext = document.querySelector(DETAIL_NEXT_SELECTOR);
  detailnext.addEventListener("click", function() {

    var image = nextImage();
    var title = nextTitle();
    setDetails(image, title);
  });
}


// ================================================================================









// function setDetailPrevious () {
//   "use strict";
//   var detailPrevious = document.querySelector(DETAIL_PREVIOUS_SELECTOR);
//   detailPrevious.addEventListener("click", function () {
//     // console.log("Previous button is clicked");
//     // console.log(currentThumb());
//
//     var currentIndex = currentThumb();
//     var previousIndex = -1;
//     if (currentIndex == 0) previousIndex = 4;
//     else previousIndex = currentIndex - 1;
//     // console.log(previousIndex);
//
//     setDetails(thumbArray[previousIndex].imageUrl, thumbArray[previousIndex].title);
//   });
//
// }
//
//
//
// function setDetailNext () {
//   "use strict";
//   var detailNext = document.querySelector(DETAIL_NEXT_SELECTOR);
//   detailNext.addEventListener("click", function () {
//     // console.log("Next button is clicked");
//     // console.log(currentThumb());
//
//     var currentIndex = currentThumb();
//     var nextIndex = -1;
//     if (currentIndex == 4) nextIndex = 0;
//     else nextIndex = currentIndex + 1;
//     // console.log(nextIndex);
//
//     setDetails(thumbArray[nextIndex].imageUrl, thumbArray[nextIndex].title);
//
//   });
//
// }


setDetailNext();
setDetailPrevious();
initializeEvents();
