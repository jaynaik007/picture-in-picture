const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (err) {
    console.log("Err :", err);
  }
}

// When clicked on START button
button.addEventListener("click", async () => {
  // Disable Button
  button.disable = true;
  // Start picture in picture
  await videoElement.requestPictureInPicture();
  // Reset Button
  button.disable = false;
});

// On load/reload
selectMediaStream();
