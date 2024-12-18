function image(pathImg) {
    document.getElementById("mainImg").src= pathImg
}
heart_on = false
function heart() {
    heart_on= !heart_on
    if (heart_on) {
    document.getElementById("heart").src= "icon-on.png"
    }
    else {
    document.getElementById("heart").src= "icon-off.png"
    }
}