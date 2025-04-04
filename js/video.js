var video;

window.addEventListener("load", function() {
  console.log("Good job opening the window");

  video = document.getElementById("player1");
  video.autoplay = false;
  video.loop = false;
  
  document.getElementById("volume").innerHTML = (video.volume * 100) + "%";
  
  document.getElementById("play").addEventListener("click", function() {
    video.play();
    document.getElementById("volume").innerHTML = (video.volume * 100) + "%";
    console.log("Play");
  });
  
  document.getElementById("pause").addEventListener("click", function() {
    video.pause();
    console.log("Pause");
  });
  
  document.getElementById("slower").addEventListener("click", function() {
    video.playbackRate *= 0.9;
  });
  
  document.getElementById("faster").addEventListener("click", function() {
    video.playbackRate /= 0.9;
  });
  
  document.getElementById("skip").addEventListener("click", function() {
    if (video.currentTime + 10 >= video.duration) {
      video.currentTime = 0;
    } else {
      video.currentTime += 10;
    }
  });

  document.getElementById("mute").addEventListener("click", function() {
    if (video.muted) {
      video.muted = false;
      this.innerHTML = "Mute";
      console.log("Unmuted");
    } else {
      video.muted = true;
      this.innerHTML = "Unmute";
      console.log("Muted");
    }
  });
  
  document.getElementById("slider").addEventListener("input", function() {
    video.volume = this.value / 100;
    document.getElementById("volume").innerHTML = this.value + "%";
  });
  
  document.getElementById("vintage").addEventListener("click", function() {
    video.classList.add("oldSchool");
    console.log("Old school");
  });
  document.getElementById("orig").addEventListener("click", function() {
    video.classList.remove("oldSchool");
    console.log("Original");
  });
});
