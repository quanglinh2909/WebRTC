function playVideo(stream,id) {
  var video = document.getElementById(id);
  video.srcObject = stream;
  video.onloadedmetadata = function (e) {
    video.play();
  };
}

module.exports = playVideo;

