const currentYear = new Date().getFullYear();

document.getElementById("copyright").textContent = `©${currentYear} 🌴 Bauntaai Maamau 🌴 Onotoa, Kiribati`;

const lastModified = document.lastModified;

document.getElementById("last-modified").textContent = `Last modification: ${lastModified}`;



const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});