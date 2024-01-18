const buttonAcender = document.querySelector(".buttonluz");
const htmlElement = document.querySelector('html');

function toggleDarkMode() {
    htmlElement.classList.toggle('dark-mode');
   
}

buttonAcender.addEventListener('click', toggleDarkMode);

