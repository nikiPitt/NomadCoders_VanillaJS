const body = document.querySelector("body");


const IMG_NUMBER = 25;

function paintImg(imgNumber) {
    const image = new Image();
    image.src = `images/na_${imgNumber + 1}.jpg`
    image.classList.add("bgImage")
    body.appendChild(image);
}
function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImg(randomNumber);
}

init();