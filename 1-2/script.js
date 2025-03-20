document.addEventListener("DOMContentLoaded", () => {
    const catalog = document.getElementById("catalog");
    const cart = document.getElementById("cart");
    const filterButton = document.getElementById("filterButton");
    const promotion = document.getElementById("promotion");

    let books = [];
    let filtered = false;

    fetch("books.json")
        .then(response => response.json())
        .then(data => {
            books = data;
            renderBooks(books);
        });

    function renderBooks(bookList) {
        catalog.innerHTML = "";
        bookList.forEach(book => {
            const bookCard = document.createElement("div");
            bookCard.classList.add("book-card");
            bookCard.innerHTML = `
                <img src="${book.image}" alt="Обложка книги">
                <h2>${book.title}</h2>
                <p class="author">${book.author}</p>
                <p class="description">${book.description}</p>
                <p class="price">${book.price} руб.</p>
                <button class="add-to-cart">Добавить в корзину</button>
            `;


            bookCard.querySelector(".add-to-cart").addEventListener("click", () => {
                addToCart(book.title);
            });

            catalog.appendChild(bookCard);
        });
    }


    function addToCart(title) {
        const cartItem = document.createElement("p");
        cartItem.textContent = title;
        cart.appendChild(cartItem);
    }


    filterButton.addEventListener("click", () => {
        if (!filtered) {
            renderBooks(books.filter(book => book.price < 400));
            filterButton.textContent = "Сбросить фильтр";
        } else {
            renderBooks(books);
            filterButton.textContent = "Фильтр (до 400р)";
        }
        filtered = !filtered;
    });

    let timeLeft = 10 * 60;
    const timer = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        promotion.innerHTML=`
        <p>До конца акции осталось: ${minutes}:${seconds.toString().padStart(2,"0")}</p>
        `
        console.log(`${minutes}:${seconds.toString().padStart(2,"0")}`);
        timeLeft--;
        if (timeLeft < 0) {
            clearInterval(timer);
            promotion.innerHTML=`
            <p>Акция завершена!</p>
            `
            console.log("Акция завершена!");
        }
    }, 1000);
});
