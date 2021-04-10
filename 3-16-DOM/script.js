//window
console.log(window);
console.log(window.document); //dom
console.log(window.screen.width);
console.log(window.screen.height);
console.log(window.screen.colorDepth);
console.log(window.screen.pixelDepth);

//navigator
console.log(window.navigator.geolocation);
console.log(window.navigator.platform);
console.log(window.navigator.onLine);

//get geo location

// function GetGeolocation() {
//   if (window.navigator) {
//     window.navigator.geolocation.getCurrentPosition(function (position) {
//       console.log(position);
//       document.write(
//         `hey your </br>latitude is ${position.coords.latitude} </br> and longitude is ${position.coords.longitude}`
//       );
//     });
//   } else {
//     console.log("geolocation is not suported..");
//   }
// }

// GetGeolocation();

//to get user media
navigator.getUserMedia =
  navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia;

if (navigator.getUserMedia) {
  navigator.getUserMedia(
    { audio: false, video: { width: 800, height: 400 } },
    function (stream) {
      var video = document.querySelector("video");
      video.srcObject = stream;
      video.onloadedmetadata = function (e) {
        video.play();
      };
    },
    function (err) {
      console.log("The following error occurred: " + err.name);
    }
  );
} else {
  console.log("getUserMedia not supported");
}
