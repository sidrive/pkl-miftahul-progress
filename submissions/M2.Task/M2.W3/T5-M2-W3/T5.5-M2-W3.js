async function muatQuotes(url, elementId) {
    const container = document.querySelector(elementId);
    container.textContent = "loading...";

    try {
        const response = await fetch(url);
        const data = await response.json();

        container.textContent = "";

        data.quotes.slice(0, 2).forEach((item) => {
            const li = document.createElement("li");
            li.textContent = `"${item.quote}" — ${item.author}`;
            container.appendChild(li);
        });
    } catch (error) {
        container.textContent = "Gagal muat data bos, jaringan buriq";
    }
}

muatQuotes("https://dummyjson.com/quotes", "#list-sukses");
muatQuotes("https://dummyjson.com/quotesabcd", "#list-gagal"); //sengaja salah