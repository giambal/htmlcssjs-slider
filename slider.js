function leftClick() {

  var imgActive=$(".middle-top-part > img.active");
  imgActive.removeClass("active");

  var prevImg=imgActive.prev("img");

  if (imgActive.hasClass("first")) {
    prevImg=$(".middle-top-part > img.last");
  }

  prevImg.addClass("active");

  dotSwitcher();
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

  var imgs=$(".middle-top-part > img");
  var activeIndex;

  for (var i = 0; i < imgs.length; i++) {

    var img=imgs.eq(i);

    if (img.hasClass("active")) {
      activeIndex=i;
    }
  }

  console.log("active index" , activeIndex);

  var fullDot=$(".dots-container > i.fas");
  fullDot.removeClass("fas").addClass("far");

  var dots=$(".dots-container > i");
  var nextDot=dots.eq(activeIndex);

  nextDot.removeClass("far").addClass("fas");
}

function dotClick() {

  var me=$(this);
  var meIndex=me.index();

  var imgActive=$(".middle-top-part > img.active");
  imgActive.removeClass("active");

  var imgs=$(".middle-top-part > img");
  var nextImg=imgs.eq(meIndex);

  nextImg.addClass("active");

  dotSwitcher();
}








function init(){

  var rightArrow=$(".fa-chevron-right");
  rightArrow.click(rightClick);

  var leftArrow=$(".fa-chevron-left");
  leftArrow.click(leftClick);

  var dots=$(".fa-circle");
  dots.click(dotClick);
}



$(document).ready(init);
