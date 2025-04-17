const currentYear = new Date().getFullYear();
document.getElementById("copyright").textContent = `©${currentYear} 🌴 Bauntaai Maamau 🌴 Onotoa, Kiribati`;

const lastModified = document.lastModified;
document.getElementById("last-modified").textContent = `Last modification: ${lastModified}`;

// Book data
const books = [
    {
        bookName: "Atomic Habits",
        author: "James Clear",
        published: "2018, October, 16",
        pages: 320,
        imageUrl: "images/atomic-habits.avif"
    },
    {
        bookName: "CAN'T HURT ME",
        author: "David Goggins",
        published: "2018, November, 15",
        pages: 364,
        imageUrl: "images/cant-hurt-me.jpg"
    },
    {
        bookName: "THE DIARY OF A CEO",
        author: "Steven Bartlett",
        published: "2023, August, 29",
        pages: 368,
        imageUrl: "images/diary-of-a-ceo.jpg"
    },
    {
        bookName: "The E-Myth Revisited",
        author: "Michael E. Gerber",
        published: "1995, March, 21",
        pages: 288,
        imageUrl: "images/emyth-revisited.webp"
    },
    {
        bookName: "Essentialism",
        author: "Greg McKeown",
        published: "2014, April, 15",
        pages: 304,
        imageUrl: "images/essentialism.jpg"
    },
    {
        bookName: "FACTFULNESS",
        author: "Hans Rosling",
        published: "2018, April, 03",
        pages: 352,
        imageUrl: "images/factfulness.jpg"
    },
    {
        bookName: "How Will You Measure Your Life",
        author: "Clayton M. Christensen",
        published: "2012, May, 10",
        pages: 240,
        imageUrl: "images/how-will-you-measure-your-life.jpg"
    },
    {
        bookName: "Ikigai",
        author: "Hector Garcia",
        published: "2016, March",
        pages: 208,
        imageUrl: "images/ikigai.jpg"
    },
    {
        bookName: "Man's Search For Meaning",
        author: "Viktor Frankl",
        published: "1946",
        pages: 115,
        imageUrl: "images/mans-search-for-meaning.jpeg"
    },
    {
        bookName: "Never Finished",
        author: "David Goggins",
        published: "2022, December, 04",
        pages: 312,
        imageUrl: "images/never-finished.webp"
    },
    {
        bookName: "The 5AM Club",
        author: "Robin Sharma",
        published: "2018, December, 04",
        pages: 336,
        imageUrl: "images/5am-club.jpg"
    },
    {
        bookName: "Reach Dad Poor Dad",
        author: "Robert T. Kiyosaki",
        published: "1997",
        pages: 336,
        imageUrl: "images/rich_dad.webp"
    }
];

createBookCard(books);

// Navigation 
const homeLink = document.querySelector("#homeLink");
homeLink.addEventListener("click", () => {
    removeActiveClass();
    homeLink.classList.add("active");
    updatePageTitle("Home");
    toggleHomeOnlyNav(true);
    createBookCard(books);
});

const oldLink = document.querySelector("#oldLink");
oldLink.addEventListener("click", () => {
    removeActiveClass();
    oldLink.classList.add("active");
    updatePageTitle("Old Books");

    const oldBooks = books.filter(book => {
        const yearPublished = parseInt(book.published.split(",")[0]);
        return yearPublished < 1950;
    });
    createBookCard(oldBooks);
});

const newLink = document.querySelector("#newLink");
newLink.addEventListener("click", () => {
    removeActiveClass();
    newLink.classList.add("active");
    updatePageTitle("New Books");

    const newBooks = books.filter(book => {
        const yearPublished = parseInt(book.published.split(",")[0]);
        return yearPublished > 2000;
    });
    createBookCard(newBooks);
});

const recommendLink = document.querySelector("#recommendLink");
recommendLink.addEventListener("click", () => {
    removeActiveClass();
    recommendLink.classList.add("active");
    updatePageTitle("Recommend");

    const recommendedBooks = books.filter(b => b.recommended);
    createBookCard(recommendedBooks);
});

const contactLink = document.querySelector("#contactLink");
contactLink.addEventListener("click", () => {
    removeActiveClass();
    contactLink.classList.add("active");
    updatePageTitle("Contact");

    toggleHomeOnlyNav(false); // Hide "Old" and "New"
    document.querySelector(".container").innerHTML = ``;
});

// Show/hide navigation items
function toggleHomeOnlyNav(show) {
    const homeOnlyLinks = document.querySelectorAll('.home-only');
    homeOnlyLinks.forEach(link => {
        link.style.display = show ? 'list-item' : 'none';
    });
}

// Remove active state
function removeActiveClass() {
    const links = document.querySelectorAll('.navigation a');
    links.forEach(link => link.classList.remove('active'));
}

// Update page title
function updatePageTitle(title) {
    const h2 = document.querySelector("h2");
    h2.textContent = title;
}

// Create book cards
function createBookCard(filteredBooks) {
    document.querySelector(".container").innerHTML = "";
    filteredBooks.forEach(book => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let author = document.createElement("p");
        let published = document.createElement("p");
        let pages = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = book.bookName;
        author.innerHTML = `<span class="label">Author:</span> ${book.author}`;
        published.innerHTML = `<span class="label">Published:</span> ${book.published}`;
        pages.innerHTML = `<span class="label">Pages:</span> ${book.pages}`;
        img.setAttribute("src", book.imageUrl);
        img.setAttribute("alt", `${book.bookName} Cover`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(author);
        card.appendChild(published);
        card.appendChild(pages);
        card.appendChild(img);

        document.querySelector(".container").appendChild(card);
    });
}

// Default state
homeLink.classList.add("active");

// Mobile menu
const hamButton = document.querySelector('#menu');
const header = document.querySelector('h1');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    hamButton.classList.toggle('open');
    navigation.classList.toggle('open');
    header.classList.toggle('hidden');
});




