const shareBtn = document.getElementById("shareBtn");

const menu = document.getElementById("menu");

function showMenu(){
    menu.classList.toggle('active')
}

shareBtn.addEventListener('click', showMenu)