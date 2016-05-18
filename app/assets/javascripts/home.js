$(document).ready(function() {


handler = Gmaps.build('Google');
handler.buildMap({
    provider: {
      disableDefaultUI: true
      // pass in other Google Maps API options here
    },
    internal: {
      id: 'map'
    }
  },
  function(){
    markers = handler.addMarkers([
      {
        "lat": 0,
        "lng": 0,
        "picture": {
          "url": "http://people.mozilla.com/~faaborg/files/shiretoko/firefoxIcon/firefox-32.png",
          "width":  32,
          "height": 32
        },
        "infowindow": "hello!"
      }
    ]);
    handler.bounds.extendWith(markers);
    handler.fitMapToBounds();
  }
);






 var imagesArray = ['/assets/animals.jpg', '/assets/any.jpg', '/assets/anyone.jpg', '/assets/nature.jpg', 
                    '/assets/people.jpg', '/assets/tech.jpg']
var imgTag = $('#image-display').find('img')


var currentIndex = 0;
var totalNoOfImages = imagesArray.length;

function cycleItems (currentIndex) {
  imgTag.attr('src', imagesArray[currentIndex])
}


var autoSlide = setInterval(function() {
  currentIndex += 1;
  if (currentIndex > totalNoOfImages) {
    currentIndex = 0;
  }
  cycleItems(currentIndex);
}, 3000);    

$('.next').click(function() {
  clearInterval(autoSlide);
  currentIndex += 1;
  if (currentIndex > totalNoOfImages - 1) {
    currentIndex = 0;
  }
  cycleItems(currentIndex);
});

$('.prev').click(function() {
  clearInterval(autoSlide);
  currentIndex -= 1;
  if (currentIndex < 0) {
    currentIndex = totalNoOfImages - 1;
  }
  cycleItems(currentIndex);
});


});




