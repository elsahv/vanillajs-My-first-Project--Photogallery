
//creates variable for info- selects all images
let galleryImages = document.querySelectorAll(".gallery-img");
//keeps track of latest opened img
let getLatestOpenedImg;
//grabs current window in total window
let windowWidth = window.innerWidth;

if (galleryImages) {
  galleryImages.forEach(function(image, index) {
    image.onclick = function() {
      let getElementCss = window.getComputedStyle(image);
      let getFullImgUrl = getElementCss.getPropertyValue("background-image");
      let getImgUrlPos = getFullImgUrl.split("/images/thumbsjt/");
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
      newImg.setAttribute("src", "images/thumbsjt/" + setNewImgUrl);

  newImg.onload = function() {
      let imgWidth = this.width;
      let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 80;

      let newNextBtn = document.createElement("a");
      let btnNextText = document.createTextNode("Next");
      newNextBtn.appendChild(btnNextText);
      container.appendChild(newNextBtn);
      newNextBtn.setAttribute("class", "img-btn-Next");
      newNextBtn.setAttribute("onClick", "changeImg()");
      newNextBtn.style.cssText = "right: " + calcImgToEdge + "px;";

      let newPrevBtn = document.createElement("a");
      let btnPrevText = document.createTextNode("prev");
      newPrevBtn.appendChild(btnPrevText);
      container.appendChild(newPrevBtn);
      newPrevBtn.setAttribute("class", "img-btn-prev");
      newPrevBtn.setAttribute("onClick", "changeImg()");
      newPrevBtn.style.cssText = "left: " + calcImgToEdge + "px;";
    }
  }
});

}


function closeImg() {
  document.querySelector(".img-window").remove();
}
