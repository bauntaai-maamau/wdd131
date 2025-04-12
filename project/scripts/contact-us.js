const currentYear = new Date().getFullYear();

document.getElementById("copyright").textContent = `©${currentYear} 🌴 Bauntaai Maamau 🌴 Onotoa, Kiribati`;

const lastModified = document.lastModified;

document.getElementById("last-modified").textContent = `Last modification: ${lastModified}`;






// Reference to the "Home" link
const homeLink = document.querySelector("#homeLink");
// When the Home link is clicked, show all temples
// homeLink.addEventListener("click", () => {
//     // Remove 'active' class from all links
//     removeActiveClass();

//     // Add 'active' class to the clicked link
//     homeLink.classList.add("active");
//     updatePageTitle("Home");


//     // Display all temples (no filtering)
//     createTempleCard(temples);
// });



homeLink.addEventListener("click", (event) => {
    event.preventDefault();
    removeActiveClass();
    homeLink.classList.add("active");
    updatePageTitle("Home");

    showHomeNav(true); // Show all 5 navs
    createTempleCard(temples);
});





const recommendLink = document.querySelector("#recommendLink");
recommendLink.addEventListener("click", (event) => {
    event.preventDefault(); 
    removeActiveClass(); // Remove 'active' from all links
    recommendLink.classList.add("active"); // Add to Recommend
    updatePageTitle("Recommend");

    // You can show filtered temples or static content here
    // Example: filter by recommended temples
    const recommendedTemples = temples.filter(t => t.recommended);
    createTempleCard(recommendedTemples);
});






const contactLink = document.querySelector("#contactLink");
contactLink.addEventListener("click", (event) => {
    event.preventDefault(); 
    removeActiveClass(); // Remove 'active' from all links
    contactLink.classList.add("active"); // Add to Contact
    updatePageTitle("Contact");

    // If you're showing a contact form, hide temple cards:
    document.querySelector(".container").innerHTML = ``;
});











function showHomeNav(show) {
    const homeOnlyItems = document.querySelectorAll('.home-only');
    homeOnlyItems.forEach(item => {
        item.style.display = show ? 'list-item' : 'none';
    });
}









// Function to remove 'active' class from all links
function removeActiveClass() {
    // Get all the links
    const links = document.querySelectorAll('.navigation a');

    // Remove the 'active' class from each link
    links.forEach(link => {
        link.classList.remove('active');
    });
}

// Update the <h2> content based on the active link
function updatePageTitle(title) {
    const h2 = document.querySelector("h2");
    h2.textContent = title;
}





function createTempleCard(filteredTemples) {
    document.querySelector(".container").innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".container").appendChild(card);
    });
}

// Initialize by marking the Home link as active by default
homeLink.classList.add("active");



const hamButton = document.querySelector('#menu');
const header = document.querySelector('h1');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {

    hamButton.classList.toggle('open');

    navigation.classList.toggle('open');

    header.classList.toggle('hidden');
});