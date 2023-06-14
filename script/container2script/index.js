//slideshow
let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
  nextImage();
}, 3500)

function nextImage() {
  count++;
  if (count > 4) {
    count = 1;
  }

  document.getElementById("radio" + count).checked = true;

}

//pausing video player
// assume only one video is playing at a time
var videoPlaying = null;

const onPlay = function () {
  if (videoPlaying && videoPlaying != this) {
    videoPlaying.pause()
  }
  videoPlaying = this
}

// init event handler
const videos = document.getElementsByClassName("videop")
for (let i = 0; i < videos.length; i++) {
  videos[i].addEventListener("play", onPlay)
}

//product slider
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

//smooth scroll on link
