const currentYear = new Date().getFullYear();
document.getElementById("copyright").textContent = `©${currentYear} 🌴 Bauntaai Maamau 🌴 Onotoa, Kiribati`;

const lastModified = document.lastModified;
document.getElementById("last-modified").textContent = `Last modification: ${lastModified}`;


