const socket = io("/");
const gridVideo = document.getElementById("streamVideoContainer");

// i'll see you in the next live to contiune showing how we can use the back end to our app expo //see you and have
// wonderfull day
const myPeer = new Peer(undefined, {
  host: "/",
  port: "3001",
});

const myVideo = document.createElement("video");
myVideo.muted = true;
const peers = {};

navigator.mediaDevices
  .getUserMedia({
    video: true,
    audio: true,
  })
  .then((stream) => {
    addStreamToRoom(myVideo, stream);

    myPeer.on("call", (call) => {
      call.answer(stream);
      const video = document.createElement("video");
      call.on("stream", (stream) => {
        addStreamToRoom(video, stream);
      });
    });
    socket.on("user-disconnect", (userId) => {
      if (peers[userId]) peers[userId].close();
    });

    socket.on("user-connect", (userId) => {
      connectNewUserStream(userId, stream);
    });
  });

myPeer.on("open", (id) => {
  socket.emit("join-room", Room_ID, id);
});

function connectNewUserStream(userId, stream) {
  const call = myPeer.call(userId, stream);
  const video = documnet.createElement("video");

  call.on("stream", (userVideoMedia) => {
    addStreamToRoom(video, userVideoMedia);
  });

  call.on("close", () => {
    video.remove();
  });

  peers[userId] = call;
}
function addStreamToRoom(video, stream) {
  video.srcObject = stream;
  video.addEventListener("loadedmetadata", () => {
    video.play();
  });
  gridVideo.appendChild(video);
}
