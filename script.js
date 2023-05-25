var showImageButtons = document.getElementsByClassName("btn");
for (var i = 0; i < showImageButtons.length; i++) {
  showImageButtons[i].addEventListener("click", function() {
    var overlay = this.parentNode.querySelector(".overlay");
    overlay.style.display = "flex";
  });
}

var closeButtonsOverlay = document.getElementsByClassName("close-btn");
for (var i = 0; i < closeButtonsOverlay.length; i++) {
  closeButtonsOverlay[i].addEventListener("click", function() {
    var overlay = this.parentNode;
    overlay.style.display = "none";
  });
}
