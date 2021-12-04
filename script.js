const container = document.querySelector(".container");
const purple = document.querySelector(".purple");
const blue = document.querySelector(".blue");
const red = document.querySelector(".red");
const defaultBtn = document.querySelector(".default-btn");
let colors = ["#006d77","#83c5be","#edf6f9","#ffddd2","#e29578"
,"#b5e48c","#99d98c","#76c893",'#ae2012','#0077b6','#e5e5e5','#ee6c4d','#4d194d'];
const SQUARES = 500;


for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseout', () => removeColor(square));

    container.appendChild(square);
}

function setColor(element){
    const color = getRandomColor()
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element){
    element.style.background = "#1d1d1d";
    element.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

purple.addEventListener("click", () => {
    colors = ['#f72585','#b5179e','#480ca8','#7209b7','#480ca8','#3a0ca3','#3f37c9'];
});

blue.addEventListener('click', () => {
    colors = ['#03045e','#023e8a','#0077b6','#0096c7','#00b4d8','#48cae4','#90e0ef'];
});

red.addEventListener('click', () => {
    colors= ['#370617','#6a040f','#9d0208','#d00000','#e85d04','#f48c06','#faa307'];
})

defaultBtn.addEventListener('click', () => {
    colors = ["#006d77","#83c5be","#edf6f9","#ffddd2","#e29578","#b5e48c","#99d98c","#76c893"];
})