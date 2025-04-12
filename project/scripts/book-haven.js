const currentYear = new Date().getFullYear();
document.getElementById("copyright").textContent = `©${currentYear} 🌴 Bauntaai Maamau 🌴 Onotoa, Kiribati`;

const lastModified = document.lastModified;
document.getElementById("last-modified").textContent = `Last modification: ${lastModified}`;

// Book data
const books = [
    {
        bookName: "To Kill a Mockingbird",
        author: "Harper Lee",
        published: "1960, July, 11",
        pages: 281,
        imageUrl: "https://covers.openlibrary.org/b/id/8225261-L.jpg"
    },
    {
        bookName: "1984",
        author: "George Orwell",
        published: "1949, June, 8",
        pages: 328,
        imageUrl: "https://covers.openlibrary.org/b/id/153541-L.jpg"
    },
    {
        bookName: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        published: "1925, April, 10",
        pages: 180,
        imageUrl: "https://covers.openlibrary.org/b/id/7222246-L.jpg"
    },
    {
        bookName: "Pride and Prejudice",
        author: "Jane Austen",
        published: "1813, January, 28",
        pages: 432,
        imageUrl: "https://covers.openlibrary.org/b/id/8231994-L.jpg"
    },
    {
        bookName: "The Hobbit",
        author: "J.R.R. Tolkien",
        published: "1937, September, 21",
        pages: 310,
        imageUrl: "https://covers.openlibrary.org/b/id/6979861-L.jpg"
    },
    {
        bookName: "The Catcher in the Rye",
        author: "J.D. Salinger",
        published: "1951, July, 16",
        pages: 277,
        imageUrl: "https://covers.openlibrary.org/b/id/8231856-L.jpg"
    },
    {
        bookName: "Beloved",
        author: "Toni Morrison",
        published: "1987, September, 16",
        pages: 324,
        imageUrl: "https://covers.openlibrary.org/b/id/7352162-L.jpg"
    },
    {
        bookName: "The Book Thief",
        author: "Markus Zusak",
        published: "2005, March, 14",
        pages: 552,
        imageUrl: "https://covers.openlibrary.org/b/id/240727-L.jpg"
    },
    {
        bookName: "The Alchemist",
        author: "Paulo Coelho",
        published: "1988, May, 1",
        pages: 208,
        imageUrl: "https://covers.openlibrary.org/b/id/8235046-L.jpg"
    },
    {
        bookName: "Sapiens: A Brief History of Humankind",
        author: "Yuval Noah Harari",
        published: "2011, February, 4",
        pages: 443,
        imageUrl: "https://covers.openlibrary.org/b/id/8475041-L.jpg"
    },
    {
        bookName: "Educated",
        author: "Tara Westover",
        published: "2018, February, 20",
        pages: 352,
        imageUrl: "https://covers.openlibrary.org/b/id/9283621-L.jpg"
    },
    {
        bookName: "The Fault in Our Stars",
        author: "John Green",
        published: "2012, January, 10",
        pages: 313,
        imageUrl: "https://covers.openlibrary.org/b/id/7275231-L.jpg"
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
        return yearPublished < 1900;
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
