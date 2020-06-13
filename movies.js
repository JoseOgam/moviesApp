document.querySelector("#pause").addEventListener("click", (e) => {
    // console.log('moves App');
    var video = document.querySelector("#video");
    var button = document.querySelector("#pause")
    if (video.paused) {
        video.play();
        button.innerHTML = "pause"
    } else {
        video.pause();
        button.innerHTML = "play"
    }
});