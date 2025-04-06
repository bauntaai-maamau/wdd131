const currentYear = new Date().getFullYear();

document.getElementById("copyright").textContent = `©${currentYear} 🌴 Bauntaai Maamau 🌴 Onotoa, Kiribati`;

const lastModified = document.lastModified;

document.getElementById("last-modified").textContent = `Last modification: ${lastModified}`;



const temples = [
    {
        templeName: "Suva Fiji",
        location: "Samabula Suva, Fiji",
        dedicated: "2000, June, 18",
        area: 204732,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/suva-fiji/320x200/suva-fiji-temple-lds-264908-wallpaper.jpg"
    },
    {
        templeName: "Laie Hawaii",
        location: "Hawaii, United States",
        dedicated: "2010, November, 21",
        area: 496584,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/laie-hawaii/320x200/laie-temple-775369-wallpaper.jpg"
    },
    {
        templeName: "Manila Philippines",
        location: "Quezon City, Philippines",
        dedicated: "1984, September, 25-27",
        area: 152460,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manila-philippines/320x200/manila-philippines-temple-lds-129585-wallpaper.jpg"
    },
    {
        templeName: "Salt Lake Utah",
        location: "Utah, United States",
        dedicated: "1893, April, 6-24",
        area: 435600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/320x200/slctemple7.jpg"
    },
    {
        templeName: "Preston England",
        location: "Lancashire, United Kingdom",
        dedicated: "1998, June, 7-10",
        area: 653400,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/preston-england/320x200/preston-temple-765119-wallpaper.jpg"
    },
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    
    // Add more temple objects here...
];

createTempleCard(temples);



// Reference to the "Home" link
const homeLink = document.querySelector("#homeLink");
// When the Home link is clicked, show all temples
homeLink.addEventListener("click", () => {
    // Remove 'active' class from all links
    removeActiveClass();

    // Add 'active' class to the clicked link
    homeLink.classList.add("active");


    // Display all temples (no filtering)
    createTempleCard(temples);
});


// Reference to the "Large" link
const largeLink = document.querySelector("#largeLink");
largeLink.addEventListener("click", () => {
    // Remove 'active' class from all links
    removeActiveClass();

    // Add 'active' class to the clicked link
    largeLink.classList.add("active");



    // Filter temples that have an area greater than 90,000 sq ft
    const largeTemples = temples.filter(temple => temple.area > 90000);
    createTempleCard(largeTemples); // Display large temples
});



// Reference to the "Small" link
const smallLink = document.querySelector("#smallLink");
smallLink.addEventListener("click", () => {
    // Remove 'active' class from all links
    removeActiveClass();

    // Add 'active' class to the clicked link
    smallLink.classList.add("active");



    // Filter temples that have an area less than 10,000 sq ft
    const smallTemples = temples.filter(temple => temple.area < 10000);
    createTempleCard(smallTemples); // Display small temples
});




// Reference to the "Old" link
const oldLink = document.querySelector("#oldLink");
// When the "Old" link is clicked, filter and display temples dedicated before 1990
oldLink.addEventListener("click", () => {
    // Remove 'active' class from all links
    removeActiveClass();

    // Add 'active' class to the clicked link
    oldLink.classList.add("active");



    const oldTemples = temples.filter(temple => {
        const yearDedicated = parseInt(temple.dedicated.split(",")[0]);
        return yearDedicated < 1900;
    });
    // Display old temples 
    createTempleCard(oldTemples);
});




// Reference to the "New" link
const newLink = document.querySelector("#newLink");
// When the "New" link is clicked, filter and display temples dedicated after 2000
newLink.addEventListener("click", () => {
    // Remove 'active' class from all links
    removeActiveClass();

    // Add 'active' class to the clicked link
    newLink.classList.add("active");



    const newTemples = temples.filter(temple => {
        const yearDedicated = parseInt(temple.dedicated.split(",")[0]);
        return yearDedicated > 2000;
    });
    // Display new temples 
    createTempleCard(newTemples);
});





// Function to remove 'active' class from all links
function removeActiveClass() {
    // Get all the links
    const links = document.querySelectorAll('.navigation a');

    // Remove the 'active' class from each link
    links.forEach(link => {
        link.classList.remove('active');
    });
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
        img.setAttribute("src", temple.imageUrl );
        img.setAttribute("alt", `${temple.templeName} Temple` );
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
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});
















































