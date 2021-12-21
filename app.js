let quotes = document.querySelector(".quote");
        let authors = document.querySelector(".author");
        let nQuotes = document.getElementById("nquotes");
        realData="";
        const getNewQuotes = () => {
            let rnum = Math.floor(Math.random() * 10);
            quoteData = realData[rnum];
            quotes.innerText = `${quoteData.text}`;
            authors.innerText = `${quoteData.author}`;
        };
        const getQuotes = async () => {
            const api = "https://type.fit/api/quotes";
            try {
                let data = await fetch(api);
                realData = await data.json();
                getNewQuotes();
            } catch (error) { }
        };
        getQuotes();

        nQuotes.addEventListener("click", getNewQuotes);