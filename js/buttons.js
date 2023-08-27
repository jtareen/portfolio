const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');
const tabMenu = document.querySelector('.tabs');

menuBtn.addEventListener('click', ()=>{
    menuBtn.classList.add('unactive');
    closeBtn.classList.add('active');
    tabMenu.classList.add('active');
});

closeBtn.addEventListener('click', ()=>{
    menuBtn.classList.remove('unactive');
    closeBtn.classList.remove('active');
    tabMenu.classList.remove('active');
});