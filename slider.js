function leftClick() {

  var imgActive=$(".middle-top-part > img.active");
  imgActive.removeClass("active");

  var prevImg=imgActive.prev("img");

  if (imgActive.hasClass("first")) {
    prevImg=$(".middle-top-part > img.last");
  }

  prevImg.addClass("active");

}

function rightClick(){

  var imgActive=$(".middle-top-part > img.active");
  imgActive.removeClass("active");

  var nextImg=imgActive.next("img");

  if (imgActive.hasClass("last")) {
    nextImg=$(".middle-top-part > img.first");
  }

  nextImg.addClass("active");

  dotSwitcher();
}

function dotSwitcher(){

  

  console.log("cambiare il punto");
}










function init(){

  var rightArrow=$(".fa-chevron-right");
  rightArrow.click(rightClick);

  var leftArrow=$(".fa-chevron-left");
  leftArrow.click(leftClick);
}



$(document).ready(init);
