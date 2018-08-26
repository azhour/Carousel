var slider = document.getElementsByClassName("slider");

var sliderSize = 0;



function sliderPlay() {   // for play slider

  for (var i = 0; i < slider.length; i++) { // for display none all pictures
    slider[i].style.display = "none";
  }
  slider[sliderSize].style.display = "block";  // for display block first picture



  if (sliderSize === slider.length -1 ){  // for slide show
    sliderSize = 0;
  }
  sliderSize++;
}

sliderPlay();
var interval = setInterval(sliderPlay, 1000);

// clearInterval(interval);
//
// function previous() {
//
// }
