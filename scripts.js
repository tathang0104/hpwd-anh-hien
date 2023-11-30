// function openVideoPopup() {
//     document.getElementById('videoPopup').style.display = 'block';
// }

// function closeVideoPopup() {
//     document.getElementById('videoPopup').style.display = 'none';
// }

const imgContainer = document.getElementById("image-container")
const videoPopup = document.getElementById('videoPopup')
const video = document.getElementById('hpwd-video')
const closeBtn = document.getElementById('close-btn')
const giftBox = imgContainer.getElementsByTagName("img")[0]

imgContainer.addEventListener("click", () => {
    giftBox.classList.add('image-enlarge');

    setTimeout(function() {
        giftBox.classList.remove('image-enlarge');
    }, 400);

    setTimeout(function() {
        videoPopup.classList.add("show")
        video.currentTime = 0
        video.play()
    }, 800);
    
    if (giftBox.src === window.location.origin + "/hpwd-anh-hien/asset/gift-box.png") {
        giftBox.src = window.location.origin + "/hpwd-anh-hien/asset/gift-box-open.png"
        giftBox.alt = "gift-box-open"
        video.setAttribute("autoplay") = true
    } else {
        giftBox.src = window.location.origin + "/hpwd-anh-hien/asset/gift-box.png"
        giftBox.alt = "gift-box"
        videoPopup.style.display = "none"
    }
})

closeBtn.addEventListener("click", () => {
    video.pause()
    video.autoplay = false;
    giftBox.src = window.location.origin + "/hpwd-anh-hien/asset/gift-box.png"
    giftBox.alt = "gift-box"
    videoPopup.classList.remove("show")
})