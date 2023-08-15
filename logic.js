var r = document.querySelector(':root');

let height = window.innerHeight + "px";
let width = window.innerWidth + "px";

r.style.setProperty('--windowWidth', width);
r.style.setProperty('--windowHeight', height);