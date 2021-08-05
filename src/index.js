const { data } = require("jquery");
const $ = require("jquery");
const playVideo = require("./playVideo");
var Peer = require("simple-peer");

navigator.mediaDevices
  .getUserMedia({ audio: false, video: true })
  .then((stream) => {
    var peer1 = new Peer({ initiator: true, stream: stream });

    peer1.on("signal", (data) => {
      $("#txtToken").append(JSON.stringify(data) + "#");
      console.log("SIGNAL", JSON.stringify(data));
    });

    $("#btninit").click(() => {
      const yourTokenFiend = JSON.parse($("#txtTokenyour").val());
      peer1.signal(yourTokenFiend);
    });

    $("#btnsend").click(() => {
      const yourTokenFiend = $("#txtTokenyour").val().split("#");
      for (var i = 0; i < yourTokenFiend.length - 1; i++) {
        peer1.signal(JSON.parse(yourTokenFiend[i]));
      }
    });
    peer1.on("connect", () => {
      console.log("connected");
    });
    
    peer1.on('stream', stream=>{
      playVideo(stream,"localStream");

    });
  })
  .catch();
