let myLibrary = [];
let book1 = new Book("Harry Potter", "J.K.Rowling", 300, "yes");
myLibrary.push(book1);

function showLibrary() {
  const cardsContainer = document.querySelector(".cards");
  cardsContainer.innerHTML = "";

  for (const book of myLibrary) {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    const title = document.createElement("div");
    title.classList.add("titleUpdate");
    title.textContent = book.title;
    bookCard.appendChild(title);

    const author = document.createElement("div");
    author.classList.add("authorUpdate");
    author.textContent = book.author;
    bookCard.appendChild(author);

    const pages = document.createElement("div");
    pages.classList.add("pagesUpdate");
    pages.textContent = book.pages;
    bookCard.appendChild(pages);

    const read = document.createElement("div");
    read.classList.add("readUpdate");
    const img = document.createElement("img");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "checkbox-1";

    if (book.read === "yes" || book.read === "read") {
      img.src = "true.svg";
      read.textContent = "Book is read.";
      checkbox.checked = true;
    } else if (book.read === "no" || book.read === "not read") {
      img.src = "false.svg";
      read.textContent = "Book is not read yet.";
      checkbox.checked = false;
    }

    checkbox.addEventListener("change", function () {
      if (this.checked) {
        img.src = "true.svg";
        read.textContent = "Book is read.";
        book.read = "yes";
      } else {
        img.src = "false.svg";
        read.textContent = "Book is not read yet.";
        book.read = "no";
      }
    });

    bookCard.appendChild(checkbox);
    bookCard.appendChild(img);
    bookCard.appendChild(read);

    bookCard.appendChild(img);
    bookCard.appendChild(read);
    bookCard.appendChild(checkbox);
    cardsContainer.appendChild(bookCard);
  }
}

const form = document.querySelector(".form");
form.style.display = "none";

const createBook = document.getElementById("add-book");
createBook.addEventListener("click", function () {
  form.style.display = "block";
});

const formBtn = document.getElementById("submit-form");

formBtn.addEventListener("click", function (event) {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.querySelector('input[name="read"]:checked').value;

  const book = new Book(title, author, pages, read);
  myLibrary.push(book);

  form.style.display = "none";
  showLibrary();
});

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

showLibrary();
