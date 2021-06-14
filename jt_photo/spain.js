let galleryImages = document.querySelectorAll(".spain-gallery-image");
//keeps track of latest opened img
let getLatestOpenedImg;
//grabs current window in total window
let windowWidth = window.innerWidth;


if (galleryImages) {
  galleryImages.forEach(function(image, index) {
    image.onclick = function() {
      let getElementCss = window.getComputedStyle(image);
      let getFullImgUrl = getElementCss.getPropertyValue("background-image");
      let getImgUrlPos = getFullImgUrl.split("/images/thumbs_spain/");


      //for replace, add term = term.replace!
      let setNewImgUrl = getImgUrlPos[1] = getImgUrlPos[1].replace('")', '');

      getLatestOpenedImg = index + 1;

      let container = document.body;
      let newImgWindow = document.createElement("div");
      container.appendChild(newImgWindow);
      newImgWindow.setAttribute("class", "img-window");
      newImgWindow.setAttribute("onclick", "closeImg()");

      let newImg = document.createElement("img");
      newImgWindow.appendChild(newImg);
      newImg.setAttribute("src", "images/thumbs_spain/" + setNewImgUrl);
    }
  });
}


function closeImg() {
  document.querySelector(".img-window").remove();
}
